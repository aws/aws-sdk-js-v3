// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListInventoryEntriesRequest, ListInventoryEntriesResult } from "../models/models_1";
import { ListInventoryEntries$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInventoryEntriesCommand}.
 */
export interface ListInventoryEntriesCommandInput extends ListInventoryEntriesRequest {}
/**
 * @public
 *
 * The output of {@link ListInventoryEntriesCommand}.
 */
export interface ListInventoryEntriesCommandOutput extends ListInventoryEntriesResult, __MetadataBearer {}

/**
 * <p>A list of inventory items returned by the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListInventoryEntriesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListInventoryEntriesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListInventoryEntriesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   TypeName: "STRING_VALUE", // required
 *   Filters: [ // InventoryFilterList
 *     { // InventoryFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // InventoryFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *       Type: "Equal" || "NotEqual" || "BeginWith" || "LessThan" || "GreaterThan" || "Exists",
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListInventoryEntriesCommand(input);
 * const response = await client.send(command);
 * // { // ListInventoryEntriesResult
 * //   TypeName: "STRING_VALUE",
 * //   InstanceId: "STRING_VALUE",
 * //   SchemaVersion: "STRING_VALUE",
 * //   CaptureTime: "STRING_VALUE",
 * //   Entries: [ // InventoryItemEntryList
 * //     { // InventoryItemEntry
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInventoryEntriesCommandInput - {@link ListInventoryEntriesCommandInput}
 * @returns {@link ListInventoryEntriesCommandOutput}
 * @see {@link ListInventoryEntriesCommandInput} for command's `input` shape.
 * @see {@link ListInventoryEntriesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify that you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in a valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
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
export class ListInventoryEntriesCommand extends $Command
  .classBuilder<
    ListInventoryEntriesCommandInput,
    ListInventoryEntriesCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "ListInventoryEntries", {})
  .n("SSMClient", "ListInventoryEntriesCommand")
  .sc(ListInventoryEntries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInventoryEntriesRequest;
      output: ListInventoryEntriesResult;
    };
    sdk: {
      input: ListInventoryEntriesCommandInput;
      output: ListInventoryEntriesCommandOutput;
    };
  };
}
