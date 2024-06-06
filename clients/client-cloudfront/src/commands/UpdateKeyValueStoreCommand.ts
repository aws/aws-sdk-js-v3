// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateKeyValueStoreRequest, UpdateKeyValueStoreResult } from "../models/models_1";
import { de_UpdateKeyValueStoreCommand, se_UpdateKeyValueStoreCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateKeyValueStoreCommand}.
 */
export interface UpdateKeyValueStoreCommandInput extends UpdateKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link UpdateKeyValueStoreCommand}.
 */
export interface UpdateKeyValueStoreCommandOutput extends UpdateKeyValueStoreResult, __MetadataBearer {}

/**
 * <p>Specifies the key value store to update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateKeyValueStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateKeyValueStoreRequest
 *   Name: "STRING_VALUE", // required
 *   Comment: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new UpdateKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // { // UpdateKeyValueStoreResult
 * //   KeyValueStore: { // KeyValueStore
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateKeyValueStoreCommandInput - {@link UpdateKeyValueStoreCommandInput}
 * @returns {@link UpdateKeyValueStoreCommandOutput}
 * @see {@link UpdateKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateKeyValueStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The key value store entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 * @example To update a KeyValueStore
 * ```javascript
 * // Use the following command to update a KeyValueStore.
 * const input = {
 *   "Comment": "my-changed-comment",
 *   "IfMatch": "ETVPDKIKX0DER",
 *   "Name": "my-keyvaluestore-name"
 * };
 * const command = new UpdateKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "E3UN6WX5RRO2AG",
 *   "KeyValueStore": {
 *     "ARN": "arn:aws:cloudfront::123456789012:key-value-store/54947df8-0e9e-4471-a2f9-9af509fb5889",
 *     "Comment": "my-changed-comment",
 *     "Id": "54947df8-0e9e-4471-a2f9-9af509fb5889",
 *     "LastModifiedTime": "2023-11-07T18:45:21.069Z",
 *     "Name": "my-keyvaluestore-name",
 *     "Status": "READY"
 *   }
 * }
 * *\/
 * // example id: to-update-a-key-value-store-1699751822090
 * ```
 *
 */
export class UpdateKeyValueStoreCommand extends $Command
  .classBuilder<
    UpdateKeyValueStoreCommandInput,
    UpdateKeyValueStoreCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "UpdateKeyValueStore", {})
  .n("CloudFrontClient", "UpdateKeyValueStoreCommand")
  .f(void 0, void 0)
  .ser(se_UpdateKeyValueStoreCommand)
  .de(de_UpdateKeyValueStoreCommand)
  .build() {}
