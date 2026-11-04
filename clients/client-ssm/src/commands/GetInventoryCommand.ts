// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetInventoryResult } from "../models/models_0";
import type { GetInventoryRequest } from "../models/models_1";
import { GetInventory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Query inventory information. This includes managed node status, such as `Stopped` or `Terminated`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
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
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidAggregatorException} (client fault)
 *
 * The specified aggregator isn't valid for the group type. Verify that the aggregator you provided is supported.
 *
 * @throws {@link InvalidFilter} (client fault)
 *
 * The filter name isn't valid. Verify that you entered the correct name and try again.
 *
 * @throws {@link InvalidInventoryGroupException} (client fault)
 *
 * The specified inventory group isn't valid.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link InvalidResultAttributeException} (client fault)
 *
 * The specified inventory item result attribute isn't valid.
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *
 * The parameter type name isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class GetInventoryCommand extends command<GetInventoryCommandInput, GetInventoryCommandOutput>(
  _ep0,
  _mw0,
  "GetInventory",
  GetInventory$
) {
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
