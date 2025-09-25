// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CloudFrontKeyValueStoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFrontKeyValueStoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteKeyRequest, DeleteKeyResponse } from "../models/models_0";
import { DeleteKey } from "../schemas/schemas_1_Key";

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
 * // import type { CloudFrontKeyValueStoreClientConfig } from "@aws-sdk/client-cloudfront-keyvaluestore";
 * const config = {}; // type is CloudFrontKeyValueStoreClientConfig
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
 *
 * @example Delete 'key1' from the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58'
 * ```javascript
 * //
 * const input = {
 *   IfMatch: "KV0AB12C3DEF456",
 *   Key: "key1",
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58"
 * };
 * const command = new DeleteKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ETag: "KV7XY89Z0ABC012",
 *   ItemCount: 3,
 *   TotalSizeInBytes: 5
 * }
 * *\/
 * ```
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFrontKeyValueStore", "DeleteKey", {})
  .n("CloudFrontKeyValueStoreClient", "DeleteKeyCommand")
  .sc(DeleteKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteKeyRequest;
      output: DeleteKeyResponse;
    };
    sdk: {
      input: DeleteKeyCommandInput;
      output: DeleteKeyCommandOutput;
    };
  };
}
