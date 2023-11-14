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

import {
  AuthorizeClusterSecurityGroupIngressMessage,
  AuthorizeClusterSecurityGroupIngressResult,
} from "../models/models_0";
import {
  de_AuthorizeClusterSecurityGroupIngressCommand,
  se_AuthorizeClusterSecurityGroupIngressCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AuthorizeClusterSecurityGroupIngressCommand}.
 */
export interface AuthorizeClusterSecurityGroupIngressCommandInput extends AuthorizeClusterSecurityGroupIngressMessage {}
/**
 * @public
 *
 * The output of {@link AuthorizeClusterSecurityGroupIngressCommand}.
 */
export interface AuthorizeClusterSecurityGroupIngressCommandOutput
  extends AuthorizeClusterSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether
 *             the application accessing your cluster is running on the Internet or an Amazon EC2
 *             instance, you can authorize inbound access to either a Classless Interdomain Routing
 *             (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as
 *             many as 20 ingress rules to an Amazon Redshift security group.</p>
 *          <p>If you authorize access to an Amazon EC2 security group, specify
 *                 <i>EC2SecurityGroupName</i> and
 *                 <i>EC2SecurityGroupOwnerId</i>. The Amazon EC2 security group and
 *             Amazon Redshift cluster must be in the same Amazon Web Services Region. </p>
 *          <p>If you authorize access to a CIDR/IP address range, specify
 *                 <i>CIDRIP</i>. For an overview of CIDR blocks, see the Wikipedia
 *             article on <a href="http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">Classless Inter-Domain Routing</a>. </p>
 *          <p>You must also associate the security group with a cluster so that clients running
 *             on these IP addresses or the EC2 instance are authorized to connect to the cluster. For
 *             information about managing security groups, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Working with Security
 *                 Groups</a> in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AuthorizeClusterSecurityGroupIngressCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // AuthorizeClusterSecurityGroupIngressMessage
 *   ClusterSecurityGroupName: "STRING_VALUE", // required
 *   CIDRIP: "STRING_VALUE",
 *   EC2SecurityGroupName: "STRING_VALUE",
 *   EC2SecurityGroupOwnerId: "STRING_VALUE",
 * };
 * const command = new AuthorizeClusterSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // AuthorizeClusterSecurityGroupIngressResult
 * //   ClusterSecurityGroup: { // ClusterSecurityGroup
 * //     ClusterSecurityGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     EC2SecurityGroups: [ // EC2SecurityGroupList
 * //       { // EC2SecurityGroup
 * //         Status: "STRING_VALUE",
 * //         EC2SecurityGroupName: "STRING_VALUE",
 * //         EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     IPRanges: [ // IPRangeList
 * //       { // IPRange
 * //         Status: "STRING_VALUE",
 * //         CIDRIP: "STRING_VALUE",
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param AuthorizeClusterSecurityGroupIngressCommandInput - {@link AuthorizeClusterSecurityGroupIngressCommandInput}
 * @returns {@link AuthorizeClusterSecurityGroupIngressCommandOutput}
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link AuthorizeClusterSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthorizationAlreadyExistsFault} (client fault)
 *  <p>The specified CIDR block or EC2 security group is already authorized for the
 *             specified cluster security group.</p>
 *
 * @throws {@link AuthorizationQuotaExceededFault} (client fault)
 *  <p>The authorization quota for the cluster security group has been reached.</p>
 *
 * @throws {@link ClusterSecurityGroupNotFoundFault} (client fault)
 *  <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 *
 * @throws {@link InvalidClusterSecurityGroupStateFault} (client fault)
 *  <p>The state of the cluster security group is not <code>available</code>. </p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class AuthorizeClusterSecurityGroupIngressCommand extends $Command<
  AuthorizeClusterSecurityGroupIngressCommandInput,
  AuthorizeClusterSecurityGroupIngressCommandOutput,
  RedshiftClientResolvedConfig
> {
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
  constructor(readonly input: AuthorizeClusterSecurityGroupIngressCommandInput) {
    super();
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "AuthorizeClusterSecurityGroupIngress",
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
    input: AuthorizeClusterSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AuthorizeClusterSecurityGroupIngressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeClusterSecurityGroupIngressCommandOutput> {
    return de_AuthorizeClusterSecurityGroupIngressCommand(output, context);
  }
}
