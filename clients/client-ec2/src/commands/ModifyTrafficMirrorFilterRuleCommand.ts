// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTrafficMirrorFilterRuleRequest, ModifyTrafficMirrorFilterRuleResult } from "../models/models_6";
import {
  deserializeAws_ec2ModifyTrafficMirrorFilterRuleCommand,
  serializeAws_ec2ModifyTrafficMirrorFilterRuleCommand,
} from "../protocols/Aws_ec2";

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
 * const input = {
 *   TrafficMirrorFilterRuleId: "STRING_VALUE", // required
 *   TrafficDirection: "ingress" || "egress",
 *   RuleNumber: Number("int"),
 *   RuleAction: "accept" || "reject",
 *   DestinationPortRange: {
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
 *   RemoveFields: [
 *     "destination-port-range" || "source-port-range" || "protocol" || "description",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifyTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ModifyTrafficMirrorFilterRuleCommandInput - {@link ModifyTrafficMirrorFilterRuleCommandInput}
 * @returns {@link ModifyTrafficMirrorFilterRuleCommandOutput}
 * @see {@link ModifyTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link ModifyTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
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
    return serializeAws_ec2ModifyTrafficMirrorFilterRuleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTrafficMirrorFilterRuleCommandOutput> {
    return deserializeAws_ec2ModifyTrafficMirrorFilterRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
