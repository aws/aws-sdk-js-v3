import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteMatchmakingConfigurationInput, DeleteMatchmakingConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteMatchmakingConfigurationCommand,
  serializeAws_json1_1DeleteMatchmakingConfigurationCommand,
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

export type DeleteMatchmakingConfigurationCommandInput = DeleteMatchmakingConfigurationInput;
export type DeleteMatchmakingConfigurationCommandOutput = DeleteMatchmakingConfigurationOutput & __MetadataBearer;

/**
 * <p>Permanently removes a FlexMatch matchmaking configuration. To delete, specify the
 *             configuration name. A matchmaking configuration cannot be deleted if it is being used in
 *             any active matchmaking tickets.</p>
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
export class DeleteMatchmakingConfigurationCommand extends $Command<
  DeleteMatchmakingConfigurationCommandInput,
  DeleteMatchmakingConfigurationCommandOutput,
  GameLiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteMatchmakingConfigurationCommandInput) {
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
  ): Handler<DeleteMatchmakingConfigurationCommandInput, DeleteMatchmakingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DeleteMatchmakingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMatchmakingConfigurationInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteMatchmakingConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteMatchmakingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteMatchmakingConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteMatchmakingConfigurationCommandOutput> {
    return deserializeAws_json1_1DeleteMatchmakingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
