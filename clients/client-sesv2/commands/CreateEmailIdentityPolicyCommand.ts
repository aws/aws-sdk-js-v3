import { SESv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESv2Client";
import { CreateEmailIdentityPolicyRequest, CreateEmailIdentityPolicyResponse } from "../models/index";
import {
  deserializeAws_restJson1CreateEmailIdentityPolicyCommand,
  serializeAws_restJson1CreateEmailIdentityPolicyCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateEmailIdentityPolicyCommandInput = CreateEmailIdentityPolicyRequest;
export type CreateEmailIdentityPolicyCommandOutput = CreateEmailIdentityPolicyResponse & __MetadataBearer;

export class CreateEmailIdentityPolicyCommand extends $Command<
  CreateEmailIdentityPolicyCommandInput,
  CreateEmailIdentityPolicyCommandOutput,
  SESv2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateEmailIdentityPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEmailIdentityPolicyCommandInput, CreateEmailIdentityPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateEmailIdentityPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEmailIdentityPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEmailIdentityPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateEmailIdentityPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateEmailIdentityPolicyCommandOutput> {
    return deserializeAws_restJson1CreateEmailIdentityPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
