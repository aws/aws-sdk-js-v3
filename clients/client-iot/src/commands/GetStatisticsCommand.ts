import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetStatisticsRequest, GetStatisticsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetStatisticsCommand,
  serializeAws_restJson1GetStatisticsCommand,
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

export interface GetStatisticsCommandInput extends GetStatisticsRequest {}
export interface GetStatisticsCommandOutput extends GetStatisticsResponse, __MetadataBearer {}

/**
 * <p>Returns the count, average, sum, minimum, maximum, sum of squares, variance,
 *       and standard deviation for the specified aggregated field. If the aggregation field is of type
 *       <code>String</code>, only the count statistic is returned.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetStatistics</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetStatisticsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetStatisticsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetStatisticsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetStatisticsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetStatisticsCommand extends $Command<
  GetStatisticsCommandInput,
  GetStatisticsCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetStatisticsCommandInput) {
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
  ): Handler<GetStatisticsCommandInput, GetStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetStatisticsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetStatisticsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetStatisticsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStatisticsCommandOutput> {
    return deserializeAws_restJson1GetStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
