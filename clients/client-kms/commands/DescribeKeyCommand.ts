import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DescribeKeyRequest, DescribeKeyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeKeyCommand,
  serializeAws_json1_1DescribeKeyCommand,
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

export type DescribeKeyCommandInput = DescribeKeyRequest;
export type DescribeKeyCommandOutput = DescribeKeyResponse & __MetadataBearer;

/**
 * <p>Provides detailed information about a customer master key (CMK). You can run
 *         <code>DescribeKey</code> on a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk">customer managed CMK</a> or an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed
 *         CMK</a>.</p>
 *          <p>This detailed information includes the key ARN, creation date (and deletion date, if
 *       applicable), the key state, and the origin and expiration date (if any) of the key material.
 *       For CMKs in custom key stores, it includes information about the custom key store, such as the
 *       key store ID and the AWS CloudHSM cluster ID. It includes fields, like <code>KeySpec</code>, that
 *       help you distinguish symmetric from asymmetric CMKs. It also provides information that is
 *       particularly important to asymmetric CMKs, such as the key usage (encryption or signing) and
 *       the encryption algorithms or signing algorithms that the CMK supports.</p>
 *          <p>
 *             <code>DescribeKey</code> does not return the following information:</p>
 *          <ul>
 *             <li>
 *                <p>Aliases associated with the CMK. To get this information, use <a>ListAliases</a>.</p>
 *             </li>
 *             <li>
 *                <p>Whether automatic key rotation is enabled on the CMK. To get this information, use
 *             <a>GetKeyRotationStatus</a>. Also, some key states prevent a CMK from being
 *           automatically rotated. For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/rotate-keys.html#rotate-keys-how-it-works">How Automatic Key Rotation
 *             Works</a> in <i>AWS Key Management Service Developer Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Tags on the CMK. To get this information, use <a>ListResourceTags</a>.</p>
 *             </li>
 *             <li>
 *                <p>Key policies and grants on the CMK. To get this information, use <a>GetKeyPolicy</a> and <a>ListGrants</a>.</p>
 *             </li>
 *          </ul>
 *          <p>If you call the <code>DescribeKey</code> operation on a <i>predefined AWS
 *         alias</i>, that is, an AWS alias with no key ID, AWS KMS creates an <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#master_keys">AWS managed CMK</a>.
 *       Then, it associates the alias with the new CMK, and returns the <code>KeyId</code> and
 *         <code>Arn</code> of the new CMK in the response.</p>
 *          <p>To perform this operation on a CMK in a different AWS account, specify
 *   the key ARN or alias ARN in the value of the KeyId parameter.</p>
 */
export class DescribeKeyCommand extends $Command<
  DescribeKeyCommandInput,
  DescribeKeyCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeKeyCommandInput) {
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
  ): Handler<DescribeKeyCommandInput, DescribeKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "DescribeKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeKeyCommandOutput> {
    return deserializeAws_json1_1DescribeKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
