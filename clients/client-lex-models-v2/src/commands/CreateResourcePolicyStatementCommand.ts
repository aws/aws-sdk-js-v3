import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateResourcePolicyStatementRequest, CreateResourcePolicyStatementResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateResourcePolicyStatementCommand,
  serializeAws_restJson1CreateResourcePolicyStatementCommand,
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

export interface CreateResourcePolicyStatementCommandInput extends CreateResourcePolicyStatementRequest {}
export interface CreateResourcePolicyStatementCommandOutput
  extends CreateResourcePolicyStatementResponse,
    __MetadataBearer {}

/**
 * <p>Adds a new resource policy statement to a bot or bot alias. If a
 *          resource policy exists, the statement is added to the current resource
 *          policy. If a policy doesn't exist, a new policy is created.</p>
 *          <p>You can't create a resource policy statement that allows
 *          cross-account access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateResourcePolicyStatementCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateResourcePolicyStatementCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const command = new CreateResourcePolicyStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateResourcePolicyStatementCommandInput} for command's `input` shape.
 * @see {@link CreateResourcePolicyStatementCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateResourcePolicyStatementCommand extends $Command<
  CreateResourcePolicyStatementCommandInput,
  CreateResourcePolicyStatementCommandOutput,
  LexModelsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateResourcePolicyStatementCommandInput) {
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
  ): Handler<CreateResourcePolicyStatementCommandInput, CreateResourcePolicyStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "CreateResourcePolicyStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResourcePolicyStatementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateResourcePolicyStatementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateResourcePolicyStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateResourcePolicyStatementCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateResourcePolicyStatementCommandOutput> {
    return deserializeAws_restJson1CreateResourcePolicyStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
