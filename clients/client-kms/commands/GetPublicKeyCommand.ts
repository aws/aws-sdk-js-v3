import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GetPublicKeyRequest, GetPublicKeyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetPublicKeyCommand,
  serializeAws_json1_1GetPublicKeyCommand,
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

export type GetPublicKeyCommandInput = GetPublicKeyRequest;
export type GetPublicKeyCommandOutput = GetPublicKeyResponse & __MetadataBearer;

/**
 * <p>Returns the public key of an asymmetric CMK. Unlike the private key of a asymmetric CMK,
 *       which never leaves AWS KMS unencrypted, callers with <code>kms:GetPublicKey</code> permission
 *       can download the public key of an asymmetric CMK. You can share the public key to allow others
 *       to encrypt messages and verify signatures outside of AWS KMS. For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>You do not need to download the public key. Instead, you can use the public key within
 *       AWS KMS by calling the <a>Encrypt</a>, <a>ReEncrypt</a>, or <a>Verify</a> operations with the identifier of an asymmetric CMK. When you use the
 *       public key within AWS KMS, you benefit from the authentication, authorization, and logging that
 *       are part of every AWS KMS operation. You also reduce of risk of encrypting data that cannot be
 *       decrypted. These features are not effective outside of AWS KMS. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/download-public-key.html#download-public-key-considerations">Special Considerations
 *         for Downloading Public Keys</a>.</p>
 *          <p>To help you use the public key safely outside of AWS KMS, <code>GetPublicKey</code> returns
 *       important information about the public key in the response, including:</p>
 *
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-CustomerMasterKeySpec">CustomerMasterKeySpec</a>: The type of key material in the public key, such as
 *             <code>RSA_4096</code> or <code>ECC_NIST_P521</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-KeyUsage">KeyUsage</a>: Whether the key is used for encryption or signing.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-EncryptionAlgorithms">EncryptionAlgorithms</a> or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GetPublicKey.html#KMS-GetPublicKey-response-SigningAlgorithms">SigningAlgorithms</a>: A list of the encryption algorithms or the signing
 *           algorithms for the key.</p>
 *             </li>
 *          </ul>
 *          <p>Although AWS KMS cannot enforce these restrictions on external operations, it is crucial
 *       that you use this information to prevent the public key from being used improperly. For
 *       example, you can prevent a public signing key from being used encrypt data, or prevent a
 *       public key from being used with an encryption algorithm that is not supported by AWS KMS. You
 *       can also avoid errors, such as using the wrong signing algorithm in a verification
 *       operation.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export class GetPublicKeyCommand extends $Command<
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPublicKeyCommandInput) {
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
  ): Handler<GetPublicKeyCommandInput, GetPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "GetPublicKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPublicKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPublicKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPublicKeyCommandOutput> {
    return deserializeAws_json1_1GetPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
