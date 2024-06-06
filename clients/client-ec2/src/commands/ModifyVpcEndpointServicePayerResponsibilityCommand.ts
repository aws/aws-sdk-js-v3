// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ModifyVpcEndpointServicePayerResponsibilityRequest,
  ModifyVpcEndpointServicePayerResponsibilityResult,
} from "../models/models_6";
import {
  de_ModifyVpcEndpointServicePayerResponsibilityCommand,
  se_ModifyVpcEndpointServicePayerResponsibilityCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointServicePayerResponsibilityCommand}.
 */
export interface ModifyVpcEndpointServicePayerResponsibilityCommandInput
  extends ModifyVpcEndpointServicePayerResponsibilityRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointServicePayerResponsibilityCommand}.
 */
export interface ModifyVpcEndpointServicePayerResponsibilityCommandOutput
  extends ModifyVpcEndpointServicePayerResponsibilityResult,
    __MetadataBearer {}

/**
 * <p>Modifies the payer responsibility for your VPC endpoint service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServicePayerResponsibilityCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServicePayerResponsibilityCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
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
 * @public
 */
export class ModifyVpcEndpointServicePayerResponsibilityCommand extends $Command
  .classBuilder<
    ModifyVpcEndpointServicePayerResponsibilityCommandInput,
    ModifyVpcEndpointServicePayerResponsibilityCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ModifyVpcEndpointServicePayerResponsibility", {})
  .n("EC2Client", "ModifyVpcEndpointServicePayerResponsibilityCommand")
  .f(void 0, void 0)
  .ser(se_ModifyVpcEndpointServicePayerResponsibilityCommand)
  .de(de_ModifyVpcEndpointServicePayerResponsibilityCommand)
  .build() {}
