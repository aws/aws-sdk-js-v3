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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetUsageStatisticsRequest, GetUsageStatisticsResponse } from "../models/models_0";
import { de_GetUsageStatisticsCommand, se_GetUsageStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUsageStatisticsCommand}.
 */
export interface GetUsageStatisticsCommandInput extends GetUsageStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetUsageStatisticsCommand}.
 */
export interface GetUsageStatisticsCommandOutput extends GetUsageStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists Amazon GuardDuty usage statistics over the last 30 days for the specified detector
 *       ID. For newly enabled detectors or data sources, the cost returned will include only the usage
 *       so far under 30 days. This may differ from the cost metrics in the console, which project
 *       usage over 30 days to provide a monthly cost estimate. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/monitoring_costs.html#usage-calculations">Understanding How Usage Costs are Calculated</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetUsageStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetUsageStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetUsageStatisticsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   UsageStatisticType: "SUM_BY_ACCOUNT" || "SUM_BY_DATA_SOURCE" || "SUM_BY_RESOURCE" || "TOP_RESOURCES" || "SUM_BY_FEATURES", // required
 *   UsageCriteria: { // UsageCriteria
 *     AccountIds: [ // AccountIds
 *       "STRING_VALUE",
 *     ],
 *     DataSources: [ // DataSourceList
 *       "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_LOGS" || "KUBERNETES_AUDIT_LOGS" || "EC2_MALWARE_SCAN",
 *     ],
 *     Resources: [ // ResourceList
 *       "STRING_VALUE",
 *     ],
 *     Features: [ // UsageFeatureList
 *       "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "LAMBDA_NETWORK_LOGS" || "EKS_RUNTIME_MONITORING",
 *     ],
 *   },
 *   Unit: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetUsageStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetUsageStatisticsResponse
 * //   UsageStatistics: { // UsageStatistics
 * //     SumByAccount: [ // UsageAccountResultList
 * //       { // UsageAccountResult
 * //         AccountId: "STRING_VALUE",
 * //         Total: { // Total
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     SumByDataSource: [ // UsageDataSourceResultList
 * //       { // UsageDataSourceResult
 * //         DataSource: "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_LOGS" || "KUBERNETES_AUDIT_LOGS" || "EC2_MALWARE_SCAN",
 * //         Total: {
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     SumByResource: [ // UsageResourceResultList
 * //       { // UsageResourceResult
 * //         Resource: "STRING_VALUE",
 * //         Total: {
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     TopResources: [
 * //       {
 * //         Resource: "STRING_VALUE",
 * //         Total: {
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     SumByFeature: [ // UsageFeatureResultList
 * //       { // UsageFeatureResult
 * //         Feature: "FLOW_LOGS" || "CLOUD_TRAIL" || "DNS_LOGS" || "S3_DATA_EVENTS" || "EKS_AUDIT_LOGS" || "EBS_MALWARE_PROTECTION" || "RDS_LOGIN_EVENTS" || "LAMBDA_NETWORK_LOGS" || "EKS_RUNTIME_MONITORING",
 * //         Total: {
 * //           Amount: "STRING_VALUE",
 * //           Unit: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUsageStatisticsCommandInput - {@link GetUsageStatisticsCommandInput}
 * @returns {@link GetUsageStatisticsCommandOutput}
 * @see {@link GetUsageStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetUsageStatisticsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 */
export class GetUsageStatisticsCommand extends $Command<
  GetUsageStatisticsCommandInput,
  GetUsageStatisticsCommandOutput,
  GuardDutyClientResolvedConfig
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
  constructor(readonly input: GetUsageStatisticsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUsageStatisticsCommandInput, GetUsageStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUsageStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetUsageStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "GetUsageStatistics",
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
  private serialize(input: GetUsageStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUsageStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUsageStatisticsCommandOutput> {
    return de_GetUsageStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
