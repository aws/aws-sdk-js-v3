// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { RotateKeyOnDemandRequest, RotateKeyOnDemandResponse } from "../models/models_0";
import { de_RotateKeyOnDemandCommand, se_RotateKeyOnDemandCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Immediately initiates rotation of the key material of the specified symmetric encryption
 *       KMS key.</p>
 *          <p>You can perform <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-on-demand.html">on-demand rotation</a> of the key
 *       material in customer managed KMS keys, regardless of whether or not <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable-disable.html">automatic key
 *         rotation</a> is enabled. On-demand rotations do not change existing automatic rotation
 *       schedules. For example, consider a KMS key that has automatic key rotation enabled with a
 *       rotation period of 730 days. If the key is scheduled to automatically rotate on April 14,
 *       2024, and you perform an on-demand rotation on April 10, 2024, the key will automatically
 *       rotate, as scheduled, on April 14, 2024 and every 730 days thereafter.</p>
 *          <note>
 *             <p>You can perform on-demand key rotation a <b>maximum of 10
 *           times</b> per KMS key. You can use the KMS console to view the number of
 *         remaining on-demand rotations available for a KMS key.</p>
 *          </note>
 *          <p>You can use <a>GetKeyRotationStatus</a> to identify any in progress on-demand
 *       rotations. You can use <a>ListKeyRotations</a> to identify the date that completed
 *       on-demand rotations were performed. You can monitor rotation of the key material for your KMS
 *       keys in CloudTrail and Amazon CloudWatch.</p>
 *          <p>On-demand key rotation is supported only on symmetric encryption KMS keys. You cannot
 *       perform on-demand rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, multi-Region KMS
 *       keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key
 *         material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html">custom key store</a>. When you initiate on-demand key
 *       rotation on a symmetric encryption KMS key with imported key material, you must have already
 *       imported <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html">new key material</a> and that
 *       key material's state should be <code>PENDING_ROTATION</code>. Use the
 *         <code>ListKeyRotations</code> operation to check the state of all key materials associated
 *       with a KMS key. To perform on-demand rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#multi-region-rotate">multi-Region keys</a>, invoke
 *       the on-demand rotation on the primary key.</p>
 *          <p>You cannot initiate on-demand rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a>. KMS
 *       always rotates the key material of Amazon Web Services managed keys every year. Rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk">Amazon Web Services owned KMS
 *         keys</a> is managed by the Amazon Web Services service that owns the key.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:RotateKeyOnDemand</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>EnableKeyRotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisableKeyRotation</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetKeyRotationStatus</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ImportKeyMaterial</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListKeyRotations</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, RotateKeyOnDemandCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, RotateKeyOnDemandCommand } = require("@aws-sdk/client-kms"); // CommonJS import
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
 *  <p>The request was rejected because an automatic rotation of this key is currently in
 *       progress or scheduled to begin within the next 20 minutes. </p>
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The request was rejected because a specified ARN, or an ARN in a key policy, is not
 *       valid.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for this
 *       request.</p>
 *          <p>This exceptions means one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The key state of the KMS key is not compatible with the operation. </p>
 *                <p>To find the key state, use the <a>DescribeKey</a> operation. For more
 *           information about which key states are compatible with each KMS operation, see
 *           <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>
 *                      <i>Key Management Service Developer Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>For cryptographic operations on KMS keys in custom key stores, this exception
 *           represents a general failure with many possible causes. To identify the cause, see the
 *           error message that accompanies the exception.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because a length constraint or quota was exceeded. For more
 *       information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html">Quotas</a> in
 *       the <i>Key Management Service Developer Guide</i>.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified
 *       resource is not valid for this operation.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
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
export class RotateKeyOnDemandCommand extends $Command
  .classBuilder<
    RotateKeyOnDemandCommandInput,
    RotateKeyOnDemandCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrentService", "RotateKeyOnDemand", {})
  .n("KMSClient", "RotateKeyOnDemandCommand")
  .f(void 0, void 0)
  .ser(se_RotateKeyOnDemandCommand)
  .de(de_RotateKeyOnDemandCommand)
  .build() {
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
