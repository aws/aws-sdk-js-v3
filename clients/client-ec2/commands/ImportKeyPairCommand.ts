import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportKeyPairRequest, ImportKeyPairResult } from "../models/models_4";
import { deserializeAws_ec2ImportKeyPairCommand, serializeAws_ec2ImportKeyPairCommand } from "../protocols/Aws_ec2";
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

export type ImportKeyPairCommandInput = ImportKeyPairRequest;
export type ImportKeyPairCommandOutput = ImportKeyPairResult & __MetadataBearer;

/**
 * <p>Imports the public key from an RSA key pair that you created with a third-party tool.
 *         Compare this with <a>CreateKeyPair</a>, in which AWS creates the key pair and gives the keys to you
 *         (AWS keeps a copy of the public key). With ImportKeyPair, you create the key pair and give AWS just the public key.
 *         The private key is never transferred between you and AWS.</p>
 *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a>
 * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class ImportKeyPairCommand extends $Command<
  ImportKeyPairCommandInput,
  ImportKeyPairCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportKeyPairCommandInput) {
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
  ): Handler<ImportKeyPairCommandInput, ImportKeyPairCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportKeyPairCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportKeyPairRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportKeyPairResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportKeyPairCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ImportKeyPairCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportKeyPairCommandOutput> {
    return deserializeAws_ec2ImportKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
