// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartVpcEndpointServicePrivateDnsVerificationRequest,
  StartVpcEndpointServicePrivateDnsVerificationResult,
} from "../models/models_7";
import {
  de_StartVpcEndpointServicePrivateDnsVerificationCommand,
  se_StartVpcEndpointServicePrivateDnsVerificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartVpcEndpointServicePrivateDnsVerificationCommand}.
 */
export interface StartVpcEndpointServicePrivateDnsVerificationCommandInput
  extends StartVpcEndpointServicePrivateDnsVerificationRequest {}
/**
 * @public
 *
 * The output of {@link StartVpcEndpointServicePrivateDnsVerificationCommand}.
 */
export interface StartVpcEndpointServicePrivateDnsVerificationCommandOutput
  extends StartVpcEndpointServicePrivateDnsVerificationResult,
    __MetadataBearer {}

/**
 * <p>Initiates the verification process to prove that the service provider owns the private
 *             DNS name domain for the endpoint service.</p>
 *          <p>The service provider must successfully perform the verification before the consumer can use the name to access the service.</p>
 *          <p>Before the service provider runs this command, they must add a record to the DNS server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartVpcEndpointServicePrivateDnsVerificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartVpcEndpointServicePrivateDnsVerificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // StartVpcEndpointServicePrivateDnsVerificationRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 * };
 * const command = new StartVpcEndpointServicePrivateDnsVerificationCommand(input);
 * const response = await client.send(command);
 * // { // StartVpcEndpointServicePrivateDnsVerificationResult
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param StartVpcEndpointServicePrivateDnsVerificationCommandInput - {@link StartVpcEndpointServicePrivateDnsVerificationCommandInput}
 * @returns {@link StartVpcEndpointServicePrivateDnsVerificationCommandOutput}
 * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommandInput} for command's `input` shape.
 * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class StartVpcEndpointServicePrivateDnsVerificationCommand extends $Command
  .classBuilder<
    StartVpcEndpointServicePrivateDnsVerificationCommandInput,
    StartVpcEndpointServicePrivateDnsVerificationCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "StartVpcEndpointServicePrivateDnsVerification", {})
  .n("EC2Client", "StartVpcEndpointServicePrivateDnsVerificationCommand")
  .f(void 0, void 0)
  .ser(se_StartVpcEndpointServicePrivateDnsVerificationCommand)
  .de(de_StartVpcEndpointServicePrivateDnsVerificationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartVpcEndpointServicePrivateDnsVerificationRequest;
      output: StartVpcEndpointServicePrivateDnsVerificationResult;
    };
    sdk: {
      input: StartVpcEndpointServicePrivateDnsVerificationCommandInput;
      output: StartVpcEndpointServicePrivateDnsVerificationCommandOutput;
    };
  };
}
