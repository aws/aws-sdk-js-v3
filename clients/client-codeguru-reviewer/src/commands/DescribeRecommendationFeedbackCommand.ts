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
import { DescribeRecommendationFeedbackRequest, DescribeRecommendationFeedbackResponse } from "../models/models_0";
import {
  de_DescribeRecommendationFeedbackCommand,
  se_DescribeRecommendationFeedbackCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecommendationFeedbackCommand}.
 */
export interface DescribeRecommendationFeedbackCommandInput extends DescribeRecommendationFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRecommendationFeedbackCommand}.
 */
export interface DescribeRecommendationFeedbackCommandOutput
  extends DescribeRecommendationFeedbackResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the customer feedback for a CodeGuru Reviewer recommendation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, DescribeRecommendationFeedbackCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, DescribeRecommendationFeedbackCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // DescribeRecommendationFeedbackRequest
 *   CodeReviewArn: "STRING_VALUE", // required
 *   RecommendationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 * };
 * const command = new DescribeRecommendationFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecommendationFeedbackResponse
 * //   RecommendationFeedback: { // RecommendationFeedback
 * //     CodeReviewArn: "STRING_VALUE",
 * //     RecommendationId: "STRING_VALUE",
 * //     Reactions: [ // Reactions
 * //       "ThumbsUp" || "ThumbsDown",
 * //     ],
 * //     UserId: "STRING_VALUE",
 * //     CreatedTimeStamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimeStamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRecommendationFeedbackCommandInput - {@link DescribeRecommendationFeedbackCommandInput}
 * @returns {@link DescribeRecommendationFeedbackCommandOutput}
 * @see {@link DescribeRecommendationFeedbackCommandInput} for command's `input` shape.
 * @see {@link DescribeRecommendationFeedbackCommandOutput} for command's `response` shape.
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
export class DescribeRecommendationFeedbackCommand extends $Command<
  DescribeRecommendationFeedbackCommandInput,
  DescribeRecommendationFeedbackCommandOutput,
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
  constructor(readonly input: DescribeRecommendationFeedbackCommandInput) {
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
  ): Handler<DescribeRecommendationFeedbackCommandInput, DescribeRecommendationFeedbackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRecommendationFeedbackCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "DescribeRecommendationFeedbackCommand";
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
  private serialize(
    input: DescribeRecommendationFeedbackCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeRecommendationFeedbackCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRecommendationFeedbackCommandOutput> {
    return de_DescribeRecommendationFeedbackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
