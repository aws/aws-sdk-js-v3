import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Connection, UpdateConnectionRequest } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateConnectionCommand,
  serializeAws_json1_1UpdateConnectionCommand,
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

export interface UpdateConnectionCommandInput extends UpdateConnectionRequest {}
export interface UpdateConnectionCommandOutput extends Connection, __MetadataBearer {}

/**
 * <p>Updates the Direct Connect dedicated connection configuration.</p>
 *          <p>You can update the following parameters for a connection:</p>
 *          <ul>
 *             <li>
 *                <p>The connection name</p>
 *             </li>
 *             <li>
 *                <p>The connection's MAC Security (MACsec) encryption mode.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateConnectionCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateConnectionCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectionCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateConnectionCommand extends $Command<
  UpdateConnectionCommandInput,
  UpdateConnectionCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConnectionCommandInput, UpdateConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "UpdateConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Connection.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateConnectionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConnectionCommandOutput> {
    return deserializeAws_json1_1UpdateConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
