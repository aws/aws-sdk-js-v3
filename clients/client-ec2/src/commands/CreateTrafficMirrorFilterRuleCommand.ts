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
import { CreateTrafficMirrorFilterRuleRequest, CreateTrafficMirrorFilterRuleResult } from "../models/models_2";
import { de_CreateTrafficMirrorFilterRuleCommand, se_CreateTrafficMirrorFilterRuleCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficMirrorFilterRuleCommand}.
 */
export interface CreateTrafficMirrorFilterRuleCommandInput extends CreateTrafficMirrorFilterRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficMirrorFilterRuleCommand}.
 */
export interface CreateTrafficMirrorFilterRuleCommandOutput
  extends CreateTrafficMirrorFilterRuleResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a Traffic Mirror filter rule.</p>
 *          <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p>
 *          <p>You need the Traffic Mirror filter ID when you create the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateTrafficMirrorFilterRuleRequest
 *   TrafficMirrorFilterId: "STRING_VALUE", // required
 *   TrafficDirection: "ingress" || "egress", // required
 *   RuleNumber: Number("int"), // required
 *   RuleAction: "accept" || "reject", // required
 *   DestinationPortRange: { // TrafficMirrorPortRangeRequest
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   SourcePortRange: {
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   Protocol: Number("int"),
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   SourceCidrBlock: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficMirrorFilterRuleResult
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
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrafficMirrorFilterRuleCommandInput - {@link CreateTrafficMirrorFilterRuleCommandInput}
 * @returns {@link CreateTrafficMirrorFilterRuleCommandOutput}
 * @see {@link CreateTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateTrafficMirrorFilterRuleCommand extends $Command<
  CreateTrafficMirrorFilterRuleCommandInput,
  CreateTrafficMirrorFilterRuleCommandOutput,
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
  constructor(readonly input: CreateTrafficMirrorFilterRuleCommandInput) {
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
  ): Handler<CreateTrafficMirrorFilterRuleCommandInput, CreateTrafficMirrorFilterRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTrafficMirrorFilterRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTrafficMirrorFilterRuleCommand";
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
  private serialize(input: CreateTrafficMirrorFilterRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTrafficMirrorFilterRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTrafficMirrorFilterRuleCommandOutput> {
    return de_CreateTrafficMirrorFilterRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
