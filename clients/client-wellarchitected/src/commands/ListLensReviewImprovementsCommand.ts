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

import { ListLensReviewImprovementsInput, ListLensReviewImprovementsOutput } from "../models/models_0";
import { de_ListLensReviewImprovementsCommand, se_ListLensReviewImprovementsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLensReviewImprovementsCommand}.
 */
export interface ListLensReviewImprovementsCommandInput extends ListLensReviewImprovementsInput {}
/**
 * @public
 *
 * The output of {@link ListLensReviewImprovementsCommand}.
 */
export interface ListLensReviewImprovementsCommandOutput extends ListLensReviewImprovementsOutput, __MetadataBearer {}

/**
 * @public
 * <p>List lens review improvements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensReviewImprovementsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensReviewImprovementsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListLensReviewImprovementsInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   PillarId: "STRING_VALUE",
 *   MilestoneNumber: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QuestionPriority: "PRIORITIZED" || "NONE",
 * };
 * const command = new ListLensReviewImprovementsCommand(input);
 * const response = await client.send(command);
 * // { // ListLensReviewImprovementsOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
 * //   LensAlias: "STRING_VALUE",
 * //   LensArn: "STRING_VALUE",
 * //   ImprovementSummaries: [ // ImprovementSummaries
 * //     { // ImprovementSummary
 * //       QuestionId: "STRING_VALUE",
 * //       PillarId: "STRING_VALUE",
 * //       QuestionTitle: "STRING_VALUE",
 * //       Risk: "UNANSWERED" || "HIGH" || "MEDIUM" || "NONE" || "NOT_APPLICABLE",
 * //       ImprovementPlanUrl: "STRING_VALUE",
 * //       ImprovementPlans: [ // ChoiceImprovementPlans
 * //         { // ChoiceImprovementPlan
 * //           ChoiceId: "STRING_VALUE",
 * //           DisplayText: "STRING_VALUE",
 * //           ImprovementPlanUrl: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLensReviewImprovementsCommandInput - {@link ListLensReviewImprovementsCommandInput}
 * @returns {@link ListLensReviewImprovementsCommandOutput}
 * @see {@link ListLensReviewImprovementsCommandInput} for command's `input` shape.
 * @see {@link ListLensReviewImprovementsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
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
export class ListLensReviewImprovementsCommand extends $Command<
  ListLensReviewImprovementsCommandInput,
  ListLensReviewImprovementsCommandOutput,
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
  constructor(readonly input: ListLensReviewImprovementsCommandInput) {
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
  ): Handler<ListLensReviewImprovementsCommandInput, ListLensReviewImprovementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLensReviewImprovementsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListLensReviewImprovementsCommand";
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
  private serialize(input: ListLensReviewImprovementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLensReviewImprovementsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLensReviewImprovementsCommandOutput> {
    return de_ListLensReviewImprovementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
