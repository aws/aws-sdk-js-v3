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

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { ListRecommendationFeedbackRequest, ListRecommendationFeedbackResponse } from "../models/models_0";
import { de_ListRecommendationFeedbackCommand, se_ListRecommendationFeedbackCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListRecommendationFeedbackCommand}.
 */
export interface ListRecommendationFeedbackCommandInput extends ListRecommendationFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link ListRecommendationFeedbackCommand}.
 */
export interface ListRecommendationFeedbackCommandOutput extends ListRecommendationFeedbackResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_RecommendationFeedbackSummary.html">RecommendationFeedbackSummary</a> objects that contain customer recommendation
 *          feedback for all CodeGuru Reviewer users.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // ListRecommendationFeedbackRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CodeReviewArn: "STRING_VALUE", // required
 *   UserIds: [ // UserIds
 *     "STRING_VALUE",
 *   ],
 *   RecommendationIds: [ // RecommendationIds
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationFeedbackResponse
 * //   RecommendationFeedbackSummaries: [ // RecommendationFeedbackSummaries
 * //     { // RecommendationFeedbackSummary
 * //       RecommendationId: "STRING_VALUE",
 * //       Reactions: [ // Reactions
 * //         "ThumbsUp" || "ThumbsDown",
 * //       ],
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecommendationFeedbackCommandInput - {@link ListRecommendationFeedbackCommandInput}
 * @returns {@link ListRecommendationFeedbackCommandOutput}
 * @see {@link ListRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link ListRecommendationFeedbackCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The resource specified in the request was not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruReviewerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruReviewer service.</p>
 *
 */
export class ListRecommendationFeedbackCommand extends $Command<
  ListRecommendationFeedbackCommandInput,
  ListRecommendationFeedbackCommandOutput,
  CodeGuruReviewerClientResolvedConfig
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
  constructor(readonly input: ListRecommendationFeedbackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecommendationFeedbackCommandInput, ListRecommendationFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecommendationFeedbackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "ListRecommendationFeedbackCommand";
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
  private serialize(input: ListRecommendationFeedbackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRecommendationFeedbackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRecommendationFeedbackCommandOutput> {
    return de_ListRecommendationFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
