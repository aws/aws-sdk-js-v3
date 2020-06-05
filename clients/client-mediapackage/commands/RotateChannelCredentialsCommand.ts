import {
  MediaPackageClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MediaPackageClient";
import {
  RotateChannelCredentialsRequest,
  RotateChannelCredentialsResponse
} from "../models/index";
import {
  deserializeAws_restJson1RotateChannelCredentialsCommand,
  serializeAws_restJson1RotateChannelCredentialsCommand
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

export type RotateChannelCredentialsCommandInput = RotateChannelCredentialsRequest;
export type RotateChannelCredentialsCommandOutput = RotateChannelCredentialsResponse &
  __MetadataBearer;

export class RotateChannelCredentialsCommand extends $Command<
  RotateChannelCredentialsCommandInput,
  RotateChannelCredentialsCommandOutput,
  MediaPackageClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RotateChannelCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RotateChannelCredentialsCommandInput,
    RotateChannelCredentialsCommandOutput
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
    input: RotateChannelCredentialsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RotateChannelCredentialsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RotateChannelCredentialsCommandOutput> {
    return deserializeAws_restJson1RotateChannelCredentialsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
