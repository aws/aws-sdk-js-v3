// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListKeyValueStoresRequest, ListKeyValueStoresResult } from "../models/models_1";
import { de_ListKeyValueStoresCommand, se_ListKeyValueStoresCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKeyValueStoresCommand}.
 */
export interface ListKeyValueStoresCommandInput extends ListKeyValueStoresRequest {}
/**
 * @public
 *
 * The output of {@link ListKeyValueStoresCommand}.
 */
export interface ListKeyValueStoresCommandOutput extends ListKeyValueStoresResult, __MetadataBearer {}

/**
 * <p>Specifies the key value stores to list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListKeyValueStoresCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListKeyValueStoresCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListKeyValueStoresRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   Status: "STRING_VALUE",
 * };
 * const command = new ListKeyValueStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListKeyValueStoresResult
 * //   KeyValueStoreList: { // KeyValueStoreList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // KeyValueStoreSummaryList
 * //       { // KeyValueStore
 * //         Name: "STRING_VALUE", // required
 * //         Id: "STRING_VALUE", // required
 * //         Comment: "STRING_VALUE", // required
 * //         ARN: "STRING_VALUE", // required
 * //         Status: "STRING_VALUE",
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListKeyValueStoresCommandInput - {@link ListKeyValueStoresCommandInput}
 * @returns {@link ListKeyValueStoresCommandOutput}
 * @see {@link ListKeyValueStoresCommandInput} for command's `input` shape.
 * @see {@link ListKeyValueStoresCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 * @example To get a list of KeyValueStores
 * ```javascript
 * // The following command retrieves a list of KeyValueStores with READY status.
 * const input = {
 *   "Marker": "",
 *   "MaxItems": "100",
 *   "Status": "READY"
 * };
 * const command = new ListKeyValueStoresCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyValueStoreList": {
 *     "Items": [
 *       {
 *         "ARN": "arn:aws:cloudfront::123456789012:key-value-store/54947df8-0e9e-4471-a2f9-9af509fb5889",
 *         "Comment": "",
 *         "Id": "54947df8-0e9e-4471-a2f9-9af509fb5889",
 *         "LastModifiedTime": "2023-11-07T18:45:21.069Z",
 *         "Name": "my-keyvaluestore-name",
 *         "Status": "READY"
 *       }
 *     ],
 *     "MaxItems": 100,
 *     "NextMarker": "",
 *     "Quantity": 1
 *   }
 * }
 * *\/
 * // example id: to-get-a-list-of-key-value-store-1699751799198
 * ```
 *
 */
export class ListKeyValueStoresCommand extends $Command
  .classBuilder<
    ListKeyValueStoresCommandInput,
    ListKeyValueStoresCommandOutput,
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
  .s("Cloudfront2020_05_31", "ListKeyValueStores", {})
  .n("CloudFrontClient", "ListKeyValueStoresCommand")
  .f(void 0, void 0)
  .ser(se_ListKeyValueStoresCommand)
  .de(de_ListKeyValueStoresCommand)
  .build() {}
