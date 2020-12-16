import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorTargetRequest, DeleteTrafficMirrorTargetResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteTrafficMirrorTargetCommand,
  serializeAws_ec2DeleteTrafficMirrorTargetCommand,
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

export type DeleteTrafficMirrorTargetCommandInput = DeleteTrafficMirrorTargetRequest;
export type DeleteTrafficMirrorTargetCommandOutput = DeleteTrafficMirrorTargetResult & __MetadataBearer;

/**
 * <p>Deletes the specified Traffic Mirror target.</p>
 *          <p>You cannot delete a Traffic Mirror target that is in use by a Traffic Mirror session.</p>
 */
export class DeleteTrafficMirrorTargetCommand extends $Command<
  DeleteTrafficMirrorTargetCommandInput,
  DeleteTrafficMirrorTargetCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTrafficMirrorTargetCommandInput) {
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
  ): Handler<DeleteTrafficMirrorTargetCommandInput, DeleteTrafficMirrorTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTrafficMirrorTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrafficMirrorTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrafficMirrorTargetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTrafficMirrorTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteTrafficMirrorTargetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTrafficMirrorTargetCommandOutput> {
    return deserializeAws_ec2DeleteTrafficMirrorTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
