import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AuthorizeDataShareMessage, DataShare } from "../models/models_0";
import {
  deserializeAws_queryAuthorizeDataShareCommand,
  serializeAws_queryAuthorizeDataShareCommand,
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

export interface AuthorizeDataShareCommandInput extends AuthorizeDataShareMessage {}
export interface AuthorizeDataShareCommandOutput extends DataShare, __MetadataBearer {}

/**
 * <p>From a data producer account, authorizes the sharing of a datashare with one or more
 *             consumer accounts. To authorize a datashare for a data consumer, the producer account
 *             must have the correct access privileges.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeDataShareCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeDataShareCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AuthorizeDataShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeDataShareCommandInput} for command's `input` shape.
 * @see {@link AuthorizeDataShareCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AuthorizeDataShareCommand extends $Command<
  AuthorizeDataShareCommandInput,
  AuthorizeDataShareCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeDataShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeDataShareCommandInput, AuthorizeDataShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AuthorizeDataShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeDataShareMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DataShare.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeDataShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryAuthorizeDataShareCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AuthorizeDataShareCommandOutput> {
    return deserializeAws_queryAuthorizeDataShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
