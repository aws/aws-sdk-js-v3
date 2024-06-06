// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { DescribeObjectRequest, DescribeObjectResponse } from "../models/models_0";
import { de_DescribeObjectCommand, se_DescribeObjectCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeObjectCommand}.
 */
export interface DescribeObjectCommandInput extends DescribeObjectRequest {}
/**
 * @public
 *
 * The output of {@link DescribeObjectCommand}.
 */
export interface DescribeObjectCommandOutput extends DescribeObjectResponse, __MetadataBearer {}

/**
 * <p>Gets the headers for an object at the specified path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, DescribeObjectCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, DescribeObjectCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const input = { // DescribeObjectRequest
 *   Path: "STRING_VALUE", // required
 * };
 * const command = new DescribeObjectCommand(input);
 * const response = await client.send(command);
 * // { // DescribeObjectResponse
 * //   ETag: "STRING_VALUE",
 * //   ContentType: "STRING_VALUE",
 * //   ContentLength: Number("long"),
 * //   CacheControl: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeObjectCommandInput - {@link DescribeObjectCommandInput}
 * @returns {@link DescribeObjectCommandOutput}
 * @see {@link DescribeObjectCommandInput} for command's `input` shape.
 * @see {@link DescribeObjectCommandOutput} for command's `response` shape.
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
 * @throws {@link MediaStoreDataServiceException}
 * <p>Base exception class for all service exceptions from MediaStoreData service.</p>
 *
 * @public
 */
export class DescribeObjectCommand extends $Command
  .classBuilder<
    DescribeObjectCommandInput,
    DescribeObjectCommandOutput,
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
  .s("MediaStoreObject_20170901", "DescribeObject", {})
  .n("MediaStoreDataClient", "DescribeObjectCommand")
  .f(void 0, void 0)
  .ser(se_DescribeObjectCommand)
  .de(de_DescribeObjectCommand)
  .build() {}
