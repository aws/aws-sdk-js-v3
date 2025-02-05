// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetPasswordDataRequest,
  GetPasswordDataResult,
  GetPasswordDataResultFilterSensitiveLog,
} from "../models/models_6";
import { de_GetPasswordDataCommand, se_GetPasswordDataCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPasswordDataCommand}.
 */
export interface GetPasswordDataCommandInput extends GetPasswordDataRequest {}
/**
 * @public
 *
 * The output of {@link GetPasswordDataCommand}.
 */
export interface GetPasswordDataCommandOutput extends GetPasswordDataResult, __MetadataBearer {}

/**
 * <p>Retrieves the encrypted administrator password for a running Windows instance.</p>
 *          <p>The Windows password is generated at boot by the <code>EC2Config</code> service or
 *                 <code>EC2Launch</code> scripts (Windows Server 2016 and later). This usually only
 *             happens the first time an instance is launched. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UsingConfig_WinAMI.html">EC2Config</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2launch.html">EC2Launch</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 *          <p>For the <code>EC2Config</code> service, the password is not generated for rebundled
 *             AMIs unless <code>Ec2SetPassword</code> is enabled before bundling.</p>
 *          <p>The password is encrypted using the key pair that you specified when you launched the
 *             instance. You must provide the corresponding key pair file.</p>
 *          <p>When you launch an instance, password generation and encryption may take a few
 *             minutes. If you try to retrieve the password before it's available, the output returns
 *             an empty string. We recommend that you wait up to 15 minutes after launching an instance
 *             before trying to retrieve the generated password.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetPasswordDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetPasswordDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // GetPasswordDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetPasswordDataCommand(input);
 * const response = await client.send(command);
 * // { // GetPasswordDataResult
 * //   InstanceId: "STRING_VALUE",
 * //   Timestamp: new Date("TIMESTAMP"),
 * //   PasswordData: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPasswordDataCommandInput - {@link GetPasswordDataCommandInput}
 * @returns {@link GetPasswordDataCommandOutput}
 * @see {@link GetPasswordDataCommandInput} for command's `input` shape.
 * @see {@link GetPasswordDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetPasswordDataCommand extends $Command
  .classBuilder<
    GetPasswordDataCommandInput,
    GetPasswordDataCommandOutput,
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
  .s("AmazonEC2", "GetPasswordData", {})
  .n("EC2Client", "GetPasswordDataCommand")
  .f(void 0, GetPasswordDataResultFilterSensitiveLog)
  .ser(se_GetPasswordDataCommand)
  .de(de_GetPasswordDataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPasswordDataRequest;
      output: GetPasswordDataResult;
    };
    sdk: {
      input: GetPasswordDataCommandInput;
      output: GetPasswordDataCommandOutput;
    };
  };
}
