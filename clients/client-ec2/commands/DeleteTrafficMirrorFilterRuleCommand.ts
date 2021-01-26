import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorFilterRuleRequest, DeleteTrafficMirrorFilterRuleResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteTrafficMirrorFilterRuleCommand,
  serializeAws_ec2DeleteTrafficMirrorFilterRuleCommand,
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

export type DeleteTrafficMirrorFilterRuleCommandInput = DeleteTrafficMirrorFilterRuleRequest;
export type DeleteTrafficMirrorFilterRuleCommandOutput = DeleteTrafficMirrorFilterRuleResult & __MetadataBearer;

/**
 * <p>Deletes the specified Traffic Mirror rule.</p>
 */
export class DeleteTrafficMirrorFilterRuleCommand extends $Command<
  DeleteTrafficMirrorFilterRuleCommandInput,
  DeleteTrafficMirrorFilterRuleCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTrafficMirrorFilterRuleCommandInput) {
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
  ): Handler<DeleteTrafficMirrorFilterRuleCommandInput, DeleteTrafficMirrorFilterRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTrafficMirrorFilterRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrafficMirrorFilterRuleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrafficMirrorFilterRuleResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTrafficMirrorFilterRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteTrafficMirrorFilterRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTrafficMirrorFilterRuleCommandOutput> {
    return deserializeAws_ec2DeleteTrafficMirrorFilterRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
