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
import { DescribeInstanceConnectEndpointsRequest, DescribeInstanceConnectEndpointsResult } from "../models/models_3";
import {
  de_DescribeInstanceConnectEndpointsCommand,
  se_DescribeInstanceConnectEndpointsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceConnectEndpointsCommand}.
 */
export interface DescribeInstanceConnectEndpointsCommandInput extends DescribeInstanceConnectEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceConnectEndpointsCommand}.
 */
export interface DescribeInstanceConnectEndpointsCommandOutput
  extends DescribeInstanceConnectEndpointsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified EC2 Instance Connect Endpoints or all EC2 Instance Connect Endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceConnectEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceConnectEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceConnectEndpointsRequest
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   InstanceConnectEndpointIds: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeInstanceConnectEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceConnectEndpointsResult
 * //   InstanceConnectEndpoints: [ // InstanceConnectEndpointSet
 * //     { // Ec2InstanceConnectEndpoint
 * //       OwnerId: "STRING_VALUE",
 * //       InstanceConnectEndpointId: "STRING_VALUE",
 * //       InstanceConnectEndpointArn: "STRING_VALUE",
 * //       State: "create-in-progress" || "create-complete" || "create-failed" || "delete-in-progress" || "delete-complete" || "delete-failed",
 * //       StateMessage: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       FipsDnsName: "STRING_VALUE",
 * //       NetworkInterfaceIds: [ // NetworkInterfaceIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       SubnetId: "STRING_VALUE",
 * //       PreserveClientIp: true || false,
 * //       SecurityGroupIds: [ // SecurityGroupIdSet
 * //         "STRING_VALUE",
 * //       ],
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
 * @param DescribeInstanceConnectEndpointsCommandInput - {@link DescribeInstanceConnectEndpointsCommandInput}
 * @returns {@link DescribeInstanceConnectEndpointsCommandOutput}
 * @see {@link DescribeInstanceConnectEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceConnectEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeInstanceConnectEndpointsCommand extends $Command<
  DescribeInstanceConnectEndpointsCommandInput,
  DescribeInstanceConnectEndpointsCommandOutput,
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
  constructor(readonly input: DescribeInstanceConnectEndpointsCommandInput) {
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
  ): Handler<DescribeInstanceConnectEndpointsCommandInput, DescribeInstanceConnectEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceConnectEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceConnectEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeInstanceConnectEndpoints",
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
    input: DescribeInstanceConnectEndpointsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeInstanceConnectEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceConnectEndpointsCommandOutput> {
    return de_DescribeInstanceConnectEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
