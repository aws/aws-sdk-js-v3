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

import { ClusterSecurityGroupMessage, DescribeClusterSecurityGroupsMessage } from "../models/models_0";
import {
  de_DescribeClusterSecurityGroupsCommand,
  se_DescribeClusterSecurityGroupsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterSecurityGroupsCommand}.
 */
export interface DescribeClusterSecurityGroupsCommandInput extends DescribeClusterSecurityGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterSecurityGroupsCommand}.
 */
export interface DescribeClusterSecurityGroupsCommandOutput extends ClusterSecurityGroupMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about Amazon Redshift security groups. If the name of a security
 *             group is specified, the response will contain only information about only that security
 *             group.</p>
 *          <p>
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>.</p>
 *          <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all security groups that match any combination of the specified keys and values. For
 *             example, if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all security groups that
 *             have any combination of those values are returned.</p>
 *          <p>If both tag keys and values are omitted from the request, security groups are
 *             returned regardless of whether they have tag keys or values associated with
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterSecurityGroupsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterSecurityGroupsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterSecurityGroupsMessage
 *   ClusterSecurityGroupName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   TagKeys: [ // TagKeyList
 *     "STRING_VALUE",
 *   ],
 *   TagValues: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeClusterSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ClusterSecurityGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   ClusterSecurityGroups: [ // ClusterSecurityGroups
 * //     { // ClusterSecurityGroup
 * //       ClusterSecurityGroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       EC2SecurityGroups: [ // EC2SecurityGroupList
 * //         { // EC2SecurityGroup
 * //           Status: "STRING_VALUE",
 * //           EC2SecurityGroupName: "STRING_VALUE",
 * //           EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //           Tags: [ // TagList
 * //             { // Tag
 * //               Key: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       IPRanges: [ // IPRangeList
 * //         { // IPRange
 * //           Status: "STRING_VALUE",
 * //           CIDRIP: "STRING_VALUE",
 * //           Tags: [
 * //             {
 * //               Key: "STRING_VALUE",
 * //               Value: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterSecurityGroupsCommandInput - {@link DescribeClusterSecurityGroupsCommandInput}
 * @returns {@link DescribeClusterSecurityGroupsCommandOutput}
 * @see {@link DescribeClusterSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterSecurityGroupNotFoundFault} (client fault)
 *  <p>The cluster security group name does not refer to an existing cluster security
 *             group.</p>
 *
 * @throws {@link InvalidTagFault} (client fault)
 *  <p>The tag is invalid.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class DescribeClusterSecurityGroupsCommand extends $Command<
  DescribeClusterSecurityGroupsCommandInput,
  DescribeClusterSecurityGroupsCommandOutput,
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
  constructor(readonly input: DescribeClusterSecurityGroupsCommandInput) {
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
  ): Handler<DescribeClusterSecurityGroupsCommandInput, DescribeClusterSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "DescribeClusterSecurityGroups",
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
  private serialize(input: DescribeClusterSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClusterSecurityGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterSecurityGroupsCommandOutput> {
    return de_DescribeClusterSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
