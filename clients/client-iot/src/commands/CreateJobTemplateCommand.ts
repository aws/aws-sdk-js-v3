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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateJobTemplateRequest, CreateJobTemplateResponse } from "../models/models_0";
import { de_CreateJobTemplateCommand, se_CreateJobTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateJobTemplateCommand}.
 */
export interface CreateJobTemplateCommandInput extends CreateJobTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateJobTemplateCommand}.
 */
export interface CreateJobTemplateCommandOutput extends CreateJobTemplateResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a job template.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateJobTemplate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateJobTemplateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateJobTemplateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // CreateJobTemplateRequest
 *   jobTemplateId: "STRING_VALUE", // required
 *   jobArn: "STRING_VALUE",
 *   documentSource: "STRING_VALUE",
 *   document: "STRING_VALUE",
 *   description: "STRING_VALUE", // required
 *   presignedUrlConfig: { // PresignedUrlConfig
 *     roleArn: "STRING_VALUE",
 *     expiresInSec: Number("long"),
 *   },
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
 *   jobExecutionsRetryConfig: { // JobExecutionsRetryConfig
 *     criteriaList: [ // RetryCriteriaList // required
 *       { // RetryCriteria
 *         failureType: "FAILED" || "TIMED_OUT" || "ALL", // required
 *         numberOfRetries: Number("int"), // required
 *       },
 *     ],
 *   },
 *   maintenanceWindows: [ // MaintenanceWindows
 *     { // MaintenanceWindow
 *       startTime: "STRING_VALUE", // required
 *       durationInMinutes: Number("int"), // required
 *     },
 *   ],
 *   destinationPackageVersions: [ // DestinationPackageVersions
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateJobTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateJobTemplateResponse
 * //   jobTemplateArn: "STRING_VALUE",
 * //   jobTemplateId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateJobTemplateCommandInput - {@link CreateJobTemplateCommandInput}
 * @returns {@link CreateJobTemplateCommandOutput}
 * @see {@link CreateJobTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateJobTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A resource with the same name already exists.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 */
export class CreateJobTemplateCommand extends $Command<
  CreateJobTemplateCommandInput,
  CreateJobTemplateCommandOutput,
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
  constructor(readonly input: CreateJobTemplateCommandInput) {
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
  ): Handler<CreateJobTemplateCommandInput, CreateJobTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateJobTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateJobTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIotService",
        operation: "CreateJobTemplate",
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
  private serialize(input: CreateJobTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateJobTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJobTemplateCommandOutput> {
    return de_CreateJobTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
