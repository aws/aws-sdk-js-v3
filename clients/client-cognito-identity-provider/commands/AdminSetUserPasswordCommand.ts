import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CognitoIdentityProviderClient";
import {
  AdminSetUserPasswordRequest,
  AdminSetUserPasswordResponse
} from "../models/index";
import {
  deserializeAws_json1_1AdminSetUserPasswordCommand,
  serializeAws_json1_1AdminSetUserPasswordCommand
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

export type AdminSetUserPasswordCommandInput = AdminSetUserPasswordRequest;
export type AdminSetUserPasswordCommandOutput = AdminSetUserPasswordResponse &
  __MetadataBearer;

export class AdminSetUserPasswordCommand extends $Command<
  AdminSetUserPasswordCommandInput,
  AdminSetUserPasswordCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminSetUserPasswordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AdminSetUserPasswordCommandInput,
    AdminSetUserPasswordCommandOutput
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
    input: AdminSetUserPasswordCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminSetUserPasswordCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AdminSetUserPasswordCommandOutput> {
    return deserializeAws_json1_1AdminSetUserPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
