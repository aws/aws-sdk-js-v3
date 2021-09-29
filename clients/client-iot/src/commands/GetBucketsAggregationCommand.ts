import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { GetBucketsAggregationRequest, GetBucketsAggregationResponse } from "../models/models_1";
import {
  deserializeAws_restJson1GetBucketsAggregationCommand,
  serializeAws_restJson1GetBucketsAggregationCommand,
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

export interface GetBucketsAggregationCommandInput extends GetBucketsAggregationRequest {}
export interface GetBucketsAggregationCommandOutput extends GetBucketsAggregationResponse, __MetadataBearer {}

/**
 * <p>Aggregates on indexed data with search queries pertaining to particular fields. </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetBucketsAggregation</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetBucketsAggregationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetBucketsAggregationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetBucketsAggregationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBucketsAggregationCommandInput} for command's `input` shape.
 * @see {@link GetBucketsAggregationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetBucketsAggregationCommand extends $Command<
  GetBucketsAggregationCommandInput,
  GetBucketsAggregationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBucketsAggregationCommandInput) {
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
  ): Handler<GetBucketsAggregationCommandInput, GetBucketsAggregationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetBucketsAggregationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketsAggregationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBucketsAggregationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketsAggregationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetBucketsAggregationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketsAggregationCommandOutput> {
    return deserializeAws_restJson1GetBucketsAggregationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
