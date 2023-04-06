// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KendraRankingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KendraRankingClient";
import { DescribeRescoreExecutionPlanRequest, DescribeRescoreExecutionPlanResponse } from "../models/models_0";
import {
  de_DescribeRescoreExecutionPlanCommand,
  se_DescribeRescoreExecutionPlanCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 *
 * The input for {@link DescribeRescoreExecutionPlanCommand}.
 */
export interface DescribeRescoreExecutionPlanCommandInput extends DescribeRescoreExecutionPlanRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRescoreExecutionPlanCommand}.
 */
export interface DescribeRescoreExecutionPlanCommandOutput
  extends DescribeRescoreExecutionPlanResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a rescore execution plan. A rescore
 *             execution plan is an Amazon Kendra Intelligent Ranking
 *             resource used for provisioning the <code>Rescore</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, DescribeRescoreExecutionPlanCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, DescribeRescoreExecutionPlanCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * const client = new KendraRankingClient(config);
 * const input = { // DescribeRescoreExecutionPlanRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeRescoreExecutionPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeRescoreExecutionPlanCommandInput - {@link DescribeRescoreExecutionPlanCommandInput}
 * @returns {@link DescribeRescoreExecutionPlanCommandOutput}
 * @see {@link DescribeRescoreExecutionPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeRescoreExecutionPlanCommandOutput} for command's `response` shape.
 * @see {@link KendraRankingClientResolvedConfig | config} for KendraRankingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don’t have sufficient access to perform this action.
 *             Please ensure you have the required permission policies
 *             and user accounts and try again.</p>
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
 *
 */
export class DescribeRescoreExecutionPlanCommand extends $Command<
  DescribeRescoreExecutionPlanCommandInput,
  DescribeRescoreExecutionPlanCommandOutput,
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
  constructor(readonly input: DescribeRescoreExecutionPlanCommandInput) {
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
  ): Handler<DescribeRescoreExecutionPlanCommandInput, DescribeRescoreExecutionPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRescoreExecutionPlanCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KendraRankingClient";
    const commandName = "DescribeRescoreExecutionPlanCommand";
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
  private serialize(input: DescribeRescoreExecutionPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRescoreExecutionPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRescoreExecutionPlanCommandOutput> {
    return de_DescribeRescoreExecutionPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
