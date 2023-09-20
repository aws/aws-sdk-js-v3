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
import { DescribeAddressesRequest, DescribeAddressesResult } from "../models/models_3";
import { de_DescribeAddressesCommand, se_DescribeAddressesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAddressesCommand}.
 */
export interface DescribeAddressesCommandInput extends DescribeAddressesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAddressesCommand}.
 */
export interface DescribeAddressesCommandOutput extends DescribeAddressesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Elastic IP addresses or all of your Elastic IP addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAddressesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAddressesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeAddressesRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   PublicIps: [ // PublicIpStringList
 *     "STRING_VALUE",
 *   ],
 *   AllocationIds: [ // AllocationIdList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAddressesResult
 * //   Addresses: [ // AddressList
 * //     { // Address
 * //       InstanceId: "STRING_VALUE",
 * //       PublicIp: "STRING_VALUE",
 * //       AllocationId: "STRING_VALUE",
 * //       AssociationId: "STRING_VALUE",
 * //       Domain: "vpc" || "standard",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       NetworkInterfaceOwnerId: "STRING_VALUE",
 * //       PrivateIpAddress: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PublicIpv4Pool: "STRING_VALUE",
 * //       NetworkBorderGroup: "STRING_VALUE",
 * //       CustomerOwnedIp: "STRING_VALUE",
 * //       CustomerOwnedIpv4Pool: "STRING_VALUE",
 * //       CarrierIp: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAddressesCommandInput - {@link DescribeAddressesCommandInput}
 * @returns {@link DescribeAddressesCommandOutput}
 * @see {@link DescribeAddressesCommandInput} for command's `input` shape.
 * @see {@link DescribeAddressesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To describe your Elastic IP addresses
 * ```javascript
 * // This example describes your Elastic IP addresses.
 * const input = undefined;
 * const command = new DescribeAddressesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Addresses": [
 *     {
 *       "Domain": "standard",
 *       "InstanceId": "i-1234567890abcdef0",
 *       "PublicIp": "198.51.100.0"
 *     },
 *     {
 *       "AllocationId": "eipalloc-12345678",
 *       "AssociationId": "eipassoc-12345678",
 *       "Domain": "vpc",
 *       "InstanceId": "i-1234567890abcdef0",
 *       "NetworkInterfaceId": "eni-12345678",
 *       "NetworkInterfaceOwnerId": "123456789012",
 *       "PrivateIpAddress": "10.0.1.241",
 *       "PublicIp": "203.0.113.0"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-describe-addresses-1
 * ```
 *
 */
export class DescribeAddressesCommand extends $Command<
  DescribeAddressesCommandInput,
  DescribeAddressesCommandOutput,
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
  constructor(readonly input: DescribeAddressesCommandInput) {
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
  ): Handler<DescribeAddressesCommandInput, DescribeAddressesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAddressesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeAddressesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeAddresses",
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
  private serialize(input: DescribeAddressesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAddressesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAddressesCommandOutput> {
    return de_DescribeAddressesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
