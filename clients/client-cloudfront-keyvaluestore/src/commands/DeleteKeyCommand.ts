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
import { DeleteKeyRequest, DeleteKeyResponse } from "../models/models_0";
import { de_DeleteKeyCommand, se_DeleteKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteKeyCommand}.
 */
export interface DeleteKeyCommandInput extends DeleteKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteKeyCommand}.
 */
export interface DeleteKeyCommandOutput extends DeleteKeyResponse, __MetadataBearer {}

/**
 * <p>Deletes the key value pair specified by the key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, DeleteKeyCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, DeleteKeyCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // DeleteKeyRequest
 *   KvsARN: "STRING_VALUE", // required
 *   Key: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteKeyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteKeyResponse
 * //   ItemCount: Number("int"), // required
 * //   TotalSizeInBytes: Number("long"), // required
 * //   ETag: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteKeyCommandInput - {@link DeleteKeyCommandInput}
 * @returns {@link DeleteKeyCommandOutput}
 * @see {@link DeleteKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Limit exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation failed.</p>
 *
 * @throws {@link CloudFrontKeyValueStoreServiceException}
 * <p>Base exception class for all service exceptions from CloudFrontKeyValueStore service.</p>
 *
 * @public
 */
export class DeleteKeyCommand extends $Command
  .classBuilder<
    DeleteKeyCommandInput,
    DeleteKeyCommandOutput,
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
  .s("CloudFrontKeyValueStore", "DeleteKey", {})
  .n("CloudFrontKeyValueStoreClient", "DeleteKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteKeyCommand)
  .de(de_DeleteKeyCommand)
  .build() {}
