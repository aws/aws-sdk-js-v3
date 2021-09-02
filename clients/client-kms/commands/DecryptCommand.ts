import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DecryptRequest, DecryptResponse } from "../models/models_0";
import { deserializeAws_json1_1DecryptCommand, serializeAws_json1_1DecryptCommand } from "../protocols/Aws_json1_1";
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

export interface DecryptCommandInput extends DecryptRequest {}
export interface DecryptCommandOutput extends DecryptResponse, __MetadataBearer {}

/**
 * <p>Decrypts ciphertext that was encrypted by a KMS key using any of
 *       the following operations:</p>
 *          <ul>
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
 *             <li>
 *                <p>
 *                   <a>GenerateDataKeyPairWithoutPlaintext</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>You can use this operation to decrypt ciphertext that was encrypted under a symmetric or
 *       asymmetric KMS key. When the KMS key is asymmetric, you must specify the KMS key and the encryption
 *       algorithm that was used to encrypt the ciphertext. For information about symmetric and asymmetric KMS keys, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric KMS keys</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The Decrypt operation also decrypts ciphertext that was encrypted outside of KMS by the
 *       public key in an KMS asymmetric KMS key. However, it cannot decrypt ciphertext produced by other
 *       libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">Amazon Web Services Encryption
 *         SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that
 *       is incompatible with KMS.</p>
 *          <p>If the ciphertext was encrypted under a symmetric KMS key, the <code>KeyId</code> parameter is
 *       optional. KMS can get this information from metadata that it adds to the symmetric
 *       ciphertext blob. This feature adds durability to your implementation by ensuring that
 *       authorized users can decrypt ciphertext decades after it was encrypted, even if they've lost
 *       track of the key ID. However, specifying the KMS key is always recommended as a best practice.
 *       When you use the <code>KeyId</code> parameter to specify a KMS key, KMS only uses the KMS key you
 *       specify. If the ciphertext was encrypted under a different KMS key, the <code>Decrypt</code>
 *       operation fails. This practice ensures that you use the KMS key that you intend.</p>
 *          <p>Whenever possible, use key policies to give users permission to call the
 *         <code>Decrypt</code> operation on a particular KMS key, instead of using IAM policies.
 *       Otherwise, you might create an IAM user policy that gives the user <code>Decrypt</code>
 *       permission on all KMS keys. This user could decrypt ciphertext that was encrypted by KMS keys in other
 *       accounts if the key policy for the cross-account KMS key permits it. If you must use an IAM policy
 *       for <code>Decrypt</code> permissions, limit the user to particular KMS keys or particular trusted
 *       accounts. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/iam-policies.html#iam-policies-best-practices">Best practices for IAM policies</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>Applications in Amazon Web Services Nitro Enclaves can call this operation by using the <a href="https://github.com/aws/aws-nitro-enclaves-sdk-c">Amazon Web Services Nitro Enclaves Development Kit</a>. For information about the supporting parameters, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/services-nitro-enclaves.html">How Amazon Web Services Nitro Enclaves use KMS</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>The KMS key that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key state: Effect on your KMS key</a> in the <i>Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: Yes. To perform this operation with a KMS key in a different Amazon Web Services account, specify
 *   the key ARN or alias ARN in the value of the <code>KeyId</code> parameter. </p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:Decrypt</a> (key policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
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
 *                   <a>ReEncrypt</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, DecryptCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, DecryptCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new DecryptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DecryptCommandInput} for command's `input` shape.
 * @see {@link DecryptCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DecryptCommand extends $Command<DecryptCommandInput, DecryptCommandOutput, KMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DecryptCommandInput) {
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
  ): Handler<DecryptCommandInput, DecryptCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DecryptCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DecryptRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DecryptResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DecryptCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DecryptCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DecryptCommandOutput> {
    return deserializeAws_json1_1DecryptCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
