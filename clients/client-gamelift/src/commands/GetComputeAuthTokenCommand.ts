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
} from "@smithy/types";

import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { GetComputeAuthTokenInput, GetComputeAuthTokenOutput } from "../models/models_0";
import { de_GetComputeAuthTokenCommand, se_GetComputeAuthTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetComputeAuthTokenCommand}.
 */
export interface GetComputeAuthTokenCommandInput extends GetComputeAuthTokenInput {}
/**
 * @public
 *
 * The output of {@link GetComputeAuthTokenCommand}.
 */
export interface GetComputeAuthTokenCommandOutput extends GetComputeAuthTokenOutput, __MetadataBearer {}

/**
 * @public
 * <p>Requests an authentication token from Amazon GameLift for a registered compute in an Anywhere
 *             fleet. The game servers that are running on the compute use this token to authenticate
 *             with the Amazon GameLift service. Each server process must provide a valid authentication token
 *             in its call to the Amazon GameLift server SDK action <code>InitSDK()</code>.</p>
 *          <p>Authentication tokens are valid for a limited time span. Use a mechanism to regularly
 *             request a fresh authentication token before the current token expires.</p>
 *          <p>
 *             <b>Learn more</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-anywhere.html">Create an
 *                         Anywhere fleet</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/integration-testing.html">Test your
 *                         integration</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-serversdk.html">Server SDK
 *                         reference guides</a> (for version 5.x)</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetComputeAuthTokenCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetComputeAuthTokenCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const input = { // GetComputeAuthTokenInput
 *   FleetId: "STRING_VALUE", // required
 *   ComputeName: "STRING_VALUE", // required
 * };
 * const command = new GetComputeAuthTokenCommand(input);
 * const response = await client.send(command);
 * // { // GetComputeAuthTokenOutput
 * //   FleetId: "STRING_VALUE",
 * //   FleetArn: "STRING_VALUE",
 * //   ComputeName: "STRING_VALUE",
 * //   ComputeArn: "STRING_VALUE",
 * //   AuthToken: "STRING_VALUE",
 * //   ExpirationTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetComputeAuthTokenCommandInput - {@link GetComputeAuthTokenCommandInput}
 * @returns {@link GetComputeAuthTokenCommandOutput}
 * @see {@link GetComputeAuthTokenCommandInput} for command's `input` shape.
 * @see {@link GetComputeAuthTokenCommandOutput} for command's `response` shape.
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
export class GetComputeAuthTokenCommand extends $Command<
  GetComputeAuthTokenCommandInput,
  GetComputeAuthTokenCommandOutput,
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
  constructor(readonly input: GetComputeAuthTokenCommandInput) {
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
  ): Handler<GetComputeAuthTokenCommandInput, GetComputeAuthTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComputeAuthTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "GetComputeAuthTokenCommand";
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
  private serialize(input: GetComputeAuthTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetComputeAuthTokenCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComputeAuthTokenCommandOutput> {
    return de_GetComputeAuthTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
