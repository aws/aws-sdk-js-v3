import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateDataKeyRequest, GenerateDataKeyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GenerateDataKeyCommand,
  serializeAws_json1_1GenerateDataKeyCommand,
} from "../protocols/Aws_json1_1";
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

export type GenerateDataKeyCommandInput = GenerateDataKeyRequest;
export type GenerateDataKeyCommandOutput = GenerateDataKeyResponse & __MetadataBearer;

/**
 * <p>Generates a unique symmetric data key for client-side encryption. This operation returns a
 *       plaintext copy of the data key and a copy that is encrypted under a customer master key (CMK)
 *       that you specify. You can use the plaintext key to encrypt your data outside of AWS KMS and
 *       store the encrypted data key with the encrypted data.</p>
 *
 *          <p>
 *             <code>GenerateDataKey</code> returns a unique data key for each request. The bytes in the
 *       plaintext key are not related to the caller or the CMK.</p>
 *
 *          <p>To generate a data key, specify the symmetric CMK that will be used to encrypt the data
 *       key. You cannot use an asymmetric CMK to generate data keys. To get the type of your CMK, use
 *       the <a>DescribeKey</a> operation. You must also specify the length of the data key.
 *       Use either the <code>KeySpec</code> or <code>NumberOfBytes</code> parameters (but not both).
 *       For 128-bit and 256-bit data keys, use the <code>KeySpec</code> parameter. </p>
 *
 *          <p>To get only an encrypted copy of the data key, use <a>GenerateDataKeyWithoutPlaintext</a>. To generate an asymmetric data key pair, use
 *       the <a>GenerateDataKeyPair</a> or <a>GenerateDataKeyPairWithoutPlaintext</a> operation. To get a cryptographically secure
 *       random byte string, use <a>GenerateRandom</a>.</p>
 *
 *          <p>You can use the optional encryption context to add additional security to the encryption
 *       operation. If you specify an <code>EncryptionContext</code>, you must specify the same
 *       encryption context (a case-sensitive exact match) when decrypting the encrypted data key.
 *       Otherwise, the request to decrypt fails with an <code>InvalidCiphertextException</code>. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">Encryption Context</a> in the
 *       <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>How to use your data key</b>
 *          </p>
 *          <p>We recommend that you use the following pattern to encrypt data locally in your application.
 *       You can write your own code or use a client-side encryption library, such as the <a href="https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/">AWS Encryption SDK</a>, the <a href="https://docs.aws.amazon.com/dynamodb-encryption-client/latest/devguide/">Amazon DynamoDB Encryption Client</a>, or
 *         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3
 *         client-side encryption</a> to do these tasks for you.</p>
 *          <p>To encrypt data outside of AWS KMS:</p>
 *          <ol>
 *             <li>
 *                <p>Use the <code>GenerateDataKey</code> operation to get a data key.</p>
 *             </li>
 *             <li>
 *                <p>Use the plaintext data key (in the <code>Plaintext</code> field of the response) to
 *           encrypt your data outside of AWS KMS. Then erase the plaintext data key from memory.</p>
 *             </li>
 *             <li>
 *                <p>Store the encrypted data key (in the <code>CiphertextBlob</code> field of the
 *           response) with the encrypted data.</p>
 *             </li>
 *          </ol>
 *          <p>To decrypt data outside of AWS KMS:</p>
 *          <ol>
 *             <li>
 *                <p>Use the <a>Decrypt</a> operation to decrypt the encrypted data key. The
 *           operation returns a plaintext copy of the data key.</p>
 *             </li>
 *             <li>
 *                <p>Use the plaintext data key to decrypt data outside of AWS KMS, then erase the plaintext
 *           data key from memory.</p>
 *             </li>
 *          </ol>
 */
export class GenerateDataKeyCommand extends $Command<
  GenerateDataKeyCommandInput,
  GenerateDataKeyCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateDataKeyCommandInput) {
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
  ): Handler<GenerateDataKeyCommandInput, GenerateDataKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GenerateDataKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateDataKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateDataKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateDataKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateDataKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateDataKeyCommandOutput> {
    return deserializeAws_json1_1GenerateDataKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
