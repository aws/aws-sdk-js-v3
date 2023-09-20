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
import { DescribeTrafficMirrorTargetsRequest, DescribeTrafficMirrorTargetsResult } from "../models/models_4";
import { de_DescribeTrafficMirrorTargetsCommand, se_DescribeTrafficMirrorTargetsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrafficMirrorTargetsCommand}.
 */
export interface DescribeTrafficMirrorTargetsCommandInput extends DescribeTrafficMirrorTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrafficMirrorTargetsCommand}.
 */
export interface DescribeTrafficMirrorTargetsCommandOutput
  extends DescribeTrafficMirrorTargetsResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Information about one or more Traffic Mirror targets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorTargetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorTargetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTrafficMirrorTargetsRequest
 *   TrafficMirrorTargetIds: [ // TrafficMirrorTargetIdList
 *     "STRING_VALUE",
 *   ],
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
 * const command = new DescribeTrafficMirrorTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrafficMirrorTargetsResult
 * //   TrafficMirrorTargets: [ // TrafficMirrorTargetSet
 * //     { // TrafficMirrorTarget
 * //       TrafficMirrorTargetId: "STRING_VALUE",
 * //       NetworkInterfaceId: "STRING_VALUE",
 * //       NetworkLoadBalancerArn: "STRING_VALUE",
 * //       Type: "network-interface" || "network-load-balancer" || "gateway-load-balancer-endpoint",
 * //       Description: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       GatewayLoadBalancerEndpointId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTrafficMirrorTargetsCommandInput - {@link DescribeTrafficMirrorTargetsCommandInput}
 * @returns {@link DescribeTrafficMirrorTargetsCommandOutput}
 * @see {@link DescribeTrafficMirrorTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorTargetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTrafficMirrorTargetsCommand extends $Command<
  DescribeTrafficMirrorTargetsCommandInput,
  DescribeTrafficMirrorTargetsCommandOutput,
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
  constructor(readonly input: DescribeTrafficMirrorTargetsCommandInput) {
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
  ): Handler<DescribeTrafficMirrorTargetsCommandInput, DescribeTrafficMirrorTargetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrafficMirrorTargetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTrafficMirrorTargetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeTrafficMirrorTargets",
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
  private serialize(input: DescribeTrafficMirrorTargetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTrafficMirrorTargetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrafficMirrorTargetsCommandOutput> {
    return de_DescribeTrafficMirrorTargetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
