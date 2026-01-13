// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFrontKeyValueStoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFrontKeyValueStoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListKeysRequest, ListKeysResponse } from "../models/models_0";
import { ListKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKeysCommand}.
 */
export interface ListKeysCommandInput extends ListKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListKeysCommand}.
 */
export interface ListKeysCommandOutput extends ListKeysResponse, __MetadataBearer {}

/**
 * <p>Returns a list of key value pairs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, ListKeysCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, ListKeysCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * // import type { CloudFrontKeyValueStoreClientConfig } from "@aws-sdk/client-cloudfront-keyvaluestore";
 * const config = {}; // type is CloudFrontKeyValueStoreClientConfig
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // ListKeysRequest
 *   KvsARN: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListKeysResponse
 * //   NextToken: "STRING_VALUE",
 * //   Items: [ // ListKeysResponseList
 * //     { // ListKeysResponseListItem
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListKeysCommandInput - {@link ListKeysCommandInput}
 * @returns {@link ListKeysCommandOutput}
 * @see {@link ListKeysCommandInput} for command's `input` shape.
 * @see {@link ListKeysCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation failed.</p>
 *
 * @throws {@link CloudFrontKeyValueStoreServiceException}
 * <p>Base exception class for all service exceptions from CloudFrontKeyValueStore service.</p>
 *
 *
 * @example List keys in the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58'
 * ```javascript
 * //
 * const input = {
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58",
 *   MaxResults: 3
 * };
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Key: "key1",
 *       Value: "value1"
 *     },
 *     {
 *       Key: "key2",
 *       Value: "value2"
 *     },
 *     {
 *       Key: "key3",
 *       Value: "value3"
 *     }
 *   ],
 *   NextToken: "hVTTZndkpBZ0VRZ0R1RF"
 * }
 * *\/
 * ```
 *
 * @example List the next page in the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58'
 * ```javascript
 * //
 * const input = {
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58",
 *   MaxResults: 3,
 *   NextToken: "hVTTZndkpBZ0VRZ0R1RF"
 * };
 * const command = new ListKeysCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Items: [
 *     {
 *       Key: "key4",
 *       Value: "value4"
 *     },
 *     {
 *       Key: "key5",
 *       Value: "value5"
 *     },
 *     {
 *       Key: "key6",
 *       Value: "value6"
 *     }
 *   ],
 *   NextToken: "hQTlB5YmM5UFNoFQvMk"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListKeysCommand extends $Command
  .classBuilder<
    ListKeysCommandInput,
    ListKeysCommandOutput,
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
  .s("CloudFrontKeyValueStore", "ListKeys", {})
  .n("CloudFrontKeyValueStoreClient", "ListKeysCommand")
  .sc(ListKeys$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKeysRequest;
      output: ListKeysResponse;
    };
    sdk: {
      input: ListKeysCommandInput;
      output: ListKeysCommandOutput;
    };
  };
}
