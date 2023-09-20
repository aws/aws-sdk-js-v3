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

import { ListAnswersInput, ListAnswersOutput } from "../models/models_0";
import { de_ListAnswersCommand, se_ListAnswersCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAnswersCommand}.
 */
export interface ListAnswersCommandInput extends ListAnswersInput {}
/**
 * @public
 *
 * The output of {@link ListAnswersCommand}.
 */
export interface ListAnswersCommandOutput extends ListAnswersOutput, __MetadataBearer {}

/**
 * @public
 * <p>List of answers for a particular workload and lens.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAnswersCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAnswersCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListAnswersInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   PillarId: "STRING_VALUE",
 *   MilestoneNumber: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QuestionPriority: "PRIORITIZED" || "NONE",
 * };
 * const command = new ListAnswersCommand(input);
 * const response = await client.send(command);
 * // { // ListAnswersOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
 * //   LensAlias: "STRING_VALUE",
 * //   LensArn: "STRING_VALUE",
 * //   AnswerSummaries: [ // AnswerSummaries
 * //     { // AnswerSummary
 * //       QuestionId: "STRING_VALUE",
 * //       PillarId: "STRING_VALUE",
 * //       QuestionTitle: "STRING_VALUE",
 * //       Choices: [ // Choices
 * //         { // Choice
 * //           ChoiceId: "STRING_VALUE",
 * //           Title: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           HelpfulResource: { // ChoiceContent
 * //             DisplayText: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //           },
 * //           ImprovementPlan: {
 * //             DisplayText: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //           },
 * //           AdditionalResources: [ // AdditionalResourcesList
 * //             { // AdditionalResources
 * //               Type: "HELPFUL_RESOURCE" || "IMPROVEMENT_PLAN",
 * //               Content: [ // Urls
 * //                 {
 * //                   DisplayText: "STRING_VALUE",
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       SelectedChoices: [ // SelectedChoices
 * //         "STRING_VALUE",
 * //       ],
 * //       ChoiceAnswerSummaries: [ // ChoiceAnswerSummaries
 * //         { // ChoiceAnswerSummary
 * //           ChoiceId: "STRING_VALUE",
 * //           Status: "SELECTED" || "NOT_APPLICABLE" || "UNSELECTED",
 * //           Reason: "OUT_OF_SCOPE" || "BUSINESS_PRIORITIES" || "ARCHITECTURE_CONSTRAINTS" || "OTHER" || "NONE",
 * //         },
 * //       ],
 * //       IsApplicable: true || false,
 * //       Risk: "UNANSWERED" || "HIGH" || "MEDIUM" || "NONE" || "NOT_APPLICABLE",
 * //       Reason: "OUT_OF_SCOPE" || "BUSINESS_PRIORITIES" || "ARCHITECTURE_CONSTRAINTS" || "OTHER" || "NONE",
 * //       QuestionType: "PRIORITIZED" || "NON_PRIORITIZED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnswersCommandInput - {@link ListAnswersCommandInput}
 * @returns {@link ListAnswersCommandOutput}
 * @see {@link ListAnswersCommandInput} for command's `input` shape.
 * @see {@link ListAnswersCommandOutput} for command's `response` shape.
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
export class ListAnswersCommand extends $Command<
  ListAnswersCommandInput,
  ListAnswersCommandOutput,
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
  constructor(readonly input: ListAnswersCommandInput) {
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
  ): Handler<ListAnswersCommandInput, ListAnswersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAnswersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListAnswersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "ListAnswers",
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
  private serialize(input: ListAnswersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAnswersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAnswersCommandOutput> {
    return de_ListAnswersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
