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
import { PutKeyRequest, PutKeyResponse } from "../models/models_0";
import { PutKey } from "../schemas/schemas_1_Key";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutKeyCommand}.
 */
export interface PutKeyCommandInput extends PutKeyRequest {}
/**
 * @public
 *
 * The output of {@link PutKeyCommand}.
 */
export interface PutKeyCommandOutput extends PutKeyResponse, __MetadataBearer {}

/**
 * <p>Creates a new key value pair or replaces the value of an existing key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, PutKeyCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, PutKeyCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * // import type { CloudFrontKeyValueStoreClientConfig } from "@aws-sdk/client-cloudfront-keyvaluestore";
 * const config = {}; // type is CloudFrontKeyValueStoreClientConfig
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // PutKeyRequest
 *   Key: "STRING_VALUE", // required
 *   Value: "STRING_VALUE", // required
 *   KvsARN: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new PutKeyCommand(input);
 * const response = await client.send(command);
 * // { // PutKeyResponse
 * //   ItemCount: Number("int"), // required
 * //   TotalSizeInBytes: Number("long"), // required
 * //   ETag: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutKeyCommandInput - {@link PutKeyCommandInput}
 * @returns {@link PutKeyCommandOutput}
 * @see {@link PutKeyCommandInput} for command's `input` shape.
 * @see {@link PutKeyCommandOutput} for command's `response` shape.
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
 * @example Put 'key1' with 'value1' into the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58'
 * ```javascript
 * //
 * const input = {
 *   IfMatch: "KV0AB12C3DEF456",
 *   Key: "key1",
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58",
 *   Value: "value1"
 * };
 * const command = new PutKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ETag: "KV7XY89Z0ABC012",
 *   ItemCount: 4,
 *   TotalSizeInBytes: 15
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutKeyCommand extends $Command
  .classBuilder<
    PutKeyCommandInput,
    PutKeyCommandOutput,
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
  .s("CloudFrontKeyValueStore", "PutKey", {})
  .n("CloudFrontKeyValueStoreClient", "PutKeyCommand")
  .sc(PutKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutKeyRequest;
      output: PutKeyResponse;
    };
    sdk: {
      input: PutKeyCommandInput;
      output: PutKeyCommandOutput;
    };
  };
}
