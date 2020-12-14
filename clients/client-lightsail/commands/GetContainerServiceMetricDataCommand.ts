import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetContainerServiceMetricDataRequest, GetContainerServiceMetricDataResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetContainerServiceMetricDataCommand,
  serializeAws_json1_1GetContainerServiceMetricDataCommand,
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

export type GetContainerServiceMetricDataCommandInput = GetContainerServiceMetricDataRequest;
export type GetContainerServiceMetricDataCommandOutput = GetContainerServiceMetricDataResult & __MetadataBearer;

/**
 * <p>Returns the data points of a specific metric of your Amazon Lightsail container
 *       service.</p>
 *
 *          <p>Metrics report the utilization of your resources. Monitor and collect metric data
 *       regularly to maintain the reliability, availability, and performance of your resources.</p>
 */
export class GetContainerServiceMetricDataCommand extends $Command<
  GetContainerServiceMetricDataCommandInput,
  GetContainerServiceMetricDataCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetContainerServiceMetricDataCommandInput) {
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
  ): Handler<GetContainerServiceMetricDataCommandInput, GetContainerServiceMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetContainerServiceMetricDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetContainerServiceMetricDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetContainerServiceMetricDataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetContainerServiceMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetContainerServiceMetricDataCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContainerServiceMetricDataCommandOutput> {
    return deserializeAws_json1_1GetContainerServiceMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
