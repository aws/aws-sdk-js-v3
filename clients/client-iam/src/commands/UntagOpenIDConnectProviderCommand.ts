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
  UntagOpenIDConnectProviderRequest,
  UntagOpenIDConnectProviderRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryUntagOpenIDConnectProviderCommand,
  serializeAws_queryUntagOpenIDConnectProviderCommand,
} from "../protocols/Aws_query";

export interface UntagOpenIDConnectProviderCommandInput extends UntagOpenIDConnectProviderRequest {}
export interface UntagOpenIDConnectProviderCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes the specified tags from the specified OpenID Connect (OIDC)-compatible identity
 *       provider in IAM. For more information about OIDC providers, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_oidc.html">About web identity federation</a>.
 *       For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UntagOpenIDConnectProviderCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UntagOpenIDConnectProviderCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new UntagOpenIDConnectProviderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagOpenIDConnectProviderCommandInput} for command's `input` shape.
 * @see {@link UntagOpenIDConnectProviderCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class UntagOpenIDConnectProviderCommand extends $Command<
  UntagOpenIDConnectProviderCommandInput,
  UntagOpenIDConnectProviderCommandOutput,
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

  constructor(readonly input: UntagOpenIDConnectProviderCommandInput) {
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
  ): Handler<UntagOpenIDConnectProviderCommandInput, UntagOpenIDConnectProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UntagOpenIDConnectProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UntagOpenIDConnectProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UntagOpenIDConnectProviderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UntagOpenIDConnectProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUntagOpenIDConnectProviderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UntagOpenIDConnectProviderCommandOutput> {
    return deserializeAws_queryUntagOpenIDConnectProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
