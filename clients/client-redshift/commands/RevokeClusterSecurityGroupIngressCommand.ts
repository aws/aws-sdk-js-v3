import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RevokeClusterSecurityGroupIngressMessage, RevokeClusterSecurityGroupIngressResult } from "../models/models_1";
import {
  deserializeAws_queryRevokeClusterSecurityGroupIngressCommand,
  serializeAws_queryRevokeClusterSecurityGroupIngressCommand,
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

export type RevokeClusterSecurityGroupIngressCommandInput = RevokeClusterSecurityGroupIngressMessage;
export type RevokeClusterSecurityGroupIngressCommandOutput = RevokeClusterSecurityGroupIngressResult & __MetadataBearer;

/**
 * <p>Revokes an ingress rule in an Amazon Redshift security group for a previously authorized
 *             IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>.
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export class RevokeClusterSecurityGroupIngressCommand extends $Command<
  RevokeClusterSecurityGroupIngressCommandInput,
  RevokeClusterSecurityGroupIngressCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeClusterSecurityGroupIngressCommandInput) {
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
  ): Handler<RevokeClusterSecurityGroupIngressCommandInput, RevokeClusterSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RevokeClusterSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeClusterSecurityGroupIngressMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeClusterSecurityGroupIngressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RevokeClusterSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRevokeClusterSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeClusterSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryRevokeClusterSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
