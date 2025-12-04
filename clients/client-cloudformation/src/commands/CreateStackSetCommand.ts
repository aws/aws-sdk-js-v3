// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateStackSetInput, CreateStackSetOutput } from "../models/models_0";
import { CreateStackSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a StackSet.</p>
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
 *  <p>The specified resource exists, but has been changed.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The quota for the resource has already been reached.</p>
 *          <p>For information about resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">CloudFormation quotas</a> in the
 *    <i>CloudFormation User Guide</i>.</p>
 *
 * @throws {@link NameAlreadyExistsException} (client fault)
 *  <p>The specified name is already in use.</p>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class CreateStackSetCommand extends $Command
  .classBuilder<
    CreateStackSetCommandInput,
    CreateStackSetCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "CreateStackSet", {})
  .n("CloudFormationClient", "CreateStackSetCommand")
  .sc(CreateStackSet)
  .build() {
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
