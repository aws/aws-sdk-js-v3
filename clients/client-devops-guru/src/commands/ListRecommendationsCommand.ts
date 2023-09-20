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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { ListRecommendationsRequest, ListRecommendationsResponse } from "../models/models_0";
import { de_ListRecommendationsCommand, se_ListRecommendationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandInput extends ListRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationsCommand}.
 */
export interface ListRecommendationsCommandOutput extends ListRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of a specified insight's recommendations. Each recommendation includes
 * 			a list of related metrics and a list of related events. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListRecommendationsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListRecommendationsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // ListRecommendationsRequest
 *   InsightId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   Locale: "DE_DE" || "EN_US" || "EN_GB" || "ES_ES" || "FR_FR" || "IT_IT" || "JA_JP" || "KO_KR" || "PT_BR" || "ZH_CN" || "ZH_TW",
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResponse
 * //   Recommendations: [ // Recommendations
 * //     { // Recommendation
 * //       Description: "STRING_VALUE",
 * //       Link: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //       RelatedEvents: [ // RecommendationRelatedEvents
 * //         { // RecommendationRelatedEvent
 * //           Name: "STRING_VALUE",
 * //           Resources: [ // RecommendationRelatedEventResources
 * //             { // RecommendationRelatedEventResource
 * //               Name: "STRING_VALUE",
 * //               Type: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       RelatedAnomalies: [ // RecommendationRelatedAnomalies
 * //         { // RecommendationRelatedAnomaly
 * //           Resources: [ // RecommendationRelatedAnomalyResources
 * //             { // RecommendationRelatedAnomalyResource
 * //               Name: "STRING_VALUE",
 * //               Type: "STRING_VALUE",
 * //             },
 * //           ],
 * //           SourceDetails: [ // RelatedAnomalySourceDetails
 * //             { // RecommendationRelatedAnomalySourceDetail
 * //               CloudWatchMetrics: [ // RecommendationRelatedCloudWatchMetricsSourceDetails
 * //                 { // RecommendationRelatedCloudWatchMetricsSourceDetail
 * //                   MetricName: "STRING_VALUE",
 * //                   Namespace: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           AnomalyId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Category: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationsCommandInput - {@link ListRecommendationsCommandInput}
 * @returns {@link ListRecommendationsCommandOutput}
 * @see {@link ListRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 */
export class ListRecommendationsCommand extends $Command<
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
  DevOpsGuruClientResolvedConfig
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
  constructor(readonly input: ListRecommendationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecommendationsCommandInput, ListRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CapstoneControlPlaneService",
        operation: "ListRecommendations",
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
  private serialize(input: ListRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListRecommendationsCommandOutput> {
    return de_ListRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
