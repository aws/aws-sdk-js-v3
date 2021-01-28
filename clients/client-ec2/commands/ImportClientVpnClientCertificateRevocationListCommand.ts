import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ImportClientVpnClientCertificateRevocationListRequest,
  ImportClientVpnClientCertificateRevocationListResult,
} from "../models/models_4";
import {
  deserializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand,
  serializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand,
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

export type ImportClientVpnClientCertificateRevocationListCommandInput = ImportClientVpnClientCertificateRevocationListRequest;
export type ImportClientVpnClientCertificateRevocationListCommandOutput = ImportClientVpnClientCertificateRevocationListResult &
  __MetadataBearer;

/**
 * <p>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list.</p>
 * 		       <p>Uploading a client certificate revocation list resets existing client connections.</p>
 */
export class ImportClientVpnClientCertificateRevocationListCommand extends $Command<
  ImportClientVpnClientCertificateRevocationListCommandInput,
  ImportClientVpnClientCertificateRevocationListCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportClientVpnClientCertificateRevocationListCommandInput) {
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
    ImportClientVpnClientCertificateRevocationListCommandInput,
    ImportClientVpnClientCertificateRevocationListCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportClientVpnClientCertificateRevocationListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportClientVpnClientCertificateRevocationListRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportClientVpnClientCertificateRevocationListResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ImportClientVpnClientCertificateRevocationListCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ImportClientVpnClientCertificateRevocationListCommandOutput> {
    return deserializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
