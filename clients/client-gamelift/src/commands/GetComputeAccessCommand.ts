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
  GetComputeAccessInput,
  GetComputeAccessInputFilterSensitiveLog,
  GetComputeAccessOutput,
  GetComputeAccessOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetComputeAccessCommand,
  serializeAws_json1_1GetComputeAccessCommand,
} from "../protocols/Aws_json1_1";

export interface GetComputeAccessCommandInput extends GetComputeAccessInput {}
export interface GetComputeAccessCommandOutput extends GetComputeAccessOutput, __MetadataBearer {}

/**
 * <p>Requests remote access to a fleet instance. Remote access is useful for debugging,
 *             gathering benchmarking data, or observing activity in real time. </p>
 *         <p>To remotely access an instance, you need credentials that match the operating system
 *             of the instance. For a Windows instance, GameLift returns a user name and password as
 *             strings for use with a Windows Remote Desktop client. For a Linux instance, GameLift
 *             returns a user name and RSA private key, also as strings, for use with an SSH client.
 *             The private key must be saved in the proper format to a <code>.pem</code> file before
 *             using. If you're making this request using the CLI, saving the secret can be handled
 *             as part of the <code>GetInstanceAccess</code> request, as shown in one of the examples
 *             for this operation. </p>
 *         <p>To request access to a specific instance, specify the IDs of both the instance and the
 *             fleet it belongs to.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-remote-access.html">Remotely Access Fleet
 *                 Instances</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-creating-debug.html">Debug Fleet
 *                 Issues</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetComputeAccessCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetComputeAccessCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new GetComputeAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetComputeAccessCommandInput} for command's `input` shape.
 * @see {@link GetComputeAccessCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for GameLiftClient's `config` shape.
 *
 */
export class GetComputeAccessCommand extends $Command<
  GetComputeAccessCommandInput,
  GetComputeAccessCommandOutput,
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

  constructor(readonly input: GetComputeAccessCommandInput) {
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
  ): Handler<GetComputeAccessCommandInput, GetComputeAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetComputeAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GameLiftClient";
    const commandName = "GetComputeAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetComputeAccessInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetComputeAccessOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetComputeAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetComputeAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetComputeAccessCommandOutput> {
    return deserializeAws_json1_1GetComputeAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
