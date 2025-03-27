// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStacksInput, ListStacksOutput } from "../models/models_0";
import { de_ListStacksCommand, se_ListStacksCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStacksCommand}.
 */
export interface ListStacksCommandInput extends ListStacksInput {}
/**
 * @public
 *
 * The output of {@link ListStacksCommand}.
 */
export interface ListStacksCommandOutput extends ListStacksOutput, __MetadataBearer {}

/**
 * <p>Returns the summary information for stacks whose status matches the specified
 *       StackStatusFilter. Summary information for stacks that have been deleted is kept for 90 days
 *       after the stack is deleted. If no StackStatusFilter is specified, summary information for all
 *       stacks is returned (including existing stacks and stacks that have been deleted).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStacksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStacksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListStacksInput
 *   NextToken: "STRING_VALUE",
 *   StackStatusFilter: [ // StackStatusFilter
 *     "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_FAILED" || "ROLLBACK_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_FAILED" || "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "REVIEW_IN_PROGRESS" || "IMPORT_IN_PROGRESS" || "IMPORT_COMPLETE" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE",
 *   ],
 * };
 * const command = new ListStacksCommand(input);
 * const response = await client.send(command);
 * // { // ListStacksOutput
 * //   StackSummaries: [ // StackSummaries
 * //     { // StackSummary
 * //       StackId: "STRING_VALUE",
 * //       StackName: "STRING_VALUE", // required
 * //       TemplateDescription: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       DeletionTime: new Date("TIMESTAMP"),
 * //       StackStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_FAILED" || "ROLLBACK_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_FAILED" || "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "REVIEW_IN_PROGRESS" || "IMPORT_IN_PROGRESS" || "IMPORT_COMPLETE" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE", // required
 * //       StackStatusReason: "STRING_VALUE",
 * //       ParentId: "STRING_VALUE",
 * //       RootId: "STRING_VALUE",
 * //       DriftInformation: { // StackDriftInformationSummary
 * //         StackDriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED", // required
 * //         LastCheckTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStacksCommandInput - {@link ListStacksCommandInput}
 * @returns {@link ListStacksCommandOutput}
 * @see {@link ListStacksCommandInput} for command's `input` shape.
 * @see {@link ListStacksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListStacksCommand extends $Command
  .classBuilder<
    ListStacksCommandInput,
    ListStacksCommandOutput,
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
  .s("CloudFormation", "ListStacks", {})
  .n("CloudFormationClient", "ListStacksCommand")
  .f(void 0, void 0)
  .ser(se_ListStacksCommand)
  .de(de_ListStacksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStacksInput;
      output: ListStacksOutput;
    };
    sdk: {
      input: ListStacksCommandInput;
      output: ListStacksCommandOutput;
    };
  };
}
