// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPasswordDataRequest, GetPasswordDataResult } from "../models/models_6";
import { GetPasswordData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves the encrypted administrator password for a running Windows instance.
 *
 * The Windows password is generated at boot by the `EC2Config` service or `EC2Launch` scripts (Windows Server 2016 and later). This usually only happens the first time an instance is launched. For more information, see [EC2Config](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UsingConfig_WinAMI.html) and [EC2Launch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2launch.html) in the *Amazon EC2 User Guide*.
 *
 * For the `EC2Config` service, the password is not generated for rebundled AMIs unless `Ec2SetPassword` is enabled before bundling.
 *
 * The password is encrypted using the key pair that you specified when you launched the instance. You must provide the corresponding key pair file.
 *
 * When you launch an instance, password generation and encryption may take a few minutes. If you try to retrieve the password before it's available, the output returns an empty string. We recommend that you wait up to 15 minutes after launching an instance before trying to retrieve the generated password.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetPasswordDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetPasswordDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class GetPasswordDataCommand extends command<GetPasswordDataCommandInput, GetPasswordDataCommandOutput>(
  _ep0,
  _mw0,
  "GetPasswordData",
  GetPasswordData$
) {
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
