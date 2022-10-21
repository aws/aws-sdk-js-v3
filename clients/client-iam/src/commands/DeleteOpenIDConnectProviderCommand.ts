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
import {
  DeleteOpenIDConnectProviderRequest,
  DeleteOpenIDConnectProviderRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteOpenIDConnectProviderCommand,
  serializeAws_queryDeleteOpenIDConnectProviderCommand,
} from "../protocols/Aws_query";

export interface DeleteOpenIDConnectProviderCommandInput extends DeleteOpenIDConnectProviderRequest {}
export interface DeleteOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an OpenID Connect identity provider (IdP) resource object in IAM.</p>
 *         <p>Deleting an IAM OIDC provider resource does not update any roles that reference the
 *             provider as a principal in their trust policies. Any attempt to assume a role that
 *             references a deleted provider fails.</p>
 *         <p>This operation is idempotent; it does not fail or return an error if you call the
 *             operation for a provider that does not exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class DeleteOpenIDConnectProviderCommand extends $Command<
  DeleteOpenIDConnectProviderCommandInput,
  DeleteOpenIDConnectProviderCommandOutput,
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

  constructor(readonly input: DeleteOpenIDConnectProviderCommandInput) {
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
  ): Handler<DeleteOpenIDConnectProviderCommandInput, DeleteOpenIDConnectProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteOpenIDConnectProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "DeleteOpenIDConnectProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteOpenIDConnectProviderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteOpenIDConnectProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteOpenIDConnectProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteOpenIDConnectProviderCommandOutput> {
    return deserializeAws_queryDeleteOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
