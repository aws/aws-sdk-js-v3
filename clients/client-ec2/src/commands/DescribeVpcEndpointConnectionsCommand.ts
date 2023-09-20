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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVpcEndpointConnectionsRequest, DescribeVpcEndpointConnectionsResult } from "../models/models_5";
import {
  de_DescribeVpcEndpointConnectionsCommand,
  se_DescribeVpcEndpointConnectionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointConnectionsCommand}.
 */
export interface DescribeVpcEndpointConnectionsCommandInput extends DescribeVpcEndpointConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointConnectionsCommand}.
 */
export interface DescribeVpcEndpointConnectionsCommandOutput
  extends DescribeVpcEndpointConnectionsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the VPC endpoint connections to your VPC endpoint services, including any
 *             endpoints that are pending your acceptance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointConnectionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointConnectionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointConnectionsRequest
 *   DryRun: true || false,
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
 * const command = new DescribeVpcEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointConnectionsResult
 * //   VpcEndpointConnections: [ // VpcEndpointConnectionSet
 * //     { // VpcEndpointConnection
 * //       ServiceId: "STRING_VALUE",
 * //       VpcEndpointId: "STRING_VALUE",
 * //       VpcEndpointOwner: "STRING_VALUE",
 * //       VpcEndpointState: "PendingAcceptance" || "Pending" || "Available" || "Deleting" || "Deleted" || "Rejected" || "Failed" || "Expired",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       DnsEntries: [ // DnsEntrySet
 * //         { // DnsEntry
 * //           DnsName: "STRING_VALUE",
 * //           HostedZoneId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NetworkLoadBalancerArns: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       GatewayLoadBalancerArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //       IpAddressType: "ipv4" || "dualstack" || "ipv6",
 * //       VpcEndpointConnectionId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointConnectionsCommandInput - {@link DescribeVpcEndpointConnectionsCommandInput}
 * @returns {@link DescribeVpcEndpointConnectionsCommandOutput}
 * @see {@link DescribeVpcEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointConnectionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVpcEndpointConnectionsCommand extends $Command<
  DescribeVpcEndpointConnectionsCommandInput,
  DescribeVpcEndpointConnectionsCommandOutput,
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
  constructor(readonly input: DescribeVpcEndpointConnectionsCommandInput) {
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
  ): Handler<DescribeVpcEndpointConnectionsCommandInput, DescribeVpcEndpointConnectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcEndpointConnectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointConnectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeVpcEndpointConnections",
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
    input: DescribeVpcEndpointConnectionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeVpcEndpointConnectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointConnectionsCommandOutput> {
    return de_DescribeVpcEndpointConnectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
