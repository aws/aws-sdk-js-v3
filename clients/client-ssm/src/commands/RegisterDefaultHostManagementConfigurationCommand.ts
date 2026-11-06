// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RegisterDefaultHostManagementConfigurationRequest,
  RegisterDefaultHostManagementConfigurationResult,
} from "../models/models_1";
import { RegisterDefaultHostManagementConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterDefaultHostManagementConfigurationCommand}.
 */
export interface RegisterDefaultHostManagementConfigurationCommandInput extends RegisterDefaultHostManagementConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link RegisterDefaultHostManagementConfigurationCommand}.
 */
export interface RegisterDefaultHostManagementConfigurationCommandOutput extends RegisterDefaultHostManagementConfigurationResult, __MetadataBearer {}

/**
 * <p>Enables Default Host Management Configuration (DHMC) for the current Amazon Web Services account and
 *    Amazon Web Services Region. With DHMC enabled, you don't need to configure additional resources, such as an
 *    instance profile, to use your Amazon EC2 instances as managed nodes in Amazon Web Services Systems Manager.</p>
 *          <p>To use this operation, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>You need the <code>ssm:GetServiceSetting</code> and <code>ssm:UpdateServiceSetting</code>
 *       permissions for the <code>/ssm/managed-instance/default-ec2-instance-management-role</code>
 *       service setting.</p>
 *             </li>
 *             <li>
 *                <p>You need the <code>iam:GetRole</code> and <code>iam:PassRole</code> permissions for the
 *       role used for Default Host Management Configuration.</p>
 *             </li>
 *          </ul>
 *          <p>If <code>PermissionModel</code> is <code>SERVICE_MANAGED</code>, you also need the
 *    <code>iam:CreateRole</code> and <code>iam:AttachRolePolicy</code> permissions so that Amazon Web Services Systems Manager
 *    can create and configure the role on your behalf.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterDefaultHostManagementConfigurationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterDefaultHostManagementConfigurationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // RegisterDefaultHostManagementConfigurationRequest
 *   PermissionModel: "SERVICE_MANAGED" || "SELF_MANAGED", // required
 *   RoleArn: "STRING_VALUE",
 *   Overwrite: true || false,
 * };
 * const command = new RegisterDefaultHostManagementConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // RegisterDefaultHostManagementConfigurationResult
 * //   RoleArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterDefaultHostManagementConfigurationCommandInput - {@link RegisterDefaultHostManagementConfigurationCommandInput}
 * @returns {@link RegisterDefaultHostManagementConfigurationCommandOutput}
 * @see {@link RegisterDefaultHostManagementConfigurationCommandInput} for command's `input` shape.
 * @see {@link RegisterDefaultHostManagementConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class RegisterDefaultHostManagementConfigurationCommand extends command<RegisterDefaultHostManagementConfigurationCommandInput, RegisterDefaultHostManagementConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "RegisterDefaultHostManagementConfiguration",
  RegisterDefaultHostManagementConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterDefaultHostManagementConfigurationRequest;
      output: RegisterDefaultHostManagementConfigurationResult;
    };
    sdk: {
      input: RegisterDefaultHostManagementConfigurationCommandInput;
      output: RegisterDefaultHostManagementConfigurationCommandOutput;
    };
  };
}
