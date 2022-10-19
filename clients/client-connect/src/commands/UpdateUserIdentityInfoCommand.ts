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
import { UpdateUserIdentityInfoRequest, UpdateUserIdentityInfoRequestFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_restJson1UpdateUserIdentityInfoCommand,
  serializeAws_restJson1UpdateUserIdentityInfoCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateUserIdentityInfoCommandInput extends UpdateUserIdentityInfoRequest {}
export interface UpdateUserIdentityInfoCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the identity information for the specified user.</p>
 *          <important>
 *             <p>We strongly recommend limiting who has the ability to invoke
 *      <code>UpdateUserIdentityInfo</code>. Someone with that ability can change the login credentials
 *     of other users by changing their email address. This poses a security risk to your organization.
 *     They can change the email address of a user to the attacker's email address, and then reset the
 *     password through email. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-best-practices.html">Best Practices for
 *      Security Profiles</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserIdentityInfoCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserIdentityInfoCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateUserIdentityInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserIdentityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateUserIdentityInfoCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class UpdateUserIdentityInfoCommand extends $Command<
  UpdateUserIdentityInfoCommandInput,
  UpdateUserIdentityInfoCommandOutput,
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

  constructor(readonly input: UpdateUserIdentityInfoCommandInput) {
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
  ): Handler<UpdateUserIdentityInfoCommandInput, UpdateUserIdentityInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateUserIdentityInfoCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateUserIdentityInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateUserIdentityInfoRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateUserIdentityInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateUserIdentityInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateUserIdentityInfoCommandOutput> {
    return deserializeAws_restJson1UpdateUserIdentityInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
