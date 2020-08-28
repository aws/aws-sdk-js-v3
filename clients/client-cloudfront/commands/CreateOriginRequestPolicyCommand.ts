import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateOriginRequestPolicyRequest, CreateOriginRequestPolicyResult } from "../models/index";
import {
  deserializeAws_restXmlCreateOriginRequestPolicyCommand,
  serializeAws_restXmlCreateOriginRequestPolicyCommand,
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

export type CreateOriginRequestPolicyCommandInput = CreateOriginRequestPolicyRequest;
export type CreateOriginRequestPolicyCommandOutput = CreateOriginRequestPolicyResult & __MetadataBearer;

export class CreateOriginRequestPolicyCommand extends $Command<
  CreateOriginRequestPolicyCommandInput,
  CreateOriginRequestPolicyCommandOutput,
  CloudFrontClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateOriginRequestPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateOriginRequestPolicyCommandInput, CreateOriginRequestPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateOriginRequestPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateOriginRequestPolicyResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateOriginRequestPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlCreateOriginRequestPolicyCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateOriginRequestPolicyCommandOutput> {
    return deserializeAws_restXmlCreateOriginRequestPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
