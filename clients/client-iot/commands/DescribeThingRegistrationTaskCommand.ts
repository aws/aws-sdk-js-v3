import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeThingRegistrationTaskRequest, DescribeThingRegistrationTaskResponse } from "../models/models_1";
import {
  deserializeAws_restJson1DescribeThingRegistrationTaskCommand,
  serializeAws_restJson1DescribeThingRegistrationTaskCommand,
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

export interface DescribeThingRegistrationTaskCommandInput extends DescribeThingRegistrationTaskRequest {}
export interface DescribeThingRegistrationTaskCommandOutput
  extends DescribeThingRegistrationTaskResponse,
    __MetadataBearer {}

/**
 * <p>Describes a bulk thing provisioning task.</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThingRegistrationTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingRegistrationTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingRegistrationTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeThingRegistrationTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeThingRegistrationTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeThingRegistrationTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeThingRegistrationTaskCommand extends $Command<
  DescribeThingRegistrationTaskCommandInput,
  DescribeThingRegistrationTaskCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeThingRegistrationTaskCommandInput) {
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
  ): Handler<DescribeThingRegistrationTaskCommandInput, DescribeThingRegistrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeThingRegistrationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeThingRegistrationTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeThingRegistrationTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeThingRegistrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeThingRegistrationTaskCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeThingRegistrationTaskCommandOutput> {
    return deserializeAws_restJson1DescribeThingRegistrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
