import {
  SESClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SESClient";
import {
  VerifyDomainIdentityRequest,
  VerifyDomainIdentityResponse
} from "../models/index";
import {
  deserializeAws_queryVerifyDomainIdentityCommand,
  serializeAws_queryVerifyDomainIdentityCommand
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

export type VerifyDomainIdentityCommandInput = VerifyDomainIdentityRequest;
export type VerifyDomainIdentityCommandOutput = VerifyDomainIdentityResponse &
  __MetadataBearer;

export class VerifyDomainIdentityCommand extends $Command<
  VerifyDomainIdentityCommandInput,
  VerifyDomainIdentityCommandOutput,
  SESClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: VerifyDomainIdentityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    VerifyDomainIdentityCommandInput,
    VerifyDomainIdentityCommandOutput
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
    input: VerifyDomainIdentityCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryVerifyDomainIdentityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<VerifyDomainIdentityCommandOutput> {
    return deserializeAws_queryVerifyDomainIdentityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
