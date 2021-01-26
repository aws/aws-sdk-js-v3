import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { CreateActionTargetRequest, CreateActionTargetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateActionTargetCommand,
  serializeAws_restJson1CreateActionTargetCommand,
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

export type CreateActionTargetCommandInput = CreateActionTargetRequest;
export type CreateActionTargetCommandOutput = CreateActionTargetResponse & __MetadataBearer;

/**
 * <p>Creates a custom action target in Security Hub.</p>
 *          <p>You can use custom actions on findings and insights in Security Hub to trigger target actions
 *          in Amazon CloudWatch Events.</p>
 */
export class CreateActionTargetCommand extends $Command<
  CreateActionTargetCommandInput,
  CreateActionTargetCommandOutput,
  SecurityHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateActionTargetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateActionTargetCommandInput, CreateActionTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "CreateActionTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateActionTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateActionTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateActionTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateActionTargetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateActionTargetCommandOutput> {
    return deserializeAws_restJson1CreateActionTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
