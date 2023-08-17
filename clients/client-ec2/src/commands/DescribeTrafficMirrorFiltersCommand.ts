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
import { DescribeTrafficMirrorFiltersRequest, DescribeTrafficMirrorFiltersResult } from "../models/models_4";
import { de_DescribeTrafficMirrorFiltersCommand, se_DescribeTrafficMirrorFiltersCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTrafficMirrorFiltersCommand}.
 */
export interface DescribeTrafficMirrorFiltersCommandInput extends DescribeTrafficMirrorFiltersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTrafficMirrorFiltersCommand}.
 */
export interface DescribeTrafficMirrorFiltersCommandOutput
  extends DescribeTrafficMirrorFiltersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more Traffic Mirror filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeTrafficMirrorFiltersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeTrafficMirrorFiltersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeTrafficMirrorFiltersRequest
 *   TrafficMirrorFilterIds: [ // TrafficMirrorFilterIdList
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
 * const command = new DescribeTrafficMirrorFiltersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTrafficMirrorFiltersResult
 * //   TrafficMirrorFilters: [ // TrafficMirrorFilterSet
 * //     { // TrafficMirrorFilter
 * //       TrafficMirrorFilterId: "STRING_VALUE",
 * //       IngressFilterRules: [ // TrafficMirrorFilterRuleList
 * //         { // TrafficMirrorFilterRule
 * //           TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //           TrafficMirrorFilterId: "STRING_VALUE",
 * //           TrafficDirection: "ingress" || "egress",
 * //           RuleNumber: Number("int"),
 * //           RuleAction: "accept" || "reject",
 * //           Protocol: Number("int"),
 * //           DestinationPortRange: { // TrafficMirrorPortRange
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //           SourcePortRange: {
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //           DestinationCidrBlock: "STRING_VALUE",
 * //           SourceCidrBlock: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EgressFilterRules: [
 * //         {
 * //           TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //           TrafficMirrorFilterId: "STRING_VALUE",
 * //           TrafficDirection: "ingress" || "egress",
 * //           RuleNumber: Number("int"),
 * //           RuleAction: "accept" || "reject",
 * //           Protocol: Number("int"),
 * //           DestinationPortRange: {
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //           SourcePortRange: {
 * //             FromPort: Number("int"),
 * //             ToPort: Number("int"),
 * //           },
 * //           DestinationCidrBlock: "STRING_VALUE",
 * //           SourceCidrBlock: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       NetworkServices: [ // TrafficMirrorNetworkServiceList
 * //         "amazon-dns",
 * //       ],
 * //       Description: "STRING_VALUE",
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
 * @param DescribeTrafficMirrorFiltersCommandInput - {@link DescribeTrafficMirrorFiltersCommandInput}
 * @returns {@link DescribeTrafficMirrorFiltersCommandOutput}
 * @see {@link DescribeTrafficMirrorFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficMirrorFiltersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeTrafficMirrorFiltersCommand extends $Command<
  DescribeTrafficMirrorFiltersCommandInput,
  DescribeTrafficMirrorFiltersCommandOutput,
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
  constructor(readonly input: DescribeTrafficMirrorFiltersCommandInput) {
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
  ): Handler<DescribeTrafficMirrorFiltersCommandInput, DescribeTrafficMirrorFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrafficMirrorFiltersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeTrafficMirrorFiltersCommand";
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
  private serialize(input: DescribeTrafficMirrorFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTrafficMirrorFiltersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTrafficMirrorFiltersCommandOutput> {
    return de_DescribeTrafficMirrorFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
