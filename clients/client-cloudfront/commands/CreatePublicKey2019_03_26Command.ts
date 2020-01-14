import {
  CloudFrontClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFrontClient";
import { CreatePublicKeyRequest, CreatePublicKeyResult } from "../models/index";
import {
  deserializeAws_restXmlCreatePublicKey2019_03_26Command,
  serializeAws_restXmlCreatePublicKey2019_03_26Command
} from "../protocols/Aws_restXml";
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type CreatePublicKey2019_03_26CommandInput = CreatePublicKeyRequest;
export type CreatePublicKey2019_03_26CommandOutput = CreatePublicKeyResult;

export class CreatePublicKey2019_03_26Command extends $Command<
  CreatePublicKey2019_03_26CommandInput,
  CreatePublicKey2019_03_26CommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePublicKey2019_03_26CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreatePublicKey2019_03_26CommandInput,
    CreatePublicKey2019_03_26CommandOutput
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
    input: CreatePublicKey2019_03_26CommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlCreatePublicKey2019_03_26Command(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreatePublicKey2019_03_26CommandOutput> {
    return deserializeAws_restXmlCreatePublicKey2019_03_26Command(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
