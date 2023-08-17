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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeJobRequest, DescribeJobResponse } from "../models/models_1";
import { de_DescribeJobCommand, se_DescribeJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandInput extends DescribeJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobCommand}.
 */
export interface DescribeJobCommandOutput extends DescribeJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a job.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeJob</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobResponse
 * //   documentSource: "STRING_VALUE",
 * //   job: { // Job
 * //     jobArn: "STRING_VALUE",
 * //     jobId: "STRING_VALUE",
 * //     targetSelection: "CONTINUOUS" || "SNAPSHOT",
 * //     status: "IN_PROGRESS" || "CANCELED" || "COMPLETED" || "DELETION_IN_PROGRESS" || "SCHEDULED",
 * //     forceCanceled: true || false,
 * //     reasonCode: "STRING_VALUE",
 * //     comment: "STRING_VALUE",
 * //     targets: [ // JobTargets
 * //       "STRING_VALUE",
 * //     ],
 * //     description: "STRING_VALUE",
 * //     presignedUrlConfig: { // PresignedUrlConfig
 * //       roleArn: "STRING_VALUE",
 * //       expiresInSec: Number("long"),
 * //     },
 * //     jobExecutionsRolloutConfig: { // JobExecutionsRolloutConfig
 * //       maximumPerMinute: Number("int"),
 * //       exponentialRate: { // ExponentialRolloutRate
 * //         baseRatePerMinute: Number("int"), // required
 * //         incrementFactor: Number("double"), // required
 * //         rateIncreaseCriteria: { // RateIncreaseCriteria
 * //           numberOfNotifiedThings: Number("int"),
 * //           numberOfSucceededThings: Number("int"),
 * //         },
 * //       },
 * //     },
 * //     abortConfig: { // AbortConfig
 * //       criteriaList: [ // AbortCriteriaList // required
 * //         { // AbortCriteria
 * //           failureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL", // required
 * //           action: "CANCEL", // required
 * //           thresholdPercentage: Number("double"), // required
 * //           minNumberOfExecutedThings: Number("int"), // required
 * //         },
 * //       ],
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     completedAt: new Date("TIMESTAMP"),
 * //     jobProcessDetails: { // JobProcessDetails
 * //       processingTargets: [ // ProcessingTargetNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       numberOfCanceledThings: Number("int"),
 * //       numberOfSucceededThings: Number("int"),
 * //       numberOfFailedThings: Number("int"),
 * //       numberOfRejectedThings: Number("int"),
 * //       numberOfQueuedThings: Number("int"),
 * //       numberOfInProgressThings: Number("int"),
 * //       numberOfRemovedThings: Number("int"),
 * //       numberOfTimedOutThings: Number("int"),
 * //     },
 * //     timeoutConfig: { // TimeoutConfig
 * //       inProgressTimeoutInMinutes: Number("long"),
 * //     },
 * //     namespaceId: "STRING_VALUE",
 * //     jobTemplateArn: "STRING_VALUE",
 * //     jobExecutionsRetryConfig: { // JobExecutionsRetryConfig
 * //       criteriaList: [ // RetryCriteriaList // required
 * //         { // RetryCriteria
 * //           failureType: "FAILED" || "TIMED_OUT" || "ALL", // required
 * //           numberOfRetries: Number("int"), // required
 * //         },
 * //       ],
 * //     },
 * //     documentParameters: { // ParameterMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     isConcurrent: true || false,
 * //     schedulingConfig: { // SchedulingConfig
 * //       startTime: "STRING_VALUE",
 * //       endTime: "STRING_VALUE",
 * //       endBehavior: "STOP_ROLLOUT" || "CANCEL" || "FORCE_CANCEL",
 * //       maintenanceWindows: [ // MaintenanceWindows
 * //         { // MaintenanceWindow
 * //           startTime: "STRING_VALUE", // required
 * //           durationInMinutes: Number("int"), // required
 * //         },
 * //       ],
 * //     },
 * //     scheduledJobRollouts: [ // ScheduledJobRolloutList
 * //       { // ScheduledJobRollout
 * //         startTime: "STRING_VALUE",
 * //       },
 * //     ],
 * //     destinationPackageVersions: [ // DestinationPackageVersions
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobCommandInput - {@link DescribeJobCommandInput}
 * @returns {@link DescribeJobCommandOutput}
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class DescribeJobCommand extends $Command<
  DescribeJobCommandInput,
  DescribeJobCommandOutput,
  IoTClientResolvedConfig
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
  constructor(readonly input: DescribeJobCommandInput) {
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
  ): Handler<DescribeJobCommandInput, DescribeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DescribeJobCommand";
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
  private serialize(input: DescribeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobCommandOutput> {
    return de_DescribeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
