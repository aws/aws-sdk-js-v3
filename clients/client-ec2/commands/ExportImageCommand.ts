import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportImageRequest, ExportImageResult } from "../models/models_4";
import { deserializeAws_ec2ExportImageCommand, serializeAws_ec2ExportImageCommand } from "../protocols/Aws_ec2";
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

export type ExportImageCommandInput = ExportImageRequest;
export type ExportImageCommandOutput = ExportImageResult & __MetadataBearer;

/**
 * <p>Exports an Amazon Machine Image (AMI) to a VM file. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html">Exporting a VM Directory from an Amazon Machine Image
 *     (AMI)</a> in the <i>VM Import/Export User Guide</i>.</p>
 */
export class ExportImageCommand extends $Command<
  ExportImageCommandInput,
  ExportImageCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportImageCommandInput) {
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
  ): Handler<ExportImageCommandInput, ExportImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ExportImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ExportImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportImageCommandOutput> {
    return deserializeAws_ec2ExportImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
