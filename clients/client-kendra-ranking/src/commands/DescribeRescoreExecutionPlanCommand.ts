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
import {
  DescribeRescoreExecutionPlanRequest,
  DescribeRescoreExecutionPlanRequestFilterSensitiveLog,
  DescribeRescoreExecutionPlanResponse,
  DescribeRescoreExecutionPlanResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0DescribeRescoreExecutionPlanCommand,
  serializeAws_json1_0DescribeRescoreExecutionPlanCommand,
} from "../protocols/Aws_json1_0";

export interface DescribeRescoreExecutionPlanCommandInput extends DescribeRescoreExecutionPlanRequest {}
export interface DescribeRescoreExecutionPlanCommandOutput
  extends DescribeRescoreExecutionPlanResponse,
    __MetadataBearer {}

/**
 * <p>Gets information about a rescore execution plan. A rescore
 *             execution plan is an Amazon Kendra Intelligent Ranking
 *             resource used for provisioning the <code>Rescore</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraRankingClient, DescribeRescoreExecutionPlanCommand } from "@aws-sdk/client-kendra-ranking"; // ES Modules import
 * // const { KendraRankingClient, DescribeRescoreExecutionPlanCommand } = require("@aws-sdk/client-kendra-ranking"); // CommonJS import
 * const client = new KendraRankingClient(config);
 * const command = new DescribeRescoreExecutionPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRescoreExecutionPlanCommandInput} for command's `input` shape.
 * @see {@link DescribeRescoreExecutionPlanCommandOutput} for command's `response` shape.
 * @see {@link KendraRankingClientResolvedConfig | config} for KendraRankingClient's `config` shape.
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
      inputFilterSensitiveLog: DescribeRescoreExecutionPlanRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeRescoreExecutionPlanResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRescoreExecutionPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeRescoreExecutionPlanCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRescoreExecutionPlanCommandOutput> {
    return deserializeAws_json1_0DescribeRescoreExecutionPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
