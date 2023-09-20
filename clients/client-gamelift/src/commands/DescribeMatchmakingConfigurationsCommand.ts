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
import { DescribeMatchmakingConfigurationsInput, DescribeMatchmakingConfigurationsOutput } from "../models/models_0";
import {
  de_DescribeMatchmakingConfigurationsCommand,
  se_DescribeMatchmakingConfigurationsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMatchmakingConfigurationsCommand}.
 */
export interface DescribeMatchmakingConfigurationsCommandInput extends DescribeMatchmakingConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link DescribeMatchmakingConfigurationsCommand}.
 */
export interface DescribeMatchmakingConfigurationsCommandOutput
  extends DescribeMatchmakingConfigurationsOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details of FlexMatch matchmaking configurations. </p>
 *          <p>This operation offers the following options: (1) retrieve all matchmaking
 *             configurations, (2) retrieve configurations for a specified list, or (3) retrieve all
 *             configurations that use a specified rule set name. When requesting multiple items, use
 *             the pagination parameters to retrieve results as a set of sequential pages. </p>
 *          <p>If successful, a configuration is returned for each requested name. When specifying a
 *             list of names, only configurations that currently exist are returned. </p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/matchmaker-build.html"> Setting up FlexMatch matchmakers</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeMatchmakingConfigurationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeMatchmakingConfigurationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeMatchmakingConfigurationsInput
 *   Names: [ // MatchmakingConfigurationNameList
 *     "STRING_VALUE",
 *   ],
 *   RuleSetName: "STRING_VALUE",
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMatchmakingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMatchmakingConfigurationsOutput
 * //   Configurations: [ // MatchmakingConfigurationList
 * //     { // MatchmakingConfiguration
 * //       Name: "STRING_VALUE",
 * //       ConfigurationArn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       GameSessionQueueArns: [ // QueueArnsList
 * //         "STRING_VALUE",
 * //       ],
 * //       RequestTimeoutSeconds: Number("int"),
 * //       AcceptanceTimeoutSeconds: Number("int"),
 * //       AcceptanceRequired: true || false,
 * //       RuleSetName: "STRING_VALUE",
 * //       RuleSetArn: "STRING_VALUE",
 * //       NotificationTarget: "STRING_VALUE",
 * //       AdditionalPlayerCount: Number("int"),
 * //       CustomEventData: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       GameProperties: [ // GamePropertyList
 * //         { // GameProperty
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       GameSessionData: "STRING_VALUE",
 * //       BackfillMode: "AUTOMATIC" || "MANUAL",
 * //       FlexMatchMode: "STANDALONE" || "WITH_QUEUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMatchmakingConfigurationsCommandInput - {@link DescribeMatchmakingConfigurationsCommandInput}
 * @returns {@link DescribeMatchmakingConfigurationsCommandOutput}
 * @see {@link DescribeMatchmakingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeMatchmakingConfigurationsCommandOutput} for command's `response` shape.
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
export class DescribeMatchmakingConfigurationsCommand extends $Command<
  DescribeMatchmakingConfigurationsCommandInput,
  DescribeMatchmakingConfigurationsCommandOutput,
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
  constructor(readonly input: DescribeMatchmakingConfigurationsCommandInput) {
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
  ): Handler<DescribeMatchmakingConfigurationsCommandInput, DescribeMatchmakingConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMatchmakingConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeMatchmakingConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "DescribeMatchmakingConfigurations",
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
  private serialize(
    input: DescribeMatchmakingConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeMatchmakingConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMatchmakingConfigurationsCommandOutput> {
    return de_DescribeMatchmakingConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
