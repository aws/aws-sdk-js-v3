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

import {
  StartDeviceAuthorizationRequest,
  StartDeviceAuthorizationRequestFilterSensitiveLog,
  StartDeviceAuthorizationResponse,
  StartDeviceAuthorizationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartDeviceAuthorizationCommand,
  serializeAws_restJson1StartDeviceAuthorizationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";

export interface StartDeviceAuthorizationCommandInput extends StartDeviceAuthorizationRequest {}
export interface StartDeviceAuthorizationCommandOutput extends StartDeviceAuthorizationResponse, __MetadataBearer {}

/**
 * <p>Initiates device authorization by requesting a pair of verification codes from the
 *       authorization service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, StartDeviceAuthorizationCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, StartDeviceAuthorizationCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const command = new StartDeviceAuthorizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDeviceAuthorizationCommandInput} for command's `input` shape.
 * @see {@link StartDeviceAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 */
export class StartDeviceAuthorizationCommand extends $Command<
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
  SSOOIDCClientResolvedConfig
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

  constructor(readonly input: StartDeviceAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOOIDCClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDeviceAuthorizationCommandInput, StartDeviceAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDeviceAuthorizationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOOIDCClient";
    const commandName = "StartDeviceAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDeviceAuthorizationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartDeviceAuthorizationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDeviceAuthorizationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartDeviceAuthorizationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDeviceAuthorizationCommandOutput> {
    return deserializeAws_restJson1StartDeviceAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
