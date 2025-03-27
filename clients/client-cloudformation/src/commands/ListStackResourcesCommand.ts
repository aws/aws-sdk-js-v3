// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListStackResourcesInput, ListStackResourcesOutput } from "../models/models_0";
import { de_ListStackResourcesCommand, se_ListStackResourcesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStackResourcesCommand}.
 */
export interface ListStackResourcesCommandInput extends ListStackResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListStackResourcesCommand}.
 */
export interface ListStackResourcesCommandOutput extends ListStackResourcesOutput, __MetadataBearer {}

/**
 * <p>Returns descriptions of all resources of the specified stack.</p>
 *          <p>For deleted stacks, ListStackResources returns resource information for up to 90 days
 *       after the stack has been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListStackResourcesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListStackResourcesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // ListStackResourcesInput
 *   StackName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListStackResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListStackResourcesOutput
 * //   StackResourceSummaries: [ // StackResourceSummaries
 * //     { // StackResourceSummary
 * //       LogicalResourceId: "STRING_VALUE", // required
 * //       PhysicalResourceId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE", // required
 * //       LastUpdatedTimestamp: new Date("TIMESTAMP"), // required
 * //       ResourceStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "DELETE_SKIPPED" || "UPDATE_IN_PROGRESS" || "UPDATE_FAILED" || "UPDATE_COMPLETE" || "IMPORT_FAILED" || "IMPORT_COMPLETE" || "IMPORT_IN_PROGRESS" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE" || "EXPORT_FAILED" || "EXPORT_COMPLETE" || "EXPORT_IN_PROGRESS" || "EXPORT_ROLLBACK_IN_PROGRESS" || "EXPORT_ROLLBACK_FAILED" || "EXPORT_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "UPDATE_ROLLBACK_FAILED" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED", // required
 * //       ResourceStatusReason: "STRING_VALUE",
 * //       DriftInformation: { // StackResourceDriftInformationSummary
 * //         StackResourceDriftStatus: "IN_SYNC" || "MODIFIED" || "DELETED" || "NOT_CHECKED", // required
 * //         LastCheckTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       ModuleInfo: { // ModuleInfo
 * //         TypeHierarchy: "STRING_VALUE",
 * //         LogicalIdHierarchy: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStackResourcesCommandInput - {@link ListStackResourcesCommandInput}
 * @returns {@link ListStackResourcesCommandOutput}
 * @see {@link ListStackResourcesCommandInput} for command's `input` shape.
 * @see {@link ListStackResourcesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListStackResourcesCommand extends $Command
  .classBuilder<
    ListStackResourcesCommandInput,
    ListStackResourcesCommandOutput,
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
  .s("CloudFormation", "ListStackResources", {})
  .n("CloudFormationClient", "ListStackResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListStackResourcesCommand)
  .de(de_ListStackResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStackResourcesInput;
      output: ListStackResourcesOutput;
    };
    sdk: {
      input: ListStackResourcesCommandInput;
      output: ListStackResourcesCommandOutput;
    };
  };
}
