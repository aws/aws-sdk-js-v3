import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteResourcePolicyStatementRequest, DeleteResourcePolicyStatementResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteResourcePolicyStatementCommand,
  serializeAws_restJson1DeleteResourcePolicyStatementCommand,
} from "../protocols/Aws_restJson1";
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

export interface DeleteResourcePolicyStatementCommandInput extends DeleteResourcePolicyStatementRequest {}
export interface DeleteResourcePolicyStatementCommandOutput
  extends DeleteResourcePolicyStatementResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a policy statement from a resource policy. If you delete the
 *          last statement from a policy, the policy is deleted. If you specify a
 *          statement ID that doesn't exist in the policy, or if the bot or bot
 *          alias doesn't have a policy attached, Amazon Lex returns an
 *          exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new DeleteResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteResourcePolicyStatementCommand extends $Command<
  DeleteResourcePolicyStatementCommandInput,
  DeleteResourcePolicyStatementCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteResourcePolicyStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteResourcePolicyStatementCommandInput, DeleteResourcePolicyStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DeleteResourcePolicyStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteResourcePolicyStatementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteResourcePolicyStatementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteResourcePolicyStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteResourcePolicyStatementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteResourcePolicyStatementCommandOutput> {
    return deserializeAws_restJson1DeleteResourcePolicyStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
