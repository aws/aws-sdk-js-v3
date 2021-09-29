import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RemoveThingFromBillingGroupRequest, RemoveThingFromBillingGroupResponse } from "../models/models_2";
import {
  deserializeAws_restJson1RemoveThingFromBillingGroupCommand,
  serializeAws_restJson1RemoveThingFromBillingGroupCommand,
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

export interface RemoveThingFromBillingGroupCommandInput extends RemoveThingFromBillingGroupRequest {}
export interface RemoveThingFromBillingGroupCommandOutput
  extends RemoveThingFromBillingGroupResponse,
    __MetadataBearer {}

/**
 * <p>Removes the given thing from the billing group.</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromBillingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RemoveThingFromBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RemoveThingFromBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RemoveThingFromBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveThingFromBillingGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveThingFromBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveThingFromBillingGroupCommand extends $Command<
  RemoveThingFromBillingGroupCommandInput,
  RemoveThingFromBillingGroupCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveThingFromBillingGroupCommandInput) {
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
  ): Handler<RemoveThingFromBillingGroupCommandInput, RemoveThingFromBillingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RemoveThingFromBillingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveThingFromBillingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveThingFromBillingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveThingFromBillingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveThingFromBillingGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveThingFromBillingGroupCommandOutput> {
    return deserializeAws_restJson1RemoveThingFromBillingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
