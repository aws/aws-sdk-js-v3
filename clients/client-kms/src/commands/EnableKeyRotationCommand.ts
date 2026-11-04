// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableKeyRotationRequest } from "../models/models_0";
import { EnableKeyRotation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableKeyRotationCommand}.
 */
export interface EnableKeyRotationCommandInput extends EnableKeyRotationRequest {}
/**
 * @public
 *
 * The output of {@link EnableKeyRotationCommand}.
 */
export interface EnableKeyRotationCommandOutput extends __MetadataBearer {}

/**
 * Enables [automatic rotation of the key material](https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable-disable.html) of the specified symmetric encryption KMS key.
 *
 * By default, when you enable automatic rotation of a [customer managed KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-mgn-key), KMS rotates the key material of the KMS key one year (approximately 365 days) from the enable date and every year thereafter. You can use the optional `RotationPeriodInDays` parameter to specify a custom rotation period when you enable key rotation, or you can use `RotationPeriodInDays` to modify the rotation period of a key that you previously enabled automatic key rotation on.
 *
 * You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. To disable rotation of the key material in a customer managed KMS key, use the DisableKeyRotation operation. You can use the GetKeyRotationStatus operation to identify any in progress rotations. You can use the ListKeyRotations operation to view the details of completed rotations.
 *
 * Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of [asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html), [HMAC KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html), KMS keys with [imported key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html), or KMS keys in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html). To enable or disable automatic rotation of a set of related [multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#multi-region-rotate), set the property on the primary key.
 *
 * You cannot enable or disable automatic rotation of [Amazon Web Services managed KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key). KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of [Amazon Web Services owned KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-key) is managed by the Amazon Web Services service that owns the key.
 *
 * > **Note:**
 * >
 * > In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years (approximately 1,095 days) to every year (approximately 365 days).
 * >
 * > New Amazon Web Services managed keys are automatically rotated one year after they are created, and approximately every year thereafter.
 * >
 * > Existing Amazon Web Services managed keys are automatically rotated one year after their most recent rotation, and every year thereafter.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:EnableKeyRotation](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - DisableKeyRotation
 * - GetKeyRotationStatus
 * - ListKeyRotations
 * - RotateKeyOnDemand
 *
 *   > **Note:** You can perform on-demand (RotateKeyOnDemand) rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled.
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, EnableKeyRotationCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, EnableKeyRotationCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // EnableKeyRotationRequest
 *   KeyId: "STRING_VALUE", // required
 *   RotationPeriodInDays: Number("int"),
 * };
 * const command = new EnableKeyRotationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableKeyRotationCommandInput - {@link EnableKeyRotationCommandInput}
 * @returns {@link EnableKeyRotationCommandOutput}
 * @see {@link EnableKeyRotationCommandInput} for command's `input` shape.
 * @see {@link EnableKeyRotationCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
 *
 * @throws {@link DisabledException} (client fault)
 *
 * The request was rejected because the specified KMS key is not enabled.
 *
 * @throws {@link InvalidArnException} (client fault)
 *
 * The request was rejected because a specified ARN, or an ARN in a key policy, is not valid.
 *
 * @throws {@link KMSInternalException} (server fault)
 *
 * The request was rejected because an internal exception occurred. The request can be retried.
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *
 * The request was rejected because the state of the specified resource is not valid for this request.
 *
 * This exceptions means one of the following:
 *
 * - The key state of the KMS key is not compatible with the operation.
 *
 *   To find the key state, use the DescribeKey operation. For more information about which key states are compatible with each KMS operation, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the **Key Management Service Developer Guide** .
 * - For cryptographic operations on KMS keys in custom key stores, this exception represents a general failure with many possible causes. To identify the cause, see the error message that accompanies the exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation.
 *
 * @throws {@link KMSServiceException}
 *
 * Base exception class for all service exceptions from KMS service.
 *
 * @example To enable automatic rotation of key material
 * ```javascript
 * // The following example enables automatic rotation with a rotation period of 365 days for the specified KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   RotationPeriodInDays: 365
 * };
 * const command = new EnableKeyRotationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class EnableKeyRotationCommand extends command<EnableKeyRotationCommandInput, EnableKeyRotationCommandOutput>(
  _ep0,
  _mw0,
  "EnableKeyRotation",
  EnableKeyRotation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableKeyRotationRequest;
      output: {};
    };
    sdk: {
      input: EnableKeyRotationCommandInput;
      output: EnableKeyRotationCommandOutput;
    };
  };
}
