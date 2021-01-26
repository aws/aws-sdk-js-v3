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

export type UpdateLagCommandInput = UpdateLagRequest;
export type UpdateLagCommandOutput = Lag & __MetadataBearer;

/**
 * <p>Updates the attributes of the specified link aggregation group (LAG).</p>
 *          <p>You can update the following attributes:</p>
 *          <ul>
 *             <li>
 *                <p>The name of the LAG.</p>
 *             </li>
 *             <li>
 *                <p>The value for the minimum number of connections that must be operational
 *           for the LAG itself to be operational. </p>
 *             </li>
 *          </ul>
 *          <p>When you create a LAG, the default value for the minimum number of operational
 *       connections is zero (0). If you update this value and the number of operational
 *       connections falls below the specified value, the LAG automatically goes down to avoid
 *       over-utilization of the remaining connections. Adjust this value with care, as it
 *       could force the LAG down if it is set higher than the current number of operational
 *       connections.</p>
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
