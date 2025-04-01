// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteVirtualMFADeviceRequest } from "../models/models_0";
import { de_DeleteVirtualMFADeviceCommand, se_DeleteVirtualMFADeviceCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVirtualMFADeviceCommand}.
 */
export interface DeleteVirtualMFADeviceCommandInput extends DeleteVirtualMFADeviceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVirtualMFADeviceCommand}.
 */
export interface DeleteVirtualMFADeviceCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a virtual MFA device.</p>
 *          <note>
 *             <p> You must deactivate a user's virtual MFA device before you can delete it. For
 *                 information about deactivating MFA devices, see <a>DeactivateMFADevice</a>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteVirtualMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteVirtualMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // DeleteVirtualMFADeviceRequest
 *   SerialNumber: "STRING_VALUE", // required
 * };
 * const command = new DeleteVirtualMFADeviceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVirtualMFADeviceCommandInput - {@link DeleteVirtualMFADeviceCommandInput}
 * @returns {@link DeleteVirtualMFADeviceCommandOutput}
 * @see {@link DeleteVirtualMFADeviceCommandInput} for command's `input` shape.
 * @see {@link DeleteVirtualMFADeviceCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link DeleteConflictException} (client fault)
 *  <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
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
 * @example To remove a virtual MFA device
 * ```javascript
 * // The following delete-virtual-mfa-device command removes the specified MFA device from the current AWS account.
 * const input = {
 *   SerialNumber: "arn:aws:iam::123456789012:mfa/ExampleName"
 * };
 * const command = new DeleteVirtualMFADeviceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteVirtualMFADeviceCommand extends $Command
  .classBuilder<
    DeleteVirtualMFADeviceCommandInput,
    DeleteVirtualMFADeviceCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "DeleteVirtualMFADevice", {})
  .n("IAMClient", "DeleteVirtualMFADeviceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVirtualMFADeviceCommand)
  .de(de_DeleteVirtualMFADeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVirtualMFADeviceRequest;
      output: {};
    };
    sdk: {
      input: DeleteVirtualMFADeviceCommandInput;
      output: DeleteVirtualMFADeviceCommandOutput;
    };
  };
}
