import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTrafficMirrorFilterRuleRequest, ModifyTrafficMirrorFilterRuleResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyTrafficMirrorFilterRuleCommand,
  serializeAws_ec2ModifyTrafficMirrorFilterRuleCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type ModifyTrafficMirrorFilterRuleCommandInput = ModifyTrafficMirrorFilterRuleRequest;
export type ModifyTrafficMirrorFilterRuleCommandOutput = ModifyTrafficMirrorFilterRuleResult & __MetadataBearer;

/**
 * <p>Modifies the specified Traffic Mirror rule.</p>
 *          <p>
 *             <code>DestinationCidrBlock</code> and <code>SourceCidrBlock</code> must both be an IPv4
 *          range or an IPv6 range.</p>
 */
export class ModifyTrafficMirrorFilterRuleCommand extends $Command<
  ModifyTrafficMirrorFilterRuleCommandInput,
  ModifyTrafficMirrorFilterRuleCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTrafficMirrorFilterRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTrafficMirrorFilterRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyTrafficMirrorFilterRuleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyTrafficMirrorFilterRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyTrafficMirrorFilterRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTrafficMirrorFilterRuleCommandOutput> {
    return deserializeAws_ec2ModifyTrafficMirrorFilterRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
