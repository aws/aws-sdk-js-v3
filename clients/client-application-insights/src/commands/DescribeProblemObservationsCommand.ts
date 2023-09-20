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

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { DescribeProblemObservationsRequest, DescribeProblemObservationsResponse } from "../models/models_0";
import { de_DescribeProblemObservationsCommand, se_DescribeProblemObservationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProblemObservationsCommand}.
 */
export interface DescribeProblemObservationsCommandInput extends DescribeProblemObservationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProblemObservationsCommand}.
 */
export interface DescribeProblemObservationsCommandOutput
  extends DescribeProblemObservationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the anomalies or errors associated with the problem.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeProblemObservationsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeProblemObservationsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // DescribeProblemObservationsRequest
 *   ProblemId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DescribeProblemObservationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProblemObservationsResponse
 * //   RelatedObservations: { // RelatedObservations
 * //     ObservationList: [ // ObservationList
 * //       { // Observation
 * //         Id: "STRING_VALUE",
 * //         StartTime: new Date("TIMESTAMP"),
 * //         EndTime: new Date("TIMESTAMP"),
 * //         SourceType: "STRING_VALUE",
 * //         SourceARN: "STRING_VALUE",
 * //         LogGroup: "STRING_VALUE",
 * //         LineTime: new Date("TIMESTAMP"),
 * //         LogText: "STRING_VALUE",
 * //         LogFilter: "ERROR" || "WARN" || "INFO",
 * //         MetricNamespace: "STRING_VALUE",
 * //         MetricName: "STRING_VALUE",
 * //         Unit: "STRING_VALUE",
 * //         Value: Number("double"),
 * //         CloudWatchEventId: "STRING_VALUE",
 * //         CloudWatchEventSource: "EC2" || "CODE_DEPLOY" || "HEALTH" || "RDS",
 * //         CloudWatchEventDetailType: "STRING_VALUE",
 * //         HealthEventArn: "STRING_VALUE",
 * //         HealthService: "STRING_VALUE",
 * //         HealthEventTypeCode: "STRING_VALUE",
 * //         HealthEventTypeCategory: "STRING_VALUE",
 * //         HealthEventDescription: "STRING_VALUE",
 * //         CodeDeployDeploymentId: "STRING_VALUE",
 * //         CodeDeployDeploymentGroup: "STRING_VALUE",
 * //         CodeDeployState: "STRING_VALUE",
 * //         CodeDeployApplication: "STRING_VALUE",
 * //         CodeDeployInstanceGroupId: "STRING_VALUE",
 * //         Ec2State: "STRING_VALUE",
 * //         RdsEventCategories: "STRING_VALUE",
 * //         RdsEventMessage: "STRING_VALUE",
 * //         S3EventName: "STRING_VALUE",
 * //         StatesExecutionArn: "STRING_VALUE",
 * //         StatesArn: "STRING_VALUE",
 * //         StatesStatus: "STRING_VALUE",
 * //         StatesInput: "STRING_VALUE",
 * //         EbsEvent: "STRING_VALUE",
 * //         EbsResult: "STRING_VALUE",
 * //         EbsCause: "STRING_VALUE",
 * //         EbsRequestId: "STRING_VALUE",
 * //         XRayFaultPercent: Number("int"),
 * //         XRayThrottlePercent: Number("int"),
 * //         XRayErrorPercent: Number("int"),
 * //         XRayRequestCount: Number("int"),
 * //         XRayRequestAverageLatency: Number("long"),
 * //         XRayNodeName: "STRING_VALUE",
 * //         XRayNodeType: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeProblemObservationsCommandInput - {@link DescribeProblemObservationsCommandInput}
 * @returns {@link DescribeProblemObservationsCommandOutput}
 * @see {@link DescribeProblemObservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeProblemObservationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 */
export class DescribeProblemObservationsCommand extends $Command<
  DescribeProblemObservationsCommandInput,
  DescribeProblemObservationsCommandOutput,
  ApplicationInsightsClientResolvedConfig
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
  constructor(readonly input: DescribeProblemObservationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProblemObservationsCommandInput, DescribeProblemObservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProblemObservationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "DescribeProblemObservationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "EC2WindowsBarleyService",
        operation: "DescribeProblemObservations",
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
  private serialize(input: DescribeProblemObservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProblemObservationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeProblemObservationsCommandOutput> {
    return de_DescribeProblemObservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
