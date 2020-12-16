import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartTriggerRequest, StartTriggerResponse } from "../models/models_1";
import {
  deserializeAws_json1_1StartTriggerCommand,
  serializeAws_json1_1StartTriggerCommand,
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

export type StartTriggerCommandInput = StartTriggerRequest;
export type StartTriggerCommandOutput = StartTriggerResponse & __MetadataBearer;

/**
 * <p>Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering
 *       Jobs</a> for information about how different types of trigger are
 *       started.</p>
 */
export class StartTriggerCommand extends $Command<
  StartTriggerCommandInput,
  StartTriggerCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartTriggerCommandInput) {
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
  ): Handler<StartTriggerCommandInput, StartTriggerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "StartTriggerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartTriggerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartTriggerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartTriggerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartTriggerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTriggerCommandOutput> {
    return deserializeAws_json1_1StartTriggerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
