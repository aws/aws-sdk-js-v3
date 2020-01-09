import {
  ACMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ACMClient";
import {
  ExportCertificateRequest,
  ExportCertificateResponse,
} from "../models/index";
import {
  deserializeAws_json1_1ExportCertificateCommand,
  serializeAws_json1_1ExportCertificateCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
} from "@aws-sdk/types";

export type ExportCertificateCommandInput = ExportCertificateRequest;
export type ExportCertificateCommandOutput = ExportCertificateResponse;

export class ExportCertificateCommand extends $Command<ExportCertificateCommandInput, ExportCertificateCommandOutput, ACMClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ExportCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportCertificateCommandInput, ExportCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ExportCertificateCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ExportCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ExportCertificateCommandOutput> {
    return deserializeAws_json1_1ExportCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
