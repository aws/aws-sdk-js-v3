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

import { LogoutRequest, LogoutRequestFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_restJson1LogoutCommand, serializeAws_restJson1LogoutCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSOClientResolvedConfig } from "../SSOClient";

export interface LogoutCommandInput extends LogoutRequest {}
export interface LogoutCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the locally stored SSO tokens from the client-side cache and sends an API call to
 *       the IAM Identity Center service to invalidate the corresponding server-side IAM Identity Center sign in
 *       session.</p>
 *
 *          <note>
 *             <p>If a user uses IAM Identity Center to access the AWS CLI, the user’s IAM Identity Center sign in session is
 *         used to obtain an IAM session, as specified in the corresponding IAM Identity Center permission set.
 *         More specifically, IAM Identity Center assumes an IAM role in the target account on behalf of the user,
 *         and the corresponding temporary AWS credentials are returned to the client.</p>
 *
 *             <p>After user logout, any existing IAM role sessions that were created by using IAM Identity Center
 *         permission sets continue based on the duration configured in the permission set.
 *         For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/authconcept.html">User
 *           authentications</a> in the <i>IAM Identity Center User
 *         Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOClient, LogoutCommand } from "@aws-sdk/client-sso"; // ES Modules import
 * // const { SSOClient, LogoutCommand } = require("@aws-sdk/client-sso"); // CommonJS import
 * const client = new SSOClient(config);
 * const command = new LogoutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LogoutCommandInput} for command's `input` shape.
 * @see {@link LogoutCommandOutput} for command's `response` shape.
 * @see {@link SSOClientResolvedConfig | config} for SSOClient's `config` shape.
 *
 */
export class LogoutCommand extends $Command<LogoutCommandInput, LogoutCommandOutput, SSOClientResolvedConfig> {
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

  constructor(readonly input: LogoutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LogoutCommandInput, LogoutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, LogoutCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOClient";
    const commandName = "LogoutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LogoutRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LogoutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1LogoutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LogoutCommandOutput> {
    return deserializeAws_restJson1LogoutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
