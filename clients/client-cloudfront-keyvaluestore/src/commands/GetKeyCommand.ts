// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CloudFrontKeyValueStoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFrontKeyValueStoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetKeyRequest, GetKeyResponse, GetKeyResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetKeyCommand, se_GetKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKeyCommand}.
 */
export interface GetKeyCommandInput extends GetKeyRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyCommand}.
 */
export interface GetKeyCommandOutput extends GetKeyResponse, __MetadataBearer {}

/**
 * <p>Returns a key value pair.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, GetKeyCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, GetKeyCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // GetKeyRequest
 *   KvsARN: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 * };
 * const command = new GetKeyCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyResponse
 * //   Key: "STRING_VALUE", // required
 * //   Value: "STRING_VALUE", // required
 * //   ItemCount: Number("int"), // required
 * //   TotalSizeInBytes: Number("long"), // required
 * // };
 *
 * ```
 *
 * @param GetKeyCommandInput - {@link GetKeyCommandInput}
 * @returns {@link GetKeyCommandOutput}
 * @see {@link GetKeyCommandInput} for command's `input` shape.
 * @see {@link GetKeyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontKeyValueStoreClientResolvedConfig | config} for CloudFrontKeyValueStoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Resource is not in expected state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link CloudFrontKeyValueStoreServiceException}
 * <p>Base exception class for all service exceptions from CloudFrontKeyValueStore service.</p>
 *
 * @public
 */
export class GetKeyCommand extends $Command
  .classBuilder<
    GetKeyCommandInput,
    GetKeyCommandOutput,
    CloudFrontKeyValueStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    KvsARN: { type: "contextParams", name: "KvsARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFrontKeyValueStoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFrontKeyValueStore", "GetKey", {})
  .n("CloudFrontKeyValueStoreClient", "GetKeyCommand")
  .f(void 0, GetKeyResponseFilterSensitiveLog)
  .ser(se_GetKeyCommand)
  .de(de_GetKeyCommand)
  .build() {}
