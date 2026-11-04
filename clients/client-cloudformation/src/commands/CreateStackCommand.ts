// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStackInput, CreateStackOutput } from "../models/models_0";
import { CreateStack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStackCommand}.
 */
export interface CreateStackCommandInput extends CreateStackInput {}
/**
 * @public
 *
 * The output of {@link CreateStackCommand}.
 */
export interface CreateStackCommandOutput extends CreateStackOutput, __MetadataBearer {}

/**
 * Creates a stack as specified in the template. After the call completes successfully, the stack creation starts. You can check the status of the stack through the DescribeStacks operation.
 *
 * For more information about creating a stack and monitoring stack progress, see [Managing Amazon Web Services resources as a single unit with CloudFormation stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the *CloudFormation User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateStackCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // CreateStackInput
 *   StackName: "STRING_VALUE", // required
 *   TemplateBody: "STRING_VALUE",
 *   TemplateURL: "STRING_VALUE",
 *   Parameters: [ // Parameters
 *     { // Parameter
 *       ParameterKey: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       UsePreviousValue: true || false,
 *       ResolvedValue: "STRING_VALUE",
 *     },
 *   ],
 *   DisableRollback: true || false,
 *   RollbackConfiguration: { // RollbackConfiguration
 *     RollbackTriggers: [ // RollbackTriggers
 *       { // RollbackTrigger
 *         Arn: "STRING_VALUE", // required
 *         Type: "STRING_VALUE", // required
 *       },
 *     ],
 *     MonitoringTimeInMinutes: Number("int"),
 *   },
 *   TimeoutInMinutes: Number("int"),
 *   NotificationARNs: [ // NotificationARNs
 *     "STRING_VALUE",
 *   ],
 *   Capabilities: [ // Capabilities
 *     "CAPABILITY_IAM" || "CAPABILITY_NAMED_IAM" || "CAPABILITY_AUTO_EXPAND",
 *   ],
 *   ResourceTypes: [ // ResourceTypes
 *     "STRING_VALUE",
 *   ],
 *   RoleARN: "STRING_VALUE",
 *   OnFailure: "DO_NOTHING" || "ROLLBACK" || "DELETE",
 *   StackPolicyBody: "STRING_VALUE",
 *   StackPolicyURL: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 *   EnableTerminationProtection: true || false,
 *   RetainExceptOnCreate: true || false,
 *   DeploymentConfig: { // DeploymentConfig
 *     Mode: "STANDARD" || "EXPRESS",
 *     DisableRollback: true || false,
 *   },
 *   DisableValidation: true || false,
 * };
 * const command = new CreateStackCommand(input);
 * const response = await client.send(command);
 * // { // CreateStackOutput
 * //   StackId: "STRING_VALUE",
 * //   OperationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStackCommandInput - {@link CreateStackCommandInput}
 * @returns {@link CreateStackCommandOutput}
 * @see {@link CreateStackCommandInput} for command's `input` shape.
 * @see {@link CreateStackCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The resource with the name requested already exists.
 *
 * @throws {@link InsufficientCapabilitiesException} (client fault)
 *
 * The template contains resources with capabilities that weren't specified in the Capabilities parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The quota for the resource has already been reached.
 *
 * For information about resource and stack limitations, see [CloudFormation quotas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html) in the *CloudFormation User Guide*.
 *
 * @throws {@link TokenAlreadyExistsException} (client fault)
 *
 * A client request token already exists.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class CreateStackCommand extends command<CreateStackCommandInput, CreateStackCommandOutput>(
  _ep0,
  _mw0,
  "CreateStack",
  CreateStack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStackInput;
      output: CreateStackOutput;
    };
    sdk: {
      input: CreateStackCommandInput;
      output: CreateStackCommandOutput;
    };
  };
}
