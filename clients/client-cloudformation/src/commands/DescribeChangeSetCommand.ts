// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeChangeSetInput, DescribeChangeSetOutput } from "../models/models_0";
import { DescribeChangeSet } from "../schemas/schemas_5_Stack";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChangeSetCommand}.
 */
export interface DescribeChangeSetCommandInput extends DescribeChangeSetInput {}
/**
 * @public
 *
 * The output of {@link DescribeChangeSetCommand}.
 */
export interface DescribeChangeSetCommandOutput extends DescribeChangeSetOutput, __MetadataBearer {}

/**
 * <p>Returns the inputs for the change set and a list of changes that CloudFormation will make if
 *       you execute the change set. For more information, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-changesets.html">Update
 *         CloudFormation stacks using change sets</a> in the
 *       <i>CloudFormation User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, DescribeChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, DescribeChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // DescribeChangeSetInput
 *   ChangeSetName: "STRING_VALUE", // required
 *   StackName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   IncludePropertyValues: true || false,
 * };
 * const command = new DescribeChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChangeSetOutput
 * //   ChangeSetName: "STRING_VALUE",
 * //   ChangeSetId: "STRING_VALUE",
 * //   StackId: "STRING_VALUE",
 * //   StackName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Parameters: [ // Parameters
 * //     { // Parameter
 * //       ParameterKey: "STRING_VALUE",
 * //       ParameterValue: "STRING_VALUE",
 * //       UsePreviousValue: true || false,
 * //       ResolvedValue: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   ExecutionStatus: "UNAVAILABLE" || "AVAILABLE" || "EXECUTE_IN_PROGRESS" || "EXECUTE_COMPLETE" || "EXECUTE_FAILED" || "OBSOLETE",
 * //   Status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "FAILED",
 * //   StatusReason: "STRING_VALUE",
 * //   NotificationARNs: [ // NotificationARNs
 * //     "STRING_VALUE",
 * //   ],
 * //   RollbackConfiguration: { // RollbackConfiguration
 * //     RollbackTriggers: [ // RollbackTriggers
 * //       { // RollbackTrigger
 * //         Arn: "STRING_VALUE", // required
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     MonitoringTimeInMinutes: Number("int"),
 * //   },
 * //   Capabilities: [ // Capabilities
 * //     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 * //   ],
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Changes: [ // Changes
 * //     { // Change
 * //       Type: "Resource",
 * //       HookInvocationCount: Number("int"),
 * //       ResourceChange: { // ResourceChange
 * //         PolicyAction: "Delete" || "Retain" || "Snapshot" || "ReplaceAndDelete" || "ReplaceAndRetain" || "ReplaceAndSnapshot",
 * //         Action: "Add" || "Modify" || "Remove" || "Import" || "Dynamic",
 * //         LogicalResourceId: "STRING_VALUE",
 * //         PhysicalResourceId: "STRING_VALUE",
 * //         ResourceType: "STRING_VALUE",
 * //         Replacement: "True" || "False" || "Conditional",
 * //         Scope: [ // Scope
 * //           "Properties" || "Metadata" || "CreationPolicy" || "UpdatePolicy" || "DeletionPolicy" || "UpdateReplacePolicy" || "Tags",
 * //         ],
 * //         Details: [ // ResourceChangeDetails
 * //           { // ResourceChangeDetail
 * //             Target: { // ResourceTargetDefinition
 * //               Attribute: "Properties" || "Metadata" || "CreationPolicy" || "UpdatePolicy" || "DeletionPolicy" || "UpdateReplacePolicy" || "Tags",
 * //               Name: "STRING_VALUE",
 * //               RequiresRecreation: "Never" || "Conditionally" || "Always",
 * //               Path: "STRING_VALUE",
 * //               BeforeValue: "STRING_VALUE",
 * //               AfterValue: "STRING_VALUE",
 * //               AttributeChangeType: "Add" || "Remove" || "Modify",
 * //             },
 * //             Evaluation: "Static" || "Dynamic",
 * //             ChangeSource: "ResourceReference" || "ParameterReference" || "ResourceAttribute" || "DirectModification" || "Automatic",
 * //             CausingEntity: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ChangeSetId: "STRING_VALUE",
 * //         ModuleInfo: { // ModuleInfo
 * //           TypeHierarchy: "STRING_VALUE",
 * //           LogicalIdHierarchy: "STRING_VALUE",
 * //         },
 * //         BeforeContext: "STRING_VALUE",
 * //         AfterContext: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   IncludeNestedStacks: true || false,
 * //   ParentChangeSetId: "STRING_VALUE",
 * //   RootChangeSetId: "STRING_VALUE",
 * //   OnStackFailure: "DO_NOTHING" || "ROLLBACK" || "DELETE",
 * //   ImportExistingResources: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeChangeSetCommandInput - {@link DescribeChangeSetCommandInput}
 * @returns {@link DescribeChangeSetCommandOutput}
 * @see {@link DescribeChangeSetCommandInput} for command's `input` shape.
 * @see {@link DescribeChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ChangeSetNotFoundException} (client fault)
 *  <p>The specified change set name or ID doesn't exit. To view valid change sets for a stack, use the
 *    <code>ListChangeSets</code> operation.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class DescribeChangeSetCommand extends $Command
  .classBuilder<
    DescribeChangeSetCommandInput,
    DescribeChangeSetCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "DescribeChangeSet", {})
  .n("CloudFormationClient", "DescribeChangeSetCommand")
  .sc(DescribeChangeSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChangeSetInput;
      output: DescribeChangeSetOutput;
    };
    sdk: {
      input: DescribeChangeSetCommandInput;
      output: DescribeChangeSetCommandOutput;
    };
  };
}
