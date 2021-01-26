import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteTrafficMirrorSessionRequest, DeleteTrafficMirrorSessionResult } from "../models/models_2";
import {
  deserializeAws_ec2DeleteTrafficMirrorSessionCommand,
  serializeAws_ec2DeleteTrafficMirrorSessionCommand,
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

export type DeleteTrafficMirrorSessionCommandInput = DeleteTrafficMirrorSessionRequest;
export type DeleteTrafficMirrorSessionCommandOutput = DeleteTrafficMirrorSessionResult & __MetadataBearer;

/**
 * <p>Deletes the specified Traffic Mirror session.</p>
 */
export class DeleteTrafficMirrorSessionCommand extends $Command<
  DeleteTrafficMirrorSessionCommandInput,
  DeleteTrafficMirrorSessionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteTrafficMirrorSessionCommandInput) {
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
  ): Handler<DeleteTrafficMirrorSessionCommandInput, DeleteTrafficMirrorSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTrafficMirrorSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTrafficMirrorSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteTrafficMirrorSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteTrafficMirrorSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteTrafficMirrorSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTrafficMirrorSessionCommandOutput> {
    return deserializeAws_ec2DeleteTrafficMirrorSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
