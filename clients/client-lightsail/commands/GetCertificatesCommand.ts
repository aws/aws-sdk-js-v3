import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetCertificatesRequest, GetCertificatesResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetCertificatesCommand,
  serializeAws_json1_1GetCertificatesCommand,
} from "../protocols/Aws_json1_1";
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

export type GetCertificatesCommandInput = GetCertificatesRequest;
export type GetCertificatesCommandOutput = GetCertificatesResult & __MetadataBearer;

/**
 * <p>Returns information about one or more Amazon Lightsail SSL/TLS certificates.</p>
 *          <note>
 *             <p>To get a summary of a certificate, ommit <code>includeCertificateDetails</code> from
 *         your request. The response will include only the certificate Amazon Resource Name (ARN),
 *         certificate name, domain name, and tags.</p>
 *          </note>
 */
export class GetCertificatesCommand extends $Command<
  GetCertificatesCommandInput,
  GetCertificatesCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCertificatesCommandInput, GetCertificatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "GetCertificatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCertificatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetCertificatesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCertificatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCertificatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCertificatesCommandOutput> {
    return deserializeAws_json1_1GetCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
