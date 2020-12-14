import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricWidgetImageInput, GetMetricWidgetImageOutput } from "../models/models_0";
import {
  deserializeAws_queryGetMetricWidgetImageCommand,
  serializeAws_queryGetMetricWidgetImageCommand,
} from "../protocols/Aws_query";
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

export type GetMetricWidgetImageCommandInput = GetMetricWidgetImageInput;
export type GetMetricWidgetImageCommandOutput = GetMetricWidgetImageOutput & __MetadataBearer;

/**
 * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of
 * 			one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this
 * 			image into your services and products, such as wiki pages, reports, and documents.
 * 			You could also retrieve images regularly, such as every minute, and create your own
 * 			custom live dashboard.</p>
 *
 * 		       <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math
 * 		and horizontal and vertical annotations.</p>
 *
 * 		       <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>As many as 100 metrics in the graph.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Up to 100 KB uncompressed payload.</p>
 * 			         </li>
 *          </ul>
 */
export class GetMetricWidgetImageCommand extends $Command<
  GetMetricWidgetImageCommandInput,
  GetMetricWidgetImageCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMetricWidgetImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMetricWidgetImageCommandInput, GetMetricWidgetImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetMetricWidgetImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMetricWidgetImageInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetMetricWidgetImageOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMetricWidgetImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetMetricWidgetImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMetricWidgetImageCommandOutput> {
    return deserializeAws_queryGetMetricWidgetImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
