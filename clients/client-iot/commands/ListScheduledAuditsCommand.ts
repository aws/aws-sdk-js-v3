import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListScheduledAuditsRequest, ListScheduledAuditsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListScheduledAuditsCommand,
  serializeAws_restJson1ListScheduledAuditsCommand,
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

export type ListScheduledAuditsCommandInput = ListScheduledAuditsRequest;
export type ListScheduledAuditsCommandOutput = ListScheduledAuditsResponse & __MetadataBearer;

/**
 * <p>Lists all of your scheduled audits.</p>
 */
export class ListScheduledAuditsCommand extends $Command<
  ListScheduledAuditsCommandInput,
  ListScheduledAuditsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListScheduledAuditsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListScheduledAuditsCommandInput, ListScheduledAuditsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListScheduledAuditsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListScheduledAuditsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListScheduledAuditsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListScheduledAuditsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListScheduledAuditsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListScheduledAuditsCommandOutput> {
    return deserializeAws_restJson1ListScheduledAuditsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
