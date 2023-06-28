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
import { DescribeStaleSecurityGroupsRequest, DescribeStaleSecurityGroupsResult } from "../models/models_4";
import { de_DescribeStaleSecurityGroupsCommand, se_DescribeStaleSecurityGroupsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStaleSecurityGroupsCommand}.
 */
export interface DescribeStaleSecurityGroupsCommandInput extends DescribeStaleSecurityGroupsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStaleSecurityGroupsCommand}.
 */
export interface DescribeStaleSecurityGroupsCommandOutput extends DescribeStaleSecurityGroupsResult, __MetadataBearer {}

/**
 * @public
 * <p>[VPC only] Describes the stale security group rules for security groups in a specified VPC.
 *           Rules are stale when they reference a deleted security group in the same VPC or in a peer VPC,
 *           or if they reference a security group in a peer VPC for which the VPC peering connection has
 *           been deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeStaleSecurityGroupsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeStaleSecurityGroupsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeStaleSecurityGroupsRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStaleSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStaleSecurityGroupsResult
 * //   NextToken: "STRING_VALUE",
 * //   StaleSecurityGroupSet: [ // StaleSecurityGroupSet
 * //     { // StaleSecurityGroup
 * //       Description: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       StaleIpPermissions: [ // StaleIpPermissionSet
 * //         { // StaleIpPermission
 * //           FromPort: Number("int"),
 * //           IpProtocol: "STRING_VALUE",
 * //           IpRanges: [ // IpRanges
 * //             "STRING_VALUE",
 * //           ],
 * //           PrefixListIds: [ // PrefixListIdSet
 * //             "STRING_VALUE",
 * //           ],
 * //           ToPort: Number("int"),
 * //           UserIdGroupPairs: [ // UserIdGroupPairSet
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
 * //       StaleIpPermissionsEgress: [
 * //         {
 * //           FromPort: Number("int"),
 * //           IpProtocol: "STRING_VALUE",
 * //           IpRanges: [
 * //             "STRING_VALUE",
 * //           ],
 * //           PrefixListIds: [
 * //             "STRING_VALUE",
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
 * //       VpcId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeStaleSecurityGroupsCommandInput - {@link DescribeStaleSecurityGroupsCommandInput}
 * @returns {@link DescribeStaleSecurityGroupsCommandOutput}
 * @see {@link DescribeStaleSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeStaleSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeStaleSecurityGroupsCommand extends $Command<
  DescribeStaleSecurityGroupsCommandInput,
  DescribeStaleSecurityGroupsCommandOutput,
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
  constructor(readonly input: DescribeStaleSecurityGroupsCommandInput) {
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
  ): Handler<DescribeStaleSecurityGroupsCommandInput, DescribeStaleSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStaleSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeStaleSecurityGroupsCommand";
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
  private serialize(input: DescribeStaleSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStaleSecurityGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStaleSecurityGroupsCommandOutput> {
    return de_DescribeStaleSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
