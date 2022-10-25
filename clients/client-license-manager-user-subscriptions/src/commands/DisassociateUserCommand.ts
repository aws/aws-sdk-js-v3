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
  DisassociateUserRequest,
  DisassociateUserRequestFilterSensitiveLog,
  DisassociateUserResponse,
  DisassociateUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisassociateUserCommand,
  serializeAws_restJson1DisassociateUserCommand,
} from "../protocols/Aws_restJson1";

export interface DisassociateUserCommandInput extends DisassociateUserRequest {}
export interface DisassociateUserCommandOutput extends DisassociateUserResponse, __MetadataBearer {}

/**
 * <p>Disassociates the user from an EC2 instance providing user-based subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, DisassociateUserCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, DisassociateUserCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const command = new DisassociateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateUserCommandInput} for command's `input` shape.
 * @see {@link DisassociateUserCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 */
export class DisassociateUserCommand extends $Command<
  DisassociateUserCommandInput,
  DisassociateUserCommandOutput,
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

  constructor(readonly input: DisassociateUserCommandInput) {
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
  ): Handler<DisassociateUserCommandInput, DisassociateUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisassociateUserCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerUserSubscriptionsClient";
    const commandName = "DisassociateUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisassociateUserResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisassociateUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateUserCommandOutput> {
    return deserializeAws_restJson1DisassociateUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
