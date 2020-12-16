import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";
import { GetTimeSeriesServiceStatisticsRequest, GetTimeSeriesServiceStatisticsResult } from "../models/models_0";
import {
  deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand,
  serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand,
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

export type GetTimeSeriesServiceStatisticsCommandInput = GetTimeSeriesServiceStatisticsRequest;
export type GetTimeSeriesServiceStatisticsCommandOutput = GetTimeSeriesServiceStatisticsResult & __MetadataBearer;

/**
 * <p>Get an aggregation of service statistics defined by a specific time
 *             range.</p>
 */
export class GetTimeSeriesServiceStatisticsCommand extends $Command<
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput,
  XRayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTimeSeriesServiceStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: XRayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTimeSeriesServiceStatisticsCommandInput, GetTimeSeriesServiceStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "XRayClient";
    const commandName = "GetTimeSeriesServiceStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTimeSeriesServiceStatisticsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTimeSeriesServiceStatisticsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTimeSeriesServiceStatisticsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTimeSeriesServiceStatisticsCommandOutput> {
    return deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
