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
import { ModifyTrafficMirrorFilterRuleRequest, ModifyTrafficMirrorFilterRuleResult } from "../models/models_6";
import { de_ModifyTrafficMirrorFilterRuleCommand, se_ModifyTrafficMirrorFilterRuleCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyTrafficMirrorFilterRuleCommand}.
 */
export interface ModifyTrafficMirrorFilterRuleCommandInput extends ModifyTrafficMirrorFilterRuleRequest {}
/**
 * @public
 *
 * The output of {@link ModifyTrafficMirrorFilterRuleCommand}.
 */
export interface ModifyTrafficMirrorFilterRuleCommandOutput
  extends ModifyTrafficMirrorFilterRuleResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the specified Traffic Mirror rule.</p>
 *          <p>
 *             <code>DestinationCidrBlock</code> and <code>SourceCidrBlock</code> must both be an IPv4
 *          range or an IPv6 range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyTrafficMirrorFilterRuleRequest
 *   TrafficMirrorFilterRuleId: "STRING_VALUE", // required
 *   TrafficDirection: "ingress" || "egress",
 *   RuleNumber: Number("int"),
 *   RuleAction: "accept" || "reject",
 *   DestinationPortRange: { // TrafficMirrorPortRangeRequest
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   SourcePortRange: {
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   Protocol: Number("int"),
 *   DestinationCidrBlock: "STRING_VALUE",
 *   SourceCidrBlock: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   RemoveFields: [ // TrafficMirrorFilterRuleFieldList
 *     "destination-port-range" || "source-port-range" || "protocol" || "description",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifyTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTrafficMirrorFilterRuleResult
 * //   TrafficMirrorFilterRule: { // TrafficMirrorFilterRule
 * //     TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //     TrafficMirrorFilterId: "STRING_VALUE",
 * //     TrafficDirection: "ingress" || "egress",
 * //     RuleNumber: Number("int"),
 * //     RuleAction: "accept" || "reject",
 * //     Protocol: Number("int"),
 * //     DestinationPortRange: { // TrafficMirrorPortRange
 * //       FromPort: Number("int"),
 * //       ToPort: Number("int"),
 * //     },
 * //     SourcePortRange: {
 * //       FromPort: Number("int"),
 * //       ToPort: Number("int"),
 * //     },
 * //     DestinationCidrBlock: "STRING_VALUE",
 * //     SourceCidrBlock: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyTrafficMirrorFilterRuleCommandInput - {@link ModifyTrafficMirrorFilterRuleCommandInput}
 * @returns {@link ModifyTrafficMirrorFilterRuleCommandOutput}
 * @see {@link ModifyTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyTrafficMirrorFilterRuleCommand extends $Command<
  ModifyTrafficMirrorFilterRuleCommandInput,
  ModifyTrafficMirrorFilterRuleCommandOutput,
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
  constructor(readonly input: ModifyTrafficMirrorFilterRuleCommandInput) {
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
  ): Handler<ModifyTrafficMirrorFilterRuleCommandInput, ModifyTrafficMirrorFilterRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyTrafficMirrorFilterRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTrafficMirrorFilterRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyTrafficMirrorFilterRule",
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
  private serialize(input: ModifyTrafficMirrorFilterRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyTrafficMirrorFilterRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTrafficMirrorFilterRuleCommandOutput> {
    return de_ModifyTrafficMirrorFilterRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
