import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateCertificateFromCsrRequest, CreateCertificateFromCsrResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateCertificateFromCsrCommand,
  serializeAws_restJson1CreateCertificateFromCsrCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateCertificateFromCsrCommandInput = CreateCertificateFromCsrRequest;
export type CreateCertificateFromCsrCommandOutput = CreateCertificateFromCsrResponse & __MetadataBearer;

/**
 * <p>Creates an X.509 certificate using the specified certificate signing
 *          request.</p>
 *          <p>
 *             <b>Note:</b> The CSR must include a public key that is either an
 *          RSA key with a length of at least 2048 bits or an ECC key from NIST P-256 or NIST P-384
 *          curves. </p>
 *          <p>
 *             <b>Note:</b> Reusing the same certificate signing request (CSR)
 *          results in a distinct certificate.</p>
 *          <p>You can create multiple certificates in a batch by creating a directory, copying
 *          multiple .csr files into that directory, and then specifying that directory on the command
 *          line. The following commands show how to create a batch of certificates given a batch of
 *          CSRs.</p>
 *          <p>Assuming a set of CSRs are located inside of the directory
 *          my-csr-directory:</p>
 *
 *          <p>On Linux and OS X, the command is:</p>
 *
 *          <p>$ ls my-csr-directory/ | xargs -I {} aws iot create-certificate-from-csr
 *          --certificate-signing-request file://my-csr-directory/{}</p>
 *          <p>This command lists all of the CSRs in my-csr-directory and pipes each CSR file name
 *          to the aws iot create-certificate-from-csr AWS CLI command to create a certificate for the
 *          corresponding CSR.</p>
 *          <p>The aws iot create-certificate-from-csr part of the command can also be run in
 *          parallel to speed up the certificate creation process:</p>
 *          <p>$ ls my-csr-directory/ | xargs -P 10 -I {} aws iot create-certificate-from-csr
 *          --certificate-signing-request file://my-csr-directory/{}</p>
 *          <p>On Windows PowerShell, the command to create certificates for all CSRs in
 *          my-csr-directory is:</p>
 *          <p>> ls -Name my-csr-directory | %{aws iot create-certificate-from-csr
 *          --certificate-signing-request file://my-csr-directory/$_}</p>
 *          <p>On a Windows command prompt, the command to create certificates for all CSRs in
 *          my-csr-directory is:</p>
 *          <p>> forfiles /p my-csr-directory /c "cmd /c aws iot create-certificate-from-csr
 *          --certificate-signing-request file://@path"</p>
 */
export class CreateCertificateFromCsrCommand extends $Command<
  CreateCertificateFromCsrCommandInput,
  CreateCertificateFromCsrCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCertificateFromCsrCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCertificateFromCsrCommandInput, CreateCertificateFromCsrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateCertificateFromCsrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCertificateFromCsrRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateFromCsrResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCertificateFromCsrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCertificateFromCsrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCertificateFromCsrCommandOutput> {
    return deserializeAws_restJson1CreateCertificateFromCsrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
