import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { CreateComponentRequest, CreateComponentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateComponentCommand,
  serializeAws_json1_1CreateComponentCommand,
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

export type CreateComponentCommandInput = CreateComponentRequest;
export type CreateComponentCommandOutput = CreateComponentResponse & __MetadataBearer;

/**
 * <p>Creates a custom component by grouping similar standalone instances to monitor.</p>
 */
export class CreateComponentCommand extends $Command<
  CreateComponentCommandInput,
  CreateComponentCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateComponentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateComponentCommandInput, CreateComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "CreateComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateComponentCommandOutput> {
    return deserializeAws_json1_1CreateComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
