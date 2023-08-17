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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateMonitoringRequest, UpdateMonitoringResponse } from "../models/models_0";
import { de_UpdateMonitoringCommand, se_UpdateMonitoringCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMonitoringCommand}.
 */
export interface UpdateMonitoringCommandInput extends UpdateMonitoringRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMonitoringCommand}.
 */
export interface UpdateMonitoringCommandOutput extends UpdateMonitoringResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the monitoring settings for the cluster. You can use this operation to specify which Apache Kafka metrics you want Amazon MSK to send to Amazon CloudWatch. You can also specify settings for open monitoring with Prometheus.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateMonitoringCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateMonitoringCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // UpdateMonitoringRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 *   OpenMonitoring: { // OpenMonitoringInfo
 *     Prometheus: { // PrometheusInfo
 *       JmxExporter: { // JmxExporterInfo
 *         EnabledInBroker: true || false, // required
 *       },
 *       NodeExporter: { // NodeExporterInfo
 *         EnabledInBroker: true || false, // required
 *       },
 *     },
 *   },
 *   LoggingInfo: { // LoggingInfo
 *     BrokerLogs: { // BrokerLogs
 *       CloudWatchLogs: { // CloudWatchLogs
 *         Enabled: true || false, // required
 *         LogGroup: "STRING_VALUE",
 *       },
 *       Firehose: { // Firehose
 *         DeliveryStream: "STRING_VALUE",
 *         Enabled: true || false, // required
 *       },
 *       S3: { // S3
 *         Bucket: "STRING_VALUE",
 *         Enabled: true || false, // required
 *         Prefix: "STRING_VALUE",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateMonitoringCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMonitoringResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateMonitoringCommandInput - {@link UpdateMonitoringCommandInput}
 * @returns {@link UpdateMonitoringCommandOutput}
 * @see {@link UpdateMonitoringCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitoringCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class UpdateMonitoringCommand extends $Command<
  UpdateMonitoringCommandInput,
  UpdateMonitoringCommandOutput,
  KafkaClientResolvedConfig
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
  constructor(readonly input: UpdateMonitoringCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMonitoringCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateMonitoringCommand";
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
  private serialize(input: UpdateMonitoringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMonitoringCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMonitoringCommandOutput> {
    return de_UpdateMonitoringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
