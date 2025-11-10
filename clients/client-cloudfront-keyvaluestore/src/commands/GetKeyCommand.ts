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
import { GetKeyRequest, GetKeyResponse } from "../models/models_0";
import { GetKey } from "../schemas/schemas_0";

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
 * // import type { CloudFrontKeyValueStoreClientConfig } from "@aws-sdk/client-cloudfront-keyvaluestore";
 * const config = {}; // type is CloudFrontKeyValueStoreClientConfig
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
 *
 * @example Get 'key1' from the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58'
 * ```javascript
 * //
 * const input = {
 *   Key: "key1",
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58"
 * };
 * const command = new GetKeyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ItemCount: 4,
 *   Key: "key1",
 *   TotalSizeInBytes: 15,
 *   Value: "value1"
 * }
 * *\/
 * ```
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFrontKeyValueStore", "GetKey", {})
  .n("CloudFrontKeyValueStoreClient", "GetKeyCommand")
  .sc(GetKey)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKeyRequest;
      output: GetKeyResponse;
    };
    sdk: {
      input: GetKeyCommandInput;
      output: GetKeyCommandOutput;
    };
  };
}
