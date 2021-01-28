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

export type DecryptCommandInput = DecryptRequest;
export type DecryptCommandOutput = DecryptResponse & __MetadataBearer;

/**
 * <p>Decrypts ciphertext that was encrypted by a AWS KMS customer master key (CMK) using any of
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
 *       asymmetric CMK. When the CMK is asymmetric, you must specify the CMK and the encryption
 *       algorithm that was used to encrypt the ciphertext. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The Decrypt operation also decrypts ciphertext that was encrypted outside of AWS KMS by the
 *       public key in an AWS KMS asymmetric CMK. However, it cannot decrypt ciphertext produced by other
 *       libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">AWS Encryption
 *         SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>. These libraries return a ciphertext format that
 *       is incompatible with AWS KMS.</p>
 *          <p>If the ciphertext was encrypted under a symmetric CMK, you do not need to specify the CMK
 *       or the encryption algorithm. AWS KMS can get this information from metadata that it adds to the
 *       symmetric ciphertext blob. However, if you prefer, you can specify the <code>KeyId</code> to
 *       ensure that a particular CMK is used to decrypt the ciphertext. If you specify a different CMK
 *       than the one used to encrypt the ciphertext, the <code>Decrypt</code> operation fails.</p>
 *          <p>Whenever possible, use key policies to give users permission to call the Decrypt operation
 *       on a particular CMK, instead of using IAM policies. Otherwise, you might create an IAM user
 *       policy that gives the user Decrypt permission on all CMKs. This user could decrypt ciphertext
 *       that was encrypted by CMKs in other accounts if the key policy for the cross-account CMK
 *       permits it. If you must use an IAM policy for <code>Decrypt</code> permissions, limit the user
 *       to particular CMKs or particular trusted accounts.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
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
