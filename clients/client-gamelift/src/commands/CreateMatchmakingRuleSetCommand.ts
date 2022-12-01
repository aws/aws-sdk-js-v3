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

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import {
  CreateMatchmakingRuleSetInput,
  CreateMatchmakingRuleSetInputFilterSensitiveLog,
  CreateMatchmakingRuleSetOutput,
  CreateMatchmakingRuleSetOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateMatchmakingRuleSetCommand,
  serializeAws_json1_1CreateMatchmakingRuleSetCommand,
} from "../protocols/Aws_json1_1";

export interface CreateMatchmakingRuleSetCommandInput extends CreateMatchmakingRuleSetInput {}
export interface CreateMatchmakingRuleSetCommandOutput extends CreateMatchmakingRuleSetOutput, __MetadataBearer {}

/**
 * <p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match
 *             to create, such as the number and size of teams. It also sets the parameters for
 *             acceptable player matches, such as minimum skill level or character type.</p>
 *         <p>To create a matchmaking rule set, provide unique rule set name and the rule set body
 *             in JSON format. Rule sets must be defined in the same Region as the matchmaking
 *             configuration they are used with.</p>
 *         <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule set
 *             syntax using <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_ValidateMatchmakingRuleSet.html">ValidateMatchmakingRuleSet</a> before creating a new rule set.</p>
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
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a
 *                         matchmaker</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with
 *                         FlexMatch</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateMatchmakingRuleSetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateMatchmakingRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMatchmakingRuleSetCommandInput} for command's `input` shape.
 * @see {@link CreateMatchmakingRuleSetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class CreateMatchmakingRuleSetCommand extends $Command<
  CreateMatchmakingRuleSetCommandInput,
  CreateMatchmakingRuleSetCommandOutput,
  GameLiftClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMatchmakingRuleSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateMatchmakingRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMatchmakingRuleSetInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMatchmakingRuleSetOutputFilterSensitiveLog,
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
