import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTrafficMirrorFilterRuleRequest, CreateTrafficMirrorFilterRuleResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateTrafficMirrorFilterRuleCommand,
  serializeAws_ec2CreateTrafficMirrorFilterRuleCommand,
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

export type CreateTrafficMirrorFilterRuleCommandInput = CreateTrafficMirrorFilterRuleRequest;
export type CreateTrafficMirrorFilterRuleCommandOutput = CreateTrafficMirrorFilterRuleResult & __MetadataBearer;

/**
 * <p>Creates a Traffic Mirror filter rule. </p>
 *          <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p>
 *          <p>You need the Traffic Mirror filter ID when you create the rule.</p>
 */
export class CreateTrafficMirrorFilterRuleCommand extends $Command<
  CreateTrafficMirrorFilterRuleCommandInput,
  CreateTrafficMirrorFilterRuleCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTrafficMirrorFilterRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrafficMirrorFilterRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrafficMirrorFilterRuleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrafficMirrorFilterRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTrafficMirrorFilterRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTrafficMirrorFilterRuleCommandOutput> {
    return deserializeAws_ec2CreateTrafficMirrorFilterRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
