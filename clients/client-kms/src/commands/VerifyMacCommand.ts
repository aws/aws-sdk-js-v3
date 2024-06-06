// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { VerifyMacRequest, VerifyMacRequestFilterSensitiveLog, VerifyMacResponse } from "../models/models_0";
import { de_VerifyMacCommand, se_VerifyMacCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifyMacCommand}.
 */
export interface VerifyMacCommandInput extends VerifyMacRequest {}
/**
 * @public
 *
 * The output of {@link VerifyMacCommand}.
 */
export interface VerifyMacCommandOutput extends VerifyMacResponse, __MetadataBearer {}

/**
 * <p>Verifies the hash-based message authentication code (HMAC) for a specified message, HMAC
 *       KMS key, and MAC algorithm. To verify the HMAC, <code>VerifyMac</code> computes an HMAC using
 *       the message, HMAC KMS key, and MAC algorithm that you specify, and compares the computed HMAC
 *       to the HMAC that you specify. If the HMACs are identical, the verification succeeds;
 *       otherwise, it fails. Verification indicates that the message hasn't changed since the HMAC was
 *       calculated, and the specified key was used to generate and verify the HMAC.</p>
 *          <p>HMAC KMS keys and the HMAC algorithms that KMS uses conform to industry standards
 *       defined in <a href="https://datatracker.ietf.org/doc/html/rfc2104">RFC 2104</a>.</p>
 *          <p>This operation is part of KMS support for HMAC KMS keys. For details, see
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/hmac.html">HMAC keys in KMS</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:VerifyMac</a> (key policy)</p>
 *          <p>
 *             <b>Related operations</b>: <a>GenerateMac</a>
 *          </p>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/programming-eventual-consistency.html">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, VerifyMacCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, VerifyMacCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // VerifyMacRequest
 *   Message: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   KeyId: "STRING_VALUE", // required
 *   MacAlgorithm: "HMAC_SHA_224" || "HMAC_SHA_256" || "HMAC_SHA_384" || "HMAC_SHA_512", // required
 *   Mac: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new VerifyMacCommand(input);
 * const response = await client.send(command);
 * // { // VerifyMacResponse
 * //   KeyId: "STRING_VALUE",
 * //   MacValid: true || false,
 * //   MacAlgorithm: "HMAC_SHA_224" || "HMAC_SHA_256" || "HMAC_SHA_384" || "HMAC_SHA_512",
 * // };
 *
 * ```
 *
 * @param VerifyMacCommandInput - {@link VerifyMacCommandInput}
 * @returns {@link VerifyMacCommandOutput}
 * @see {@link VerifyMacCommandInput} for command's `input` shape.
 * @see {@link VerifyMacCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p> The request was rejected because the DryRun parameter was specified. </p>
 *
 * @throws {@link InvalidGrantTokenException} (client fault)
 *  <p>The request was rejected because the specified grant token is not valid.</p>
 *
 * @throws {@link InvalidKeyUsageException} (client fault)
 *  <p>The request was rejected for one of the following reasons: </p>
 *          <ul>
 *             <li>
 *                <p>The <code>KeyUsage</code> value of the KMS key is incompatible with the API
 *           operation.</p>
 *             </li>
 *             <li>
 *                <p>The encryption algorithm or signing algorithm specified for the operation is
 *           incompatible with the type of key material in the KMS key <code>(KeySpec</code>).</p>
 *             </li>
 *          </ul>
 *          <p>For encrypting, decrypting, re-encrypting, and generating data keys, the
 *         <code>KeyUsage</code> must be <code>ENCRYPT_DECRYPT</code>. For signing and verifying
 *       messages, the <code>KeyUsage</code> must be <code>SIGN_VERIFY</code>. For generating and
 *       verifying message authentication codes (MACs), the <code>KeyUsage</code> must be
 *         <code>GENERATE_VERIFY_MAC</code>. To find the <code>KeyUsage</code> of a KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *          <p>To find the encryption or signing algorithms supported for a particular KMS key, use the
 *         <a>DescribeKey</a> operation.</p>
 *
 * @throws {@link KeyUnavailableException} (server fault)
 *  <p>The request was rejected because the specified KMS key was not available. You can retry
 *       the request.</p>
 *
 * @throws {@link KMSInternalException} (server fault)
 *  <p>The request was rejected because an internal exception occurred. The request can be
 *       retried.</p>
 *
 * @throws {@link KMSInvalidMacException} (client fault)
 *  <p>The request was rejected because the HMAC verification failed. HMAC verification fails
 *       when the HMAC computed by using the specified message, HMAC KMS key, and MAC algorithm does
 *       not match the HMAC specified in the request.</p>
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
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @public
 * @example To verify an HMAC
 * ```javascript
 * // This example verifies an HMAC for a particular message, HMAC KMS keys, and MAC algorithm. A value of 'true' in the MacValid value in the response indicates that the HMAC is valid.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "Mac": "<HMAC_TAG>",
 *   "MacAlgorithm": "HMAC_SHA_384",
 *   "Message": "Hello World"
 * };
 * const command = new VerifyMacCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "MacAlgorithm": "HMAC_SHA_384",
 *   "MacValid": true
 * }
 * *\/
 * // example id: to-verify-an-hmac-1631570863401
 * ```
 *
 */
export class VerifyMacCommand extends $Command
  .classBuilder<
    VerifyMacCommandInput,
    VerifyMacCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TrentService", "VerifyMac", {})
  .n("KMSClient", "VerifyMacCommand")
  .f(VerifyMacRequestFilterSensitiveLog, void 0)
  .ser(se_VerifyMacCommand)
  .de(de_VerifyMacCommand)
  .build() {}
