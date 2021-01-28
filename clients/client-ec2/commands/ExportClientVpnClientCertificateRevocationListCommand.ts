import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ExportClientVpnClientCertificateRevocationListRequest,
  ExportClientVpnClientCertificateRevocationListResult,
} from "../models/models_4";
import {
  deserializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand,
  serializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand,
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

export type ExportClientVpnClientCertificateRevocationListCommandInput = ExportClientVpnClientCertificateRevocationListRequest;
export type ExportClientVpnClientCertificateRevocationListCommandOutput = ExportClientVpnClientCertificateRevocationListResult &
  __MetadataBearer;

/**
 * <p>Downloads the client certificate revocation list for the specified Client VPN endpoint.</p>
 */
export class ExportClientVpnClientCertificateRevocationListCommand extends $Command<
  ExportClientVpnClientCertificateRevocationListCommandInput,
  ExportClientVpnClientCertificateRevocationListCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportClientVpnClientCertificateRevocationListCommandInput) {
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
  ): Handler<
    ExportClientVpnClientCertificateRevocationListCommandInput,
    ExportClientVpnClientCertificateRevocationListCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ExportClientVpnClientCertificateRevocationListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportClientVpnClientCertificateRevocationListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ExportClientVpnClientCertificateRevocationListResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ExportClientVpnClientCertificateRevocationListCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportClientVpnClientCertificateRevocationListCommandOutput> {
    return deserializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
