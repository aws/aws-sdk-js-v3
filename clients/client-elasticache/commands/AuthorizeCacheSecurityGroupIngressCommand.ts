import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  AuthorizeCacheSecurityGroupIngressMessage,
  AuthorizeCacheSecurityGroupIngressResult,
} from "../models/models_0";
import {
  deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand,
  serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand,
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

export type AuthorizeCacheSecurityGroupIngressCommandInput = AuthorizeCacheSecurityGroupIngressMessage;
export type AuthorizeCacheSecurityGroupIngressCommandOutput = AuthorizeCacheSecurityGroupIngressResult &
  __MetadataBearer;

/**
 * <p>Allows network ingress to a cache
 *             security group. Applications using ElastiCache must be running on Amazon EC2, and Amazon EC2
 *             security groups are used as the authorization mechanism.</p>
 *         <note>
 *             <p>You cannot authorize ingress from an Amazon EC2 security group in one region to an
 *             ElastiCache cluster in another region.</p>
 *          </note>
 */
export class AuthorizeCacheSecurityGroupIngressCommand extends $Command<
  AuthorizeCacheSecurityGroupIngressCommandInput,
  AuthorizeCacheSecurityGroupIngressCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeCacheSecurityGroupIngressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeCacheSecurityGroupIngressCommandInput, AuthorizeCacheSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "AuthorizeCacheSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeCacheSecurityGroupIngressMessage.filterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeCacheSecurityGroupIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AuthorizeCacheSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeCacheSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryAuthorizeCacheSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
