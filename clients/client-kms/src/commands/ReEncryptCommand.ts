import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ReEncryptRequest, ReEncryptResponse } from "../models/models_0";
import { deserializeAws_json1_1ReEncryptCommand, serializeAws_json1_1ReEncryptCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ReEncryptCommandInput extends ReEncryptRequest {}
export interface ReEncryptCommandOutput extends ReEncryptResponse, __MetadataBearer {}

/**
 * <p>Decrypts ciphertext and then reencrypts it entirely within KMS. You can use this
 *       operation to change the KMS key under which data is encrypted, such as when
 *       you <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-manually">manually rotate</a> a KMS key or change the KMS key that protects a ciphertext. You can also
 *       use it to reencrypt ciphertext under the same KMS key, such as to change the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption
 *         context</a> of a ciphertext.</p>
 *          <p>The <code>ReEncrypt</code> operation can decrypt ciphertext that was encrypted by using an
 *       KMS KMS key in an KMS operation, such as <a>Encrypt</a> or <a>GenerateDataKey</a>. It can also decrypt ciphertext that was encrypted by using the
 *       public key of an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric KMS key</a> outside of KMS. However, it cannot decrypt ciphertext
 *       produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>.
 *       These libraries return a ciphertext format that is incompatible with KMS.</p>
 *          <p>When you use the <code>ReEncrypt</code> operation, you need to provide information for the
 *       decrypt operation and the subsequent encrypt operation.</p>
 *          <ul>
 *             <li>
 *                <p>If your ciphertext was encrypted under an asymmetric KMS key, you must use the
 *             <code>SourceKeyId</code> parameter to identify the KMS key that encrypted the ciphertext.
 *           You must also supply the encryption algorithm that was used. This information is required
 *           to decrypt the data.</p>
 *             </li>
 *             <li>
 *                <p>If your ciphertext was encrypted under a symmetric KMS key, the <code>SourceKeyId</code>
 *           parameter is optional. KMS can get this information from metadata that it adds to the
 *           symmetric ciphertext blob. This feature adds durability to your implementation by ensuring
 *           that authorized users can decrypt ciphertext decades after it was encrypted, even if
 *           they've lost track of the key ID. However, specifying the source KMS key is always recommended
 *           as a best practice. When you use the <code>SourceKeyId</code> parameter to specify a KMS key,
 *           KMS uses only the KMS key you specify. If the ciphertext was encrypted under a different KMS key, the <code>ReEncrypt</code> operation fails. This practice ensures that you use the KMS key that you intend.</p>
 *             </li>
 *             <li>
 *                <p>To reencrypt the data, you must use the <code>DestinationKeyId</code> parameter
 *           specify the KMS key that re-encrypts the data after it is decrypted. You can select a
 *           symmetric or asymmetric KMS key. If the destination KMS key is an asymmetric KMS key, you must also
 *           provide the encryption algorithm. The algorithm that you choose must be compatible with
 *           the KMS key.</p>
 *
 *                <important>
 *                   <p>When you use an asymmetric KMS key to encrypt or reencrypt data, be sure to record the KMS key and encryption algorithm that you choose. You will be required to provide the same KMS key and encryption algorithm when you decrypt the data. If the KMS key and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p>
 *                   <p>You are not required to supply the key ID and encryption algorithm when you decrypt with symmetric KMS keys because KMS stores this information in the ciphertext blob. KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p>
 *                </important>
 *             </li>
 *          </ul>
 *
 *
 *
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. The source KMS key and destination KMS key can be in different Amazon Web Services accounts. Either or both KMS keys can be in a different account than
 *       the caller. To specify a KMS key in a different account, you must use its key ARN or alias
 *       ARN.</p>
 *
 *          <p>
 *             <b>Required permissions</b>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptFrom</a> permission on the source KMS key (key policy)</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ReEncryptTo</a> permission on the destination KMS key (key policy)</p>
 *             </li>
 *          </ul>
 *          <p>To permit reencryption from or to a KMS key, include the <code>"kms:ReEncrypt*"</code>
 *       permission in your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>. This permission is
 *       automatically included in the key policy when you use the console to create a KMS key. But you
 *       must include it manually when you create a KMS key programmatically or when you use the <a>PutKeyPolicy</a> operation to set a key policy.</p>
 *
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
 * const command = new ReEncryptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReEncryptCommandInput} for command's `input` shape.
 * @see {@link ReEncryptCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ReEncryptCommand extends $Command<ReEncryptCommandInput, ReEncryptCommandOutput, KMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "ReEncryptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReEncryptRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ReEncryptResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReEncryptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ReEncryptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReEncryptCommandOutput> {
    return deserializeAws_json1_1ReEncryptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
