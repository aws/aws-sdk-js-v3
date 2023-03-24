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
import { CreateMatchmakingConfigurationInput, CreateMatchmakingConfigurationOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateMatchmakingConfigurationCommand,
  serializeAws_json1_1CreateMatchmakingConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link CreateMatchmakingConfigurationCommand}.
 */
export interface CreateMatchmakingConfigurationCommandInput extends CreateMatchmakingConfigurationInput {}
/**
 * @public
 *
 * The output of {@link CreateMatchmakingConfigurationCommand}.
 */
export interface CreateMatchmakingConfigurationCommandOutput
  extends CreateMatchmakingConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using
 *             FlexMatch with GameLift hosting or as a standalone matchmaking service, the matchmaking
 *             configuration sets out rules for matching players and forming teams. If you're also
 *             using GameLift hosting, it defines how to start game sessions for each match. Your
 *             matchmaking system can use multiple configurations to handle different game scenarios.
 *             All matchmaking requests identify the matchmaking configuration to use and provide
 *             player attributes consistent with that configuration. </p>
 *         <p>To create a matchmaking configuration, you must provide the following: configuration
 *             name and FlexMatch mode (with or without GameLift hosting); a rule set that specifies how
 *             to evaluate players and find acceptable matches; whether player acceptance is required;
 *             and the maximum time allowed for a matchmaking attempt. When using FlexMatch with GameLift
 *             hosting, you also need to identify the game session queue to use when starting a game
 *             session for the match.</p>
 *         <p>In addition, you must set up an Amazon Simple Notification Service topic to receive matchmaking notifications.
 *             Provide the topic ARN in the matchmaking configuration.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html"> Design a FlexMatch
 *                 matchmaker</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html"> Set up FlexMatch event
 *                 notification</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateMatchmakingConfigurationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateMatchmakingConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = {
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   GameSessionQueueArns: [
 *     "STRING_VALUE",
 *   ],
 *   RequestTimeoutSeconds: Number("int"), // required
 *   AcceptanceTimeoutSeconds: Number("int"),
 *   AcceptanceRequired: true || false, // required
 *   RuleSetName: "STRING_VALUE", // required
 *   NotificationTarget: "STRING_VALUE",
 *   AdditionalPlayerCount: Number("int"),
 *   CustomEventData: "STRING_VALUE",
 *   GameProperties: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   GameSessionData: "STRING_VALUE",
 *   BackfillMode: "AUTOMATIC" || "MANUAL",
 *   FlexMatchMode: "STANDALONE" || "WITH_QUEUE",
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMatchmakingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateMatchmakingConfigurationCommandInput - {@link CreateMatchmakingConfigurationCommandInput}
 * @returns {@link CreateMatchmakingConfigurationCommandOutput}
 * @see {@link CreateMatchmakingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateMatchmakingConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested operation would cause the resource to exceed the allowed service limit.
 *             Resolve the issue before retrying.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link TaggingFailedException} (client fault)
 *  <p>The requested tagging operation did not succeed. This may be due to invalid tag format
 *             or the maximum tag limit may have been exceeded. Resolve the issue before
 *             retrying.</p>
 *
 * @throws {@link UnsupportedRegionException} (client fault)
 *  <p>The requested operation is not supported in the Region specified.</p>
 *
 *
 */
export class CreateMatchmakingConfigurationCommand extends $Command<
  CreateMatchmakingConfigurationCommandInput,
  CreateMatchmakingConfigurationCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMatchmakingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "CreateMatchmakingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(
    input: CreateMatchmakingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateMatchmakingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMatchmakingConfigurationCommandOutput> {
    return deserializeAws_json1_1CreateMatchmakingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
