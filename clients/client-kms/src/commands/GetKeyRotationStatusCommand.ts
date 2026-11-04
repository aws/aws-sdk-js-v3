// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetKeyRotationStatusRequest, GetKeyRotationStatusResponse } from "../models/models_0";
import { GetKeyRotationStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetKeyRotationStatusCommand}.
 */
export interface GetKeyRotationStatusCommandInput extends GetKeyRotationStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyRotationStatusCommand}.
 */
export interface GetKeyRotationStatusCommandOutput extends GetKeyRotationStatusResponse, __MetadataBearer {}

/**
 * Provides detailed information about the rotation status for a KMS key, including whether [automatic rotation of the key material](https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable-disable.html) is enabled for the specified KMS key, the [rotation period](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotation-period), and the next scheduled rotation date.
 *
 * Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of [asymmetric KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html), [HMAC KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html), KMS keys with [imported key material](https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html), or KMS keys in a [custom key store](https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html). To enable or disable automatic rotation of a set of related [multi-Region keys](https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#multi-region-rotate), set the property on the primary key.
 *
 * You can enable (EnableKeyRotation) and disable automatic rotation (DisableKeyRotation) of the key material in customer managed KMS keys. Key material rotation of [Amazon Web Services managed KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key) is not configurable. KMS always rotates the key material in Amazon Web Services managed KMS keys every year. The key rotation status for Amazon Web Services managed KMS keys is always `true`.
 *
 * You can perform on-demand (RotateKeyOnDemand) rotation of the key material in customer managed KMS keys, regardless of whether or not automatic key rotation is enabled. You can use GetKeyRotationStatus to identify the date and time that an in progress on-demand rotation was initiated. You can use ListKeyRotations to view the details of completed rotations.
 *
 * > **Note:** In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three years to every year. For details, see EnableKeyRotation.
 *
 * The KMS key that you use for this operation must be in a compatible key state. For details, see [Key states of KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * - Disabled: The key rotation status does not change when you disable a KMS key. However, while the KMS key is disabled, KMS does not rotate the key material. When you re-enable the KMS key, rotation resumes. If the key material in the re-enabled KMS key hasn't been rotated in one year, KMS rotates it immediately, and every year thereafter. If it's been less than a year since the key material in the re-enabled KMS key was rotated, the KMS key resumes its prior rotation schedule.
 * - Pending deletion: While a KMS key is pending deletion, its key rotation status is `false` and KMS does not rotate the key material. If you cancel the deletion, the original key rotation status returns to `true`.
 *
 * **Cross-account use**: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key ARN in the value of the `KeyId` parameter.
 *
 * **Required permissions**: [kms:GetKeyRotationStatus](https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html) (key policy)
 *
 * **Related operations:**
 *
 * - DisableKeyRotation
 * - EnableKeyRotation
 * - ListKeyRotations
 * - RotateKeyOnDemand
 *
 * **Eventual consistency**: The KMS API follows an eventual consistency model. For more information, see [KMS eventual consistency](https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetKeyRotationStatusCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetKeyRotationStatusCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // GetKeyRotationStatusRequest
 *   KeyId: "STRING_VALUE", // required
 * };
 * const command = new GetKeyRotationStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyRotationStatusResponse
 * //   KeyRotationEnabled: true || false,
 * //   KeyId: "STRING_VALUE",
 * //   RotationPeriodInDays: Number("int"),
 * //   NextRotationDate: new Date("TIMESTAMP"),
 * //   OnDemandRotationStartDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetKeyRotationStatusCommandInput - {@link GetKeyRotationStatusCommandInput}
 * @returns {@link GetKeyRotationStatusCommandOutput}
 * @see {@link GetKeyRotationStatusCommandInput} for command's `input` shape.
 * @see {@link GetKeyRotationStatusCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *
 * The system timed out while trying to fulfill the request. You can retry the request.
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
 * @public
 */
export class GetKeyRotationStatusCommand extends command<GetKeyRotationStatusCommandInput, GetKeyRotationStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetKeyRotationStatus",
  GetKeyRotationStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKeyRotationStatusRequest;
      output: GetKeyRotationStatusResponse;
    };
    sdk: {
      input: GetKeyRotationStatusCommandInput;
      output: GetKeyRotationStatusCommandOutput;
    };
  };
}
