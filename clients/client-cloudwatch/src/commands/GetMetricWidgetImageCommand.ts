// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import {
  GetMetricWidgetImageInput,
  GetMetricWidgetImageInputFilterSensitiveLog,
  GetMetricWidgetImageOutput,
  GetMetricWidgetImageOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetMetricWidgetImageCommand,
  serializeAws_queryGetMetricWidgetImageCommand,
} from "../protocols/Aws_query";

export interface GetMetricWidgetImageCommandInput extends GetMetricWidgetImageInput {}
export interface GetMetricWidgetImageCommandOutput extends GetMetricWidgetImageOutput, __MetadataBearer {}

/**
 * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of
 * 			one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this
 * 			image into your services and products, such as wiki pages, reports, and documents.
 * 			You could also retrieve images regularly, such as every minute, and create your own
 * 			custom live dashboard.</p>
 *          <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math
 * 		and horizontal and vertical annotations.</p>
 *          <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p>
 *          <ul>
 *             <li>
 *                <p>As many as 100 metrics in the graph.</p>
 *             </li>
 *             <li>
 *                <p>Up to 100 KB uncompressed payload.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricWidgetImageCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricWidgetImageCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetMetricWidgetImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricWidgetImageCommandInput} for command's `input` shape.
 * @see {@link GetMetricWidgetImageCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 */
export class GetMetricWidgetImageCommand extends $Command<
  GetMetricWidgetImageCommandInput,
  GetMetricWidgetImageCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMetricWidgetImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "GetMetricWidgetImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMetricWidgetImageInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetMetricWidgetImageOutputFilterSensitiveLog,
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
