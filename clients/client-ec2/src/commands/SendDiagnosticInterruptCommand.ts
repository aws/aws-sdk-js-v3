// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { SendDiagnosticInterruptRequest } from "../models/models_7";
import { de_SendDiagnosticInterruptCommand, se_SendDiagnosticInterruptCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendDiagnosticInterruptCommand}.
 */
export interface SendDiagnosticInterruptCommandInput extends SendDiagnosticInterruptRequest {}
/**
 * @public
 *
 * The output of {@link SendDiagnosticInterruptCommand}.
 */
export interface SendDiagnosticInterruptCommandOutput extends __MetadataBearer {}

/**
 * <p>Sends a diagnostic interrupt to the specified Amazon EC2 instance to trigger a
 *                 <i>kernel panic</i> (on Linux instances), or a <i>blue
 *                 screen</i>/<i>stop error</i> (on Windows instances). For
 *             instances based on Intel and AMD processors, the interrupt is received as a
 *                 <i>non-maskable interrupt</i> (NMI).</p>
 *          <p>In general, the operating system crashes and reboots when a kernel panic or stop error
 *             is triggered. The operating system can also be configured to perform diagnostic tasks,
 *             such as generating a memory dump file, loading a secondary kernel, or obtaining a call
 *             trace.</p>
 *          <p>Before sending a diagnostic interrupt to your instance, ensure that its operating
 *             system is configured to perform the required diagnostic tasks.</p>
 *          <p>For more information about configuring your operating system to generate a crash dump
 *             when a kernel panic or stop error occurs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/diagnostic-interrupt.html">Send a diagnostic interrupt
 *                 (for advanced users)</a> (Linux instances) or <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/diagnostic-interrupt.html">Send a diagnostic
 *                 interrupt (for advanced users)</a> (Windows instances).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SendDiagnosticInterruptCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SendDiagnosticInterruptCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // SendDiagnosticInterruptRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new SendDiagnosticInterruptCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendDiagnosticInterruptCommandInput - {@link SendDiagnosticInterruptCommandInput}
 * @returns {@link SendDiagnosticInterruptCommandOutput}
 * @see {@link SendDiagnosticInterruptCommandInput} for command's `input` shape.
 * @see {@link SendDiagnosticInterruptCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class SendDiagnosticInterruptCommand extends $Command
  .classBuilder<
    SendDiagnosticInterruptCommandInput,
    SendDiagnosticInterruptCommandOutput,
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
  .s("AmazonEC2", "SendDiagnosticInterrupt", {})
  .n("EC2Client", "SendDiagnosticInterruptCommand")
  .f(void 0, void 0)
  .ser(se_SendDiagnosticInterruptCommand)
  .de(de_SendDiagnosticInterruptCommand)
  .build() {}
