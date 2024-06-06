// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateStackInput, UpdateStackOutput } from "../models/models_1";
import { de_UpdateStackCommand, se_UpdateStackCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStackCommand}.
 */
export interface UpdateStackCommandInput extends UpdateStackInput {}
/**
 * @public
 *
 * The output of {@link UpdateStackCommand}.
 */
export interface UpdateStackCommandOutput extends UpdateStackOutput, __MetadataBearer {}

/**
 * <p>Updates a stack as specified in the template. After the call completes successfully, the stack update starts.
 *    You can check the status of the stack through the <a>DescribeStacks</a> action.</p>
 *          <p>To get a copy of the template for an existing stack, you can use the <a>GetTemplate</a>
 *    action.</p>
 *          <p>For more information about creating an update template, updating a stack, and monitoring the progress of the
 *    update, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html">Updating a Stack</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, UpdateStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, UpdateStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const input = { // UpdateStackInput
 *   StackName: "STRING_VALUE", // required
 *   TemplateBody: "STRING_VALUE",
 *   TemplateURL: "STRING_VALUE",
 *   UsePreviousTemplate: true || false,
 *   StackPolicyDuringUpdateBody: "STRING_VALUE",
 *   StackPolicyDuringUpdateURL: "STRING_VALUE",
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
 *   StackPolicyBody: "STRING_VALUE",
 *   StackPolicyURL: "STRING_VALUE",
 *   NotificationARNs: [ // NotificationARNs
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DisableRollback: true || false,
 *   ClientRequestToken: "STRING_VALUE",
 *   RetainExceptOnCreate: true || false,
 * };
 * const command = new UpdateStackCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStackOutput
 * //   StackId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateStackCommandInput - {@link UpdateStackCommandInput}
 * @returns {@link UpdateStackCommandOutput}
 * @see {@link UpdateStackCommandInput} for command's `input` shape.
 * @see {@link UpdateStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link InsufficientCapabilitiesException} (client fault)
 *  <p>The template contains resources with capabilities that weren't specified in the Capabilities parameter.</p>
 *
 * @throws {@link TokenAlreadyExistsException} (client fault)
 *  <p>A client request token already exists.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 * @public
 */
export class UpdateStackCommand extends $Command
  .classBuilder<
    UpdateStackCommandInput,
    UpdateStackCommandOutput,
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
  .s("CloudFormation", "UpdateStack", {})
  .n("CloudFormationClient", "UpdateStackCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStackCommand)
  .de(de_UpdateStackCommand)
  .build() {}
