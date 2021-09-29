import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveClientIDFromOpenIDConnectProviderRequest } from "../models/models_0";
import {
  deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand,
  serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand,
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

export interface RemoveClientIDFromOpenIDConnectProviderCommandInput
  extends RemoveClientIDFromOpenIDConnectProviderRequest {}
export interface RemoveClientIDFromOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified client ID (also known as audience) from the list of client IDs
 *             registered for the specified IAM OpenID Connect (OIDC) provider resource
 *             object.</p>
 *         <p>This operation is idempotent; it does not fail or return an error if you try to remove
 *             a client ID that does not exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveClientIDFromOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveClientIDFromOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new RemoveClientIDFromOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveClientIDFromOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link RemoveClientIDFromOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RemoveClientIDFromOpenIDConnectProviderCommand extends $Command<
  RemoveClientIDFromOpenIDConnectProviderCommandInput,
  RemoveClientIDFromOpenIDConnectProviderCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveClientIDFromOpenIDConnectProviderCommandInput) {
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
  ): Handler<
    RemoveClientIDFromOpenIDConnectProviderCommandInput,
    RemoveClientIDFromOpenIDConnectProviderCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "RemoveClientIDFromOpenIDConnectProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveClientIDFromOpenIDConnectProviderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RemoveClientIDFromOpenIDConnectProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput> {
    return deserializeAws_queryRemoveClientIDFromOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
