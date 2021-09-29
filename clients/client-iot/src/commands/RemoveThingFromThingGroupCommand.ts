import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { RemoveThingFromThingGroupRequest, RemoveThingFromThingGroupResponse } from "../models/models_2";
import {
  deserializeAws_restJson1RemoveThingFromThingGroupCommand,
  serializeAws_restJson1RemoveThingFromThingGroupCommand,
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

export interface RemoveThingFromThingGroupCommandInput extends RemoveThingFromThingGroupRequest {}
export interface RemoveThingFromThingGroupCommandOutput extends RemoveThingFromThingGroupResponse, __MetadataBearer {}

/**
 * <p>Remove the specified thing from the specified group.</p>
 * 		       <p>You must specify either a <code>thingGroupArn</code> or a
 * 			<code>thingGroupName</code> to identify the thing group and
 * 			either a <code>thingArn</code> or a <code>thingName</code> to
 * 			identify the thing to remove from the thing group.
 * 		</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RemoveThingFromThingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RemoveThingFromThingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RemoveThingFromThingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RemoveThingFromThingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveThingFromThingGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveThingFromThingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveThingFromThingGroupCommand extends $Command<
  RemoveThingFromThingGroupCommandInput,
  RemoveThingFromThingGroupCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveThingFromThingGroupCommandInput) {
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
  ): Handler<RemoveThingFromThingGroupCommandInput, RemoveThingFromThingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RemoveThingFromThingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveThingFromThingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveThingFromThingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveThingFromThingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveThingFromThingGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveThingFromThingGroupCommandOutput> {
    return deserializeAws_restJson1RemoveThingFromThingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
