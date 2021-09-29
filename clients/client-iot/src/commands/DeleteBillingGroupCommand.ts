import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteBillingGroupRequest, DeleteBillingGroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBillingGroupCommand,
  serializeAws_restJson1DeleteBillingGroupCommand,
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

export interface DeleteBillingGroupCommandInput extends DeleteBillingGroupRequest {}
export interface DeleteBillingGroupCommandOutput extends DeleteBillingGroupResponse, __MetadataBearer {}

/**
 * <p>Deletes the billing group.</p>
 * 		       <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteBillingGroup</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteBillingGroupCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteBillingGroupCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBillingGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBillingGroupCommand extends $Command<
  DeleteBillingGroupCommandInput,
  DeleteBillingGroupCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBillingGroupCommandInput) {
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
  ): Handler<DeleteBillingGroupCommandInput, DeleteBillingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteBillingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBillingGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBillingGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBillingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBillingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBillingGroupCommandOutput> {
    return deserializeAws_restJson1DeleteBillingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
