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
  GetOrganizationRecommendationRequest,
  GetOrganizationRecommendationResponse,
  GetOrganizationRecommendationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetOrganizationRecommendationCommand,
  se_GetOrganizationRecommendationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TrustedAdvisorClientResolvedConfig } from "../TrustedAdvisorClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetOrganizationRecommendationCommand}.
 */
export interface GetOrganizationRecommendationCommandInput extends GetOrganizationRecommendationRequest {}
/**
 * @public
 *
 * The output of {@link GetOrganizationRecommendationCommand}.
 */
export interface GetOrganizationRecommendationCommandOutput
  extends GetOrganizationRecommendationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Get a specific recommendation within an AWS Organizations organization. This API supports only prioritized
 *             recommendations.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TrustedAdvisorClient, GetOrganizationRecommendationCommand } from "@aws-sdk/client-trustedadvisor"; // ES Modules import
 * // const { TrustedAdvisorClient, GetOrganizationRecommendationCommand } = require("@aws-sdk/client-trustedadvisor"); // CommonJS import
 * const client = new TrustedAdvisorClient(config);
 * const input = { // GetOrganizationRecommendationRequest
 *   organizationRecommendationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetOrganizationRecommendationCommand(input);
 * const response = await client.send(command);
 * // { // GetOrganizationRecommendationResponse
 * //   organizationRecommendation: { // OrganizationRecommendation
 * //     id: "STRING_VALUE", // required
 * //     type: "standard" || "priority", // required
 * //     checkArn: "STRING_VALUE",
 * //     status: "ok" || "warning" || "error", // required
 * //     lifecycleStage: "in_progress" || "pending_response" || "dismissed" || "resolved",
 * //     pillars: [ // RecommendationPillarList // required
 * //       "cost_optimizing" || "performance" || "security" || "service_limits" || "fault_tolerance" || "operational_excellence",
 * //     ],
 * //     source: "aws_config" || "compute_optimizer" || "cost_explorer" || "lse" || "manual" || "pse" || "rds" || "resilience" || "resilience_hub" || "security_hub" || "stir" || "ta_check" || "well_architected", // required
 * //     awsServices: [ // RecommendationAwsServiceList
 * //       "STRING_VALUE",
 * //     ],
 * //     name: "STRING_VALUE", // required
 * //     resourcesAggregates: { // RecommendationResourcesAggregates
 * //       okCount: Number("long"), // required
 * //       warningCount: Number("long"), // required
 * //       errorCount: Number("long"), // required
 * //     },
 * //     pillarSpecificAggregates: { // RecommendationPillarSpecificAggregates
 * //       costOptimizing: { // RecommendationCostOptimizingAggregates
 * //         estimatedMonthlySavings: Number("double"), // required
 * //         estimatedPercentMonthlySavings: Number("double"), // required
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //     arn: "STRING_VALUE", // required
 * //     description: "STRING_VALUE", // required
 * //     createdBy: "STRING_VALUE",
 * //     updatedOnBehalfOf: "STRING_VALUE",
 * //     updatedOnBehalfOfJobTitle: "STRING_VALUE",
 * //     updateReason: "STRING_VALUE",
 * //     updateReasonCode: "non_critical_account" || "temporary_account" || "valid_business_case" || "other_methods_available" || "low_priority" || "not_applicable" || "other",
 * //     resolvedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOrganizationRecommendationCommandInput - {@link GetOrganizationRecommendationCommandInput}
 * @returns {@link GetOrganizationRecommendationCommandOutput}
 * @see {@link GetOrganizationRecommendationCommandInput} for command's `input` shape.
 * @see {@link GetOrganizationRecommendationCommandOutput} for command's `response` shape.
 * @see {@link TrustedAdvisorClientResolvedConfig | config} for TrustedAdvisorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Exception that access has been denied due to insufficient access</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Exception to notify that an unexpected internal error occurred during processing of the request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception that the requested resource has not been found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception to notify that requests are being throttled</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Exception that the request failed to satisfy service constraints</p>
 *
 * @throws {@link TrustedAdvisorServiceException}
 * <p>Base exception class for all service exceptions from TrustedAdvisor service.</p>
 *
 */
export class GetOrganizationRecommendationCommand extends $Command<
  GetOrganizationRecommendationCommandInput,
  GetOrganizationRecommendationCommandOutput,
  TrustedAdvisorClientResolvedConfig
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
  constructor(readonly input: GetOrganizationRecommendationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TrustedAdvisorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetOrganizationRecommendationCommandInput, GetOrganizationRecommendationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetOrganizationRecommendationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TrustedAdvisorClient";
    const commandName = "GetOrganizationRecommendationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetOrganizationRecommendationResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "TrustedAdvisor",
        operation: "GetOrganizationRecommendation",
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
  private serialize(input: GetOrganizationRecommendationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetOrganizationRecommendationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetOrganizationRecommendationCommandOutput> {
    return de_GetOrganizationRecommendationCommand(output, context);
  }
}
