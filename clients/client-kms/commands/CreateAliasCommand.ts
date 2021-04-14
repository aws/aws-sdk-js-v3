import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CreateAliasRequest } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAliasCommand,
  serializeAws_json1_1CreateAliasCommand,
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

export type CreateAliasCommandInput = CreateAliasRequest;
export type CreateAliasCommandOutput = __MetadataBearer;

/**
 * <p>Creates a friendly name for a customer master key (CMK). You can use an alias to identify
 *       a CMK in the AWS KMS console, in the <a>DescribeKey</a> operation and in
 *       <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a>, such as <a>Encrypt</a> and <a>GenerateDataKey</a>. </p>
 *          <p>You can also change the CMK that's associated with the alias (<a>UpdateAlias</a>) or delete the alias (<a>DeleteAlias</a>) at any time. These operations don't
 *       affect the underlying CMK. </p>
 *          <p>You can associate the alias with any customer managed CMK in the same AWS Region. Each
 *       alias is associated with only on CMK at a time, but a CMK can have multiple aliases. A valid
 *       CMK is required. You can't create an alias without a CMK.</p>
 *          <p>The alias must be unique in the account and Region, but you can have aliases with the same
 *       name in different Regions. For detailed information about aliases, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html">Using aliases</a> in the
 *       <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>This operation does not return a response. To get the alias that you created, use the
 *         <a>ListAliases</a> operation.</p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Cross-account use</b>: No. You cannot perform this operation on an alias in a different AWS account.</p>
 *
 *          <p>
 *             <b>Required permissions</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateAlias</a> on the alias (IAM policy).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:CreateAlias</a> on the CMK (key policy).</p>
 *             </li>
 *          </ul>
 *          <p>For details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-alias.html#alias-access">Controlling access to aliases</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteAlias</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListAliases</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateAlias</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateAliasCommand extends $Command<
  CreateAliasCommandInput,
  CreateAliasCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAliasCommandInput) {
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
  ): Handler<CreateAliasCommandInput, CreateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "CreateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAliasCommandOutput> {
    return deserializeAws_json1_1CreateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
