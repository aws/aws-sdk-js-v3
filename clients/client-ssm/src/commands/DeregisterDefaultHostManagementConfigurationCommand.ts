// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeregisterDefaultHostManagementConfigurationRequest,
  DeregisterDefaultHostManagementConfigurationResult,
} from "../models/models_0";
import { DeregisterDefaultHostManagementConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterDefaultHostManagementConfigurationCommand}.
 */
export interface DeregisterDefaultHostManagementConfigurationCommandInput extends DeregisterDefaultHostManagementConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterDefaultHostManagementConfigurationCommand}.
 */
export interface DeregisterDefaultHostManagementConfigurationCommandOutput extends DeregisterDefaultHostManagementConfigurationResult, __MetadataBearer {}

/**
 * <p>Removes the Default Host Management Configuration (DHMC) for an Amazon Web Services account and
 *    Amazon Web Services Region. After you deregister DHMC, Amazon EC2 instances are no longer automatically managed as
 *    managed nodes by Amazon Web Services Systems Manager.</p>
 *          <p>To use this operation, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>You need the <code>ssm:GetServiceSetting</code> and <code>ssm:ResetServiceSetting</code>
 *       permissions for the <code>/ssm/managed-instance/default-ec2-instance-management-role</code>
 *       service setting.</p>
 *             </li>
 *          </ul>
 *          <p>If the registered role is service-managed, you also need the <code>iam:DeleteRole</code>
 *    permission so that Amazon Web Services Systems Manager can remove the role it created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterDefaultHostManagementConfigurationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterDefaultHostManagementConfigurationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = {};
 * const command = new DeregisterDefaultHostManagementConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterDefaultHostManagementConfigurationCommandInput - {@link DeregisterDefaultHostManagementConfigurationCommandInput}
 * @returns {@link DeregisterDefaultHostManagementConfigurationCommandOutput}
 * @see {@link DeregisterDefaultHostManagementConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeregisterDefaultHostManagementConfigurationCommandOutput} for command's `response` shape.
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
export class DeregisterDefaultHostManagementConfigurationCommand extends command<DeregisterDefaultHostManagementConfigurationCommandInput, DeregisterDefaultHostManagementConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterDefaultHostManagementConfiguration",
  DeregisterDefaultHostManagementConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DeregisterDefaultHostManagementConfigurationCommandInput;
      output: DeregisterDefaultHostManagementConfigurationCommandOutput;
    };
  };
}
