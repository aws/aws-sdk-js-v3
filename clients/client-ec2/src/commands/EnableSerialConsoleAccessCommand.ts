// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableSerialConsoleAccessRequest, EnableSerialConsoleAccessResult } from "../models/models_5";
import { EnableSerialConsoleAccess } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableSerialConsoleAccessCommand}.
 */
export interface EnableSerialConsoleAccessCommandInput extends EnableSerialConsoleAccessRequest {}
/**
 * @public
 *
 * The output of {@link EnableSerialConsoleAccessCommand}.
 */
export interface EnableSerialConsoleAccessCommandOutput extends EnableSerialConsoleAccessResult, __MetadataBearer {}

/**
 * <p>Enables access to the EC2 serial console of all instances for your account. By default,
 * 			access to the EC2 serial console is disabled for your account. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/configure-access-to-serial-console.html#serial-console-account-access">Manage account access to the EC2 serial console</a>
 * 			in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableSerialConsoleAccessCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableSerialConsoleAccessCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // EnableSerialConsoleAccessRequest
 *   DryRun: true || false,
 * };
 * const command = new EnableSerialConsoleAccessCommand(input);
 * const response = await client.send(command);
 * // { // EnableSerialConsoleAccessResult
 * //   SerialConsoleAccessEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param EnableSerialConsoleAccessCommandInput - {@link EnableSerialConsoleAccessCommandInput}
 * @returns {@link EnableSerialConsoleAccessCommandOutput}
 * @see {@link EnableSerialConsoleAccessCommandInput} for command's `input` shape.
 * @see {@link EnableSerialConsoleAccessCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class EnableSerialConsoleAccessCommand extends $Command
  .classBuilder<
    EnableSerialConsoleAccessCommandInput,
    EnableSerialConsoleAccessCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "EnableSerialConsoleAccess", {})
  .n("EC2Client", "EnableSerialConsoleAccessCommand")
  .sc(EnableSerialConsoleAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableSerialConsoleAccessRequest;
      output: EnableSerialConsoleAccessResult;
    };
    sdk: {
      input: EnableSerialConsoleAccessCommandInput;
      output: EnableSerialConsoleAccessCommandOutput;
    };
  };
}
