import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteMatchmakingRuleSetInput, DeleteMatchmakingRuleSetOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteMatchmakingRuleSetCommand,
  serializeAws_json1_1DeleteMatchmakingRuleSetCommand,
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

export type DeleteMatchmakingRuleSetCommandInput = DeleteMatchmakingRuleSetInput;
export type DeleteMatchmakingRuleSetCommandOutput = DeleteMatchmakingRuleSetOutput & __MetadataBearer;

/**
 * <p>Deletes an existing matchmaking rule set. To delete the rule set, provide the rule
 *             set name. Rule sets cannot be deleted if they are currently being used by a matchmaking
 *             configuration. </p>
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
export class DeleteMatchmakingRuleSetCommand extends $Command<
  DeleteMatchmakingRuleSetCommandInput,
  DeleteMatchmakingRuleSetCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMatchmakingRuleSetCommandInput) {
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
  ): Handler<DeleteMatchmakingRuleSetCommandInput, DeleteMatchmakingRuleSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteMatchmakingRuleSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMatchmakingRuleSetInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMatchmakingRuleSetOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMatchmakingRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMatchmakingRuleSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMatchmakingRuleSetCommandOutput> {
    return deserializeAws_json1_1DeleteMatchmakingRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
