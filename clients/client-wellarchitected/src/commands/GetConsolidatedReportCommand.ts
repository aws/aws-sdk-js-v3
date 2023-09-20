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

import { GetConsolidatedReportInput, GetConsolidatedReportOutput } from "../models/models_0";
import { de_GetConsolidatedReportCommand, se_GetConsolidatedReportCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConsolidatedReportCommand}.
 */
export interface GetConsolidatedReportCommandInput extends GetConsolidatedReportInput {}
/**
 * @public
 *
 * The output of {@link GetConsolidatedReportCommand}.
 */
export interface GetConsolidatedReportCommandOutput extends GetConsolidatedReportOutput, __MetadataBearer {}

/**
 * @public
 * <p>Get a consolidated report of your workloads.</p>
 *          <p>You can optionally choose to include workloads that have been shared with you.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetConsolidatedReportCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetConsolidatedReportCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // GetConsolidatedReportInput
 *   Format: "PDF" || "JSON", // required
 *   IncludeSharedResources: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetConsolidatedReportCommand(input);
 * const response = await client.send(command);
 * // { // GetConsolidatedReportOutput
 * //   Metrics: [ // ConsolidatedReportMetrics
 * //     { // ConsolidatedReportMetric
 * //       MetricType: "WORKLOAD",
 * //       RiskCounts: { // RiskCounts
 * //         "<keys>": Number("int"),
 * //       },
 * //       WorkloadId: "STRING_VALUE",
 * //       WorkloadName: "STRING_VALUE",
 * //       WorkloadArn: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       Lenses: [ // LensMetrics
 * //         { // LensMetric
 * //           LensArn: "STRING_VALUE",
 * //           Pillars: [ // PillarMetrics
 * //             { // PillarMetric
 * //               PillarId: "STRING_VALUE",
 * //               RiskCounts: {
 * //                 "<keys>": Number("int"),
 * //               },
 * //               Questions: [ // QuestionMetrics
 * //                 { // QuestionMetric
 * //                   QuestionId: "STRING_VALUE",
 * //                   Risk: "UNANSWERED" || "HIGH" || "MEDIUM" || "NONE" || "NOT_APPLICABLE",
 * //                   BestPractices: [ // BestPractices
 * //                     { // BestPractice
 * //                       ChoiceId: "STRING_VALUE",
 * //                       ChoiceTitle: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //           RiskCounts: "<RiskCounts>",
 * //         },
 * //       ],
 * //       LensesAppliedCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   Base64String: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConsolidatedReportCommandInput - {@link GetConsolidatedReportCommandInput}
 * @returns {@link GetConsolidatedReportCommandOutput}
 * @see {@link GetConsolidatedReportCommandInput} for command's `input` shape.
 * @see {@link GetConsolidatedReportCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class GetConsolidatedReportCommand extends $Command<
  GetConsolidatedReportCommandInput,
  GetConsolidatedReportCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: GetConsolidatedReportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConsolidatedReportCommandInput, GetConsolidatedReportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConsolidatedReportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "GetConsolidatedReportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "GetConsolidatedReport",
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
  private serialize(input: GetConsolidatedReportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConsolidatedReportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConsolidatedReportCommandOutput> {
    return de_GetConsolidatedReportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
