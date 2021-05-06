import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { Lag, UpdateLagRequest } from "../models/models_0";
import { deserializeAws_json1_1UpdateLagCommand, serializeAws_json1_1UpdateLagCommand } from "../protocols/Aws_json1_1";
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

export interface UpdateLagCommandInput extends UpdateLagRequest {}
export interface UpdateLagCommandOutput extends Lag, __MetadataBearer {}

/**
 * <p>Updates the attributes of the specified link aggregation group (LAG).</p>
 *          <p>You can update the following LAG attributes:</p>
 *          <ul>
 *             <li>
 *                <p>The name of the LAG.</p>
 *             </li>
 *             <li>
 *                <p>The value for the minimum number of connections that must be operational
 *           for the LAG itself to be operational. </p>
 *             </li>
 *             <li>
 *                <p>The LAG's MACsec encryption mode.</p>
 *                <p>AWS assigns this value to each connection which is part of the LAG.</p>
 *             </li>
 *             <li>
 *                <p>The tags</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>If you adjust the threshold value for the minimum number of operational connections, ensure
 *       that the new value does not cause the LAG to fall below the threshold and become
 *       non-operational.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateLagCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateLagCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new UpdateLagCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLagCommandInput} for command's `input` shape.
 * @see {@link UpdateLagCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateLagCommand extends $Command<
  UpdateLagCommandInput,
  UpdateLagCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLagCommandInput) {
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
  ): Handler<UpdateLagCommandInput, UpdateLagCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "UpdateLagCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLagRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Lag.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLagCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateLagCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLagCommandOutput> {
    return deserializeAws_json1_1UpdateLagCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
