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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import {
  AssociateIdentityProviderConfigRequest,
  AssociateIdentityProviderConfigRequestFilterSensitiveLog,
  AssociateIdentityProviderConfigResponse,
  AssociateIdentityProviderConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateIdentityProviderConfigCommand,
  serializeAws_restJson1AssociateIdentityProviderConfigCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateIdentityProviderConfigCommandInput extends AssociateIdentityProviderConfigRequest {}
export interface AssociateIdentityProviderConfigCommandOutput
  extends AssociateIdentityProviderConfigResponse,
    __MetadataBearer {}

/**
 * <p>Associate an identity provider configuration to a cluster.</p>
 *          <p>If you want to authenticate identities using an identity provider, you can create an
 *             identity provider configuration and associate it to your cluster. After configuring
 *             authentication to your cluster you can create Kubernetes <code>roles</code> and
 *                 <code>clusterroles</code> to assign permissions to the roles, and then bind the
 *             roles to the identities using Kubernetes <code>rolebindings</code> and
 *                 <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC
 *                 Authorization</a> in the Kubernetes documentation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new AssociateIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 */
export class AssociateIdentityProviderConfigCommand extends $Command<
  AssociateIdentityProviderConfigCommandInput,
  AssociateIdentityProviderConfigCommandOutput,
  EKSClientResolvedConfig
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

  constructor(readonly input: AssociateIdentityProviderConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateIdentityProviderConfigCommandInput, AssociateIdentityProviderConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateIdentityProviderConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "AssociateIdentityProviderConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateIdentityProviderConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateIdentityProviderConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateIdentityProviderConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateIdentityProviderConfigCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateIdentityProviderConfigCommandOutput> {
    return deserializeAws_restJson1AssociateIdentityProviderConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
