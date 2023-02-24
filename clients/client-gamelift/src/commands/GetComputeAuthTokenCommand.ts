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
  GetComputeAuthTokenInput,
  GetComputeAuthTokenInputFilterSensitiveLog,
  GetComputeAuthTokenOutput,
  GetComputeAuthTokenOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetComputeAuthTokenCommand,
  serializeAws_json1_1GetComputeAuthTokenCommand,
} from "../protocols/Aws_json1_1";

export interface GetComputeAuthTokenCommandInput extends GetComputeAuthTokenInput {}
export interface GetComputeAuthTokenCommandOutput extends GetComputeAuthTokenOutput, __MetadataBearer {}

/**
 * <p>Requests an authorization token from GameLift. The authorization token is used by your
 *             game server to authenticate with GameLift. Each authentication token has an expiration
 *             token. To continue using the compute resource to host your game server, regularly
 *             retrieve a new authorization token.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetComputeAuthTokenCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetComputeAuthTokenCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new GetComputeAuthTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComputeAuthTokenCommandInput} for command's `input` shape.
 * @see {@link GetComputeAuthTokenCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
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
      inputFilterSensitiveLog: GetComputeAuthTokenInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetComputeAuthTokenOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetComputeAuthTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetComputeAuthTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComputeAuthTokenCommandOutput> {
    return deserializeAws_json1_1GetComputeAuthTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
