// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer, StreamingBlobPayloadInputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { PutObjectRequest, PutObjectRequestFilterSensitiveLog, PutObjectResponse } from "../models/models_0";
import { de_PutObjectCommand, se_PutObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutObjectCommand}.
 */
export interface PutObjectCommandInput extends Omit<PutObjectRequest, "Body"> {
  Body: StreamingBlobPayloadInputTypes;
}

/**
 * @public
 *
 * The output of {@link PutObjectCommand}.
 */
export interface PutObjectCommandOutput extends PutObjectResponse, __MetadataBearer {}

/**
 * <p>Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, PutObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, PutObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const input = { // PutObjectRequest
 *   Body: "MULTIPLE_TYPES_ACCEPTED", // see \@smithy/types -> StreamingBlobPayloadInputTypes // required
 *   Path: "STRING_VALUE", // required
 *   ContentType: "STRING_VALUE",
 *   CacheControl: "STRING_VALUE",
 *   StorageClass: "TEMPORAL",
 *   UploadAvailability: "STANDARD" || "STREAMING",
 * };
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * // { // PutObjectResponse
 * //   ContentSHA256: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * //   StorageClass: "TEMPORAL",
 * // };
 *
 * ```
 *
 * @param PutObjectCommandInput - {@link PutObjectCommandInput}
 * @returns {@link PutObjectCommandOutput}
 * @see {@link PutObjectCommandInput} for command's `input` shape.
 * @see {@link PutObjectCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for MediaStoreDataClient's `config` shape.
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The specified container was not found for the specified account.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link MediaStoreDataServiceException}
 * <p>Base exception class for all service exceptions from MediaStoreData service.</p>
 *
 * @public
 */
export class PutObjectCommand extends $Command
  .classBuilder<
    PutObjectCommandInput,
    PutObjectCommandOutput,
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
  .s("MediaStoreObject_20170901", "PutObject", {})
  .n("MediaStoreDataClient", "PutObjectCommand")
  .f(PutObjectRequestFilterSensitiveLog, void 0)
  .ser(se_PutObjectCommand)
  .de(de_PutObjectCommand)
  .build() {}
