// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeKeyValueStoreRequest, DescribeKeyValueStoreResponse } from "../models/models_0";
import { DescribeKeyValueStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeKeyValueStoreCommand}.
 */
export interface DescribeKeyValueStoreCommandInput extends DescribeKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKeyValueStoreCommand}.
 */
export interface DescribeKeyValueStoreCommandOutput extends DescribeKeyValueStoreResponse, __MetadataBearer {}

/**
 * <p>Returns metadata information about Key Value Store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, DescribeKeyValueStoreCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, DescribeKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * // import type { CloudFrontKeyValueStoreClientConfig } from "@aws-sdk/client-cloudfront-keyvaluestore";
 * const config = {}; // type is CloudFrontKeyValueStoreClientConfig
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // DescribeKeyValueStoreRequest
 *   KvsARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKeyValueStoreResponse
 * //   ItemCount: Number("int"), // required
 * //   TotalSizeInBytes: Number("long"), // required
 * //   KvsARN: "STRING_VALUE", // required
 * //   Created: new Date("TIMESTAMP"), // required
 * //   ETag: "STRING_VALUE", // required
 * //   LastModified: new Date("TIMESTAMP"),
 * //   Status: "STRING_VALUE",
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeKeyValueStoreCommandInput - {@link DescribeKeyValueStoreCommandInput}
 * @returns {@link DescribeKeyValueStoreCommandOutput}
 * @see {@link DescribeKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyValueStoreCommandOutput} for command's `response` shape.
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
 * @example Describe the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58'
 * ```javascript
 * //
 * const input = {
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58"
 * };
 * const command = new DescribeKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Created: "2023-11-01T22:18:46Z",
 *   ETag: "KV7XY89Z0ABC012",
 *   FailureReason: "Datasource size exceeds the allowed limit",
 *   ItemCount: 0,
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58",
 *   LastModified: "2023-11-01T14:28:17Z",
 *   Status: "IMPORT_FAILURE",
 *   TotalSizeInBytes: 0
 * }
 * *\/
 * ```
 *
 * @example Describe the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-1234a9d35678'
 * ```javascript
 * //
 * const input = {
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-1234a9d35678"
 * };
 * const command = new DescribeKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Created: "2023-11-01T22:18:46Z",
 *   ETag: "KV7XY89Z0ABC012",
 *   ItemCount: 4,
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-1234a9d35678",
 *   LastModified: "2023-11-01T14:28:17Z",
 *   Status: "READY",
 *   TotalSizeInBytes: 15
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeKeyValueStoreCommand extends command<DescribeKeyValueStoreCommandInput, DescribeKeyValueStoreCommandOutput>(
  _ep0,
  _mw0,
  "DescribeKeyValueStore",
  DescribeKeyValueStore$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKeyValueStoreRequest;
      output: DescribeKeyValueStoreResponse;
    };
    sdk: {
      input: DescribeKeyValueStoreCommandInput;
      output: DescribeKeyValueStoreCommandOutput;
    };
  };
}
