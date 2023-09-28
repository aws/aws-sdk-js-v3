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
import { DescribeVerifiedAccessEndpointsRequest, DescribeVerifiedAccessEndpointsResult } from "../models/models_4";
import {
  de_DescribeVerifiedAccessEndpointsCommand,
  se_DescribeVerifiedAccessEndpointsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessEndpointsCommand}.
 */
export interface DescribeVerifiedAccessEndpointsCommandInput extends DescribeVerifiedAccessEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessEndpointsCommand}.
 */
export interface DescribeVerifiedAccessEndpointsCommandOutput
  extends DescribeVerifiedAccessEndpointsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Amazon Web Services Verified Access endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessEndpointsRequest
 *   VerifiedAccessEndpointIds: [ // VerifiedAccessEndpointIdList
 *     "STRING_VALUE",
 *   ],
 *   VerifiedAccessInstanceId: "STRING_VALUE",
 *   VerifiedAccessGroupId: "STRING_VALUE",
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
 *   DryRun: true || false,
 * };
 * const command = new DescribeVerifiedAccessEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedAccessEndpointsResult
 * //   VerifiedAccessEndpoints: [ // VerifiedAccessEndpointList
 * //     { // VerifiedAccessEndpoint
 * //       VerifiedAccessInstanceId: "STRING_VALUE",
 * //       VerifiedAccessGroupId: "STRING_VALUE",
 * //       VerifiedAccessEndpointId: "STRING_VALUE",
 * //       ApplicationDomain: "STRING_VALUE",
 * //       EndpointType: "load-balancer" || "network-interface",
 * //       AttachmentType: "vpc",
 * //       DomainCertificateArn: "STRING_VALUE",
 * //       EndpointDomain: "STRING_VALUE",
 * //       DeviceValidationDomain: "STRING_VALUE",
 * //       SecurityGroupIds: [ // SecurityGroupIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       LoadBalancerOptions: { // VerifiedAccessEndpointLoadBalancerOptions
 * //         Protocol: "http" || "https",
 * //         Port: Number("int"),
 * //         LoadBalancerArn: "STRING_VALUE",
 * //         SubnetIds: [ // VerifiedAccessEndpointSubnetIdList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       NetworkInterfaceOptions: { // VerifiedAccessEndpointEniOptions
 * //         NetworkInterfaceId: "STRING_VALUE",
 * //         Protocol: "http" || "https",
 * //         Port: Number("int"),
 * //       },
 * //       Status: { // VerifiedAccessEndpointStatus
 * //         Code: "pending" || "active" || "updating" || "deleting" || "deleted",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Description: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       LastUpdatedTime: "STRING_VALUE",
 * //       DeletionTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //         CustomerManagedKeyEnabled: true || false,
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedAccessEndpointsCommandInput - {@link DescribeVerifiedAccessEndpointsCommandInput}
 * @returns {@link DescribeVerifiedAccessEndpointsCommandOutput}
 * @see {@link DescribeVerifiedAccessEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVerifiedAccessEndpointsCommand extends $Command<
  DescribeVerifiedAccessEndpointsCommandInput,
  DescribeVerifiedAccessEndpointsCommandOutput,
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
  constructor(readonly input: DescribeVerifiedAccessEndpointsCommandInput) {
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
  ): Handler<DescribeVerifiedAccessEndpointsCommandInput, DescribeVerifiedAccessEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVerifiedAccessEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVerifiedAccessEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeVerifiedAccessEndpoints",
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
    input: DescribeVerifiedAccessEndpointsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeVerifiedAccessEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVerifiedAccessEndpointsCommandOutput> {
    return de_DescribeVerifiedAccessEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
