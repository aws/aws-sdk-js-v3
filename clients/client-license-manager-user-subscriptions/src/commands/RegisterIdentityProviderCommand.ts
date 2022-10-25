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
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import {
  RegisterIdentityProviderRequest,
  RegisterIdentityProviderRequestFilterSensitiveLog,
  RegisterIdentityProviderResponse,
  RegisterIdentityProviderResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RegisterIdentityProviderCommand,
  serializeAws_restJson1RegisterIdentityProviderCommand,
} from "../protocols/Aws_restJson1";

export interface RegisterIdentityProviderCommandInput extends RegisterIdentityProviderRequest {}
export interface RegisterIdentityProviderCommandOutput extends RegisterIdentityProviderResponse, __MetadataBearer {}

/**
 * <p>Registers an identity provider for user-based subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, RegisterIdentityProviderCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, RegisterIdentityProviderCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const command = new RegisterIdentityProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterIdentityProviderCommandInput} for command's `input` shape.
 * @see {@link RegisterIdentityProviderCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 */
export class RegisterIdentityProviderCommand extends $Command<
  RegisterIdentityProviderCommandInput,
  RegisterIdentityProviderCommandOutput,
  LicenseManagerUserSubscriptionsClientResolvedConfig
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

  constructor(readonly input: RegisterIdentityProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerUserSubscriptionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterIdentityProviderCommandInput, RegisterIdentityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterIdentityProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerUserSubscriptionsClient";
    const commandName = "RegisterIdentityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterIdentityProviderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterIdentityProviderResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterIdentityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterIdentityProviderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterIdentityProviderCommandOutput> {
    return deserializeAws_restJson1RegisterIdentityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
