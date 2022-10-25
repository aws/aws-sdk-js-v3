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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  GetPercentilesRequest,
  GetPercentilesRequestFilterSensitiveLog,
  GetPercentilesResponse,
  GetPercentilesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1GetPercentilesCommand,
  serializeAws_restJson1GetPercentilesCommand,
} from "../protocols/Aws_restJson1";

export interface GetPercentilesCommandInput extends GetPercentilesRequest {}
export interface GetPercentilesCommandOutput extends GetPercentilesResponse, __MetadataBearer {}

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
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetPercentiles</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetPercentilesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetPercentilesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetPercentilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPercentilesCommandInput} for command's `input` shape.
 * @see {@link GetPercentilesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class GetPercentilesCommand extends $Command<
  GetPercentilesCommandInput,
  GetPercentilesCommandOutput,
  IoTClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPercentilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "GetPercentilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPercentilesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPercentilesResponseFilterSensitiveLog,
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
