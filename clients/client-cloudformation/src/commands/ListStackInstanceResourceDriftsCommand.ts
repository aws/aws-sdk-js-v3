// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStackInstanceResourceDriftsInput, ListStackInstanceResourceDriftsOutput } from "../models/models_0";
import { ListStackInstanceResourceDrifts } from "../schemas/schemas_4_Stack";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStackInstanceResourceDriftsCommand}.
 */
export interface ListStackInstanceResourceDriftsCommandInput extends ListStackInstanceResourceDriftsInput {}
/**
 * @public
 *
 * The output of {@link ListStackInstanceResourceDriftsCommand}.
 */
export interface ListStackInstanceResourceDriftsCommandOutput
  extends ListStackInstanceResourceDriftsOutput,
    __MetadataBearer {}

/**
 * <p>Returns drift information for resources in a stack instance.</p>
 *          <note>
 *             <p>
 *                <code>ListStackInstanceResourceDrifts</code> returns drift information for the most
 *         recent drift detection operation. If an operation is in progress, it may only return partial
 *         results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackInstanceResourceDriftsCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackInstanceResourceDriftsCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackInstanceResourceDriftsInput
 *   StackSetName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StackInstanceResourceDriftStatuses: [ // StackResourceDriftStatusFilters
 *     "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED" || "UNKNOWN",
 *   ],
 *   StackInstanceAccount: "STRING_VALUE", // required
 *   StackInstanceRegion: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ListStackInstanceResourceDriftsCommand(input);
 * const response = await client.send(command);
 * // { // ListStackInstanceResourceDriftsOutput
 * //   Summaries: [ // StackInstanceResourceDriftsSummaries
 * //     { // StackInstanceResourceDriftsSummary
 * //       StackId: "STRING_VALUE", // required
 * //       LogicalResourceId: "STRING_VALUE", // required
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       PhysicalResourceIdContext: [ // PhysicalResourceIdContext
 * //         { // PhysicalResourceIdContextKeyValuePair
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       ResourceType: "STRING_VALUE", // required
 * //       PropertyDifferences: [ // PropertyDifferences
 * //         { // PropertyDifference
 * //           PropertyPath: "STRING_VALUE", // required
 * //           ExpectedValue: "STRING_VALUE", // required
 * //           ActualValue: "STRING_VALUE", // required
 * //           DifferenceType: "ADD" || "REMOVE" || "NOT_EQUAL", // required
 * //         },
 * //       ],
 * //       StackResourceDriftStatus: "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED" || "UNKNOWN", // required
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackInstanceResourceDriftsCommandInput - {@link ListStackInstanceResourceDriftsCommandInput}
 * @returns {@link ListStackInstanceResourceDriftsCommandOutput}
 * @see {@link ListStackInstanceResourceDriftsCommandInput} for command's `input` shape.
 * @see {@link ListStackInstanceResourceDriftsCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link OperationNotFoundException} (client fault)
 *  <p>The specified ID refers to an operation that doesn't exist.</p>
 *
 * @throws {@link StackInstanceNotFoundException} (client fault)
 *  <p>The specified stack instance doesn't exist.</p>
 *
 * @throws {@link StackSetNotFoundException} (client fault)
 *  <p>The specified StackSet doesn't exist.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListStackInstanceResourceDriftsCommand extends $Command
  .classBuilder<
    ListStackInstanceResourceDriftsCommandInput,
    ListStackInstanceResourceDriftsCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ListStackInstanceResourceDrifts", {})
  .n("CloudFormationClient", "ListStackInstanceResourceDriftsCommand")
  .sc(ListStackInstanceResourceDrifts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStackInstanceResourceDriftsInput;
      output: ListStackInstanceResourceDriftsOutput;
    };
    sdk: {
      input: ListStackInstanceResourceDriftsCommandInput;
      output: ListStackInstanceResourceDriftsCommandOutput;
    };
  };
}
