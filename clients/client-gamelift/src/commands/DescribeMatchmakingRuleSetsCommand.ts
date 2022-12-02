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
  DescribeMatchmakingRuleSetsInput,
  DescribeMatchmakingRuleSetsInputFilterSensitiveLog,
  DescribeMatchmakingRuleSetsOutput,
  DescribeMatchmakingRuleSetsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand,
  serializeAws_json1_1DescribeMatchmakingRuleSetsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeMatchmakingRuleSetsCommandInput extends DescribeMatchmakingRuleSetsInput {}
export interface DescribeMatchmakingRuleSetsCommandOutput extends DescribeMatchmakingRuleSetsOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all existing
 *             rule sets for the Region, or provide a list of one or more rule set names. When
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
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class DescribeMatchmakingRuleSetsCommand extends $Command<
  DescribeMatchmakingRuleSetsCommandInput,
  DescribeMatchmakingRuleSetsCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMatchmakingRuleSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeMatchmakingRuleSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMatchmakingRuleSetsInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMatchmakingRuleSetsOutputFilterSensitiveLog,
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
