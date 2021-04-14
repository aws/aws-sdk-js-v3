import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { AssociateIdentityProviderConfigRequest, AssociateIdentityProviderConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateIdentityProviderConfigCommand,
  serializeAws_restJson1AssociateIdentityProviderConfigCommand,
} from "../protocols/Aws_restJson1";
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

export type AssociateIdentityProviderConfigCommandInput = AssociateIdentityProviderConfigRequest;
export type AssociateIdentityProviderConfigCommandOutput = AssociateIdentityProviderConfigResponse & __MetadataBearer;

/**
 * <p>Associate an identity provider configuration to a cluster.</p>
 *         <p>If you want to authenticate identities using an identity provider, you can create an
 *             identity provider configuration and associate it to your cluster. After configuring
 *             authentication to your cluster you can create Kubernetes <code>roles</code> and
 *                 <code>clusterroles</code> to assign permissions to the roles, and then bind the
 *             roles to the identities using Kubernetes <code>rolebindings</code> and
 *                 <code>clusterrolebindings</code>. For more information see <a href="https://kubernetes.io/docs/reference/access-authn-authz/rbac/">Using RBAC
 *                 Authorization</a> in the Kubernetes documentation.</p>
 */
export class AssociateIdentityProviderConfigCommand extends $Command<
  AssociateIdentityProviderConfigCommandInput,
  AssociateIdentityProviderConfigCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "AssociateIdentityProviderConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateIdentityProviderConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateIdentityProviderConfigResponse.filterSensitiveLog,
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
