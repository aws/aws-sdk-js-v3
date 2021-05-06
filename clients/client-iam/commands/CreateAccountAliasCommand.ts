import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateAccountAliasRequest } from "../models/models_0";
import {
  deserializeAws_queryCreateAccountAliasCommand,
  serializeAws_queryCreateAccountAliasCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateAccountAliasCommandInput extends CreateAccountAliasRequest {}
export interface CreateAccountAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates an alias for your AWS account. For information about using an AWS account
 *             alias, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AccountAlias.html">Using an
 *                 alias for your AWS account ID</a> in the
 *             <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateAccountAliasCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateAccountAliasCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateAccountAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateAccountAliasCommand extends $Command<
  CreateAccountAliasCommandInput,
  CreateAccountAliasCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccountAliasCommandInput) {
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
  ): Handler<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateAccountAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccountAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccountAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateAccountAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccountAliasCommandOutput> {
    return deserializeAws_queryCreateAccountAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
