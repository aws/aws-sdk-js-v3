import {
  GreengrassClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../GreengrassClient";
import {
  ListGroupCertificateAuthoritiesRequest,
  ListGroupCertificateAuthoritiesResponse
} from "../models/index";
import {
  deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand,
  serializeAws_restJson1ListGroupCertificateAuthoritiesCommand
} from "../protocols/Aws_restJson1";
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

export type ListGroupCertificateAuthoritiesCommandInput = ListGroupCertificateAuthoritiesRequest;
export type ListGroupCertificateAuthoritiesCommandOutput = ListGroupCertificateAuthoritiesResponse &
  __MetadataBearer;

export class ListGroupCertificateAuthoritiesCommand extends $Command<
  ListGroupCertificateAuthoritiesCommandInput,
  ListGroupCertificateAuthoritiesCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListGroupCertificateAuthoritiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListGroupCertificateAuthoritiesCommandInput,
    ListGroupCertificateAuthoritiesCommandOutput
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
    input: ListGroupCertificateAuthoritiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListGroupCertificateAuthoritiesCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListGroupCertificateAuthoritiesCommandOutput> {
    return deserializeAws_restJson1ListGroupCertificateAuthoritiesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
