// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { GetObjectRequest, GetObjectResponse, GetObjectResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetObjectCommand, se_GetObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetObjectCommand}.
 */
export interface GetObjectCommandInput extends GetObjectRequest {}
/**
 * @public
 *
 * The output of {@link GetObjectCommand}.
 */
export interface GetObjectCommandOutput extends Omit<GetObjectResponse, "Body">, __MetadataBearer {
  Body?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, GetObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, GetObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const input = { // GetObjectRequest
 *   Path: "STRING_VALUE", // required
 *   Range: "STRING_VALUE",
 * };
 * const command = new GetObjectCommand(input);
 * const response = await client.send(command);
 * // { // GetObjectResponse
 * //   Body: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * //   CacheControl: "STRING_VALUE",
 * //   ContentRange: "STRING_VALUE",
 * //   ContentLength: Number("long"),
 * //   ContentType: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * //   StatusCode: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param GetObjectCommandInput - {@link GetObjectCommandInput}
 * @returns {@link GetObjectCommandOutput}
 * @see {@link GetObjectCommandInput} for command's `input` shape.
 * @see {@link GetObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for MediaStoreDataClient's `config` shape.
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The specified container was not found for the specified account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ObjectNotFoundException} (client fault)
 *  <p>Could not perform an operation on an object that does not exist.</p>
 *
 * @throws {@link RequestedRangeNotSatisfiableException} (client fault)
 *  <p>The requested content range is not valid.</p>
 *
 * @throws {@link MediaStoreDataServiceException}
 * <p>Base exception class for all service exceptions from MediaStoreData service.</p>
 *
 * @public
 */
export class GetObjectCommand extends $Command
  .classBuilder<
    GetObjectCommandInput,
    GetObjectCommandOutput,
    MediaStoreDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaStoreDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaStoreObject_20170901", "GetObject", {})
  .n("MediaStoreDataClient", "GetObjectCommand")
  .f(void 0, GetObjectResponseFilterSensitiveLog)
  .ser(se_GetObjectCommand)
  .de(de_GetObjectCommand)
  .build() {}
