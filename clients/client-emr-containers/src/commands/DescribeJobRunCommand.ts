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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import {
  DescribeJobRunRequest,
  DescribeJobRunResponse,
  DescribeJobRunResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeJobRunCommand, se_DescribeJobRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobRunCommand}.
 */
export interface DescribeJobRunCommandInput extends DescribeJobRunRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobRunCommand}.
 */
export interface DescribeJobRunCommandOutput extends DescribeJobRunResponse, __MetadataBearer {}

/**
 * @public
 * <p>Displays detailed information about a job run. A job run is a unit of work, such as a
 *          Spark jar, PySpark script, or SparkSQL query, that you submit to Amazon EMR on EKS.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeJobRunCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeJobRunCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // DescribeJobRunRequest
 *   id: "STRING_VALUE", // required
 *   virtualClusterId: "STRING_VALUE", // required
 * };
 * const command = new DescribeJobRunCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobRunResponse
 * //   jobRun: { // JobRun
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     virtualClusterId: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     state: "PENDING" || "SUBMITTED" || "RUNNING" || "FAILED" || "CANCELLED" || "CANCEL_PENDING" || "COMPLETED",
 * //     clientToken: "STRING_VALUE",
 * //     executionRoleArn: "STRING_VALUE",
 * //     releaseLabel: "STRING_VALUE",
 * //     configurationOverrides: { // ConfigurationOverrides
 * //       applicationConfiguration: [ // ConfigurationList
 * //         { // Configuration
 * //           classification: "STRING_VALUE", // required
 * //           properties: { // SensitivePropertiesMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           configurations: [
 * //             {
 * //               classification: "STRING_VALUE", // required
 * //               properties: {
 * //                 "<keys>": "STRING_VALUE",
 * //               },
 * //               configurations: "<ConfigurationList>",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       monitoringConfiguration: { // MonitoringConfiguration
 * //         persistentAppUI: "ENABLED" || "DISABLED",
 * //         cloudWatchMonitoringConfiguration: { // CloudWatchMonitoringConfiguration
 * //           logGroupName: "STRING_VALUE", // required
 * //           logStreamNamePrefix: "STRING_VALUE",
 * //         },
 * //         s3MonitoringConfiguration: { // S3MonitoringConfiguration
 * //           logUri: "STRING_VALUE", // required
 * //         },
 * //         containerLogRotationConfiguration: { // ContainerLogRotationConfiguration
 * //           rotationSize: "STRING_VALUE", // required
 * //           maxFilesToKeep: Number("int"), // required
 * //         },
 * //       },
 * //     },
 * //     jobDriver: { // JobDriver
 * //       sparkSubmitJobDriver: { // SparkSubmitJobDriver
 * //         entryPoint: "STRING_VALUE", // required
 * //         entryPointArguments: [ // EntryPointArguments
 * //           "STRING_VALUE",
 * //         ],
 * //         sparkSubmitParameters: "STRING_VALUE",
 * //       },
 * //       sparkSqlJobDriver: { // SparkSqlJobDriver
 * //         entryPoint: "STRING_VALUE",
 * //         sparkSqlParameters: "STRING_VALUE",
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //     finishedAt: new Date("TIMESTAMP"),
 * //     stateDetails: "STRING_VALUE",
 * //     failureReason: "INTERNAL_ERROR" || "USER_ERROR" || "VALIDATION_ERROR" || "CLUSTER_UNAVAILABLE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     retryPolicyConfiguration: { // RetryPolicyConfiguration
 * //       maxAttempts: Number("int"), // required
 * //     },
 * //     retryPolicyExecution: { // RetryPolicyExecution
 * //       currentAttemptCount: Number("int"), // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeJobRunCommandInput - {@link DescribeJobRunCommandInput}
 * @returns {@link DescribeJobRunCommandOutput}
 * @see {@link DescribeJobRunCommandInput} for command's `input` shape.
 * @see {@link DescribeJobRunCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 */
export class DescribeJobRunCommand extends $Command<
  DescribeJobRunCommandInput,
  DescribeJobRunCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: DescribeJobRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeJobRunCommandInput, DescribeJobRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeJobRunCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "DescribeJobRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeJobRunResponseFilterSensitiveLog,
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
  private serialize(input: DescribeJobRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeJobRunCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeJobRunCommandOutput> {
    return de_DescribeJobRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
