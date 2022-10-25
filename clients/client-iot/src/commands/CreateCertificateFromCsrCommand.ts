// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  CreateCertificateFromCsrRequest,
  CreateCertificateFromCsrRequestFilterSensitiveLog,
  CreateCertificateFromCsrResponse,
  CreateCertificateFromCsrResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateCertificateFromCsrCommand,
  serializeAws_restJson1CreateCertificateFromCsrCommand,
} from "../protocols/Aws_restJson1";

export interface CreateCertificateFromCsrCommandInput extends CreateCertificateFromCsrRequest {}
export interface CreateCertificateFromCsrCommandOutput extends CreateCertificateFromCsrResponse, __MetadataBearer {}

/**
 * <p>Creates an X.509 certificate using the specified certificate signing
 *          request.</p>
 *          <p>
 *             <b>Note:</b> The CSR must include a public key that is either an
 *          RSA key with a length of at least 2048 bits or an ECC key from NIST P-256, NIST P-384, or NIST P-512
 *          curves. For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms">
 *             Certificate signing algorithms supported by IoT</a>.</p>
 *          <p>
 *             <b>Note:</b> Reusing the same certificate signing request (CSR)
 *          results in a distinct certificate.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateCertificateFromCsr</a> action.</p>
 *
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
 *          to the aws iot create-certificate-from-csr Amazon Web Services CLI command to create a certificate for the
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCertificateFromCsrCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCertificateFromCsrCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateCertificateFromCsrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCertificateFromCsrCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateFromCsrCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class CreateCertificateFromCsrCommand extends $Command<
  CreateCertificateFromCsrCommandInput,
  CreateCertificateFromCsrCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCertificateFromCsrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateCertificateFromCsrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCertificateFromCsrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCertificateFromCsrResponseFilterSensitiveLog,
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
