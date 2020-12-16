import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportInstanceRequest, ImportInstanceResult } from "../models/models_4";
import { deserializeAws_ec2ImportInstanceCommand, serializeAws_ec2ImportInstanceCommand } from "../protocols/Aws_ec2";
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

export type ImportInstanceCommandInput = ImportInstanceRequest;
export type ImportInstanceCommandOutput = ImportInstanceResult & __MetadataBearer;

/**
 * <p>Creates an import instance task using metadata from the specified disk image. <code>ImportInstance</code> only
 *    supports single-volume VMs. To import multi-volume VMs, use <a>ImportImage</a>. For more information, see
 *     <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a
 *     Virtual Machine Using the Amazon EC2 CLI</a>.</p>
 *          <p>For information about the import manifest referenced by this API action, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/manifest.html">VM Import Manifest</a>.</p>
 */
export class ImportInstanceCommand extends $Command<
  ImportInstanceCommandInput,
  ImportInstanceCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportInstanceCommandInput) {
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
  ): Handler<ImportInstanceCommandInput, ImportInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ImportInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportInstanceCommandOutput> {
    return deserializeAws_ec2ImportInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
