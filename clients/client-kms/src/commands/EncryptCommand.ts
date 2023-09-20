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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { EncryptRequest, EncryptRequestFilterSensitiveLog, EncryptResponse } from "../models/models_0";
import { de_EncryptCommand, se_EncryptCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EncryptCommand}.
 */
export interface EncryptCommandInput extends EncryptRequest {}
/**
 * @public
 *
 * The output of {@link EncryptCommand}.
 */
export interface EncryptCommandOutput extends EncryptResponse, __MetadataBearer {}

/**
 * @public
 * <p>Encrypts plaintext of up to 4,096 bytes using a KMS key. You can use a symmetric or
 *       asymmetric KMS key with a <code>KeyUsage</code> of <code>ENCRYPT_DECRYPT</code>.</p>
 *          <p>You can use this operation to encrypt small amounts of arbitrary data, such as a personal
 *       identifier or database password, or other sensitive information. You don't need to use the
 *         <code>Encrypt</code> operation to encrypt a data key. The <a>GenerateDataKey</a>
 *       and <a>GenerateDataKeyPair</a> operations return a plaintext data key and an
 *       encrypted copy of that data key.</p>
 *          <p>If you use a symmetric encryption KMS key, you can use an encryption context to add
 *       additional security to your encryption operation. If you specify an
 *         <code>EncryptionContext</code> when encrypting data, you must specify the same encryption
 *       context (a case-sensitive exact match) when decrypting the data. Otherwise, the request to
 *       decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption
 *         Context</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>If you specify an asymmetric KMS key, you must also specify the encryption algorithm. The
 *       algorithm must be compatible with the KMS key spec.</p>
 *          <important>
 *             <p>When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p>
 *             <p>You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric encryption KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p>
 *          </important>
 *          <p>The maximum size of the data that you can encrypt varies with the type of KMS key and the
 *       encryption algorithm that you choose.</p>
 *          <ul>
 *             <li>
 *                <p>Symmetric encryption KMS keys</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>SYMMETRIC_DEFAULT</code>: 4096 bytes</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RSA_2048</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_1</code>: 214 bytes</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_256</code>: 190 bytes</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RSA_3072</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_1</code>: 342 bytes</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_256</code>: 318 bytes</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RSA_4096</code>
 *                </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_1</code>: 470 bytes</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>RSAES_OAEP_SHA_256</code>: 446 bytes</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SM2PKE</code>: 1024 bytes (China Regions only)</p>
 *             </li>
 *          </ul>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Encrypt</a> (key policy)</p>
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
 * import { KMSClient, EncryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, EncryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const input = { // EncryptRequest
 *   KeyId: "STRING_VALUE", // required
 *   Plaintext: "BLOB_VALUE", // required
 *   EncryptionContext: { // EncryptionContextType
 *     "<keys>": "STRING_VALUE",
 *   },
 *   GrantTokens: [ // GrantTokenList
 *     "STRING_VALUE",
 *   ],
 *   EncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 *   DryRun: true || false,
 * };
 * const command = new EncryptCommand(input);
 * const response = await client.send(command);
 * // { // EncryptResponse
 * //   CiphertextBlob: "BLOB_VALUE",
 * //   KeyId: "STRING_VALUE",
 * //   EncryptionAlgorithm: "SYMMETRIC_DEFAULT" || "RSAES_OAEP_SHA_1" || "RSAES_OAEP_SHA_256" || "SM2PKE",
 * // };
 *
 * ```
 *
 * @param EncryptCommandInput - {@link EncryptCommandInput}
 * @returns {@link EncryptCommandOutput}
 * @see {@link EncryptCommandInput} for command's `input` shape.
 * @see {@link EncryptCommandOutput} for command's `response` shape.
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
 * @throws {@link KMSServiceException}
 * <p>Base exception class for all service exceptions from KMS service.</p>
 *
 * @example To encrypt data with a symmetric encryption KMS key
 * ```javascript
 * // The following example encrypts data with the specified symmetric encryption KMS key.
 * const input = {
 *   "KeyId": "1234abcd-12ab-34cd-56ef-1234567890ab",
 *   "Plaintext": "<binary data>"
 * };
 * const command = new EncryptCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CiphertextBlob": "<binary data>",
 *   "EncryptionAlgorithm": "SYMMETRIC_DEFAULT",
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab"
 * }
 * *\/
 * // example id: to-encrypt-data-1
 * ```
 *
 * @example To encrypt data with an asymmetric encryption KMS key
 * ```javascript
 * // The following example encrypts data with the specified RSA asymmetric KMS key. When you encrypt with an asymmetric key, you must specify the encryption algorithm.
 * const input = {
 *   "EncryptionAlgorithm": "RSAES_OAEP_SHA_256",
 *   "KeyId": "0987dcba-09fe-87dc-65ba-ab0987654321",
 *   "Plaintext": "<binary data>"
 * };
 * const command = new EncryptCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CiphertextBlob": "<binary data>",
 *   "EncryptionAlgorithm": "RSAES_OAEP_SHA_256",
 *   "KeyId": "arn:aws:kms:us-west-2:111122223333:key/0987dcba-09fe-87dc-65ba-ab0987654321"
 * }
 * *\/
 * // example id: to-encrypt-data-2
 * ```
 *
 */
export class EncryptCommand extends $Command<EncryptCommandInput, EncryptCommandOutput, KMSClientResolvedConfig> {
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
  constructor(readonly input: EncryptCommandInput) {
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
  ): Handler<EncryptCommandInput, EncryptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, EncryptCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "EncryptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EncryptRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrentService",
        operation: "Encrypt",
      },
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
  private serialize(input: EncryptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EncryptCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EncryptCommandOutput> {
    return de_EncryptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
