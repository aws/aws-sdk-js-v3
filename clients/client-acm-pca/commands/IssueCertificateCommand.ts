import {
  ACMPCAClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ACMPCAClient";
import {
  IssueCertificateRequest,
  IssueCertificateResponse
} from "../models/index";
import {
  deserializeAws_json1_1IssueCertificateCommand,
  serializeAws_json1_1IssueCertificateCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type IssueCertificateCommandInput = IssueCertificateRequest;
export type IssueCertificateCommandOutput = IssueCertificateResponse &
  __MetadataBearer;

export class IssueCertificateCommand extends $Command<
  IssueCertificateCommandInput,
  IssueCertificateCommandOutput,
  ACMPCAClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: IssueCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ACMPCAClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<IssueCertificateCommandInput, IssueCertificateCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: IssueCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1IssueCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<IssueCertificateCommandOutput> {
    return deserializeAws_json1_1IssueCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
