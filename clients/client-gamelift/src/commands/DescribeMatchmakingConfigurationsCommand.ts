import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeMatchmakingConfigurationsInput, DescribeMatchmakingConfigurationsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand,
  serializeAws_json1_1DescribeMatchmakingConfigurationsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeMatchmakingConfigurationsCommandInput extends DescribeMatchmakingConfigurationsInput {}
export interface DescribeMatchmakingConfigurationsCommandOutput
  extends DescribeMatchmakingConfigurationsOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves the details of FlexMatch matchmaking configurations. </p>
 *         <p>This operation offers the following options: (1) retrieve all matchmaking
 *             configurations, (2) retrieve configurations for a specified list, or (3) retrieve all
 *             configurations that use a specified rule set name. When requesting multiple items, use
 *             the pagination parameters to retrieve results as a set of sequential pages. </p>
 *         <p>If successful, a configuration is returned for each requested name. When specifying a
 *             list of names, only configurations that currently exist are returned. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch
 *                 matchmakers</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateMatchmakingConfiguration</a> |
 *                     <a>DescribeMatchmakingConfigurations</a> |
 *                     <a>UpdateMatchmakingConfiguration</a> |
 *                     <a>DeleteMatchmakingConfiguration</a> |
 *                     <a>CreateMatchmakingRuleSet</a> |
 *                     <a>DescribeMatchmakingRuleSets</a> |
 *                     <a>ValidateMatchmakingRuleSet</a> |
 *                     <a>DeleteMatchmakingRuleSet</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeMatchmakingConfigurationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeMatchmakingConfigurationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeMatchmakingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMatchmakingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeMatchmakingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeMatchmakingConfigurationsCommand extends $Command<
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMatchmakingConfigurationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GameLiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMatchmakingConfigurationsCommandInput, DescribeMatchmakingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeMatchmakingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMatchmakingConfigurationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMatchmakingConfigurationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeMatchmakingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMatchmakingConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMatchmakingConfigurationsCommandOutput> {
    return deserializeAws_json1_1DescribeMatchmakingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
