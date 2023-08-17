// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { UpdateLoggingConfigurationRequest, UpdateLoggingConfigurationResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_UpdateLoggingConfigurationCommand, se_UpdateLoggingConfigurationCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLoggingConfigurationCommand}.
 */
export interface UpdateLoggingConfigurationCommandInput extends UpdateLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLoggingConfigurationCommand}.
 */
export interface UpdateLoggingConfigurationCommandOutput extends UpdateLoggingConfigurationResponse, __MetadataBearer {}

/**
 * @public
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateLoggingConfigurationCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateLoggingConfigurationCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateLoggingConfigurationRequest
 *   FirewallArn: "STRING_VALUE",
 *   FirewallName: "STRING_VALUE",
 *   LoggingConfiguration: { // LoggingConfiguration
 *     LogDestinationConfigs: [ // LogDestinationConfigs // required
 *       { // LogDestinationConfig
 *         LogType: "ALERT" || "FLOW", // required
 *         LogDestinationType: "S3" || "CloudWatchLogs" || "KinesisDataFirehose", // required
 *         LogDestination: { // LogDestinationMap // required
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLoggingConfigurationResponse
 * //   FirewallArn: "STRING_VALUE",
 * //   FirewallName: "STRING_VALUE",
 * //   LoggingConfiguration: { // LoggingConfiguration
 * //     LogDestinationConfigs: [ // LogDestinationConfigs // required
 * //       { // LogDestinationConfig
 * //         LogType: "ALERT" || "FLOW", // required
 * //         LogDestinationType: "S3" || "CloudWatchLogs" || "KinesisDataFirehose", // required
 * //         LogDestination: { // LogDestinationMap // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLoggingConfigurationCommandInput - {@link UpdateLoggingConfigurationCommandInput}
 * @returns {@link UpdateLoggingConfigurationCommandOutput}
 * @see {@link UpdateLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn’t perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The token you provided is stale or isn't valid for the operation. </p>
 *
 * @throws {@link LogDestinationPermissionException} (client fault)
 *  <p>Unable to send logs to a configured logging destination. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 */
export class UpdateLoggingConfigurationCommand extends $Command<
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
  NetworkFirewallClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLoggingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkFirewallClient";
    const commandName = "UpdateLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: UpdateLoggingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLoggingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateLoggingConfigurationCommandOutput> {
    return de_UpdateLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
