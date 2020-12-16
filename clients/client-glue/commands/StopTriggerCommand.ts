import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopTriggerRequest, StopTriggerResponse } from "../models/models_1";
import {
  deserializeAws_json1_1StopTriggerCommand,
  serializeAws_json1_1StopTriggerCommand,
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

export type StopTriggerCommandInput = StopTriggerRequest;
export type StopTriggerCommandOutput = StopTriggerResponse & __MetadataBearer;

/**
 * <p>Stops a specified trigger.</p>
 */
export class StopTriggerCommand extends $Command<
  StopTriggerCommandInput,
  StopTriggerCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopTriggerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopTriggerCommandInput, StopTriggerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StopTriggerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopTriggerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopTriggerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopTriggerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopTriggerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopTriggerCommandOutput> {
    return deserializeAws_json1_1StopTriggerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
