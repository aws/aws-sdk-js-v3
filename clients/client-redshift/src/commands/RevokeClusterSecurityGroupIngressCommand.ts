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

import { RevokeClusterSecurityGroupIngressMessage, RevokeClusterSecurityGroupIngressResult } from "../models/models_1";
import {
  de_RevokeClusterSecurityGroupIngressCommand,
  se_RevokeClusterSecurityGroupIngressCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RevokeClusterSecurityGroupIngressCommand}.
 */
export interface RevokeClusterSecurityGroupIngressCommandInput extends RevokeClusterSecurityGroupIngressMessage {}
/**
 * @public
 *
 * The output of {@link RevokeClusterSecurityGroupIngressCommand}.
 */
export interface RevokeClusterSecurityGroupIngressCommandOutput
  extends RevokeClusterSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Revokes an ingress rule in an Amazon Redshift security group for a previously authorized
 *             IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>.
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeClusterSecurityGroupIngressCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeClusterSecurityGroupIngressCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // RevokeClusterSecurityGroupIngressMessage
 *   ClusterSecurityGroupName: "STRING_VALUE", // required
 *   CIDRIP: "STRING_VALUE",
 *   EC2SecurityGroupName: "STRING_VALUE",
 *   EC2SecurityGroupOwnerId: "STRING_VALUE",
 * };
 * const command = new RevokeClusterSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * // { // RevokeClusterSecurityGroupIngressResult
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
 * @param RevokeClusterSecurityGroupIngressCommandInput - {@link RevokeClusterSecurityGroupIngressCommandInput}
 * @returns {@link RevokeClusterSecurityGroupIngressCommandOutput}
 * @see {@link RevokeClusterSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeClusterSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link AuthorizationNotFoundFault} (client fault)
 *  <p>The specified CIDR IP range or EC2 security group is not authorized for the
 *             specified cluster security group.</p>
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
export class RevokeClusterSecurityGroupIngressCommand extends $Command<
  RevokeClusterSecurityGroupIngressCommandInput,
  RevokeClusterSecurityGroupIngressCommandOutput,
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeClusterSecurityGroupIngressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RevokeClusterSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "RevokeClusterSecurityGroupIngress",
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
    input: RevokeClusterSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_RevokeClusterSecurityGroupIngressCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeClusterSecurityGroupIngressCommandOutput> {
    return de_RevokeClusterSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
