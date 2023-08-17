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
import { DescribeVpcEndpointsRequest, DescribeVpcEndpointsResult } from "../models/models_5";
import { de_DescribeVpcEndpointsCommand, se_DescribeVpcEndpointsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointsCommand}.
 */
export interface DescribeVpcEndpointsCommandInput extends DescribeVpcEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointsCommand}.
 */
export interface DescribeVpcEndpointsCommandOutput extends DescribeVpcEndpointsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes your VPC endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointsRequest
 *   DryRun: true || false,
 *   VpcEndpointIds: [ // VpcEndpointIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointsResult
 * //   VpcEndpoints: [ // VpcEndpointSet
 * //     { // VpcEndpoint
 * //       VpcEndpointId: "STRING_VALUE",
 * //       VpcEndpointType: "Interface" || "Gateway" || "GatewayLoadBalancer",
 * //       VpcId: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       State: "PendingAcceptance" || "Pending" || "Available" || "Deleting" || "Deleted" || "Rejected" || "Failed" || "Expired",
 * //       PolicyDocument: "STRING_VALUE",
 * //       RouteTableIds: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Groups: [ // GroupIdentifierSet
 * //         { // SecurityGroupIdentifier
 * //           GroupId: "STRING_VALUE",
 * //           GroupName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IpAddressType: "ipv4" || "dualstack" || "ipv6",
 * //       DnsOptions: { // DnsOptions
 * //         DnsRecordIpType: "ipv4" || "dualstack" || "ipv6" || "service-defined",
 * //         PrivateDnsOnlyForInboundResolverEndpoint: true || false,
 * //       },
 * //       PrivateDnsEnabled: true || false,
 * //       RequesterManaged: true || false,
 * //       NetworkInterfaceIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DnsEntries: [ // DnsEntrySet
 * //         { // DnsEntry
 * //           DnsName: "STRING_VALUE",
 * //           HostedZoneId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       LastError: { // LastError
 * //         Message: "STRING_VALUE",
 * //         Code: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointsCommandInput - {@link DescribeVpcEndpointsCommandInput}
 * @returns {@link DescribeVpcEndpointsCommandOutput}
 * @see {@link DescribeVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVpcEndpointsCommand extends $Command<
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
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
  constructor(readonly input: DescribeVpcEndpointsCommandInput) {
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
  ): Handler<DescribeVpcEndpointsCommandInput, DescribeVpcEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointsCommand";
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
  private serialize(input: DescribeVpcEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVpcEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVpcEndpointsCommandOutput> {
    return de_DescribeVpcEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
