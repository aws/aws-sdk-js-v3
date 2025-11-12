// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeactivateMFADeviceRequest } from "../models/models_0";
import { DeactivateMFADevice } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeactivateMFADeviceCommand}.
 */
export interface DeactivateMFADeviceCommandInput extends DeactivateMFADeviceRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateMFADeviceCommand}.
 */
export interface DeactivateMFADeviceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deactivates the specified MFA device and removes it from association with the user
 *             name for which it was originally enabled.</p>
 *          <p>For more information about creating and working with virtual MFA devices, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_VirtualMFA.html">Enabling a virtual
 *                 multi-factor authentication (MFA) device</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeactivateMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeactivateMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeactivateMFADeviceRequest
 *   UserName: "STRING_VALUE",
 *   SerialNumber: "STRING_VALUE", // required
 * };
 * const command = new DeactivateMFADeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeactivateMFADeviceCommandInput - {@link DeactivateMFADeviceCommandInput}
 * @returns {@link DeactivateMFADeviceCommandOutput}
 * @see {@link DeactivateMFADeviceCommandInput} for command's `input` shape.
 * @see {@link DeactivateMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityTemporarilyUnmodifiableException} (client fault)
 *  <p>The request was rejected because it referenced an entity that is temporarily unmodifiable,
 *       such as a user name that was deleted and then recreated. The error indicates that the request
 *       is likely to succeed if you try again after waiting several minutes. The error message
 *       describes the entity.</p>
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
 *
 * @public
 */
export class DeactivateMFADeviceCommand extends $Command
  .classBuilder<
    DeactivateMFADeviceCommandInput,
    DeactivateMFADeviceCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DeactivateMFADevice", {})
  .n("IAMClient", "DeactivateMFADeviceCommand")
  .sc(DeactivateMFADevice)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeactivateMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: DeactivateMFADeviceCommandInput;
      output: DeactivateMFADeviceCommandOutput;
    };
  };
}
