// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyVpcEndpointServicePayerResponsibilityRequest,
  ModifyVpcEndpointServicePayerResponsibilityResult,
} from "../models/models_7";
import { ModifyVpcEndpointServicePayerResponsibility$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointServicePayerResponsibilityCommand}.
 */
export interface ModifyVpcEndpointServicePayerResponsibilityCommandInput extends ModifyVpcEndpointServicePayerResponsibilityRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointServicePayerResponsibilityCommand}.
 */
export interface ModifyVpcEndpointServicePayerResponsibilityCommandOutput extends ModifyVpcEndpointServicePayerResponsibilityResult, __MetadataBearer {}

/**
 * <p>Modifies the payer responsibility for your VPC endpoint service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServicePayerResponsibilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServicePayerResponsibilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointServicePayerResponsibilityRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 *   PayerResponsibility: "ServiceOwner", // required
 * };
 * const command = new ModifyVpcEndpointServicePayerResponsibilityCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointServicePayerResponsibilityResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointServicePayerResponsibilityCommandInput - {@link ModifyVpcEndpointServicePayerResponsibilityCommandInput}
 * @returns {@link ModifyVpcEndpointServicePayerResponsibilityCommandOutput}
 * @see {@link ModifyVpcEndpointServicePayerResponsibilityCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServicePayerResponsibilityCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVpcEndpointServicePayerResponsibilityCommand extends command<ModifyVpcEndpointServicePayerResponsibilityCommandInput, ModifyVpcEndpointServicePayerResponsibilityCommandOutput>(
  _ep0,
  _mw0,
  "ModifyVpcEndpointServicePayerResponsibility",
  ModifyVpcEndpointServicePayerResponsibility$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcEndpointServicePayerResponsibilityRequest;
      output: ModifyVpcEndpointServicePayerResponsibilityResult;
    };
    sdk: {
      input: ModifyVpcEndpointServicePayerResponsibilityCommandInput;
      output: ModifyVpcEndpointServicePayerResponsibilityCommandOutput;
    };
  };
}
