// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetInventoryResult } from "../models/models_1";
import { GetInventoryRequest } from "../models/models_2";
import { de_GetInventoryCommand, se_GetInventoryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInventoryCommand}.
 */
export interface GetInventoryCommandInput extends GetInventoryRequest {}
/**
 * @public
 *
 * The output of {@link GetInventoryCommand}.
 */
export interface GetInventoryCommandOutput extends GetInventoryResult, __MetadataBearer {}

/**
 * <p>Query inventory information. This includes managed node status, such as <code>Stopped</code>
 *    or <code>Terminated</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetInventoryRequest
 *   Filters: [ // InventoryFilterList
 *     { // InventoryFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // InventoryFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *       Type: "Equal" || "NotEqual" || "BeginWith" || "LessThan" || "GreaterThan" || "Exists",
 *     },
 *   ],
 *   Aggregators: [ // InventoryAggregatorList
 *     { // InventoryAggregator
 *       Expression: "STRING_VALUE",
 *       Aggregators: [
 *         {
 *           Expression: "STRING_VALUE",
 *           Aggregators: "<InventoryAggregatorList>",
 *           Groups: [ // InventoryGroupList
 *             { // InventoryGroup
 *               Name: "STRING_VALUE", // required
 *               Filters: [ // required
 *                 {
 *                   Key: "STRING_VALUE", // required
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                   Type: "Equal" || "NotEqual" || "BeginWith" || "LessThan" || "GreaterThan" || "Exists",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *       ],
 *       Groups: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Filters: "<InventoryFilterList>", // required
 *         },
 *       ],
 *     },
 *   ],
 *   ResultAttributes: [ // ResultAttributeList
 *     { // ResultAttribute
 *       TypeName: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetInventoryCommand(input);
 * const response = await client.send(command);
 * // { // GetInventoryResult
 * //   Entities: [ // InventoryResultEntityList
 * //     { // InventoryResultEntity
 * //       Id: "STRING_VALUE",
 * //       Data: { // InventoryResultItemMap
 * //         "<keys>": { // InventoryResultItem
 * //           TypeName: "STRING_VALUE", // required
 * //           SchemaVersion: "STRING_VALUE", // required
 * //           CaptureTime: "STRING_VALUE",
 * //           ContentHash: "STRING_VALUE",
 * //           Content: [ // InventoryItemEntryList // required
 * //             { // InventoryItemEntry
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInventoryCommandInput - {@link GetInventoryCommandInput}
 * @returns {@link GetInventoryCommandOutput}
 * @see {@link GetInventoryCommandInput} for command's `input` shape.
 * @see {@link GetInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAggregatorException} (client fault)
 *  <p>The specified aggregator isn't valid for the group type. Verify that the aggregator you
 *    provided is supported.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidInventoryGroupException} (client fault)
 *  <p>The specified inventory group isn't valid.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link InvalidResultAttributeException} (client fault)
 *  <p>The specified inventory item result attribute isn't valid.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class GetInventoryCommand extends $Command
  .classBuilder<
    GetInventoryCommandInput,
    GetInventoryCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "GetInventory", {})
  .n("SSMClient", "GetInventoryCommand")
  .f(void 0, void 0)
  .ser(se_GetInventoryCommand)
  .de(de_GetInventoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInventoryRequest;
      output: GetInventoryResult;
    };
    sdk: {
      input: GetInventoryCommandInput;
      output: GetInventoryCommandOutput;
    };
  };
}
