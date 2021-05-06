import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListOpenIDConnectProvidersRequest, ListOpenIDConnectProvidersResponse } from "../models/models_0";
import {
  deserializeAws_queryListOpenIDConnectProvidersCommand,
  serializeAws_queryListOpenIDConnectProvidersCommand,
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

export interface ListOpenIDConnectProvidersCommandInput extends ListOpenIDConnectProvidersRequest {}
export interface ListOpenIDConnectProvidersCommandOutput extends ListOpenIDConnectProvidersResponse, __MetadataBearer {}

/**
 * <p>Lists information about the IAM OpenID Connect (OIDC) provider resource objects
 *             defined in the AWS account.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an OIDC provider, see <a>GetOpenIDConnectProvider</a>.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListOpenIDConnectProvidersCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListOpenIDConnectProvidersCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListOpenIDConnectProvidersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOpenIDConnectProvidersCommandInput} for command's `input` shape.
 * @see {@link ListOpenIDConnectProvidersCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListOpenIDConnectProvidersCommand extends $Command<
  ListOpenIDConnectProvidersCommandInput,
  ListOpenIDConnectProvidersCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOpenIDConnectProvidersCommandInput) {
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
  ): Handler<ListOpenIDConnectProvidersCommandInput, ListOpenIDConnectProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListOpenIDConnectProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOpenIDConnectProvidersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOpenIDConnectProvidersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOpenIDConnectProvidersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListOpenIDConnectProvidersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOpenIDConnectProvidersCommandOutput> {
    return deserializeAws_queryListOpenIDConnectProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
