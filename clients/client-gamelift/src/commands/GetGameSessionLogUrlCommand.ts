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
  GetGameSessionLogUrlInput,
  GetGameSessionLogUrlInputFilterSensitiveLog,
  GetGameSessionLogUrlOutput,
  GetGameSessionLogUrlOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetGameSessionLogUrlCommand,
  serializeAws_json1_1GetGameSessionLogUrlCommand,
} from "../protocols/Aws_json1_1";

export interface GetGameSessionLogUrlCommandInput extends GetGameSessionLogUrlInput {}
export interface GetGameSessionLogUrlCommandOutput extends GetGameSessionLogUrlOutput, __MetadataBearer {}

/**
 * <p>Retrieves the location of stored game session logs for a specified game session. When
 *             a game session is terminated, GameLift automatically stores the logs in Amazon S3 and
 *             retains them for 14 days. Use this URL to download the logs.</p>
 *         <note>
 *             <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">Amazon Web Services Service
 *                     Limits</a> page for maximum log file sizes. Log files that exceed this limit
 *                 are not saved.</p>
 *         </note>
 *          <p>
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetGameSessionLogUrlCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetGameSessionLogUrlCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new GetGameSessionLogUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGameSessionLogUrlCommandInput} for command's `input` shape.
 * @see {@link GetGameSessionLogUrlCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class GetGameSessionLogUrlCommand extends $Command<
  GetGameSessionLogUrlCommandInput,
  GetGameSessionLogUrlCommandOutput,
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

  constructor(readonly input: GetGameSessionLogUrlCommandInput) {
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
  ): Handler<GetGameSessionLogUrlCommandInput, GetGameSessionLogUrlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGameSessionLogUrlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "GetGameSessionLogUrlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGameSessionLogUrlInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetGameSessionLogUrlOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGameSessionLogUrlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetGameSessionLogUrlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGameSessionLogUrlCommandOutput> {
    return deserializeAws_json1_1GetGameSessionLogUrlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
