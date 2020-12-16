import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateMatchmakingRuleSetInput, CreateMatchmakingRuleSetOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateMatchmakingRuleSetCommand,
  serializeAws_json1_1CreateMatchmakingRuleSetCommand,
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

export type CreateMatchmakingRuleSetCommandInput = CreateMatchmakingRuleSetInput;
export type CreateMatchmakingRuleSetCommandOutput = CreateMatchmakingRuleSetOutput & __MetadataBearer;

/**
 * <p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match
 *             to create, such as the number and size of teams. It also sets the parameters for
 *             acceptable player matches, such as minimum skill level or character type. A rule set is
 *             used by a <a>MatchmakingConfiguration</a>. </p>
 *         <p>To create a matchmaking rule set, provide unique rule set name and the rule set body
 *             in JSON format. Rule sets must be defined in the same Region as the matchmaking
 *             configuration they are used with.</p>
 *         <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule
 *             set syntax using <a>ValidateMatchmakingRuleSet</a> before creating a new rule
 *             set.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a Rule
 *                         Set</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a
 *                         Matchmaker</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with
 *                         FlexMatch</a>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Related operations</b>
 *          </p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <a>CreateMatchmakingConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMatchmakingConfigurations</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateMatchmakingConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteMatchmakingConfiguration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateMatchmakingRuleSet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeMatchmakingRuleSets</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ValidateMatchmakingRuleSet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteMatchmakingRuleSet</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateMatchmakingRuleSetCommand extends $Command<
  CreateMatchmakingRuleSetCommandInput,
  CreateMatchmakingRuleSetCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMatchmakingRuleSetCommandInput) {
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
  ): Handler<CreateMatchmakingRuleSetCommandInput, CreateMatchmakingRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateMatchmakingRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMatchmakingRuleSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMatchmakingRuleSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateMatchmakingRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMatchmakingRuleSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateMatchmakingRuleSetCommandOutput> {
    return deserializeAws_json1_1CreateMatchmakingRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
