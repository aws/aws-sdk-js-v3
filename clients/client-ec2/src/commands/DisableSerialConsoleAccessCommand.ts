// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableSerialConsoleAccessRequest, DisableSerialConsoleAccessResult } from "../models/models_5";
import { DisableSerialConsoleAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disables access to the EC2 serial console of all instances for your account. By default, access to the EC2 serial console is disabled for your account. For more information, see [Manage account access to the EC2 serial console](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access) in the *Amazon EC2 User Guide*.
 *
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class DisableSerialConsoleAccessCommand extends command<DisableSerialConsoleAccessCommandInput, DisableSerialConsoleAccessCommandOutput>(
  _ep0,
  _mw0,
  "DisableSerialConsoleAccess",
  DisableSerialConsoleAccess$
) {
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
