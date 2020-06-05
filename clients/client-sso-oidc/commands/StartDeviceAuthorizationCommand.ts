import {
  SSOOIDCClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SSOOIDCClient";
import {
  StartDeviceAuthorizationRequest,
  StartDeviceAuthorizationResponse
} from "../models/index";
import {
  deserializeAws_restJson1StartDeviceAuthorizationCommand,
  serializeAws_restJson1StartDeviceAuthorizationCommand
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

export type StartDeviceAuthorizationCommandInput = StartDeviceAuthorizationRequest;
export type StartDeviceAuthorizationCommandOutput = StartDeviceAuthorizationResponse &
  __MetadataBearer;

export class StartDeviceAuthorizationCommand extends $Command<
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
  SSOOIDCClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDeviceAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOOIDCClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartDeviceAuthorizationCommandInput,
    StartDeviceAuthorizationCommandOutput
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
    input: StartDeviceAuthorizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartDeviceAuthorizationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDeviceAuthorizationCommandOutput> {
    return deserializeAws_restJson1StartDeviceAuthorizationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
