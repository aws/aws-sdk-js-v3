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
import { GetCoverageStatisticsRequest, GetCoverageStatisticsResponse } from "../models/models_0";
import { de_GetCoverageStatisticsCommand, se_GetCoverageStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCoverageStatisticsCommand}.
 */
export interface GetCoverageStatisticsCommandInput extends GetCoverageStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link GetCoverageStatisticsCommand}.
 */
export interface GetCoverageStatisticsCommandOutput extends GetCoverageStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves aggregated statistics for your account. If you are a GuardDuty administrator, you
 *       can retrieve the statistics for all the resources associated with the active member accounts
 *       in your organization who have enabled EKS Runtime Monitoring and have the GuardDuty agent running
 *       on their EKS nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetCoverageStatisticsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetCoverageStatisticsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetCoverageStatisticsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FilterCriteria: { // CoverageFilterCriteria
 *     FilterCriterion: [ // CoverageFilterCriterionList
 *       { // CoverageFilterCriterion
 *         CriterionKey: "ACCOUNT_ID" || "CLUSTER_NAME" || "RESOURCE_TYPE" || "COVERAGE_STATUS" || "ADDON_VERSION" || "MANAGEMENT_TYPE" || "EKS_CLUSTER_NAME",
 *         FilterCondition: { // CoverageFilterCondition
 *           Equals: [ // Equals
 *             "STRING_VALUE",
 *           ],
 *           NotEquals: [ // NotEquals
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   StatisticsType: [ // CoverageStatisticsTypeList // required
 *     "COUNT_BY_RESOURCE_TYPE" || "COUNT_BY_COVERAGE_STATUS",
 *   ],
 * };
 * const command = new GetCoverageStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // GetCoverageStatisticsResponse
 * //   CoverageStatistics: { // CoverageStatistics
 * //     CountByResourceType: { // CountByResourceType
 * //       "<keys>": Number("long"),
 * //     },
 * //     CountByCoverageStatus: { // CountByCoverageStatus
 * //       "<keys>": Number("long"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCoverageStatisticsCommandInput - {@link GetCoverageStatisticsCommandInput}
 * @returns {@link GetCoverageStatisticsCommandOutput}
 * @see {@link GetCoverageStatisticsCommandInput} for command's `input` shape.
 * @see {@link GetCoverageStatisticsCommandOutput} for command's `response` shape.
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
export class GetCoverageStatisticsCommand extends $Command<
  GetCoverageStatisticsCommandInput,
  GetCoverageStatisticsCommandOutput,
  GuardDutyClientResolvedConfig
> {
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
  constructor(readonly input: GetCoverageStatisticsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCoverageStatisticsCommandInput, GetCoverageStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCoverageStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "GetCoverageStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GuardDutyAPIService",
        operation: "GetCoverageStatistics",
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
  private serialize(input: GetCoverageStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCoverageStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCoverageStatisticsCommandOutput> {
    return de_GetCoverageStatisticsCommand(output, context);
  }
}
