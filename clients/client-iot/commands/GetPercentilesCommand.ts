import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetPercentilesRequest, GetPercentilesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetPercentilesCommand,
  serializeAws_restJson1GetPercentilesCommand,
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

export type GetPercentilesCommandInput = GetPercentilesRequest;
export type GetPercentilesCommandOutput = GetPercentilesResponse & __MetadataBearer;

/**
 * <p>Groups the aggregated values that match the query into percentile groupings. The default
 *         percentile groupings are: 1,5,25,50,75,95,99, although you can specify your own
 *         when you call <code>GetPercentiles</code>. This function returns a value for each
 *         percentile group specified (or the default percentile groupings). The percentile group
 *         "1" contains the aggregated field value that occurs in approximately one percent of the
 *         values that match the query. The percentile group "5" contains the aggregated field value
 *         that occurs in approximately five percent of the values that match the query, and so on.
 *         The result is an approximation, the more values that match the query, the more accurate
 *         the percentile values.</p>
 */
export class GetPercentilesCommand extends $Command<
  GetPercentilesCommandInput,
  GetPercentilesCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPercentilesCommandInput) {
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
  ): Handler<GetPercentilesCommandInput, GetPercentilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetPercentilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPercentilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPercentilesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPercentilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPercentilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPercentilesCommandOutput> {
    return deserializeAws_restJson1GetPercentilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
