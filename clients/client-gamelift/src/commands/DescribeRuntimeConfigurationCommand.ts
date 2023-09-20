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
import { DescribeRuntimeConfigurationInput, DescribeRuntimeConfigurationOutput } from "../models/models_0";
import {
  de_DescribeRuntimeConfigurationCommand,
  se_DescribeRuntimeConfigurationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuntimeConfigurationCommand}.
 */
export interface DescribeRuntimeConfigurationCommandInput extends DescribeRuntimeConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DescribeRuntimeConfigurationCommand}.
 */
export interface DescribeRuntimeConfigurationCommandOutput
  extends DescribeRuntimeConfigurationOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a fleet's runtime configuration settings. The runtime configuration tells
 *             Amazon GameLift which server processes to run (and how) on each instance in the fleet.</p>
 *          <p>To get the runtime configuration that is currently in forces for a fleet, provide the
 *             fleet ID. </p>
 *          <p>If successful, a <code>RuntimeConfiguration</code> object is returned for the
 *             requested fleet. If the requested fleet has been deleted, the result set is
 *             empty.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up Amazon GameLift
 *                 fleets</a>
 *          </p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-multiprocess.html">Running multiple
 *                 processes on a fleet</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeRuntimeConfigurationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeRuntimeConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // DescribeRuntimeConfigurationInput
 *   FleetId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuntimeConfigurationOutput
 * //   RuntimeConfiguration: { // RuntimeConfiguration
 * //     ServerProcesses: [ // ServerProcessList
 * //       { // ServerProcess
 * //         LaunchPath: "STRING_VALUE", // required
 * //         Parameters: "STRING_VALUE",
 * //         ConcurrentExecutions: Number("int"), // required
 * //       },
 * //     ],
 * //     MaxConcurrentGameSessionActivations: Number("int"),
 * //     GameSessionActivationTimeoutSeconds: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRuntimeConfigurationCommandInput - {@link DescribeRuntimeConfigurationCommandInput}
 * @returns {@link DescribeRuntimeConfigurationCommandOutput}
 * @see {@link DescribeRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeRuntimeConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>THe requested resources was not found. The resource was either not created yet or deleted.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client failed authentication. Clients should not retry such requests.</p>
 *
 * @throws {@link GameLiftServiceException}
 * <p>Base exception class for all service exceptions from GameLift service.</p>
 *
 */
export class DescribeRuntimeConfigurationCommand extends $Command<
  DescribeRuntimeConfigurationCommandInput,
  DescribeRuntimeConfigurationCommandOutput,
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
  constructor(readonly input: DescribeRuntimeConfigurationCommandInput) {
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
  ): Handler<DescribeRuntimeConfigurationCommandInput, DescribeRuntimeConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeRuntimeConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "DescribeRuntimeConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GameLift",
        operation: "DescribeRuntimeConfiguration",
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
  private serialize(input: DescribeRuntimeConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeRuntimeConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeRuntimeConfigurationCommandOutput> {
    return de_DescribeRuntimeConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
