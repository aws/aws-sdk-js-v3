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

export type ReEncryptCommandInput = ReEncryptRequest;
export type ReEncryptCommandOutput = ReEncryptResponse & __MetadataBearer;

/**
 * <p>Decrypts ciphertext and then reencrypts it entirely within AWS KMS. You can use this
 *       operation to change the customer master key (CMK) under which data is encrypted, such as when
 *       you <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-manually">manually rotate</a> a
 *       CMK or change the CMK that protects a ciphertext. You can also use it to reencrypt ciphertext
 *       under the same CMK, such as to change the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a> of a ciphertext.</p>
 *          <p>The <code>ReEncrypt</code> operation can decrypt ciphertext that was encrypted by using an
 *       AWS KMS CMK in an AWS KMS operation, such as <a>Encrypt</a> or <a>GenerateDataKey</a>. It can also decrypt ciphertext that was encrypted by using the
 *       public key of an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symm-asymm-concepts.html#asymmetric-cmks">asymmetric CMK</a> outside of AWS KMS. However, it cannot decrypt ciphertext
 *       produced by other libraries, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">AWS Encryption SDK</a> or <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 client-side encryption</a>.
 *       These libraries return a ciphertext format that is incompatible with AWS KMS.</p>
 *          <p>When you use the <code>ReEncrypt</code> operation, you need to provide information for the
 *       decrypt operation and the subsequent encrypt operation.</p>
 *          <ul>
 *             <li>
 *                <p>If your ciphertext was encrypted under an asymmetric CMK, you must identify the
 *             <i>source CMK</i>, that is, the CMK that encrypted the ciphertext. You
 *           must also supply the encryption algorithm that was used. This information is required to
 *           decrypt the data.</p>
 *             </li>
 *             <li>
 *                <p>It is optional, but you can specify a source CMK even when the ciphertext was
 *           encrypted under a symmetric CMK. This ensures that the ciphertext is decrypted only by
 *           using a particular CMK. If the CMK that you specify cannot decrypt the ciphertext, the
 *             <code>ReEncrypt</code> operation fails.</p>
 *             </li>
 *             <li>
 *                <p>To reencrypt the data, you must specify the <i>destination CMK</i>, that
 *           is, the CMK that re-encrypts the data after it is decrypted. You can select a symmetric or
 *           asymmetric CMK. If the destination CMK is an asymmetric CMK, you must also provide the
 *           encryption algorithm. The algorithm that you choose must be compatible with the
 *           CMK.</p>
 *
 *                <important>
 *                   <p>When you use an asymmetric CMK to encrypt or reencrypt data, be sure to record the CMK and encryption algorithm that you choose. You will be required to provide the same CMK and encryption algorithm when you decrypt the data. If the CMK and algorithm do not match the values used to encrypt the data, the decrypt operation fails.</p>
 *                   <p>You are not required to supply the CMK ID and encryption algorithm when you decrypt with symmetric CMKs because AWS KMS stores this information in the ciphertext blob. AWS KMS cannot store metadata in ciphertext generated with asymmetric keys. The standard format for asymmetric key ciphertext does not include configurable fields.</p>
 *                </important>
 *             </li>
 *          </ul>
 *
 *
 *          <p>Unlike other AWS KMS API operations, <code>ReEncrypt</code> callers must have two
 *       permissions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>kms:ReEncryptFrom</code> permission on the source CMK</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>kms:ReEncryptTo</code> permission on the destination CMK</p>
 *             </li>
 *          </ul>
 *          <p>To permit reencryption from or to a CMK, include the <code>"kms:ReEncrypt*"</code>
 *       permission in your <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html">key policy</a>. This permission is
 *       automatically included in the key policy when you use the console to create a CMK. But you
 *       must include it manually when you create a CMK programmatically or when you use the <a>PutKeyPolicy</a> operation to set a key policy.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
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
