import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { UpdateLoggingConfigurationRequest, UpdateLoggingConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateLoggingConfigurationCommand,
  serializeAws_json1_0UpdateLoggingConfigurationCommand,
} from "../protocols/Aws_json1_0";
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

export type UpdateLoggingConfigurationCommandInput = UpdateLoggingConfigurationRequest;
export type UpdateLoggingConfigurationCommandOutput = UpdateLoggingConfigurationResponse & __MetadataBearer;

/**
 * <p>Sets the logging configuration for the specified firewall. </p>
 *          <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide
 *          the modified object to this update call. You must change the logging configuration one
 *             <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p>
 *          <p>You can perform only one of the following actions in any call to
 *             <code>UpdateLoggingConfiguration</code>: </p>
 *          <ul>
 *             <li>
 *                <p>Create a new log destination object by adding a single
 *                   <code>LogDestinationConfig</code> array element to
 *                   <code>LogDestinationConfigs</code>.</p>
 *             </li>
 *             <li>
 *                <p>Delete a log destination object by removing a single
 *                   <code>LogDestinationConfig</code> array element from
 *                   <code>LogDestinationConfigs</code>.</p>
 *             </li>
 *             <li>
 *                <p>Change the <code>LogDestination</code> setting in a single
 *                   <code>LogDestinationConfig</code> array element.</p>
 *             </li>
 *          </ul>
 *          <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a
 *             <code>LogDestinationConfig</code>. To change these settings, delete the existing
 *             <code>LogDestinationConfig</code> object and create a new one, using two separate calls
 *          to this update operation.</p>
 */
export class UpdateLoggingConfigurationCommand extends $Command<
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateLoggingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkFirewallClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLoggingConfigurationCommandInput, UpdateLoggingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLoggingConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLoggingConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLoggingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateLoggingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLoggingConfigurationCommandOutput> {
    return deserializeAws_json1_0UpdateLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
