// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutKeyRequest, PutKeyResponse } from "../models/models_0";
import { PutKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a new key value pair or replaces the value of an existing key.
 *
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
 *
 * Access denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Resource is not in expected state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Limit exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation failed.
 *
 * @throws {@link CloudFrontKeyValueStoreServiceException}
 *
 * Base exception class for all service exceptions from CloudFrontKeyValueStore service.
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
export class PutKeyCommand extends command<PutKeyCommandInput, PutKeyCommandOutput>(
  _ep0,
  _mw0,
  "PutKey",
  PutKey$
) {
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
