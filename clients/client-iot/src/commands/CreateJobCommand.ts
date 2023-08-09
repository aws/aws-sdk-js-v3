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
import { CreateJobRequest, CreateJobResponse } from "../models/models_0";
import { de_CreateJobCommand, se_CreateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateJobCommand}.
 */
export interface CreateJobCommandInput extends CreateJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobCommand}.
 */
export interface CreateJobCommandOutput extends CreateJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a job.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJob</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateJobRequest
 *   jobId: "STRING_VALUE", // required
 *   targets: [ // JobTargets // required
 *     "STRING_VALUE",
 *   ],
 *   documentSource: "STRING_VALUE",
 *   document: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   presignedUrlConfig: { // PresignedUrlConfig
 *     roleArn: "STRING_VALUE",
 *     expiresInSec: Number("long"),
 *   },
 *   targetSelection: "CONTINUOUS" || "SNAPSHOT",
 *   jobExecutionsRolloutConfig: { // JobExecutionsRolloutConfig
 *     maximumPerMinute: Number("int"),
 *     exponentialRate: { // ExponentialRolloutRate
 *       baseRatePerMinute: Number("int"), // required
 *       incrementFactor: Number("double"), // required
 *       rateIncreaseCriteria: { // RateIncreaseCriteria
 *         numberOfNotifiedThings: Number("int"),
 *         numberOfSucceededThings: Number("int"),
 *       },
 *     },
 *   },
 *   abortConfig: { // AbortConfig
 *     criteriaList: [ // AbortCriteriaList // required
 *       { // AbortCriteria
 *         failureType: "FAILED" || "REJECTED" || "TIMED_OUT" || "ALL", // required
 *         action: "CANCEL", // required
 *         thresholdPercentage: Number("double"), // required
 *         minNumberOfExecutedThings: Number("int"), // required
 *       },
 *     ],
 *   },
 *   timeoutConfig: { // TimeoutConfig
 *     inProgressTimeoutInMinutes: Number("long"),
 *   },
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   namespaceId: "STRING_VALUE",
 *   jobTemplateArn: "STRING_VALUE",
 *   jobExecutionsRetryConfig: { // JobExecutionsRetryConfig
 *     criteriaList: [ // RetryCriteriaList // required
 *       { // RetryCriteria
 *         failureType: "FAILED" || "TIMED_OUT" || "ALL", // required
 *         numberOfRetries: Number("int"), // required
 *       },
 *     ],
 *   },
 *   documentParameters: { // ParameterMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   schedulingConfig: { // SchedulingConfig
 *     startTime: "STRING_VALUE",
 *     endTime: "STRING_VALUE",
 *     endBehavior: "STOP_ROLLOUT" || "CANCEL" || "FORCE_CANCEL",
 *     maintenanceWindows: [ // MaintenanceWindows
 *       { // MaintenanceWindow
 *         startTime: "STRING_VALUE", // required
 *         durationInMinutes: Number("int"), // required
 *       },
 *     ],
 *   },
 *   destinationPackageVersions: [ // DestinationPackageVersions
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobResponse
 * //   jobArn: "STRING_VALUE",
 * //   jobId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateJobCommandInput - {@link CreateJobCommandInput}
 * @returns {@link CreateJobCommandOutput}
 * @see {@link CreateJobCommandInput} for command's `input` shape.
 * @see {@link CreateJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
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
export class CreateJobCommand extends $Command<CreateJobCommandInput, CreateJobCommandOutput, IoTClientResolvedConfig> {
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
  constructor(readonly input: CreateJobCommandInput) {
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
  ): Handler<CreateJobCommandInput, CreateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateJobCommand";
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
  private serialize(input: CreateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobCommandOutput> {
    return de_CreateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
