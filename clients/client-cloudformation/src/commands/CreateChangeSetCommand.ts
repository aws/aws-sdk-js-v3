// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateChangeSetInput, CreateChangeSetOutput } from "../models/models_0";
import { CreateChangeSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChangeSetCommand}.
 */
export interface CreateChangeSetCommandInput extends CreateChangeSetInput {}
/**
 * @public
 *
 * The output of {@link CreateChangeSetCommand}.
 */
export interface CreateChangeSetCommandOutput extends CreateChangeSetOutput, __MetadataBearer {}

/**
 * <p>Creates a list of changes that will be applied to a stack so that you can review the
 *       changes before executing them. You can create a change set for a stack that doesn't exist or
 *       an existing stack. If you create a change set for a stack that doesn't exist, the change set
 *       shows all of the resources that CloudFormation will create. If you create a change set for an
 *       existing stack, CloudFormation compares the stack's information with the information that you
 *       submit in the change set and lists the differences. Use change sets to understand which
 *       resources CloudFormation will create or change, and how it will change resources in an existing
 *       stack, before you create or update a stack.</p>
 *          <p>To create a change set for a stack that doesn't exist, for the <code>ChangeSetType</code>
 *       parameter, specify <code>CREATE</code>. To create a change set for an existing stack, specify
 *         <code>UPDATE</code> for the <code>ChangeSetType</code> parameter. To create a change set for
 *       an import operation, specify <code>IMPORT</code> for the <code>ChangeSetType</code> parameter.
 *       After the <code>CreateChangeSet</code> call successfully completes, CloudFormation starts creating
 *       the change set. To check the status of the change set or to review it, use the <a>DescribeChangeSet</a> action.</p>
 *          <p>When you are satisfied with the changes the change set will make, execute the change set
 *       by using the <a>ExecuteChangeSet</a> action. CloudFormation doesn't make changes until
 *       you execute the change set.</p>
 *          <p>To create a change set for the entire stack hierarchy, set
 *         <code>IncludeNestedStacks</code> to <code>True</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateChangeSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateChangeSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // CreateChangeSetInput
 *   StackName: "STRING_VALUE", // required
 *   TemplateBody: "STRING_VALUE",
 *   TemplateURL: "STRING_VALUE",
 *   UsePreviousTemplate: true || false,
 *   Parameters: [ // Parameters
 *     { // Parameter
 *       ParameterKey: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       UsePreviousValue: true || false,
 *       ResolvedValue: "STRING_VALUE",
 *     },
 *   ],
 *   Capabilities: [ // Capabilities
 *     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 *   ],
 *   ResourceTypes: [ // ResourceTypes
 *     "STRING_VALUE",
 *   ],
 *   RoleARN: "STRING_VALUE",
 *   RollbackConfiguration: { // RollbackConfiguration
 *     RollbackTriggers: [ // RollbackTriggers
 *       { // RollbackTrigger
 *         Arn: "STRING_VALUE", // required
 *         Type: "STRING_VALUE", // required
 *       },
 *     ],
 *     MonitoringTimeInMinutes: Number("int"),
 *   },
 *   NotificationARNs: [ // NotificationARNs
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ChangeSetName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ChangeSetType: "CREATE" || "UPDATE" || "IMPORT",
 *   ResourcesToImport: [ // ResourcesToImport
 *     { // ResourceToImport
 *       ResourceType: "STRING_VALUE", // required
 *       LogicalResourceId: "STRING_VALUE", // required
 *       ResourceIdentifier: { // ResourceIdentifierProperties // required
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   IncludeNestedStacks: true || false,
 *   OnStackFailure: "DO_NOTHING" || "ROLLBACK" || "DELETE",
 *   ImportExistingResources: true || false,
 *   DeploymentMode: "REVERT_DRIFT",
 * };
 * const command = new CreateChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateChangeSetOutput
 * //   Id: "STRING_VALUE",
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateChangeSetCommandInput - {@link CreateChangeSetCommandInput}
 * @returns {@link CreateChangeSetCommandOutput}
 * @see {@link CreateChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateChangeSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource with the name requested already exists.</p>
 *
 * @throws {@link InsufficientCapabilitiesException} (client fault)
 *  <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the
 *    <i>CloudFormation User Guide</i>.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class CreateChangeSetCommand extends $Command
  .classBuilder<
    CreateChangeSetCommandInput,
    CreateChangeSetCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "CreateChangeSet", {})
  .n("CloudFormationClient", "CreateChangeSetCommand")
  .sc(CreateChangeSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChangeSetInput;
      output: CreateChangeSetOutput;
    };
    sdk: {
      input: CreateChangeSetCommandInput;
      output: CreateChangeSetCommandOutput;
    };
  };
}
