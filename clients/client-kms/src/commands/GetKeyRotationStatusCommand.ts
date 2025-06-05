// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetKeyRotationStatusRequest, GetKeyRotationStatusResponse } from "../models/models_0";
import { de_GetKeyRotationStatusCommand, se_GetKeyRotationStatusCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Provides detailed information about the rotation status for a KMS key, including whether
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotating-keys-enable-disable.html">automatic
 *         rotation of the key material</a> is enabled for the specified KMS key, the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotation-period">rotation
 *         period</a>, and the next scheduled rotation date.</p>
 *          <p>Automatic key rotation is supported only on symmetric encryption KMS keys.
 *       You cannot enable automatic rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">asymmetric KMS keys</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC KMS keys</a>, KMS keys with <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or KMS keys in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html">custom key store</a>. To enable or disable automatic rotation of a set of related <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#multi-region-rotate">multi-Region keys</a>, set the property on the primary key.</p>
 *          <p>You can enable (<a>EnableKeyRotation</a>) and disable automatic rotation (<a>DisableKeyRotation</a>) of the key material in customer managed KMS keys. Key
 *       material rotation of <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed KMS keys</a> is not
 *       configurable. KMS always rotates the key material in Amazon Web Services managed KMS keys every year. The
 *       key rotation status for Amazon Web Services managed KMS keys is always <code>true</code>.</p>
 *          <p>You can perform on-demand (<a>RotateKeyOnDemand</a>) rotation of the key
 *       material in customer managed KMS keys, regardless of whether or not automatic key rotation is
 *       enabled. You can use GetKeyRotationStatus to identify the date and time that an in progress
 *       on-demand rotation was initiated. You can use <a>ListKeyRotations</a> to view the
 *       details of completed rotations.</p>
 *          <note>
 *             <p>In May 2022, KMS changed the rotation schedule for Amazon Web Services managed keys from every three
 *         years to every year. For details, see <a>EnableKeyRotation</a>.</p>
 *          </note>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>Disabled: The key rotation status does not change when you disable a KMS key. However,
 *           while the KMS key is disabled, KMS does not rotate the key material. When you re-enable
 *           the KMS key, rotation resumes. If the key material in the re-enabled KMS key hasn't been
 *           rotated in one year, KMS rotates it immediately, and every year thereafter. If it's been
 *           less than a year since the key material in the re-enabled KMS key was rotated, the KMS key
 *           resumes its prior rotation schedule.</p>
 *             </li>
 *             <li>
 *                <p>Pending deletion: While a KMS key is pending deletion, its key rotation status is
 *             <code>false</code> and KMS does not rotate the key material. If you cancel the
 *           deletion, the original key rotation status returns to <code>true</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation on a KMS key in a different Amazon Web Services account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyRotationStatus</a> (key policy)</p>
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
 *                   <a>EnableKeyRotation</a>
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
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetKeyRotationStatusCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetKeyRotationStatusCommand } = require("@aws-sdk/client-kms"); // CommonJS import
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
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
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
 * @public
 */
export class GetKeyRotationStatusCommand extends $Command
  .classBuilder<
    GetKeyRotationStatusCommandInput,
    GetKeyRotationStatusCommandOutput,
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
  .s("TrentService", "GetKeyRotationStatus", {})
  .n("KMSClient", "GetKeyRotationStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetKeyRotationStatusCommand)
  .de(de_GetKeyRotationStatusCommand)
  .build() {
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
