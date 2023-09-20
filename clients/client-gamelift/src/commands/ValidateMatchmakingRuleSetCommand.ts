// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ValidateMatchmakingRuleSetInput, ValidateMatchmakingRuleSetOutput } from "../models/models_1";
import { de_ValidateMatchmakingRuleSetCommand, se_ValidateMatchmakingRuleSetCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ValidateMatchmakingRuleSetCommand}.
 */
export interface ValidateMatchmakingRuleSetCommandInput extends ValidateMatchmakingRuleSetInput {}
/**
 * @public
 *
 * The output of {@link ValidateMatchmakingRuleSetCommand}.
 */
export interface ValidateMatchmakingRuleSetCommandOutput extends ValidateMatchmakingRuleSetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Validates the syntax of a matchmaking rule or rule set. This operation checks that the
 *             rule set is using syntactically correct JSON and that it conforms to allowed property
 *             expressions. To validate syntax, provide a rule set JSON string.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
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
 * const input = { // ValidateMatchmakingRuleSetInput
 *   RuleSetBody: "STRING_VALUE", // required
 * };
 * const command = new ValidateMatchmakingRuleSetCommand(input);
 * const response = await client.send(command);
 * // { // ValidateMatchmakingRuleSetOutput
 * //   Valid: true || false,
 * // };
 *
 * ```
 *
 * @param ValidateMatchmakingRuleSetCommandInput - {@link ValidateMatchmakingRuleSetCommandInput}
 * @returns {@link ValidateMatchmakingRuleSetCommandOutput}
 * @see {@link ValidateMatchmakingRuleSetCommandInput} for command's `input` shape.
 * @see {@link ValidateMatchmakingRuleSetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The service encountered an unrecoverable internal failure while processing the
 *             request. Clients can retry such requests immediately or after a waiting period.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more parameter values in the request are invalid. Correct the invalid parameter
 *             values before retrying.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "ValidateMatchmakingRuleSet",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ValidateMatchmakingRuleSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ValidateMatchmakingRuleSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ValidateMatchmakingRuleSetCommandOutput> {
    return de_ValidateMatchmakingRuleSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
