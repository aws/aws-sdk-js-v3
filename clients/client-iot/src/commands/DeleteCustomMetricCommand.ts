import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteCustomMetricRequest, DeleteCustomMetricResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteCustomMetricCommand,
  serializeAws_restJson1DeleteCustomMetricCommand,
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

export interface DeleteCustomMetricCommandInput extends DeleteCustomMetricRequest {}
export interface DeleteCustomMetricCommandOutput extends DeleteCustomMetricResponse, __MetadataBearer {}

/**
 * <p>
 *       Deletes a Device Defender detect custom metric.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteCustomMetric</a> action.</p>
 *          <note>
 *             <p>Before you can delete a custom metric, you must first remove the custom metric from all
 *       security profiles it's a part of.
 *       The
 *       security
 *       profile associated with the custom metric can be found using the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_ListSecurityProfiles.html">ListSecurityProfiles</a>
 *       API with <code>metricName</code> set to your custom metric name.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteCustomMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomMetricCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteCustomMetricCommand extends $Command<
  DeleteCustomMetricCommandInput,
  DeleteCustomMetricCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCustomMetricCommandInput) {
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
  ): Handler<DeleteCustomMetricCommandInput, DeleteCustomMetricCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteCustomMetricCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomMetricRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCustomMetricResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCustomMetricCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteCustomMetricCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCustomMetricCommandOutput> {
    return deserializeAws_restJson1DeleteCustomMetricCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
