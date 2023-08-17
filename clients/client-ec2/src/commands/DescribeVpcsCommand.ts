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
import { DescribeVpcsRequest, DescribeVpcsResult } from "../models/models_5";
import { de_DescribeVpcsCommand, se_DescribeVpcsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcsCommand}.
 */
export interface DescribeVpcsCommandInput extends DescribeVpcsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcsCommand}.
 */
export interface DescribeVpcsCommandOutput extends DescribeVpcsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your VPCs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   VpcIds: [ // VpcIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeVpcsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcsResult
 * //   Vpcs: [ // VpcList
 * //     { // Vpc
 * //       CidrBlock: "STRING_VALUE",
 * //       DhcpOptionsId: "STRING_VALUE",
 * //       State: "pending" || "available",
 * //       VpcId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       InstanceTenancy: "default" || "dedicated" || "host",
 * //       Ipv6CidrBlockAssociationSet: [ // VpcIpv6CidrBlockAssociationSet
 * //         { // VpcIpv6CidrBlockAssociation
 * //           AssociationId: "STRING_VALUE",
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //           Ipv6CidrBlockState: { // VpcCidrBlockState
 * //             State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //             StatusMessage: "STRING_VALUE",
 * //           },
 * //           NetworkBorderGroup: "STRING_VALUE",
 * //           Ipv6Pool: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CidrBlockAssociationSet: [ // VpcCidrBlockAssociationSet
 * //         { // VpcCidrBlockAssociation
 * //           AssociationId: "STRING_VALUE",
 * //           CidrBlock: "STRING_VALUE",
 * //           CidrBlockState: {
 * //             State: "associating" || "associated" || "disassociating" || "disassociated" || "failing" || "failed",
 * //             StatusMessage: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       IsDefault: true || false,
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
 * @param DescribeVpcsCommandInput - {@link DescribeVpcsCommandInput}
 * @returns {@link DescribeVpcsCommandOutput}
 * @see {@link DescribeVpcsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe a VPC
 * ```javascript
 * // This example describes the specified VPC.
 * const input = {
 *   "VpcIds": [
 *     "vpc-a01106c2"
 *   ]
 * };
 * const command = new DescribeVpcsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Vpcs": [
 *     {
 *       "CidrBlock": "10.0.0.0/16",
 *       "DhcpOptionsId": "dopt-7a8b9c2d",
 *       "InstanceTenancy": "default",
 *       "IsDefault": false,
 *       "State": "available",
 *       "Tags": [
 *         {
 *           "Key": "Name",
 *           "Value": "MyVPC"
 *         }
 *       ],
 *       "VpcId": "vpc-a01106c2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-vpcs-1
 * ```
 *
 */
export class DescribeVpcsCommand extends $Command<
  DescribeVpcsCommandInput,
  DescribeVpcsCommandOutput,
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
  constructor(readonly input: DescribeVpcsCommandInput) {
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
  ): Handler<DescribeVpcsCommandInput, DescribeVpcsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribeVpcsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcsCommand";
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
  private serialize(input: DescribeVpcsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVpcsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVpcsCommandOutput> {
    return de_DescribeVpcsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
