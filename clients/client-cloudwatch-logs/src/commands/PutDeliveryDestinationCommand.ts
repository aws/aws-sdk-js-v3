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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutDeliveryDestinationRequest, PutDeliveryDestinationResponse } from "../models/models_0";
import { de_PutDeliveryDestinationCommand, se_PutDeliveryDestinationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutDeliveryDestinationCommand}.
 */
export interface PutDeliveryDestinationCommandInput extends PutDeliveryDestinationRequest {}
/**
 * @public
 *
 * The output of {@link PutDeliveryDestinationCommand}.
 */
export interface PutDeliveryDestinationCommandOutput extends PutDeliveryDestinationResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a logical <i>delivery destination</i>. A delivery destination is an Amazon Web Services resource that represents an
 *        Amazon Web Services service that logs can be sent to. CloudWatch Logs, Amazon S3, and
 *        Kinesis Data Firehose are supported as logs delivery destinations.</p>
 *          <p>To configure logs delivery between a supported Amazon Web Services service and a destination, you must do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Create a delivery source, which is a logical object that represents the resource that is actually
 *          sending the logs. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliverySource.html">PutDeliverySource</a>.</p>
 *             </li>
 *             <li>
 *                <p>Use <code>PutDeliveryDestination</code> to create a <i>delivery destination</i>, which is a logical object that represents the actual
 *          delivery destination.  </p>
 *             </li>
 *             <li>
 *                <p>If you are delivering logs cross-account, you must use
 *          <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDeliveryDestinationolicy.html">PutDeliveryDestinationPolicy</a>
 *          in the destination account to assign an IAM policy to the
 *          destination. This policy allows delivery to that destination.
 *        </p>
 *             </li>
 *             <li>
 *                <p>Use <code>CreateDelivery</code> to create a <i>delivery</i> by pairing exactly
 *          one delivery source and one delivery destination. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_CreateDelivery.html">CreateDelivery</a>.
 *        </p>
 *             </li>
 *          </ul>
 *          <p>You can configure a single delivery source to send logs to multiple destinations by creating multiple deliveries. You
 *        can also create multiple deliveries to configure multiple delivery sources to send logs to the same delivery destination.</p>
 *          <p>Only some Amazon Web Services services support being configured as a delivery source. These services are listed
 *        as <b>Supported [V2 Permissions]</b> in the table at
 *        <a href="https://docs.aws.amazon.com/     AmazonCloudWatch/latest/logs/AWS-logs-and-resource-policy.html#AWS-vended-logs-permissions">Enabling
 *          logging from Amazon Web Services services.</a>
 *          </p>
 *          <p>If you use this operation to update an existing delivery destination, all the current delivery destination parameters are overwritten
 *        with the new parameter values that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutDeliveryDestinationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutDeliveryDestinationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutDeliveryDestinationRequest
 *   name: "STRING_VALUE", // required
 *   outputFormat: "json" || "plain" || "w3c" || "raw" || "parquet",
 *   deliveryDestinationConfiguration: { // DeliveryDestinationConfiguration
 *     destinationResourceArn: "STRING_VALUE", // required
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutDeliveryDestinationCommand(input);
 * const response = await client.send(command);
 * // { // PutDeliveryDestinationResponse
 * //   deliveryDestination: { // DeliveryDestination
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     deliveryDestinationType: "S3" || "CWL" || "FH",
 * //     outputFormat: "json" || "plain" || "w3c" || "raw" || "parquet",
 * //     deliveryDestinationConfiguration: { // DeliveryDestinationConfiguration
 * //       destinationResourceArn: "STRING_VALUE", // required
 * //     },
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDeliveryDestinationCommandInput - {@link PutDeliveryDestinationCommandInput}
 * @returns {@link PutDeliveryDestinationCommandOutput}
 * @see {@link PutDeliveryDestinationCommandInput} for command's `input` shape.
 * @see {@link PutDeliveryDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This request exceeds a service quota.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 */
export class PutDeliveryDestinationCommand extends $Command<
  PutDeliveryDestinationCommandInput,
  PutDeliveryDestinationCommandOutput,
  CloudWatchLogsClientResolvedConfig
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
  constructor(readonly input: PutDeliveryDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutDeliveryDestinationCommandInput, PutDeliveryDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutDeliveryDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutDeliveryDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "PutDeliveryDestination",
      },
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
  private serialize(input: PutDeliveryDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutDeliveryDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutDeliveryDestinationCommandOutput> {
    return de_PutDeliveryDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
