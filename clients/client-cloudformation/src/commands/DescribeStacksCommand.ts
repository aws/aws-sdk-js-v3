// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStacksInput, DescribeStacksOutput } from "../models/models_0";
import { de_DescribeStacksCommand, se_DescribeStacksCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandInput extends DescribeStacksInput {}
/**
 * @public
 *
 * The output of {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandOutput extends DescribeStacksOutput, __MetadataBearer {}

/**
 * <p>Returns the description for the specified stack; if no stack name was specified, then it returns the description
 *    for all the stacks created. For more information about a stack's event history, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stack-resource-configuration-complete.html">CloudFormation stack creation
 *    events</a> in the <i>CloudFormation User Guide</i>.</p>
 *          <note>
 *             <p>If the stack doesn't exist, a <code>ValidationError</code> is returned.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeStacksCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeStacksCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeStacksInput
 *   StackName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeStacksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStacksOutput
 * //   Stacks: [ // Stacks
 * //     { // Stack
 * //       StackId: "STRING_VALUE",
 * //       StackName: "STRING_VALUE", // required
 * //       ChangeSetId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Parameters: [ // Parameters
 * //         { // Parameter
 * //           ParameterKey: "STRING_VALUE",
 * //           ParameterValue: "STRING_VALUE",
 * //           UsePreviousValue: true || false,
 * //           ResolvedValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       DeletionTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       RollbackConfiguration: { // RollbackConfiguration
 * //         RollbackTriggers: [ // RollbackTriggers
 * //           { // RollbackTrigger
 * //             Arn: "STRING_VALUE", // required
 * //             Type: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         MonitoringTimeInMinutes: Number("int"),
 * //       },
 * //       StackStatus: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATE_COMPLETE" || "ROLLBACK_IN_PROGRESS" || "ROLLBACK_FAILED" || "ROLLBACK_COMPLETE" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "DELETE_COMPLETE" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED" || "UPDATE_ROLLBACK_IN_PROGRESS" || "UPDATE_ROLLBACK_FAILED" || "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS" || "UPDATE_ROLLBACK_COMPLETE" || "REVIEW_IN_PROGRESS" || "IMPORT_IN_PROGRESS" || "IMPORT_COMPLETE" || "IMPORT_ROLLBACK_IN_PROGRESS" || "IMPORT_ROLLBACK_FAILED" || "IMPORT_ROLLBACK_COMPLETE", // required
 * //       StackStatusReason: "STRING_VALUE",
 * //       DisableRollback: true || false,
 * //       NotificationARNs: [ // NotificationARNs
 * //         "STRING_VALUE",
 * //       ],
 * //       TimeoutInMinutes: Number("int"),
 * //       Capabilities: [ // Capabilities
 * //         "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 * //       ],
 * //       Outputs: [ // Outputs
 * //         { // Output
 * //           OutputKey: "STRING_VALUE",
 * //           OutputValue: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           ExportName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RoleARN: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       EnableTerminationProtection: true || false,
 * //       ParentId: "STRING_VALUE",
 * //       RootId: "STRING_VALUE",
 * //       DriftInformation: { // StackDriftInformation
 * //         StackDriftStatus: "DRIFTED" || "IN_SYNC" || "UNKNOWN" || "NOT_CHECKED", // required
 * //         LastCheckTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       RetainExceptOnCreate: true || false,
 * //       DeletionMode: "STANDARD" || "FORCE_DELETE_STACK",
 * //       DetailedStatus: "CONFIGURATION_COMPLETE" || "VALIDATION_FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStacksCommandInput - {@link DescribeStacksCommandInput}
 * @returns {@link DescribeStacksCommandOutput}
 * @see {@link DescribeStacksCommandInput} for command's `input` shape.
 * @see {@link DescribeStacksCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class DescribeStacksCommand extends $Command
  .classBuilder<
    DescribeStacksCommandInput,
    DescribeStacksCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "DescribeStacks", {})
  .n("CloudFormationClient", "DescribeStacksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStacksCommand)
  .de(de_DescribeStacksCommand)
  .build() {}
