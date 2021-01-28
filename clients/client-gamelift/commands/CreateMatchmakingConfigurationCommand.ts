import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateMatchmakingConfigurationInput, CreateMatchmakingConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateMatchmakingConfigurationCommand,
  serializeAws_json1_1CreateMatchmakingConfigurationCommand,
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

export type CreateMatchmakingConfigurationCommandInput = CreateMatchmakingConfigurationInput;
export type CreateMatchmakingConfigurationCommandOutput = CreateMatchmakingConfigurationOutput & __MetadataBearer;

/**
 * <p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using
 *             FlexMatch with GameLift hosting or as a standalone matchmaking service, the matchmaking
 *             configuration sets out rules for matching players and forming teams. If you're also
 *             using GameLift hosting, it defines how to start game sessions for each match. Your
 *             matchmaking system can use multiple configurations to handle different game scenarios.
 *             All matchmaking requests (<a>StartMatchmaking</a> or <a>StartMatchBackfill</a>) identify the matchmaking configuration to use and
 *             provide player attributes consistent with that configuration. </p>
 *         <p>To create a matchmaking configuration, you must provide the following: configuration
 *             name and FlexMatch mode (with or without GameLift hosting); a rule set that specifies how
 *             to evaluate players and find acceptable matches; whether player acceptance is required;
 *             and the maximum time allowed for a matchmaking attempt. When using FlexMatch with GameLift
 *             hosting, you also need to identify the game session queue to use when starting a game
 *             session for the match.</p>
 *         <p>In addition, you must set up an Amazon Simple Notification Service (SNS) to receive matchmaking notifications, and
 *             provide the topic ARN in the matchmaking configuration. An alternative method,
 *             continuously polling ticket status with <a>DescribeMatchmaking</a>, is only
 *             suitable for games in development with low matchmaking usage.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
 *             FlexMatch Developer Guide</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">
 *                 Design a FlexMatch Matchmaker</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
 *             Set Up FlexMatch Event Notification</a>
 *          </p>
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
export class CreateMatchmakingConfigurationCommand extends $Command<
  CreateMatchmakingConfigurationCommandInput,
  CreateMatchmakingConfigurationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateMatchmakingConfigurationCommandInput) {
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
  ): Handler<CreateMatchmakingConfigurationCommandInput, CreateMatchmakingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateMatchmakingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMatchmakingConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateMatchmakingConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateMatchmakingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMatchmakingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMatchmakingConfigurationCommandOutput> {
    return deserializeAws_json1_1CreateMatchmakingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
