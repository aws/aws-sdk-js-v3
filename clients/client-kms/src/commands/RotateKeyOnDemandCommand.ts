// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RotateKeyOnDemandRequest, RotateKeyOnDemandResponse } from "../models/models_0";
import { RotateKeyOnDemand$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RotateKeyOnDemandCommand}.
 */
export interface RotateKeyOnDemandCommandInput extends RotateKeyOnDemandRequest {}
/**
 * @public
 *
 * The output of {@link RotateKeyOnDemandCommand}.
 */
export interface RotateKeyOnDemandCommandOutput extends RotateKeyOnDemandResponse, __MetadataBearer {}

/**
 * Immediately initiates rotation of the key material of the specified symmetric encryption KMS key.
 *
 * You can perform [on-demand rotation](https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-on-demand.html) of the key material in customer managed KMS keys, regardless of whether or not [automatic key rotation](https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable-disable.html) is enabled. On-demand rotations do not change existing automatic rotation schedules. For example, consider a KMS key that has automatic key rotation enabled with a rotation period of 730 days. If the key is scheduled to automatically rotate on April 14, 2024, and you perform an on-demand rotation on April 10, 2024, the key will automatically rotate, as scheduled, on April 14, 2024 and every 730 days thereafter.
 *
 * > **Note:** You can perform on-demand key rotation a **maximum of 25 times** per KMS key. You can use the KMS console to view the number of remaining on-demand rotations available for a KMS key.
 *
 * You can use GetKeyRotationStatus to identify any in progress on-demand rotations. You can use ListKeyRotations to identify the date that completed on-demand rotations were performed. You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch.
 *
 * On-demand key rotation is supported only on symmetric encryption KMS keys. You cannot perform on-demand rotation of [asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html), [HMAC KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html), or KMS keys in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html). When you initiate on-demand key rotation on a symmetric encryption KMS key with imported key material, you must have already imported [new key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html) and that key material's state should be `PENDING_ROTATION`. Use the `ListKeyRotations` operation to check the state of all key materials associated with a KMS key. To perform on-demand rotation of a set of related [multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#multi-region-rotate), import new key material in the primary Region key, import the same key material in each replica Region key, and invoke the on-demand rotation on the primary Region key.
 *
 * You cannot initiate on-demand rotation of [Amazon Web Services managed KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key). KMS always rotates the key material of Amazon Web Services managed keys every year. Rotation of [Amazon Web Services owned KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-key) is managed by the Amazon Web Services service that owns the key.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * **Cross-account use**: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.
 *
 * **Required permissions**: [kms:RotateKeyOnDemand](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - EnableKeyRotation
 * - DisableKeyRotation
 * - GetKeyRotationStatus
 * - ImportKeyMaterial
 * - ListKeyRotations
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, RotateKeyOnDemandCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, RotateKeyOnDemandCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // RotateKeyOnDemandRequest
 *   KeyId: "STRING_VALUE", // required
 * };
 * const command = new RotateKeyOnDemandCommand(input);
 * const response = await client.send(command);
 * // { // RotateKeyOnDemandResponse
 * //   KeyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RotateKeyOnDemandCommandInput - {@link RotateKeyOnDemandCommandInput}
 * @returns {@link RotateKeyOnDemandCommandOutput}
 * @see {@link RotateKeyOnDemandCommandInput} for command's `input` shape.
 * @see {@link RotateKeyOnDemandCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request was rejected because an automatic rotation of this key is currently in progress or scheduled to begin within the next 20 minutes.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because a length constraint or quota was exceeded. For more information, see [Quotas](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html) in the *Key Management Service Developer Guide*.
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
 * @example To perform on-demand rotation of key material
 * ```javascript
 * // The following example immediately initiates rotation of the key material for the specified KMS key.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new RotateKeyOnDemandCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class RotateKeyOnDemandCommand extends command<RotateKeyOnDemandCommandInput, RotateKeyOnDemandCommandOutput>(
  _ep0,
  _mw0,
  "RotateKeyOnDemand",
  RotateKeyOnDemand$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RotateKeyOnDemandRequest;
      output: RotateKeyOnDemandResponse;
    };
    sdk: {
      input: RotateKeyOnDemandCommandInput;
      output: RotateKeyOnDemandCommandOutput;
    };
  };
}
