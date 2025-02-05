// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ResyncMFADeviceRequest } from "../models/models_0";
import { de_ResyncMFADeviceCommand, se_ResyncMFADeviceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResyncMFADeviceCommand}.
 */
export interface ResyncMFADeviceCommandInput extends ResyncMFADeviceRequest {}
/**
 * @public
 *
 * The output of {@link ResyncMFADeviceCommand}.
 */
export interface ResyncMFADeviceCommandOutput extends __MetadataBearer {}

/**
 * <p>Synchronizes the specified MFA device with its IAM resource object on the Amazon Web Services
 *             servers.</p>
 *          <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Using a virtual MFA
 *                 device</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ResyncMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ResyncMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IAMClient(config);
 * const input = { // ResyncMFADeviceRequest
 *   UserName: "STRING_VALUE", // required
 *   SerialNumber: "STRING_VALUE", // required
 *   AuthenticationCode1: "STRING_VALUE", // required
 *   AuthenticationCode2: "STRING_VALUE", // required
 * };
 * const command = new ResyncMFADeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResyncMFADeviceCommandInput - {@link ResyncMFADeviceCommandInput}
 * @returns {@link ResyncMFADeviceCommandOutput}
 * @see {@link ResyncMFADeviceCommandInput} for command's `input` shape.
 * @see {@link ResyncMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link InvalidAuthenticationCodeException} (client fault)
 *  <p>The request was rejected because the authentication code was not recognized. The error
 *       message describes the specific error.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export class ResyncMFADeviceCommand extends $Command
  .classBuilder<
    ResyncMFADeviceCommandInput,
    ResyncMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ResyncMFADevice", {})
  .n("IAMClient", "ResyncMFADeviceCommand")
  .f(void 0, void 0)
  .ser(se_ResyncMFADeviceCommand)
  .de(de_ResyncMFADeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResyncMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: ResyncMFADeviceCommandInput;
      output: ResyncMFADeviceCommandOutput;
    };
  };
}
