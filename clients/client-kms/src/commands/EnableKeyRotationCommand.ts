// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import type { EnableKeyRotationRequest } from "../models/models_0";
import { EnableKeyRotation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Enables <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable-disable.html">automatic rotation of the key material</a> of the specified symmetric encryption KMS
 *       key. </p>
 *          <p>By default, when you enable automatic rotation of a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-mgn-key">customer managed KMS key</a>, KMS
 *       rotates the key material of the KMS key one year (approximately 365 days) from the enable date
 *       and every year thereafter. You can use the optional <code>RotationPeriodInDays</code>
 *       parameter to specify a custom rotation period when you enable key rotation, or you can use
 *         <code>RotationPeriodInDays</code> to modify the rotation period of a key that you previously
 *       enabled automatic key rotation on.</p>
 *          <p>You can monitor rotation of the key material for your KMS keys in CloudTrail and Amazon CloudWatch. To disable rotation of the key material in a customer managed KMS key, use
 *       the <a>DisableKeyRotation</a> operation. You can use the <a>GetKeyRotationStatus</a> operation to identify any in progress rotations. You can
 *       use the <a>ListKeyRotations</a> operation to view the details of completed
 *       rotations.</p>
 *          <p>Automatic key rotation is supported only on symmetric encryption KMS keys. You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key. </p>
 *          <p>You cannot enable or disable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-key">Amazon Web Services managed KMS keys</a>. KMS
 *       always rotates the key material of Amazon Web Services managed keys every year. Rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-key">Amazon Web Services owned KMS
 *         keys</a> is managed by the Amazon Web Services service that owns the key.</p>
 *          <note>
 *             <p>In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three
 *         years (approximately 1,095 days) to every year (approximately 365 days).</p>
 *             <p>New Amazon Web Services managed keys are automatically rotated one year after they are created, and
 *         approximately every year thereafter. </p>
 *             <p>Existing Amazon Web Services managed keys are automatically rotated one year after their most recent
 *         rotation, and every year thereafter.</p>
 *          </note>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:EnableKeyRotation</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
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
 *                   <a>ListKeyRotations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RotateKeyOnDemand</a>
 *                </p>
 *                <note>
 *                   <p>You can perform on-demand (<a>RotateKeyOnDemand</a>) rotation of the key
 *             material in customer managed KMS keys, regardless of whether or not automatic key
 *             rotation is enabled.</p>
 *                </note>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
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
export class EnableKeyRotationCommand extends $Command
  .classBuilder<
    EnableKeyRotationCommandInput,
    EnableKeyRotationCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrentService", "EnableKeyRotation", {})
  .n("KMSClient", "EnableKeyRotationCommand")
  .sc(EnableKeyRotation$)
  .build() {
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
