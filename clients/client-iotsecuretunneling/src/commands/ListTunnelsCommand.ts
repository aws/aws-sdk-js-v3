import {
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import { ListTunnelsRequest, ListTunnelsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTunnelsCommand,
  serializeAws_json1_1ListTunnelsCommand,
} from "../protocols/Aws_json1_1";
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

export interface ListTunnelsCommandInput extends ListTunnelsRequest {}
export interface ListTunnelsCommandOutput extends ListTunnelsResponse, __MetadataBearer {}

/**
 * <p>List all tunnels for an AWS account. Tunnels are listed by creation time in
 * 			descending order, newer tunnels will be listed before older tunnels.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, ListTunnelsCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, ListTunnelsCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const command = new ListTunnelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTunnelsCommandInput} for command's `input` shape.
 * @see {@link ListTunnelsCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTunnelsCommand extends $Command<
  ListTunnelsCommandInput,
  ListTunnelsCommandOutput,
  IoTSecureTunnelingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTunnelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSecureTunnelingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTunnelsCommandInput, ListTunnelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSecureTunnelingClient";
    const commandName = "ListTunnelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTunnelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTunnelsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTunnelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTunnelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTunnelsCommandOutput> {
    return deserializeAws_json1_1ListTunnelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
