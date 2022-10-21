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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ChangePasswordRequest, ChangePasswordRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryChangePasswordCommand,
  serializeAws_queryChangePasswordCommand,
} from "../protocols/Aws_query";

export interface ChangePasswordCommandInput extends ChangePasswordRequest {}
export interface ChangePasswordCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the password of the IAM user who is calling this operation. This operation
 *             can be performed using the CLI, the Amazon Web Services API, or the <b>My
 *                 Security Credentials</b> page in the Amazon Web Services Management Console. The Amazon Web Services account root user
 *             password is not affected by this operation.</p>
 *         <p>Use <a>UpdateLoginProfile</a> to use the CLI, the Amazon Web Services API, or the
 *                 <b>Users</b> page in the IAM console to change the
 *             password for any IAM user. For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing
 *                 passwords</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ChangePasswordCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ChangePasswordCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ChangePasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangePasswordCommandInput} for command's `input` shape.
 * @see {@link ChangePasswordCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class ChangePasswordCommand extends $Command<
  ChangePasswordCommandInput,
  ChangePasswordCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: ChangePasswordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ChangePasswordCommandInput, ChangePasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ChangePasswordCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ChangePasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ChangePasswordRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ChangePasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryChangePasswordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ChangePasswordCommandOutput> {
    return deserializeAws_queryChangePasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
