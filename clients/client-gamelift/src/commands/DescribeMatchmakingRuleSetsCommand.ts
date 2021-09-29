import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeMatchmakingRuleSetsInput, DescribeMatchmakingRuleSetsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand,
  serializeAws_json1_1DescribeMatchmakingRuleSetsCommand,
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

export interface DescribeMatchmakingRuleSetsCommandInput extends DescribeMatchmakingRuleSetsInput {}
export interface DescribeMatchmakingRuleSetsCommandOutput extends DescribeMatchmakingRuleSetsOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all
 *             existing rule sets for the Region, or provide a list of one or more rule set names. When
 *             requesting multiple items, use the pagination parameters to retrieve results as a set of
 *             sequential pages. If successful, a rule set is returned for each requested name. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule
 *                         set</a>
 *                </p>
 *             </li>
 *          </ul>
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
 * import { GameLiftClient, DescribeMatchmakingRuleSetsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeMatchmakingRuleSetsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeMatchmakingRuleSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMatchmakingRuleSetsCommandInput} for command's `input` shape.
 * @see {@link DescribeMatchmakingRuleSetsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeMatchmakingRuleSetsCommand extends $Command<
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMatchmakingRuleSetsCommandInput) {
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
  ): Handler<DescribeMatchmakingRuleSetsCommandInput, DescribeMatchmakingRuleSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeMatchmakingRuleSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMatchmakingRuleSetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMatchmakingRuleSetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMatchmakingRuleSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMatchmakingRuleSetsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMatchmakingRuleSetsCommandOutput> {
    return deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
