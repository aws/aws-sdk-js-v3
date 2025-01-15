// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssumeRootRequest, AssumeRootResponse, AssumeRootResponseFilterSensitiveLog } from "../models/models_0";
import { de_AssumeRootCommand, se_AssumeRootCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, STSClientResolvedConfig } from "../STSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssumeRootCommand}.
 */
export interface AssumeRootCommandInput extends AssumeRootRequest {}
/**
 * @public
 *
 * The output of {@link AssumeRootCommand}.
 */
export interface AssumeRootCommandOutput extends AssumeRootResponse, __MetadataBearer {}

/**
 * <p>Returns a set of short term credentials you can use to perform privileged tasks in a
 *          member account.</p>
 *          <p>Before you can launch a privileged session, you must have enabled centralized root
 *          access in your organization. For steps to enable this feature, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-enable-root-access.html">Centralize root access for member accounts</a> in the <i>IAM User
 *             Guide</i>.</p>
 *          <note>
 *             <p>The global endpoint is not supported for AssumeRoot. You must send this request to a
 *             Regional STS endpoint. For more information, see <a href="https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html#sts-endpoints">Endpoints</a>.</p>
 *          </note>
 *          <p>You can track AssumeRoot in CloudTrail logs to determine what actions were performed in a
 *          session. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/cloudtrail-track-privileged-tasks.html">Track privileged tasks
 *             in CloudTrail</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { STSClient, AssumeRootCommand } from "@aws-sdk/client-sts"; // ES Modules import
 * // const { STSClient, AssumeRootCommand } = require("@aws-sdk/client-sts"); // CommonJS import
 * const client = new STSClient(config);
 * const input = { // AssumeRootRequest
 *   TargetPrincipal: "STRING_VALUE", // required
 *   TaskPolicyArn: { // PolicyDescriptorType
 *     arn: "STRING_VALUE",
 *   },
 *   DurationSeconds: Number("int"),
 * };
 * const command = new AssumeRootCommand(input);
 * const response = await client.send(command);
 * // { // AssumeRootResponse
 * //   Credentials: { // Credentials
 * //     AccessKeyId: "STRING_VALUE", // required
 * //     SecretAccessKey: "STRING_VALUE", // required
 * //     SessionToken: "STRING_VALUE", // required
 * //     Expiration: new Date("TIMESTAMP"), // required
 * //   },
 * //   SourceIdentity: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssumeRootCommandInput - {@link AssumeRootCommandInput}
 * @returns {@link AssumeRootCommandOutput}
 * @see {@link AssumeRootCommandInput} for command's `input` shape.
 * @see {@link AssumeRootCommandOutput} for command's `response` shape.
 * @see {@link STSClientResolvedConfig | config} for STSClient's `config` shape.
 *
 * @throws {@link ExpiredTokenException} (client fault)
 *  <p>The web identity token that was passed is expired or is not valid. Get a new identity
 *             token from the identity provider and then retry the request.</p>
 *
 * @throws {@link RegionDisabledException} (client fault)
 *  <p>STS is not activated in the requested region for the account that is being asked to
 *             generate credentials. The account administrator must use the IAM console to activate
 *             STS in that region. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
 *                 Deactivating STS in an Amazon Web Services Region</a> in the <i>IAM User
 *                 Guide</i>.</p>
 *
 * @throws {@link STSServiceException}
 * <p>Base exception class for all service exceptions from STS service.</p>
 *
 * @public
 */
export class AssumeRootCommand extends $Command
  .classBuilder<
    AssumeRootCommandInput,
    AssumeRootCommandOutput,
    STSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: STSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSecurityTokenServiceV20110615", "AssumeRoot", {})
  .n("STSClient", "AssumeRootCommand")
  .f(void 0, AssumeRootResponseFilterSensitiveLog)
  .ser(se_AssumeRootCommand)
  .de(de_AssumeRootCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeRootRequest;
      output: AssumeRootResponse;
    };
    sdk: {
      input: AssumeRootCommandInput;
      output: AssumeRootCommandOutput;
    };
  };
}
