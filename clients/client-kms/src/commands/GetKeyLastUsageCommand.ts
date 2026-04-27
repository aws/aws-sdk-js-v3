// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import type { GetKeyLastUsageRequest, GetKeyLastUsageResponse } from "../models/models_0";
import { GetKeyLastUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKeyLastUsageCommand}.
 */
export interface GetKeyLastUsageCommandInput extends GetKeyLastUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetKeyLastUsageCommand}.
 */
export interface GetKeyLastUsageCommandOutput extends GetKeyLastUsageResponse, __MetadataBearer {}

/**
 * <p>Returns usage information about the last successful cryptographic operation performed with a
 *       specified KMS key, including the operation type, timestamp, and associated CloudTrail event
 *       ID.</p>
 *          <p>The <code>TrackingStartDate</code> in the <code>GetKeyLastUsage</code> response indicates
 *       the date from which KMS began recording cryptographic activity for a given key. Use this
 *       value together with <code>KeyCreationDate</code> to understand the key's usage
 *       history:</p>
 *          <ul>
 *             <li>
 *                <p>If the <code>KeyLastUsage</code> response element is <i>present</i>,
 *           the key has been used for a successful cryptographic operation since the
 *           <code>TrackingStartDate</code>. The response includes the operation type, timestamp, and
 *           associated CloudTrail event ID.</p>
 *             </li>
 *             <li>
 *                <p>If the <code>KeyLastUsage</code> response element is <i>empty</i> and
 *           <code>KeyCreationDate</code> is on or after <code>TrackingStartDate</code>, the key has
 *           not been used for a successful cryptographic operation since it was created.</p>
 *             </li>
 *             <li>
 *                <p>If the <code>KeyLastUsage</code> response element is <i>empty</i> and
 *           <code>KeyCreationDate</code> is before <code>TrackingStartDate</code>, there is no record
 *           of the key being used for a successful cryptographic operation since the
 *           <code>TrackingStartDate</code>. However, the key may have been used before tracking
 *           began. To determine whether the key was used before the <code>TrackingStartDate</code>,
 *           examine your past CloudTrail logs.</p>
 *             </li>
 *          </ul>
 *          <p>For multi-Region KMS keys, primary and replica keys track last usage independently. Each
 *       key in a multi-Region key set maintains its own usage information.</p>
 *          <p>The <code>ReEncrypt</code> operation uses two keys: a source key for decryption and a
 *       destination key for encryption. Usage information is recorded for both keys independently,
 *       each with the CloudTrail event ID from the respective key owner's account.</p>
 *          <note>
 *             <p>Do not use <code>GetKeyLastUsage</code> as the sole indicator when scheduling a key for
 *         deletion. Instead, first <a href="https://docs.aws.amazon.com/kms/latest/developerguide/enabling-keys.html">disable the key</a> and monitor CloudTrail for
 *         <code>DisabledException</code> entries, as there could be infrequent workflows that are
 *         dependent on the key. By looking for this exception, you can identify potential dependencies
 *         and workload failures before they occur.</p>
 *          </note>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation
 *       on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetKeyLastUsage</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DescribeKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisableKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ScheduleKeyDeletion</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetKeyLastUsageCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetKeyLastUsageCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // GetKeyLastUsageRequest
 *   KeyId: "STRING_VALUE", // required
 * };
 * const command = new GetKeyLastUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetKeyLastUsageResponse
 * //   KeyId: "STRING_VALUE",
 * //   KeyLastUsage: { // KeyLastUsageData
 * //     Operation: "Decrypt" || "DeriveSharedSecret" || "Encrypt" || "GenerateDataKey" || "GenerateDataKeyPair" || "GenerateDataKeyPairWithoutPlaintext" || "GenerateDataKeyWithoutPlaintext" || "GenerateMac" || "ReEncrypt" || "Sign" || "Verify" || "VerifyMac",
 * //     Timestamp: new Date("TIMESTAMP"),
 * //     CloudTrailEventId: "STRING_VALUE",
 * //     KmsRequestId: "STRING_VALUE",
 * //   },
 * //   TrackingStartDate: new Date("TIMESTAMP"),
 * //   KeyCreationDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetKeyLastUsageCommandInput - {@link GetKeyLastUsageCommandInput}
 * @returns {@link GetKeyLastUsageCommandOutput}
 * @see {@link GetKeyLastUsageCommandInput} for command's `input` shape.
 * @see {@link GetKeyLastUsageCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be
 *       found.</p>
 *
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 *
 * @example To retrieve the last usage for a KMS key
 * ```javascript
 * // The following example retrieves usage information about the last successful cryptographic operation performed with the specified KMS key, including the operation type, timestamp, and associated AWS CloudTrail event ID.
 * const input = {
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab"
 * };
 * const command = new GetKeyLastUsageCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   KeyCreationDate: 1.77325342556E9,
 *   KeyId: "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   KeyLastUsage: {
 *     CloudTrailEventId: "2cfd5892-ea8c-4342-ad49-4b9594b06a8b",
 *     KmsRequestId: "040cce3e-9ef3-4651-b8cf-e47c9bafdc9b",
 *     Operation: "Encrypt",
 *     Timestamp: 1.773253497E9
 *   },
 *   TrackingStartDate: 1.77325342556E9
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetKeyLastUsageCommand extends $Command
  .classBuilder<
    GetKeyLastUsageCommandInput,
    GetKeyLastUsageCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrentService", "GetKeyLastUsage", {})
  .n("KMSClient", "GetKeyLastUsageCommand")
  .sc(GetKeyLastUsage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetKeyLastUsageRequest;
      output: GetKeyLastUsageResponse;
    };
    sdk: {
      input: GetKeyLastUsageCommandInput;
      output: GetKeyLastUsageCommandOutput;
    };
  };
}
