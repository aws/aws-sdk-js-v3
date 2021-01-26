import { ServiceInputTypes, ServiceOutputTypes, WorkLinkClientResolvedConfig } from "../WorkLinkClient";
import {
  DescribeWebsiteCertificateAuthorityRequest,
  DescribeWebsiteCertificateAuthorityResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand,
  serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand,
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

export type DescribeWebsiteCertificateAuthorityCommandInput = DescribeWebsiteCertificateAuthorityRequest;
export type DescribeWebsiteCertificateAuthorityCommandOutput = DescribeWebsiteCertificateAuthorityResponse &
  __MetadataBearer;

/**
 * <p>Provides information about the certificate authority.</p>
 */
export class DescribeWebsiteCertificateAuthorityCommand extends $Command<
  DescribeWebsiteCertificateAuthorityCommandInput,
  DescribeWebsiteCertificateAuthorityCommandOutput,
  WorkLinkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeWebsiteCertificateAuthorityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkLinkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWebsiteCertificateAuthorityCommandInput, DescribeWebsiteCertificateAuthorityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkLinkClient";
    const commandName = "DescribeWebsiteCertificateAuthorityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWebsiteCertificateAuthorityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeWebsiteCertificateAuthorityResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeWebsiteCertificateAuthorityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWebsiteCertificateAuthorityCommandOutput> {
    return deserializeAws_restJson1DescribeWebsiteCertificateAuthorityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
