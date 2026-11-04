// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVirtualMFADeviceRequest } from "../models/models_0";
import { DeleteVirtualMFADevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a virtual MFA device.
 *
 * > **Note:** You must deactivate a user's virtual MFA device before you can delete it. For information about deactivating MFA devices, see [DeactivateMFADevice](https://docs.aws.amazon.com/IAM/latest/APIReference/API_DeactivateMFADevice.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteVirtualMFADeviceCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteVirtualMFADeviceCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
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
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *
 * The request was rejected because it attempted to delete a resource that has attached subordinate entities. The error message describes these entities.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
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
export class DeleteVirtualMFADeviceCommand extends command<DeleteVirtualMFADeviceCommandInput, DeleteVirtualMFADeviceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVirtualMFADevice",
  DeleteVirtualMFADevice$
) {
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
