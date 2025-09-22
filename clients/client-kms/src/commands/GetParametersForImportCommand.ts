// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetParametersForImportRequest, GetParametersForImportResponse } from "../models/models_0";
import { GetParametersForImport } from "../schemas/schemas_6_Generate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetParametersForImportCommand}.
 */
export interface GetParametersForImportCommandInput extends GetParametersForImportRequest {}
/**
 * @public
 *
 * The output of {@link GetParametersForImportCommand}.
 */
export interface GetParametersForImportCommandOutput extends GetParametersForImportResponse, __MetadataBearer {}

/**
 * <p>Returns the public key and an import token you need to import or reimport key material for
 *       a KMS key. </p>
 *          <p>By default, KMS keys are created with key material that KMS generates. This operation
 *       supports <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing key
 *         material</a>, an advanced feature that lets you generate and import the cryptographic
 *       key material for a KMS key.</p>
 *          <p>Before calling <code>GetParametersForImport</code>, use the <a>CreateKey</a>
 *       operation with an <code>Origin</code> value of <code>EXTERNAL</code> to create a KMS key with
 *       no key material. You can import key material for a symmetric encryption KMS key, HMAC KMS key,
 *       asymmetric encryption KMS key, or asymmetric signing KMS key. You can also import key material
 *       into a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html">multi-Region key</a> of any supported type. However, you can't import key material into
 *       a KMS key in a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-overview.html">custom
 *         key store</a>. You can also use <code>GetParametersForImport</code> to get a public key
 *       and import token to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys-import-key-material.html#reimport-key-material">reimport
 *         the original key material</a> into a KMS key whose key material expired or was
 *       deleted.</p>
 *          <p>
 *             <code>GetParametersForImport</code> returns the items that you need to import your key
 *       material.</p>
 *          <ul>
 *             <li>
 *                <p>The public key (or "wrapping key") of an RSA key pair that KMS generates.</p>
 *                <p>You will use this public key to encrypt ("wrap") your key material while it's in
 *           transit to KMS. </p>
 *             </li>
 *             <li>
 *                <p>A import token that ensures that KMS can decrypt your key material and associate it
 *           with the correct KMS key.</p>
 *             </li>
 *          </ul>
 *          <p>The public key and its import token are permanently linked and must be used together. Each
 *       public key and import token set is valid for 24 hours. The expiration date and time appear in
 *       the <code>ParametersValidTo</code> field in the <code>GetParametersForImport</code> response.
 *       You cannot use an expired public key or import token in an <a>ImportKeyMaterial</a>
 *       request. If your key and token expire, send another <code>GetParametersForImport</code>
 *       request.</p>
 *          <p>
 *             <code>GetParametersForImport</code> requires the following information:</p>
 *          <ul>
 *             <li>
 *                <p>The key ID of the KMS key for which you are importing the key material.</p>
 *             </li>
 *             <li>
 *                <p>The key spec of the public key ("wrapping key") that you will use to encrypt your key
 *           material during import.</p>
 *             </li>
 *             <li>
 *                <p>The wrapping algorithm that you will use with the public key to encrypt your key
 *           material.</p>
 *             </li>
 *          </ul>
 *          <p>You can use the same or a different public key spec and wrapping algorithm each time you
 *       import or reimport the same key material. </p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on a KMS key in a different Amazon Web Services account.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GetParametersForImport</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ImportKeyMaterial</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteImportedKeyMaterial</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Eventual consistency</b>: The KMS API follows an eventual consistency model.
 *   For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/accessing-kms.html#programming-eventual-consistency">KMS eventual consistency</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GetParametersForImportCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GetParametersForImportCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * // import type { KMSClientConfig } from "@aws-sdk/client-kms";
 * const config = {}; // type is KMSClientConfig
 * const client = new KMSClient(config);
 * const input = { // GetParametersForImportRequest
 *   KeyId: "STRING_VALUE", // required
 *   WrappingAlgorithm: "RSAES_PKCS1_V1_5" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "RSA_AES_KEY_WRAP_SHA_1" || "RSA_AES_KEY_WRAP_SHA_256" || "SM2PKE", // required
 *   WrappingKeySpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "SM2", // required
 * };
 * const command = new GetParametersForImportCommand(input);
 * const response = await client.send(command);
 * // { // GetParametersForImportResponse
 * //   KeyId: "STRING_VALUE",
 * //   ImportToken: new Uint8Array(),
 * //   PublicKey: new Uint8Array(),
 * //   ParametersValidTo: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetParametersForImportCommandInput - {@link GetParametersForImportCommandInput}
 * @returns {@link GetParametersForImportCommandOutput}
 * @see {@link GetParametersForImportCommandInput} for command's `input` shape.
 * @see {@link GetParametersForImportCommandOutput} for command's `response` shape.
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
export class GetParametersForImportCommand extends $Command
  .classBuilder<
    GetParametersForImportCommandInput,
    GetParametersForImportCommandOutput,
    KMSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KMSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("TrentService", "GetParametersForImport", {})
  .n("KMSClient", "GetParametersForImportCommand")
  .sc(GetParametersForImport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetParametersForImportRequest;
      output: GetParametersForImportResponse;
    };
    sdk: {
      input: GetParametersForImportCommandInput;
      output: GetParametersForImportCommandOutput;
    };
  };
}
