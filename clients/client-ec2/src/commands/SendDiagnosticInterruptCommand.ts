// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendDiagnosticInterruptRequest } from "../models/models_8";
import { SendDiagnosticInterrupt$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sends a diagnostic interrupt to the specified Amazon EC2 instance to trigger a *kernel panic* (on Linux instances), or a *blue screen*\/*stop error* (on Windows instances). For instances based on Intel and AMD processors, the interrupt is received as a *non-maskable interrupt* (NMI).
 *
 * In general, the operating system crashes and reboots when a kernel panic or stop error is triggered. The operating system can also be configured to perform diagnostic tasks, such as generating a memory dump file, loading a secondary kernel, or obtaining a call trace.
 *
 * Before sending a diagnostic interrupt to your instance, ensure that its operating system is configured to perform the required diagnostic tasks.
 *
 * For more information about configuring your operating system to generate a crash dump when a kernel panic or stop error occurs, see [Send a diagnostic interrupt (for advanced users)](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/diagnostic-interrupt.html) in the *Amazon EC2 User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, SendDiagnosticInterruptCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, SendDiagnosticInterruptCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class SendDiagnosticInterruptCommand extends command<SendDiagnosticInterruptCommandInput, SendDiagnosticInterruptCommandOutput>(
  _ep0,
  _mw0,
  "SendDiagnosticInterrupt",
  SendDiagnosticInterrupt$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendDiagnosticInterruptRequest;
      output: {};
    };
    sdk: {
      input: SendDiagnosticInterruptCommandInput;
      output: SendDiagnosticInterruptCommandOutput;
    };
  };
}
