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

import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import { UpdateMonitorInput, UpdateMonitorOutput } from "../models/models_0";
import { de_UpdateMonitorCommand, se_UpdateMonitorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandInput extends UpdateMonitorInput {}
/**
 * @public
 *
 * The output of {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandOutput extends UpdateMonitorOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates a monitor. You can update a monitor to change the percentage of traffic to monitor or the maximum number of city-networks
 * 			(locations and ASNs), to add or remove resources, or to change the status of the monitor. Note that you can't change the name of a monitor.</p>
 *          <p>The city-network maximum that you choose is the limit, but you only pay for the number of city-networks that are actually monitored.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/IMCityNetworksMaximum.html">Choosing a city-network maximum value</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, UpdateMonitorCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, UpdateMonitorCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const input = { // UpdateMonitorInput
 *   MonitorName: "STRING_VALUE", // required
 *   ResourcesToAdd: [ // SetOfARNs
 *     "STRING_VALUE",
 *   ],
 *   ResourcesToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   Status: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   MaxCityNetworksToMonitor: Number("int"),
 *   InternetMeasurementsLogDelivery: { // InternetMeasurementsLogDelivery
 *     S3Config: { // S3Config
 *       BucketName: "STRING_VALUE",
 *       BucketPrefix: "STRING_VALUE",
 *       LogDeliveryStatus: "STRING_VALUE",
 *     },
 *   },
 *   TrafficPercentageToMonitor: Number("int"),
 *   HealthEventsConfig: { // HealthEventsConfig
 *     AvailabilityScoreThreshold: Number("double"),
 *     PerformanceScoreThreshold: Number("double"),
 *     AvailabilityLocalHealthEventsConfig: { // LocalHealthEventsConfig
 *       Status: "STRING_VALUE",
 *       HealthScoreThreshold: Number("double"),
 *       MinTrafficImpact: Number("double"),
 *     },
 *     PerformanceLocalHealthEventsConfig: {
 *       Status: "STRING_VALUE",
 *       HealthScoreThreshold: Number("double"),
 *       MinTrafficImpact: Number("double"),
 *     },
 *   },
 * };
 * const command = new UpdateMonitorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMonitorOutput
 * //   MonitorArn: "STRING_VALUE", // required
 * //   Status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateMonitorCommandInput - {@link UpdateMonitorCommandInput}
 * @returns {@link UpdateMonitorCommandOutput}
 * @see {@link UpdateMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitorCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a service quota.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Invalid request.</p>
 *
 * @throws {@link InternetMonitorServiceException}
 * <p>Base exception class for all service exceptions from InternetMonitor service.</p>
 *
 */
export class UpdateMonitorCommand extends $Command<
  UpdateMonitorCommandInput,
  UpdateMonitorCommandOutput,
  InternetMonitorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: UpdateMonitorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InternetMonitorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMonitorCommandInput, UpdateMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateMonitorCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InternetMonitorClient";
    const commandName = "UpdateMonitorCommand";
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
  private serialize(input: UpdateMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMonitorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMonitorCommandOutput> {
    return de_UpdateMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
