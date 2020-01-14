import {
  CloudFrontClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFrontClient";
import { GetPublicKeyRequest, GetPublicKeyResult } from "../models/index";
import {
  deserializeAws_restXmlGetPublicKey2019_03_26Command,
  serializeAws_restXmlGetPublicKey2019_03_26Command
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

export type GetPublicKey2019_03_26CommandInput = GetPublicKeyRequest;
export type GetPublicKey2019_03_26CommandOutput = GetPublicKeyResult;

export class GetPublicKey2019_03_26Command extends $Command<
  GetPublicKey2019_03_26CommandInput,
  GetPublicKey2019_03_26CommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPublicKey2019_03_26CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetPublicKey2019_03_26CommandInput,
    GetPublicKey2019_03_26CommandOutput
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
    input: GetPublicKey2019_03_26CommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restXmlGetPublicKey2019_03_26Command(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetPublicKey2019_03_26CommandOutput> {
    return deserializeAws_restXmlGetPublicKey2019_03_26Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
