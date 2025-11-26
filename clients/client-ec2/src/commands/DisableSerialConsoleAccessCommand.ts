// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisableSerialConsoleAccessRequest, DisableSerialConsoleAccessResult } from "../models/models_5";
import { DisableSerialConsoleAccess } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableSerialConsoleAccessCommand}.
 */
export interface DisableSerialConsoleAccessCommandInput extends DisableSerialConsoleAccessRequest {}
/**
 * @public
 *
 * The output of {@link DisableSerialConsoleAccessCommand}.
 */
export interface DisableSerialConsoleAccessCommandOutput extends DisableSerialConsoleAccessResult, __MetadataBearer {}

/**
 * <p>Disables access to the EC2 serial console of all instances for your account. By default,
 * 			access to the EC2 serial console is disabled for your account. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a> in the <i>Amazon EC2
 * 				User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableSerialConsoleAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableSerialConsoleAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisableSerialConsoleAccessRequest
 *   DryRun: true || false,
 * };
 * const command = new DisableSerialConsoleAccessCommand(input);
 * const response = await client.send(command);
 * // { // DisableSerialConsoleAccessResult
 * //   SerialConsoleAccessEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param DisableSerialConsoleAccessCommandInput - {@link DisableSerialConsoleAccessCommandInput}
 * @returns {@link DisableSerialConsoleAccessCommandOutput}
 * @see {@link DisableSerialConsoleAccessCommandInput} for command's `input` shape.
 * @see {@link DisableSerialConsoleAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisableSerialConsoleAccessCommand extends $Command
  .classBuilder<
    DisableSerialConsoleAccessCommandInput,
    DisableSerialConsoleAccessCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DisableSerialConsoleAccess", {})
  .n("EC2Client", "DisableSerialConsoleAccessCommand")
  .sc(DisableSerialConsoleAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableSerialConsoleAccessRequest;
      output: DisableSerialConsoleAccessResult;
    };
    sdk: {
      input: DisableSerialConsoleAccessCommandInput;
      output: DisableSerialConsoleAccessCommandOutput;
    };
  };
}
