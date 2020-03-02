import {
  IAMClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IAMClient";
import {
  ListSigningCertificatesRequest,
  ListSigningCertificatesResponse
} from "../models/index";
import {
  deserializeAws_queryListSigningCertificatesCommand,
  serializeAws_queryListSigningCertificatesCommand
} from "../protocols/Aws_query";
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

export type ListSigningCertificatesCommandInput = ListSigningCertificatesRequest;
export type ListSigningCertificatesCommandOutput = ListSigningCertificatesResponse &
  __MetadataBearer;

export class ListSigningCertificatesCommand extends $Command<
  ListSigningCertificatesCommandInput,
  ListSigningCertificatesCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSigningCertificatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListSigningCertificatesCommandInput,
    ListSigningCertificatesCommandOutput
  > {
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
    input: ListSigningCertificatesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListSigningCertificatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSigningCertificatesCommandOutput> {
    return deserializeAws_queryListSigningCertificatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
