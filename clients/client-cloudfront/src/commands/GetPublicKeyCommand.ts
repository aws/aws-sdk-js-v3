import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetPublicKeyRequest, GetPublicKeyResult } from "../models/index";
import {
  deserializeAws_restXmlGetPublicKeyCommand,
  serializeAws_restXmlGetPublicKeyCommand,
} from "../protocols/Aws_restXml";
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

export type GetPublicKeyCommandInput = GetPublicKeyRequest;
export type GetPublicKeyCommandOutput = GetPublicKeyResult & __MetadataBearer;

export class GetPublicKeyCommand extends $Command<
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPublicKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPublicKeyCommandInput, GetPublicKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPublicKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetPublicKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPublicKeyCommandOutput> {
    return deserializeAws_restXmlGetPublicKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
