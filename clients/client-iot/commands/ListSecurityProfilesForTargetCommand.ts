import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListSecurityProfilesForTargetRequest, ListSecurityProfilesForTargetResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListSecurityProfilesForTargetCommand,
  serializeAws_restJson1ListSecurityProfilesForTargetCommand,
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

export interface ListSecurityProfilesForTargetCommandInput extends ListSecurityProfilesForTargetRequest {}
export interface ListSecurityProfilesForTargetCommandOutput
  extends ListSecurityProfilesForTargetResponse,
    __MetadataBearer {}

/**
 * <p>Lists the Device Defender security profiles attached to a target (thing group).</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSecurityProfilesForTarget</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListSecurityProfilesForTargetCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListSecurityProfilesForTargetCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListSecurityProfilesForTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSecurityProfilesForTargetCommandInput} for command's `input` shape.
 * @see {@link ListSecurityProfilesForTargetCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListSecurityProfilesForTargetCommand extends $Command<
  ListSecurityProfilesForTargetCommandInput,
  ListSecurityProfilesForTargetCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSecurityProfilesForTargetCommandInput) {
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
  ): Handler<ListSecurityProfilesForTargetCommandInput, ListSecurityProfilesForTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ListSecurityProfilesForTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSecurityProfilesForTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSecurityProfilesForTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSecurityProfilesForTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSecurityProfilesForTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSecurityProfilesForTargetCommandOutput> {
    return deserializeAws_restJson1ListSecurityProfilesForTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
