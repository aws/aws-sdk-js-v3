import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseEventsRequest, GetRelationalDatabaseEventsResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabaseEventsCommand,
  serializeAws_json1_1GetRelationalDatabaseEventsCommand,
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

export type GetRelationalDatabaseEventsCommandInput = GetRelationalDatabaseEventsRequest;
export type GetRelationalDatabaseEventsCommandOutput = GetRelationalDatabaseEventsResult & __MetadataBearer;

/**
 * <p>Returns a list of events for a specific database in Amazon Lightsail.</p>
 */
export class GetRelationalDatabaseEventsCommand extends $Command<
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRelationalDatabaseEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRelationalDatabaseEventsCommandInput, GetRelationalDatabaseEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseEventsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseEventsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRelationalDatabaseEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseEventsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseEventsCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
