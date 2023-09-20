// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AuthorizeDBSecurityGroupIngressMessage, AuthorizeDBSecurityGroupIngressResult } from "../models/models_0";
import {
  de_AuthorizeDBSecurityGroupIngressCommand,
  se_AuthorizeDBSecurityGroupIngressCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeDBSecurityGroupIngressCommand}.
 */
export interface AuthorizeDBSecurityGroupIngressCommandInput extends AuthorizeDBSecurityGroupIngressMessage {}
/**
 * @public
 *
 * The output of {@link AuthorizeDBSecurityGroupIngressCommand}.
 */
export interface AuthorizeDBSecurityGroupIngressCommandOutput
  extends AuthorizeDBSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * @public
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
 * const input = { // AuthorizeDBSecurityGroupIngressMessage
 *   DBSecurityGroupName: "STRING_VALUE", // required
 *   CIDRIP: "STRING_VALUE",
 *   EC2SecurityGroupName: "STRING_VALUE",
 *   EC2SecurityGroupId: "STRING_VALUE",
 *   EC2SecurityGroupOwnerId: "STRING_VALUE",
 * };
 * const command = new AuthorizeDBSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeDBSecurityGroupIngressResult
 * //   DBSecurityGroup: { // DBSecurityGroup
 * //     OwnerId: "STRING_VALUE",
 * //     DBSecurityGroupName: "STRING_VALUE",
 * //     DBSecurityGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     EC2SecurityGroups: [ // EC2SecurityGroupList
 * //       { // EC2SecurityGroup
 * //         Status: "STRING_VALUE",
 * //         EC2SecurityGroupName: "STRING_VALUE",
 * //         EC2SecurityGroupId: "STRING_VALUE",
 * //         EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IPRanges: [ // IPRangeList
 * //       { // IPRange
 * //         Status: "STRING_VALUE",
 * //         CIDRIP: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBSecurityGroupArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AuthorizeDBSecurityGroupIngressCommandInput - {@link AuthorizeDBSecurityGroupIngressCommandInput}
 * @returns {@link AuthorizeDBSecurityGroupIngressCommandOutput}
 * @see {@link AuthorizeDBSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeDBSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link AuthorizationAlreadyExistsFault} (client fault)
 *  <p>The specified CIDR IP range or Amazon EC2 security group is already authorized for
 *             the specified DB security group.</p>
 *
 * @throws {@link AuthorizationQuotaExceededFault} (client fault)
 *  <p>The DB security group authorization quota has been reached.</p>
 *
 * @throws {@link DBSecurityGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.</p>
 *
 * @throws {@link InvalidDBSecurityGroupStateFault} (client fault)
 *  <p>The state of the DB security group doesn't allow deletion.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To authorize DB security group integress
 * ```javascript
 * // This example authorizes access to the specified security group by the specified CIDR block.
 * const input = {
 *   "CIDRIP": "203.0.113.5/32",
 *   "DBSecurityGroupName": "mydbsecuritygroup"
 * };
 * const command = new AuthorizeDBSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBSecurityGroup": {}
 * }
 * *\/
 * // example id: authorize-db-security-group-ingress-ebf9ab91-8912-4b07-a32e-ca150668164f
 * ```
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "AuthorizeDBSecurityGroupIngress",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: AuthorizeDBSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AuthorizeDBSecurityGroupIngressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeDBSecurityGroupIngressCommandOutput> {
    return de_AuthorizeDBSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
