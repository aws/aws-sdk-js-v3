// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  EncryptRequest,
  EncryptRequestFilterSensitiveLog,
  EncryptResponse,
  EncryptResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1EncryptCommand, serializeAws_json1_1EncryptCommand } from "../protocols/Aws_json1_1";

export interface EncryptCommandInput extends EncryptRequest {}
export interface EncryptCommandOutput extends EncryptResponse, __MetadataBearer {}

/**
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
 *
 *
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
 *             <b>Cross-account use</b>: Yes.
 *       To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter.</p>
 *
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
 * const command = new EncryptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EncryptCommandInput} for command's `input` shape.
 * @see {@link EncryptCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
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
      outputFilterSensitiveLog: EncryptResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EncryptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EncryptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EncryptCommandOutput> {
    return deserializeAws_json1_1EncryptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
