import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportImageRequest, ImportImageResult } from "../models/models_4";
import { deserializeAws_ec2ImportImageCommand, serializeAws_ec2ImportImageCommand } from "../protocols/Aws_ec2";
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

export type ImportImageCommandInput = ImportImageRequest;
export type ImportImageCommandOutput = ImportImageResult & __MetadataBearer;

/**
 * <p>Import single or multi-volume disk images or EBS snapshots into an Amazon Machine Image (AMI). For more
 *    information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmimport-image-import.html">Importing a VM as an
 *     Image Using VM Import/Export</a> in the <i>VM Import/Export User Guide</i>.</p>
 */
export class ImportImageCommand extends $Command<
  ImportImageCommandInput,
  ImportImageCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportImageCommandInput) {
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
  ): Handler<ImportImageCommandInput, ImportImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ImportImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportImageCommandOutput> {
    return deserializeAws_ec2ImportImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
