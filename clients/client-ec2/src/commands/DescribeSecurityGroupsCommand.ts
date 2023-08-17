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
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeSecurityGroupsRequest, DescribeSecurityGroupsResult } from "../models/models_4";
import { de_DescribeSecurityGroupsCommand, se_DescribeSecurityGroupsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSecurityGroupsCommand}.
 */
export interface DescribeSecurityGroupsCommandInput extends DescribeSecurityGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSecurityGroupsCommand}.
 */
export interface DescribeSecurityGroupsCommandOutput extends DescribeSecurityGroupsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified security groups or all of your security groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSecurityGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSecurityGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeSecurityGroupsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   GroupIds: [ // GroupIdStringList
 *     "STRING_VALUE",
 *   ],
 *   GroupNames: [ // GroupNameStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSecurityGroupsResult
 * //   SecurityGroups: [ // SecurityGroupList
 * //     { // SecurityGroup
 * //       Description: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       IpPermissions: [ // IpPermissionList
 * //         { // IpPermission
 * //           FromPort: Number("int"),
 * //           IpProtocol: "STRING_VALUE",
 * //           IpRanges: [ // IpRangeList
 * //             { // IpRange
 * //               CidrIp: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Ipv6Ranges: [ // Ipv6RangeList
 * //             { // Ipv6Range
 * //               CidrIpv6: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //           PrefixListIds: [ // PrefixListIdList
 * //             { // PrefixListId
 * //               Description: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ToPort: Number("int"),
 * //           UserIdGroupPairs: [ // UserIdGroupPairList
 * //             { // UserIdGroupPair
 * //               Description: "STRING_VALUE",
 * //               GroupId: "STRING_VALUE",
 * //               GroupName: "STRING_VALUE",
 * //               PeeringStatus: "STRING_VALUE",
 * //               UserId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               VpcPeeringConnectionId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       IpPermissionsEgress: [
 * //         {
 * //           FromPort: Number("int"),
 * //           IpProtocol: "STRING_VALUE",
 * //           IpRanges: [
 * //             {
 * //               CidrIp: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //           Ipv6Ranges: [
 * //             {
 * //               CidrIpv6: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //             },
 * //           ],
 * //           PrefixListIds: [
 * //             {
 * //               Description: "STRING_VALUE",
 * //               PrefixListId: "STRING_VALUE",
 * //             },
 * //           ],
 * //           ToPort: Number("int"),
 * //           UserIdGroupPairs: [
 * //             {
 * //               Description: "STRING_VALUE",
 * //               GroupId: "STRING_VALUE",
 * //               GroupName: "STRING_VALUE",
 * //               PeeringStatus: "STRING_VALUE",
 * //               UserId: "STRING_VALUE",
 * //               VpcId: "STRING_VALUE",
 * //               VpcPeeringConnectionId: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSecurityGroupsCommandInput - {@link DescribeSecurityGroupsCommandInput}
 * @returns {@link DescribeSecurityGroupsCommandOutput}
 * @see {@link DescribeSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe a security group
 * ```javascript
 * // This example describes the specified security group.
 * const input = {
 *   "GroupIds": [
 *     "sg-903004f8"
 *   ]
 * };
 * const command = new DescribeSecurityGroupsCommand(input);
 * await client.send(command);
 * // example id: to-describe-a-security-group-1529354426314
 * ```
 *
 * @example To describe a tagged security group
 * ```javascript
 * // This example describes the security groups that include the specified tag (Purpose=test).
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "tag:Purpose",
 *       "Values": [
 *         "test"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeSecurityGroupsCommand(input);
 * await client.send(command);
 * // example id: to-describe-a-tagged-security-group-1529354553880
 * ```
 *
 */
export class DescribeSecurityGroupsCommand extends $Command<
  DescribeSecurityGroupsCommandInput,
  DescribeSecurityGroupsCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSecurityGroupsCommandInput, DescribeSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSecurityGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeSecurityGroupsCommandOutput> {
    return de_DescribeSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
