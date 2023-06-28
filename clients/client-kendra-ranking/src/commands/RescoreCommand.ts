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

import { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import { RescoreRequest, RescoreResult } from "../models/models_0";
import { de_RescoreCommand, se_RescoreCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RescoreCommand}.
 */
export interface RescoreCommandInput extends RescoreRequest {}
/**
 * @public
 *
 * The output of {@link RescoreCommand}.
 */
export interface RescoreCommandOutput extends RescoreResult, __MetadataBearer {}

/**
 * @public
 * <p>Rescores or re-ranks search results from a search service
 *             such as OpenSearch (self managed). You use the semantic search
 *             capabilities of Amazon Kendra Intelligent Ranking to
 *             improve the search service's results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, RescoreCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, RescoreCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * const client = new KendraRankingClient(config);
 * const input = { // RescoreRequest
 *   RescoreExecutionPlanId: "STRING_VALUE", // required
 *   SearchQuery: "STRING_VALUE", // required
 *   Documents: [ // DocumentList // required
 *     { // Document
 *       Id: "STRING_VALUE", // required
 *       GroupId: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Body: "STRING_VALUE",
 *       TokenizedTitle: [ // TitleTokensList
 *         "STRING_VALUE",
 *       ],
 *       TokenizedBody: [ // BodyTokensList
 *         "STRING_VALUE",
 *       ],
 *       OriginalScore: Number("float"), // required
 *     },
 *   ],
 * };
 * const command = new RescoreCommand(input);
 * const response = await client.send(command);
 * // { // RescoreResult
 * //   RescoreId: "STRING_VALUE",
 * //   ResultItems: [ // RescoreResultItemList
 * //     { // RescoreResultItem
 * //       DocumentId: "STRING_VALUE",
 * //       Score: Number("float"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RescoreCommandInput - {@link RescoreCommandInput}
 * @returns {@link RescoreCommandOutput}
 * @see {@link RescoreCommandInput} for command's `input` shape.
 * @see {@link RescoreCommandOutput} for command's `response` shape.
 * @see {@link KendraRankingClientResolvedConfig | config} for KendraRankingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don’t have sufficient access to perform this action.
 *             Please ensure you have the required permission policies
 *             and user accounts and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred with the request. Please fix any
 *             inconsistencies with your resources and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for
 *             your Amazon Kendra Intelligent Ranking service.
 *             Please wait a few minutes and try again, or contact
 *             <a href="http://aws.amazon.com/contact-us/">Support</a>
 *             for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you want to use doesn't exist. Please
 *             check you have provided the correct resource and try
 *             again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *             Please reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by
 *             the Amazon Kendra Intelligent Ranking service.
 *             Please provide the correct input and try again.</p>
 *
 * @throws {@link KendraRankingServiceException}
 * <p>Base exception class for all service exceptions from KendraRanking service.</p>
 *
 */
export class RescoreCommand extends $Command<
  RescoreCommandInput,
  RescoreCommandOutput,
  KendraRankingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: RescoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KendraRankingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RescoreCommandInput, RescoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, RescoreCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraRankingClient";
    const commandName = "RescoreCommand";
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
  private serialize(input: RescoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RescoreCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RescoreCommandOutput> {
    return de_RescoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
