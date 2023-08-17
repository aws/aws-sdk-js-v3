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
import { ReEncryptRequest, ReEncryptResponse } from "../models/models_0";
import { de_ReEncryptCommand, se_ReEncryptCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReEncryptCommand}.
 */
export interface ReEncryptCommandInput extends ReEncryptRequest {}
/**
 * @public
 *
 * The output of {@link ReEncryptCommand}.
 */
export interface ReEncryptCommandOutput extends ReEncryptResponse, __MetadataBearer {}

/**
 * @public
 * <p>Decrypts ciphertext and then reencrypts it entirely within KMS. You can use this
 *       operation to change the KMS key under which data is encrypted, such as when you <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-manually">manually
 *         rotate</a> a KMS key or change the KMS key that protects a ciphertext. You can also use
 *       it to reencrypt ciphertext under the same KMS key, such as to change the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption
 *         context</a> of a ciphertext.</p>
 *          <p>The <code>ReEncrypt</code> operation can decrypt ciphertext that was encrypted by using a
 *       KMS key in an KMS operation, such as <a>Encrypt</a> or <a>GenerateDataKey</a>. It can also decrypt ciphertext that was encrypted by using the
 *       public key of an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS key</a>
 *       outside of KMS. However, it cannot decrypt ciphertext produced by other libraries, such as
 *       the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a> or
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3
 *         client-side encryption</a>. These libraries return a ciphertext format that is
 *       incompatible with KMS.</p>
 *          <p>When you use the <code>ReEncrypt</code> operation, you need to provide information for the
 *       decrypt operation and the subsequent encrypt operation.</p>
 *          <ul>
 *             <li>
 *                <p>If your ciphertext was encrypted under an asymmetric KMS key, you must use the
 *             <code>SourceKeyId</code> parameter to identify the KMS key that encrypted the
 *           ciphertext. You must also supply the encryption algorithm that was used. This information
 *           is required to decrypt the data.</p>
 *             </li>
 *             <li>
 *                <p>If your ciphertext was encrypted under a symmetric encryption KMS key, the
 *             <code>SourceKeyId</code> parameter is optional. KMS can get this information from
 *           metadata that it adds to the symmetric ciphertext blob. This feature adds durability to
 *           your implementation by ensuring that authorized users can decrypt ciphertext decades after
 *           it was encrypted, even if they've lost track of the key ID. However, specifying the source
 *           KMS key is always recommended as a best practice. When you use the
 *             <code>SourceKeyId</code> parameter to specify a KMS key, KMS uses only the KMS key you
 *           specify. If the ciphertext was encrypted under a different KMS key, the
 *             <code>ReEncrypt</code> operation fails. This practice ensures that you use the KMS key
 *           that you intend.</p>
 *             </li>
 *             <li>
 *                <p>To reencrypt the data, you must use the <code>DestinationKeyId</code> parameter to
 *           specify the KMS key that re-encrypts the data after it is decrypted. If the destination
 *           KMS key is an asymmetric KMS key, you must also provide the encryption algorithm. The
 *           algorithm that you choose must be compatible with the KMS key.</p>
 *                <important>
 *                   <p>When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p>
 *                   <p>You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p>
 *                </important>
 *             </li>
 *          </ul>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. The source KMS key and
 *       destination KMS key can be in different Amazon Web Services accounts. Either or both KMS keys can be in a
 *       different account than the caller. To specify a KMS key in a different account, you must use
 *       its key ARN or alias ARN.</p>
 *          <p>
 *             <b>Required permissions</b>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptFrom</a>
 *           permission on the source KMS key (key policy)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptTo</a>
 *           permission on the destination KMS key (key policy)</p>
 *             </li>
 *          </ul>
 *          <p>To permit reencryption from or to a KMS key, include the <code>"kms:ReEncrypt*"</code>
 *       permission in your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>. This permission is
 *       automatically included in the key policy when you use the console to create a KMS key. But you
 *       must include it manually when you create a KMS key programmatically or when you use the <a>PutKeyPolicy</a> operation to set a key policy.</p>
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
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ReEncryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ReEncryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // ReEncryptRequest
 *   CiphertextBlob: "BLOB_VALUE", // required
 *   SourceEncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SourceKeyId: "STRING_VALUE",
 *   DestinationKeyId: "STRING_VALUE", // required
 *   DestinationEncryptionContext: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SourceEncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 *   DestinationEncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ReEncryptCommand(input);
 * const response = await client.send(command);
 * // { // ReEncryptResponse
 * //   CiphertextBlob: "BLOB_VALUE",
 * //   SourceKeyId: "STRING_VALUE",
 * //   KeyId: "STRING_VALUE",
 * //   SourceEncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * //   DestinationEncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * // };
 *
 * ```
 *
 * @param ReEncryptCommandInput - {@link ReEncryptCommandInput}
 * @returns {@link ReEncryptCommandOutput}
 * @see {@link ReEncryptCommandInput} for command's `input` shape.
 * @see {@link ReEncryptCommandOutput} for command's `response` shape.
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
 * @throws {@link IncorrectKeyException} (client fault)
 *  <p>The request was rejected because the specified KMS key cannot decrypt the data. The
 *         <code>KeyId</code> in a <a>Decrypt</a> request and the <code>SourceKeyId</code>
 *       in a <a>ReEncrypt</a> request must identify the same KMS key that was used to
 *       encrypt the ciphertext.</p>
 *
 * @throws {@link InvalidCiphertextException} (client fault)
 *  <p>From the <a>Decrypt</a> or <a>ReEncrypt</a> operation, the request
 *       was rejected because the specified ciphertext, or additional authenticated data incorporated
 *       into the ciphertext, such as the encryption context, is corrupted, missing, or otherwise
 *       invalid.</p>
 *          <p>From the <a>ImportKeyMaterial</a> operation, the request was rejected because
 *       KMS could not decrypt the encrypted (wrapped) key material. </p>
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
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To reencrypt data
 * ```javascript
 * // The following example reencrypts data with the specified KMS key.
 * const input = {
 *   "CiphertextBlob": "<binary data>",
 *   "DestinationKeyId": "0987dcba-09fe-87dc-65ba-ab0987654321"
 * };
 * const command = new ReEncryptCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CiphertextBlob": "<binary data>",
 *   "KeyId": "arn:aws:kms:us-east-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321",
 *   "SourceKeyId": "arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * }
 * *\/
 * // example id: to-reencrypt-data-1481230358001
 * ```
 *
 */
export class ReEncryptCommand extends $Command<ReEncryptCommandInput, ReEncryptCommandOutput, KMSClientResolvedConfig> {
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
  constructor(readonly input: ReEncryptCommandInput) {
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
  ): Handler<ReEncryptCommandInput, ReEncryptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ReEncryptCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ReEncryptCommand";
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
  private serialize(input: ReEncryptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReEncryptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReEncryptCommandOutput> {
    return de_ReEncryptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
