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
import {
  DescribeVpcEndpointServiceConfigurationsRequest,
  DescribeVpcEndpointServiceConfigurationsResult,
} from "../models/models_5";
import {
  de_DescribeVpcEndpointServiceConfigurationsCommand,
  se_DescribeVpcEndpointServiceConfigurationsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEndpointServiceConfigurationsCommand}.
 */
export interface DescribeVpcEndpointServiceConfigurationsCommandInput
  extends DescribeVpcEndpointServiceConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEndpointServiceConfigurationsCommand}.
 */
export interface DescribeVpcEndpointServiceConfigurationsCommandOutput
  extends DescribeVpcEndpointServiceConfigurationsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the VPC endpoint service configurations in your account (your services).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEndpointServiceConfigurationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEndpointServiceConfigurationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEndpointServiceConfigurationsRequest
 *   DryRun: true || false,
 *   ServiceIds: [ // VpcEndpointServiceIdList
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
 * const command = new DescribeVpcEndpointServiceConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEndpointServiceConfigurationsResult
 * //   ServiceConfigurations: [ // ServiceConfigurationSet
 * //     { // ServiceConfiguration
 * //       ServiceType: [ // ServiceTypeDetailSet
 * //         { // ServiceTypeDetail
 * //           ServiceType: "Interface" || "Gateway" || "GatewayLoadBalancer",
 * //         },
 * //       ],
 * //       ServiceId: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       ServiceState: "Pending" || "Available" || "Deleting" || "Deleted" || "Failed",
 * //       AvailabilityZones: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AcceptanceRequired: true || false,
 * //       ManagesVpcEndpoints: true || false,
 * //       NetworkLoadBalancerArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //       GatewayLoadBalancerArns: [
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportedIpAddressTypes: [ // SupportedIpAddressTypes
 * //         "ipv4" || "ipv6",
 * //       ],
 * //       BaseEndpointDnsNames: [
 * //         "STRING_VALUE",
 * //       ],
 * //       PrivateDnsName: "STRING_VALUE",
 * //       PrivateDnsNameConfiguration: { // PrivateDnsNameConfiguration
 * //         State: "pendingVerification" || "verified" || "failed",
 * //         Type: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //       PayerResponsibility: "ServiceOwner",
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
 * @param DescribeVpcEndpointServiceConfigurationsCommandInput - {@link DescribeVpcEndpointServiceConfigurationsCommandInput}
 * @returns {@link DescribeVpcEndpointServiceConfigurationsCommandOutput}
 * @see {@link DescribeVpcEndpointServiceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEndpointServiceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVpcEndpointServiceConfigurationsCommand extends $Command<
  DescribeVpcEndpointServiceConfigurationsCommandInput,
  DescribeVpcEndpointServiceConfigurationsCommandOutput,
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
  constructor(readonly input: DescribeVpcEndpointServiceConfigurationsCommandInput) {
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
  ): Handler<
    DescribeVpcEndpointServiceConfigurationsCommandInput,
    DescribeVpcEndpointServiceConfigurationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeVpcEndpointServiceConfigurationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVpcEndpointServiceConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeVpcEndpointServiceConfigurations",
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
    input: DescribeVpcEndpointServiceConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeVpcEndpointServiceConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVpcEndpointServiceConfigurationsCommandOutput> {
    return de_DescribeVpcEndpointServiceConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
