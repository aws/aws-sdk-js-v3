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

import {
  AuthorizeClusterSecurityGroupIngressMessage,
  AuthorizeClusterSecurityGroupIngressMessageFilterSensitiveLog,
  AuthorizeClusterSecurityGroupIngressResult,
  AuthorizeClusterSecurityGroupIngressResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand,
  serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface AuthorizeClusterSecurityGroupIngressCommandInput extends AuthorizeClusterSecurityGroupIngressMessage {}
export interface AuthorizeClusterSecurityGroupIngressCommandOutput
  extends AuthorizeClusterSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether
 *             the application accessing your cluster is running on the Internet or an Amazon EC2
 *             instance, you can authorize inbound access to either a Classless Interdomain Routing
 *             (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as
 *             many as 20 ingress rules to an Amazon Redshift security group.</p>
 *         <p>If you authorize access to an Amazon EC2 security group, specify
 *                 <i>EC2SecurityGroupName</i> and
 *                 <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and
 *             Amazon Redshift cluster must be in the same Amazon Web Services Region. </p>
 *         <p>If you authorize access to a CIDR/IP address range, specify
 *                 <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia
 *             article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>
 *         <p>You must also associate the security group with a cluster so that clients running
 *             on these IP addresses or the EC2 instance are authorized to connect to the cluster. For
 *             information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security
 *                 Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new AuthorizeClusterSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class AuthorizeClusterSecurityGroupIngressCommand extends $Command<
  AuthorizeClusterSecurityGroupIngressCommandInput,
  AuthorizeClusterSecurityGroupIngressCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: AuthorizeClusterSecurityGroupIngressCommandInput) {
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
  ): Handler<AuthorizeClusterSecurityGroupIngressCommandInput, AuthorizeClusterSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeClusterSecurityGroupIngressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AuthorizeClusterSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeClusterSecurityGroupIngressMessageFilterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeClusterSecurityGroupIngressResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AuthorizeClusterSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryAuthorizeClusterSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
