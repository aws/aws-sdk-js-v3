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
import { DescribeVpcEndpointServicesRequest, DescribeVpcEndpointServicesResult } from "../models/models_5";
import { de_DescribeVpcEndpointServicesCommand, se_DescribeVpcEndpointServicesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointServicesCommand}.
 */
export interface DescribeVpcEndpointServicesCommandInput extends DescribeVpcEndpointServicesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointServicesCommand}.
 */
export interface DescribeVpcEndpointServicesCommandOutput extends DescribeVpcEndpointServicesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes available services to which you can create a VPC endpoint.</p>
 *          <p>When the service provider and the consumer have different accounts in multiple
 *             Availability Zones, and the consumer views the VPC endpoint service information, the
 *             response only includes the common Availability Zones. For example, when the service
 *             provider account uses <code>us-east-1a</code> and <code>us-east-1c</code> and the
 *             consumer uses <code>us-east-1a</code> and <code>us-east-1b</code>, the response includes
 *             the VPC endpoint services in the common Availability Zone,
 *             <code>us-east-1a</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServicesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServicesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointServicesRequest
 *   DryRun: true || false,
 *   ServiceNames: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeVpcEndpointServicesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointServicesResult
 * //   ServiceNames: [ // ValueStringList
 * //     "STRING_VALUE",
 * //   ],
 * //   ServiceDetails: [ // ServiceDetailSet
 * //     { // ServiceDetail
 * //       ServiceName: "STRING_VALUE",
 * //       ServiceId: "STRING_VALUE",
 * //       ServiceType: [ // ServiceTypeDetailSet
 * //         { // ServiceTypeDetail
 * //           ServiceType: "Interface" || "Gateway" || "GatewayLoadBalancer",
 * //         },
 * //       ],
 * //       AvailabilityZones: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Owner: "STRING_VALUE",
 * //       BaseEndpointDnsNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //       PrivateDnsName: "STRING_VALUE",
 * //       PrivateDnsNames: [ // PrivateDnsDetailsSet
 * //         { // PrivateDnsDetails
 * //           PrivateDnsName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcEndpointPolicySupported: true || false,
 * //       AcceptanceRequired: true || false,
 * //       ManagesVpcEndpoints: true || false,
 * //       PayerResponsibility: "ServiceOwner",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrivateDnsNameVerificationState: "pendingVerification" || "verified" || "failed",
 * //       SupportedIpAddressTypes: [ // SupportedIpAddressTypes
 * //         "ipv4" || "ipv6",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVpcEndpointServicesCommandInput - {@link DescribeVpcEndpointServicesCommandInput}
 * @returns {@link DescribeVpcEndpointServicesCommandOutput}
 * @see {@link DescribeVpcEndpointServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServicesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVpcEndpointServicesCommand extends $Command<
  DescribeVpcEndpointServicesCommandInput,
  DescribeVpcEndpointServicesCommandOutput,
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
  constructor(readonly input: DescribeVpcEndpointServicesCommandInput) {
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
  ): Handler<DescribeVpcEndpointServicesCommandInput, DescribeVpcEndpointServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVpcEndpointServicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointServicesCommand";
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
  private serialize(input: DescribeVpcEndpointServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVpcEndpointServicesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointServicesCommandOutput> {
    return de_DescribeVpcEndpointServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
