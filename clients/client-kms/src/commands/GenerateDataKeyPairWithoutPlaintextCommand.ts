// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  GenerateDataKeyPairWithoutPlaintextRequest,
  GenerateDataKeyPairWithoutPlaintextResponse,
} from "../models/models_0";
import {
  de_GenerateDataKeyPairWithoutPlaintextCommand,
  se_GenerateDataKeyPairWithoutPlaintextCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GenerateDataKeyPairWithoutPlaintextCommand}.
 */
export interface GenerateDataKeyPairWithoutPlaintextCommandInput extends GenerateDataKeyPairWithoutPlaintextRequest {}
/**
 * @public
 *
 * The output of {@link GenerateDataKeyPairWithoutPlaintextCommand}.
 */
export interface GenerateDataKeyPairWithoutPlaintextCommandOutput
  extends GenerateDataKeyPairWithoutPlaintextResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns a unique asymmetric data key pair for use outside of KMS. This operation returns
 *       a plaintext public key and a copy of the private key that is encrypted under the symmetric
 *       encryption KMS key you specify. Unlike <a>GenerateDataKeyPair</a>, this operation
 *       does not return a plaintext private key. The bytes in the keys are random; they are not
 *       related to the caller or to the KMS key that is used to encrypt the private key. </p>
 *          <p>You can use the public key that <code>GenerateDataKeyPairWithoutPlaintext</code> returns
 *       to encrypt data or verify a signature outside of KMS. Then, store the encrypted private key
 *       with the data. When you are ready to decrypt data or sign a message, you can use the <a>Decrypt</a> operation to decrypt the encrypted private key.</p>
 *          <p>To generate a data key pair, you must specify a symmetric encryption KMS key to encrypt
 *       the private key in a data key pair. You cannot use an asymmetric KMS key or a KMS key in a
 *       custom key store. To get the type and origin of your KMS key, use the <a>DescribeKey</a> operation. </p>
 *          <p>Use the <code>KeyPairSpec</code> parameter to choose an RSA or Elliptic Curve (ECC) data
 *       key pair. In China Regions, you can also choose an SM2 data key pair. KMS recommends that
 *       you use ECC key pairs for signing, and use RSA and SM2 key pairs for either encryption or
 *       signing, but not both. However, KMS cannot enforce any restrictions on the use of data key
 *       pairs outside of KMS.</p>
 *          <p>
 *             <code>GenerateDataKeyPairWithoutPlaintext</code> returns a unique data key pair for each
 *       request. The bytes in the key are not related to the caller or KMS key that is used to encrypt
 *       the private key. The public key is a DER-encoded X.509 SubjectPublicKeyInfo, as specified in
 *         <a href="https://tools.ietf.org/html/rfc5280">RFC 5280</a>.</p>
 *          <p>You can use an optional encryption context to add additional security to the encryption
 *       operation. If you specify an <code>EncryptionContext</code>, you must specify the same
 *       encryption context (a case-sensitive exact match) when decrypting the encrypted data key.
 *       Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the
 *       <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateDataKeyPairWithoutPlaintext</a> (key
 *       policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>Decrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>Encrypt</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKey</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPair</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateDataKeyPairWithoutPlaintextCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateDataKeyPairWithoutPlaintextCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // GenerateDataKeyPairWithoutPlaintextRequest
 *   EncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KeyId: "STRING_VALUE", // required
 *   KeyPairSpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SM2", // required
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new GenerateDataKeyPairWithoutPlaintextCommand(input);
 * const response = await client.send(command);
 * // { // GenerateDataKeyPairWithoutPlaintextResponse
 * //   PrivateKeyCiphertextBlob: "BLOB_VALUE",
 * //   PublicKey: "BLOB_VALUE",
 * //   KeyId: "STRING_VALUE",
 * //   KeyPairSpec: "RSA_2048" || "RSA_3072" || "RSA_4096" || "ECC_NIST_P256" || "ECC_NIST_P384" || "ECC_NIST_P521" || "ECC_SECG_P256K1" || "SM2",
 * // };
 *
 * ```
 *
 * @param GenerateDataKeyPairWithoutPlaintextCommandInput - {@link GenerateDataKeyPairWithoutPlaintextCommandInput}
 * @returns {@link GenerateDataKeyPairWithoutPlaintextCommandOutput}
 * @see {@link GenerateDataKeyPairWithoutPlaintextCommandInput} for command's `input` shape.
 * @see {@link GenerateDataKeyPairWithoutPlaintextCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 * @throws {@link DependencyTimeoutException} (server fault)
 *  <p>The system timed out while trying to fulfill the request. You can retry the
 *       request.</p>
 *
 * @throws {@link DisabledException} (client fault)
 *  <p>The request was rejected because the specified KMS key is not enabled.</p>
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>
 *       The request was rejected because the DryRun parameter was specified.
 *     </p>
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
 * @example To generate an asymmetric data key pair without a plaintext key
 * ```javascript
 * // This example returns an asymmetric elliptic curve (ECC) data key pair. The private key is encrypted under the symmetric encryption KMS key that you specify. This operation doesn't return a plaintext (unencrypted) private key.
 * const input = {
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "KeyPairSpec": "ECC_NIST_P521"
 * };
 * const command = new GenerateDataKeyPairWithoutPlaintextCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "KeyPairSpec": "ECC_NIST_P521",
 *   "PrivateKeyCiphertextBlob": "<binary data>",
 *   "PublicKey": "<binary data>"
 * }
 * *\/
 * // example id: to-generate-an-asymmetric-data-key-pair-without-a-plaintext-key-1628620971564
 * ```
 *
 */
export class GenerateDataKeyPairWithoutPlaintextCommand extends $Command<
  GenerateDataKeyPairWithoutPlaintextCommandInput,
  GenerateDataKeyPairWithoutPlaintextCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GenerateDataKeyPairWithoutPlaintextCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateDataKeyPairWithoutPlaintextCommandInput, GenerateDataKeyPairWithoutPlaintextCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateDataKeyPairWithoutPlaintextCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateDataKeyPairWithoutPlaintextCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: GenerateDataKeyPairWithoutPlaintextCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GenerateDataKeyPairWithoutPlaintextCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateDataKeyPairWithoutPlaintextCommandOutput> {
    return de_GenerateDataKeyPairWithoutPlaintextCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
