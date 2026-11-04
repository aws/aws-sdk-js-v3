// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStackSetInput, CreateStackSetOutput } from "../models/models_0";
import { CreateStackSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateStackSetCommand}.
 */
export interface CreateStackSetCommandInput extends CreateStackSetInput {}
/**
 * @public
 *
 * The output of {@link CreateStackSetCommand}.
 */
export interface CreateStackSetCommandOutput extends CreateStackSetOutput, __MetadataBearer {}

/**
 * Creates a StackSet.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, CreateStackSetCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, CreateStackSetCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // CreateStackSetInput
 *   StackSetName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   TemplateBody: "STRING_VALUE",
 *   TemplateURL: "STRING_VALUE",
 *   StackId: "STRING_VALUE",
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
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   AdministrationRoleARN: "STRING_VALUE",
 *   ExecutionRoleName: "STRING_VALUE",
 *   PermissionModel: "SERVICE_MANAGED" || "SELF_MANAGED",
 *   AutoDeployment: { // AutoDeployment
 *     Enabled: true || false,
 *     RetainStacksOnAccountRemoval: true || false,
 *     DependsOn: [ // StackSetARNList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CallAs: "SELF" || "DELEGATED_ADMIN",
 *   ClientRequestToken: "STRING_VALUE",
 *   ManagedExecution: { // ManagedExecution
 *     Active: true || false,
 *   },
 * };
 * const command = new CreateStackSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateStackSetOutput
 * //   StackSetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStackSetCommandInput - {@link CreateStackSetCommandInput}
 * @returns {@link CreateStackSetCommandOutput}
 * @see {@link CreateStackSetCommandInput} for command's `input` shape.
 * @see {@link CreateStackSetCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CreatedButModifiedException} (client fault)
 *
 * The specified resource exists, but has been changed.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The quota for the resource has already been reached.
 *
 * For information about resource and stack limitations, see [CloudFormation quotas](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html) in the *CloudFormation User Guide*.
 *
 * @throws {@link NameAlreadyExistsException} (client fault)
 *
 * The specified name is already in use.
 *
 * @throws {@link CloudFormationServiceException}
 *
 * Base exception class for all service exceptions from CloudFormation service.
 *
 * @public
 */
export class CreateStackSetCommand extends command<CreateStackSetCommandInput, CreateStackSetCommandOutput>(
  _ep0,
  _mw0,
  "CreateStackSet",
  CreateStackSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStackSetInput;
      output: CreateStackSetOutput;
    };
    sdk: {
      input: CreateStackSetCommandInput;
      output: CreateStackSetCommandOutput;
    };
  };
}
