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
import { UpdateKeysRequest, UpdateKeysRequestFilterSensitiveLog, UpdateKeysResponse } from "../models/models_0";
import { de_UpdateKeysCommand, se_UpdateKeysCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKeysCommand}.
 */
export interface UpdateKeysCommandInput extends UpdateKeysRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeysCommand}.
 */
export interface UpdateKeysCommandOutput extends UpdateKeysResponse, __MetadataBearer {}

/**
 * <p>Puts or Deletes multiple key value pairs in a single, all-or-nothing operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, UpdateKeysCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, UpdateKeysCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // UpdateKeysRequest
 *   KvsARN: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 *   Puts: [ // PutKeyRequestsList
 *     { // PutKeyRequestListItem
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Deletes: [ // DeleteKeyRequestsList
 *     { // DeleteKeyRequestListItem
 *       Key: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateKeysCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeysResponse
 * //   ItemCount: Number("int"), // required
 * //   TotalSizeInBytes: Number("long"), // required
 * //   ETag: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateKeysCommandInput - {@link UpdateKeysCommandInput}
 * @returns {@link UpdateKeysCommandOutput}
 * @see {@link UpdateKeysCommandInput} for command's `input` shape.
 * @see {@link UpdateKeysCommandOutput} for command's `response` shape.
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
 * @example Put 2 keys into the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58'
 * ```javascript
 * //
 * const input = {
 *   IfMatch: "KV0AB12C3DEF456",
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58",
 *   Puts: [
 *     {
 *       Key: "key1",
 *       Value: "value1"
 *     },
 *     {
 *       Key: "key2",
 *       Value: "value2"
 *     }
 *   ]
 * };
 * const command = new UpdateKeysCommand(input);
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
 * @example Delete 2 keys from the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58'
 * ```javascript
 * //
 * const input = {
 *   Deletes: [
 *     {
 *       Key: "key1"
 *     },
 *     {
 *       Key: "key2"
 *     }
 *   ],
 *   IfMatch: "KV0AB12C3DEF456",
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58"
 * };
 * const command = new UpdateKeysCommand(input);
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
 * @example Put 2 keys into and delete 1 key from the key value store with ARN 'arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58'
 * ```javascript
 * //
 * const input = {
 *   Deletes: [
 *     {
 *       Key: "key3"
 *     },
 *     {
 *       Key: "key4"
 *     }
 *   ],
 *   IfMatch: "KV0AB12C3DEF456",
 *   KvsARN: "arn:aws:cloudfront::123456789012:key-value-store/327284aa-bcd5-499f-a3ff-26b9a9d31b58",
 *   Puts: [
 *     {
 *       Key: "key1",
 *       Value: "value1"
 *     },
 *     {
 *       Key: "key2",
 *       Value: "value2"
 *     }
 *   ]
 * };
 * const command = new UpdateKeysCommand(input);
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
export class UpdateKeysCommand extends $Command
  .classBuilder<
    UpdateKeysCommandInput,
    UpdateKeysCommandOutput,
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
  .s("CloudFrontKeyValueStore", "UpdateKeys", {})
  .n("CloudFrontKeyValueStoreClient", "UpdateKeysCommand")
  .f(UpdateKeysRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateKeysCommand)
  .de(de_UpdateKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateKeysRequest;
      output: UpdateKeysResponse;
    };
    sdk: {
      input: UpdateKeysCommandInput;
      output: UpdateKeysCommandOutput;
    };
  };
}
