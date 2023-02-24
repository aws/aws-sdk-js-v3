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
  ValidateMatchmakingRuleSetInput,
  ValidateMatchmakingRuleSetInputFilterSensitiveLog,
  ValidateMatchmakingRuleSetOutput,
  ValidateMatchmakingRuleSetOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1ValidateMatchmakingRuleSetCommand,
  serializeAws_json1_1ValidateMatchmakingRuleSetCommand,
} from "../protocols/Aws_json1_1";

export interface ValidateMatchmakingRuleSetCommandInput extends ValidateMatchmakingRuleSetInput {}
export interface ValidateMatchmakingRuleSetCommandOutput extends ValidateMatchmakingRuleSetOutput, __MetadataBearer {}

/**
 * <p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the
 *             rule set is using syntactically correct JSON and that it conforms to allowed property
 *             expressions. To validate syntax, provide a rule set JSON string.</p>
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, ValidateMatchmakingRuleSetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ValidateMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ValidateMatchmakingRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateMatchmakingRuleSetCommandInput} for command's `input` shape.
 * @see {@link ValidateMatchmakingRuleSetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class ValidateMatchmakingRuleSetCommand extends $Command<
  ValidateMatchmakingRuleSetCommandInput,
  ValidateMatchmakingRuleSetCommandOutput,
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

  constructor(readonly input: ValidateMatchmakingRuleSetCommandInput) {
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
  ): Handler<ValidateMatchmakingRuleSetCommandInput, ValidateMatchmakingRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateMatchmakingRuleSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "ValidateMatchmakingRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateMatchmakingRuleSetInputFilterSensitiveLog,
      outputFilterSensitiveLog: ValidateMatchmakingRuleSetOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidateMatchmakingRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ValidateMatchmakingRuleSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateMatchmakingRuleSetCommandOutput> {
    return deserializeAws_json1_1ValidateMatchmakingRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
