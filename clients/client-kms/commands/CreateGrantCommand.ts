import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CreateGrantRequest, CreateGrantResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateGrantCommand,
  serializeAws_json1_1CreateGrantCommand,
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

export type CreateGrantCommandInput = CreateGrantRequest;
export type CreateGrantCommandOutput = CreateGrantResponse & __MetadataBearer;

/**
 * <p>Adds a grant to a customer master key (CMK). The grant allows the grantee principal to use
 *       the CMK when the conditions specified in the grant are met. When setting permissions, grants
 *       are an alternative to key policies. </p>
 *          <p>To create a grant that allows a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operation</a> only when the request includes a particular
 *         <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption
 *         context</a>, use the <code>Constraints</code> parameter. For details, see <a>GrantConstraints</a>.</p>
 *          <p>You can create grants on symmetric and asymmetric CMKs. However, if the grant allows an
 *       operation that the CMK does not support, <code>CreateGrant</code> fails with a
 *         <code>ValidationException</code>. </p>
 *
 *          <ul>
 *             <li>
 *                <p>Grants for symmetric CMKs cannot allow operations that are not supported for symmetric
 *           CMKs, including <a>Sign</a>, <a>Verify</a>, and <a>GetPublicKey</a>. (There are limited exceptions to this rule for legacy
 *           operations, but you should not create a grant for an operation that AWS KMS does not
 *           support.)</p>
 *             </li>
 *             <li>
 *                <p>Grants for asymmetric CMKs cannot allow operations that are not supported for
 *           asymmetric CMKs, including operations that <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKey">generate data keys</a> or <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GenerateDataKeyPair">data key pairs</a>,
 *           or operations related to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html">automatic key rotation</a>, <a href="https://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">imported key material</a>, or CMKs in <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key
 *             stores</a>.</p>
 *             </li>
 *             <li>
 *                <p>Grants for asymmetric CMKs with a <code>KeyUsage</code> of
 *             <code>ENCRYPT_DECRYPT</code> cannot allow the <a>Sign</a> or <a>Verify</a> operations. Grants for asymmetric CMKs with a <code>KeyUsage</code>
 *           of <code>SIGN_VERIFY</code> cannot allow the <a>Encrypt</a> or <a>Decrypt</a> operations.</p>
 *             </li>
 *             <li>
 *                <p>Grants for asymmetric CMKs cannot include an encryption context grant constraint. An
 *           encryption context is not supported on asymmetric CMKs.</p>
 *             </li>
 *          </ul>
 *          <p>For information about symmetric and asymmetric CMKs, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and Asymmetric CMKs</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>To perform this operation on a CMK in a different AWS account, specify the key
 *   ARN in the value of the <code>KeyId</code> parameter. For more information about grants, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Grants</a> in the
 *       <i>
 *                <i>AWS Key Management Service Developer Guide</i>
 *             </i>.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export class CreateGrantCommand extends $Command<
  CreateGrantCommandInput,
  CreateGrantCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateGrantCommandInput) {
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
  ): Handler<CreateGrantCommandInput, CreateGrantCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "CreateGrantCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateGrantRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateGrantResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateGrantCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateGrantCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateGrantCommandOutput> {
    return deserializeAws_json1_1CreateGrantCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
