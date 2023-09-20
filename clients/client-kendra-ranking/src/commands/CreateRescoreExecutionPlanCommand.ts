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

import { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import { CreateRescoreExecutionPlanRequest, CreateRescoreExecutionPlanResponse } from "../models/models_0";
import { de_CreateRescoreExecutionPlanCommand, se_CreateRescoreExecutionPlanCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRescoreExecutionPlanCommand}.
 */
export interface CreateRescoreExecutionPlanCommandInput extends CreateRescoreExecutionPlanRequest {}
/**
 * @public
 *
 * The output of {@link CreateRescoreExecutionPlanCommand}.
 */
export interface CreateRescoreExecutionPlanCommandOutput extends CreateRescoreExecutionPlanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a rescore execution plan. A rescore execution
 *             plan is an Amazon Kendra Intelligent Ranking resource
 *             used for provisioning the <code>Rescore</code> API. You set
 *             the number of capacity units that you require for
 *             Amazon Kendra Intelligent Ranking to rescore or re-rank
 *             a search service's results.</p>
 *          <p>For an example of using the
 *             <code>CreateRescoreExecutionPlan</code> API, including using
 *             the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically
 *                 ranking a search service's results</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, CreateRescoreExecutionPlanCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, CreateRescoreExecutionPlanCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * const client = new KendraRankingClient(config);
 * const input = { // CreateRescoreExecutionPlanRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   CapacityUnits: { // CapacityUnitsConfiguration
 *     RescoreCapacityUnits: Number("int"), // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateRescoreExecutionPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateRescoreExecutionPlanResponse
 * //   Id: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRescoreExecutionPlanCommandInput - {@link CreateRescoreExecutionPlanCommandInput}
 * @returns {@link CreateRescoreExecutionPlanCommandOutput}
 * @see {@link CreateRescoreExecutionPlanCommandInput} for command's `input` shape.
 * @see {@link CreateRescoreExecutionPlanCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the set limits for your
 *             Amazon Kendra Intelligent Ranking service. Please
 *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas</a>
 *             for more information, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> to inquire about
 *             an increase of limits.</p>
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
export class CreateRescoreExecutionPlanCommand extends $Command<
  CreateRescoreExecutionPlanCommandInput,
  CreateRescoreExecutionPlanCommandOutput,
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
  constructor(readonly input: CreateRescoreExecutionPlanCommandInput) {
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
  ): Handler<CreateRescoreExecutionPlanCommandInput, CreateRescoreExecutionPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRescoreExecutionPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraRankingClient";
    const commandName = "CreateRescoreExecutionPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSKendraRerankingFrontendService",
        operation: "CreateRescoreExecutionPlan",
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
  private serialize(input: CreateRescoreExecutionPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRescoreExecutionPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRescoreExecutionPlanCommandOutput> {
    return de_CreateRescoreExecutionPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
