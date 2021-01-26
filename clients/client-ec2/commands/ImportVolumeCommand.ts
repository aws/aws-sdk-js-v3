import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportVolumeRequest, ImportVolumeResult } from "../models/models_4";
import { deserializeAws_ec2ImportVolumeCommand, serializeAws_ec2ImportVolumeCommand } from "../protocols/Aws_ec2";
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

export type ImportVolumeCommandInput = ImportVolumeRequest;
export type ImportVolumeCommandOutput = ImportVolumeResult & __MetadataBearer;

/**
 * <p>Creates an import volume task using metadata from the specified disk image.For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/importing-your-volumes-into-amazon-ebs.html">Importing
 *     Disks to Amazon EBS</a>.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 */
export class ImportVolumeCommand extends $Command<
  ImportVolumeCommandInput,
  ImportVolumeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportVolumeCommandInput) {
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
  ): Handler<ImportVolumeCommandInput, ImportVolumeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportVolumeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportVolumeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportVolumeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportVolumeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ImportVolumeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportVolumeCommandOutput> {
    return deserializeAws_ec2ImportVolumeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
