import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseLogStreamsRequest, GetRelationalDatabaseLogStreamsResult } from "../models/models_1";
import {
  deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand,
  serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand,
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

export type GetRelationalDatabaseLogStreamsCommandInput = GetRelationalDatabaseLogStreamsRequest;
export type GetRelationalDatabaseLogStreamsCommandOutput = GetRelationalDatabaseLogStreamsResult & __MetadataBearer;

/**
 * <p>Returns a list of available log streams for a specific database in Amazon Lightsail.</p>
 */
export class GetRelationalDatabaseLogStreamsCommand extends $Command<
  GetRelationalDatabaseLogStreamsCommandInput,
  GetRelationalDatabaseLogStreamsCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRelationalDatabaseLogStreamsCommandInput) {
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
  ): Handler<GetRelationalDatabaseLogStreamsCommandInput, GetRelationalDatabaseLogStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetRelationalDatabaseLogStreamsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRelationalDatabaseLogStreamsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRelationalDatabaseLogStreamsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetRelationalDatabaseLogStreamsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRelationalDatabaseLogStreamsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRelationalDatabaseLogStreamsCommandOutput> {
    return deserializeAws_json1_1GetRelationalDatabaseLogStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
