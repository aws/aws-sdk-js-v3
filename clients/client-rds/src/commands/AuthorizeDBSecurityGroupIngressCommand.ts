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
  AuthorizeDBSecurityGroupIngressMessage,
  AuthorizeDBSecurityGroupIngressMessageFilterSensitiveLog,
  AuthorizeDBSecurityGroupIngressResult,
  AuthorizeDBSecurityGroupIngressResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand,
  serializeAws_queryAuthorizeDBSecurityGroupIngressCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface AuthorizeDBSecurityGroupIngressCommandInput extends AuthorizeDBSecurityGroupIngressMessage {}
export interface AuthorizeDBSecurityGroupIngressCommandOutput
  extends AuthorizeDBSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * <p>Enables ingress to a DBSecurityGroup using one of two forms of authorization. First, EC2 or VPC security
 *           groups can be added to the DBSecurityGroup if the application using the database is running on EC2 or VPC
 *           instances. Second, IP ranges are available if the application accessing your database is running on the internet.
 *           Required parameters for this API are one of CIDR range, EC2SecurityGroupId for VPC, or (EC2SecurityGroupOwnerId
 *           and either EC2SecurityGroupName or EC2SecurityGroupId for non-VPC).</p>
 *          <p>You can't authorize ingress from an EC2 security group in one Amazon Web Services Region to an Amazon RDS DB instance in
 *             another. You can't authorize ingress from a VPC security group in one VPC to an Amazon RDS DB instance in another.</p>
 *          <p>For an overview of CIDR ranges, go to the
 *             <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Wikipedia Tutorial</a>.</p>
 *          <note>
 *             <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that
 *                 you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
 *                 <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring –
 *                     Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC
 *                         into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, AuthorizeDBSecurityGroupIngressCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, AuthorizeDBSecurityGroupIngressCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new AuthorizeDBSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeDBSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeDBSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class AuthorizeDBSecurityGroupIngressCommand extends $Command<
  AuthorizeDBSecurityGroupIngressCommandInput,
  AuthorizeDBSecurityGroupIngressCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: AuthorizeDBSecurityGroupIngressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeDBSecurityGroupIngressCommandInput, AuthorizeDBSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeDBSecurityGroupIngressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "AuthorizeDBSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeDBSecurityGroupIngressMessageFilterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeDBSecurityGroupIngressResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AuthorizeDBSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAuthorizeDBSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeDBSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
