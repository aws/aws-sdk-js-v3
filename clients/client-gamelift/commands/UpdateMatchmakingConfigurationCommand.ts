import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UpdateMatchmakingConfigurationInput, UpdateMatchmakingConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateMatchmakingConfigurationCommand,
  serializeAws_json1_1UpdateMatchmakingConfigurationCommand,
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

export type UpdateMatchmakingConfigurationCommandInput = UpdateMatchmakingConfigurationInput;
export type UpdateMatchmakingConfigurationCommandOutput = UpdateMatchmakingConfigurationOutput & __MetadataBearer;

/**
 * <p>Updates settings for a FlexMatch matchmaking configuration. These changes affect all matches and game sessions
 *             that are created after the update. To update settings,
 *             specify the configuration name to be updated and provide the new settings. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">
 *             Design a FlexMatch Matchmaker</a>
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
export class UpdateMatchmakingConfigurationCommand extends $Command<
  UpdateMatchmakingConfigurationCommandInput,
  UpdateMatchmakingConfigurationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateMatchmakingConfigurationCommandInput) {
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
  ): Handler<UpdateMatchmakingConfigurationCommandInput, UpdateMatchmakingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "UpdateMatchmakingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateMatchmakingConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateMatchmakingConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateMatchmakingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateMatchmakingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateMatchmakingConfigurationCommandOutput> {
    return deserializeAws_json1_1UpdateMatchmakingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
