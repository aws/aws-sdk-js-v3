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
 * <p>Returns the list of all recommendations for a completed code review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, ListRecommendationsCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, ListRecommendationsCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const input = { // ListRecommendationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CodeReviewArn: "STRING_VALUE", // required
 * };
 * const command = new ListRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecommendationsResponse
 * //   RecommendationSummaries: [ // RecommendationSummaries
 * //     { // RecommendationSummary
 * //       FilePath: "STRING_VALUE",
 * //       RecommendationId: "STRING_VALUE",
 * //       StartLine: Number("int"),
 * //       EndLine: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       RecommendationCategory: "AWSBestPractices" || "AWSCloudFormationIssues" || "DuplicateCode" || "CodeMaintenanceIssues" || "ConcurrencyIssues" || "InputValidations" || "PythonBestPractices" || "JavaBestPractices" || "ResourceLeaks" || "SecurityIssues" || "CodeInconsistencies",
 * //       RuleMetadata: { // RuleMetadata
 * //         RuleId: "STRING_VALUE",
 * //         RuleName: "STRING_VALUE",
 * //         ShortDescription: "STRING_VALUE",
 * //         LongDescription: "STRING_VALUE",
 * //         RuleTags: [ // RuleTags
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Severity: "Info" || "Low" || "Medium" || "High" || "Critical",
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
export class ListRecommendationsCommand extends $Command<
  ListRecommendationsCommandInput,
  ListRecommendationsCommandOutput,
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
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRecommendationsCommandInput, ListRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "ListRecommendationsCommand";
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
