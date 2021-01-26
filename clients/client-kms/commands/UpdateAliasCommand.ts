import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { UpdateAliasRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateAliasCommand,
  serializeAws_json1_1UpdateAliasCommand,
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

export type UpdateAliasCommandInput = UpdateAliasRequest;
export type UpdateAliasCommandOutput = __MetadataBearer;

/**
 * <p>Associates an existing AWS KMS alias with a different customer master key (CMK). Each alias
 *       is associated with only one CMK at a time, although a CMK can have multiple aliases. The alias
 *       and the CMK must be in the same AWS account and region. You cannot perform this operation on an alias in a different AWS account. </p>
 *          <p>The current and new CMK must be the same type (both symmetric or both asymmetric), and
 *       they must have the same key usage (<code>ENCRYPT_DECRYPT</code> or <code>SIGN_VERIFY</code>).
 *       This restriction prevents errors in code that uses aliases. If you must assign an alias to a
 *       different type of CMK, use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to create a new alias.</p>
 *          <p>You cannot use <code>UpdateAlias</code> to change an alias name. To change an alias name,
 *       use <a>DeleteAlias</a> to delete the old alias and <a>CreateAlias</a> to
 *       create a new alias.</p>
 *          <p>Because an alias is not a property of a CMK, you can create, update, and delete the
 *       aliases of a CMK without affecting the CMK. Also, aliases do not appear in the response from
 *       the <a>DescribeKey</a> operation. To get the aliases of all CMKs in the account,
 *       use the <a>ListAliases</a> operation. </p>
 *          <p>The CMK that you use for this operation must be in a compatible key state. For
 * details, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use
 * of a Customer Master Key</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
 */
export class UpdateAliasCommand extends $Command<
  UpdateAliasCommandInput,
  UpdateAliasCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateAliasCommandInput) {
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
  ): Handler<UpdateAliasCommandInput, UpdateAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdateAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAliasCommandOutput> {
    return deserializeAws_json1_1UpdateAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
