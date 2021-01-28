import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetPasswordDataRequest, GetPasswordDataResult } from "../models/models_4";
import { deserializeAws_ec2GetPasswordDataCommand, serializeAws_ec2GetPasswordDataCommand } from "../protocols/Aws_ec2";
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

export type GetPasswordDataCommandInput = GetPasswordDataRequest;
export type GetPasswordDataCommandOutput = GetPasswordDataResult & __MetadataBearer;

/**
 * <p>Retrieves the encrypted administrator password for a running Windows instance.</p>
 *         <p>The Windows password is generated at boot by the <code>EC2Config</code> service or
 *                 <code>EC2Launch</code> scripts (Windows Server 2016 and later). This usually only
 *             happens the first time an instance is launched. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/UsingConfig_WinAMI.html">EC2Config</a> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2launch.html">EC2Launch</a> in the
 *             Amazon Elastic Compute Cloud User Guide.</p>
 *         <p>For the <code>EC2Config</code> service, the password is not generated for rebundled
 *             AMIs unless <code>Ec2SetPassword</code> is enabled before bundling.</p>
 *         <p>The password is encrypted using the key pair that you specified when you launched the
 *             instance. You must provide the corresponding key pair file.</p>
 *         <p>When you launch an instance, password generation and encryption may take a few
 *             minutes. If you try to retrieve the password before it's available, the output returns
 *             an empty string. We recommend that you wait up to 15 minutes after launching an instance
 *             before trying to retrieve the generated password.</p>
 */
export class GetPasswordDataCommand extends $Command<
  GetPasswordDataCommandInput,
  GetPasswordDataCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPasswordDataCommandInput) {
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
  ): Handler<GetPasswordDataCommandInput, GetPasswordDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetPasswordDataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPasswordDataRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetPasswordDataResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPasswordDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetPasswordDataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPasswordDataCommandOutput> {
    return deserializeAws_ec2GetPasswordDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
