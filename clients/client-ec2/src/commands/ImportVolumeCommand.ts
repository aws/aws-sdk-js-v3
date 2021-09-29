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

export interface ImportVolumeCommandInput extends ImportVolumeRequest {}
export interface ImportVolumeCommandOutput extends ImportVolumeResult, __MetadataBearer {}

/**
 * <p>Creates an import volume task using metadata from the specified disk image.</p>
 *          <p>This API action supports only single-volume VMs. To import multi-volume VMs, use
 *    <a>ImportImage</a> instead. To import a disk to a snapshot, use
 *    <a>ImportSnapshot</a> instead.</p>
 *          <p>This API action is not supported by the Command Line Interface (CLI). For
 *    information about using the Amazon EC2 CLI, which is deprecated, see <a href="https://awsdocs.s3.amazonaws.com/EC2/ec2-clt.pdf#importing-your-volumes-into-amazon-ebs">Importing Disks to Amazon EBS</a> in the <i>Amazon EC2 CLI Reference</i> PDF file.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportVolumeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportVolumeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportVolumeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportVolumeCommandInput} for command's `input` shape.
 * @see {@link ImportVolumeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
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
