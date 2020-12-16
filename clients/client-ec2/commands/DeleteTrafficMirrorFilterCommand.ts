import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorFilterRequest, DeleteTrafficMirrorFilterResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteTrafficMirrorFilterCommand,
  serializeAws_ec2DeleteTrafficMirrorFilterCommand,
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

export type DeleteTrafficMirrorFilterCommandInput = DeleteTrafficMirrorFilterRequest;
export type DeleteTrafficMirrorFilterCommandOutput = DeleteTrafficMirrorFilterResult & __MetadataBearer;

/**
 * <p>Deletes the specified Traffic Mirror filter.</p>
 *          <p>You cannot delete a Traffic Mirror filter that is in use by a Traffic Mirror session.</p>
 */
export class DeleteTrafficMirrorFilterCommand extends $Command<
  DeleteTrafficMirrorFilterCommandInput,
  DeleteTrafficMirrorFilterCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTrafficMirrorFilterCommandInput) {
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
  ): Handler<DeleteTrafficMirrorFilterCommandInput, DeleteTrafficMirrorFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTrafficMirrorFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrafficMirrorFilterRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrafficMirrorFilterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTrafficMirrorFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteTrafficMirrorFilterCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTrafficMirrorFilterCommandOutput> {
    return deserializeAws_ec2DeleteTrafficMirrorFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
