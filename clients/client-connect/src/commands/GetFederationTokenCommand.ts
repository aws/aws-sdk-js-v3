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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  GetFederationTokenRequest,
  GetFederationTokenRequestFilterSensitiveLog,
  GetFederationTokenResponse,
  GetFederationTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetFederationTokenCommand,
  serializeAws_restJson1GetFederationTokenCommand,
} from "../protocols/Aws_restJson1";

export interface GetFederationTokenCommandInput extends GetFederationTokenRequest {}
export interface GetFederationTokenCommandOutput extends GetFederationTokenResponse, __MetadataBearer {}

/**
 * <p>Retrieves a token for federation.</p>
 *          <note>
 *             <p>This API doesn't support root users. If you try to invoke GetFederationToken with root
 *     credentials, an error message similar to the following one appears: </p>
 *             <p>
 *                <code>Provided identity: Principal: .... User: .... cannot be used for federation with
 *       Amazon Connect</code>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, GetFederationTokenCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, GetFederationTokenCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new GetFederationTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFederationTokenCommandInput} for command's `input` shape.
 * @see {@link GetFederationTokenCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class GetFederationTokenCommand extends $Command<
  GetFederationTokenCommandInput,
  GetFederationTokenCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: GetFederationTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFederationTokenCommandInput, GetFederationTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFederationTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "GetFederationTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFederationTokenRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetFederationTokenResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFederationTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFederationTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFederationTokenCommandOutput> {
    return deserializeAws_restJson1GetFederationTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
