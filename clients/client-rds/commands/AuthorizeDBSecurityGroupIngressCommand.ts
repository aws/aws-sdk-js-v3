import {
  RDSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RDSClient";
import {
  AuthorizeDBSecurityGroupIngressMessage,
  AuthorizeDBSecurityGroupIngressResult
} from "../models/index";
import {
  deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand,
  serializeAws_queryAuthorizeDBSecurityGroupIngressCommand
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

export type AuthorizeDBSecurityGroupIngressCommandInput = AuthorizeDBSecurityGroupIngressMessage;
export type AuthorizeDBSecurityGroupIngressCommandOutput = AuthorizeDBSecurityGroupIngressResult &
  __MetadataBearer;

export class AuthorizeDBSecurityGroupIngressCommand extends $Command<
  AuthorizeDBSecurityGroupIngressCommandInput,
  AuthorizeDBSecurityGroupIngressCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AuthorizeDBSecurityGroupIngressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AuthorizeDBSecurityGroupIngressCommandInput,
    AuthorizeDBSecurityGroupIngressCommandOutput
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
    input: AuthorizeDBSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryAuthorizeDBSecurityGroupIngressCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeDBSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryAuthorizeDBSecurityGroupIngressCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
