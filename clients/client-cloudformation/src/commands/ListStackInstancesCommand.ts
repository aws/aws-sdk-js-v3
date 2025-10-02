// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStackInstancesInput, ListStackInstancesOutput } from "../models/models_0";
import { de_ListStackInstancesCommand, se_ListStackInstancesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStackInstancesCommand}.
 */
export interface ListStackInstancesCommandInput extends ListStackInstancesInput {}
/**
 * @public
 *
 * The output of {@link ListStackInstancesCommand}.
 */
export interface ListStackInstancesCommandOutput extends ListStackInstancesOutput, __MetadataBearer {}

/**
 * <p>Returns summary information about stack instances that are associated with the specified
 *       StackSet. You can filter for stack instances that are associated with a specific Amazon Web Services account
 *       name or Region, or that have a specific status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackInstancesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackInstancesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackInstancesInput
 *   StackSetName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // StackInstanceFilters
 *     { // StackInstanceFilter
 *       Name: "DETAILED_STATUS" || "LAST_OPERATION_ID" || "DRIFT_STATUS",
 *       Values: "STRING_VALUE",
 *     },
 *   ],
 *   StackInstanceAccount: "STRING_VALUE",
 *   StackInstanceRegion: "STRING_VALUE",
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 * };
 * const command = new ListStackInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListStackInstancesOutput
 * //   Summaries: [ // StackInstanceSummaries
 * //     { // StackInstanceSummary
 * //       StackSetId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Account: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       Status: "CURRENT" || "OUTDATED" || "INOPERABLE",
 * //       StatusReason: "STRING_VALUE",
 * //       StackInstanceStatus: { // StackInstanceComprehensiveStatus
 * //         DetailedStatus: "PENDING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "CANCELLED" || "INOPERABLE" || "SKIPPED_SUSPENDED_ACCOUNT" || "FAILED_IMPORT",
 * //       },
 * //       OrganizationalUnitId: "STRING_VALUE",
 * //       DriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED",
 * //       LastDriftCheckTimestamp: new Date("TIMESTAMP"),
 * //       LastOperationId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackInstancesCommandInput - {@link ListStackInstancesCommandInput}
 * @returns {@link ListStackInstancesCommandOutput}
 * @see {@link ListStackInstancesCommandInput} for command's `input` shape.
 * @see {@link ListStackInstancesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
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
export class ListStackInstancesCommand extends $Command
  .classBuilder<
    ListStackInstancesCommandInput,
    ListStackInstancesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListStackInstances", {})
  .n("CloudFormationClient", "ListStackInstancesCommand")
  .f(void 0, void 0)
  .ser(se_ListStackInstancesCommand)
  .de(de_ListStackInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStackInstancesInput;
      output: ListStackInstancesOutput;
    };
    sdk: {
      input: ListStackInstancesCommandInput;
      output: ListStackInstancesCommandOutput;
    };
  };
}
