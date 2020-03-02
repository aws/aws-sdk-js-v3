import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFV2ClientResolvedConfig
} from "../WAFV2Client";
import { CreateWebACLRequest, CreateWebACLResponse } from "../models/index";
import {
  deserializeAws_json1_1CreateWebACLCommand,
  serializeAws_json1_1CreateWebACLCommand
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

export type CreateWebACLCommandInput = CreateWebACLRequest;
export type CreateWebACLCommandOutput = CreateWebACLResponse & __MetadataBearer;

export class CreateWebACLCommand extends $Command<
  CreateWebACLCommandInput,
  CreateWebACLCommandOutput,
  WAFV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWebACLCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWebACLCommandInput, CreateWebACLCommandOutput> {
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
    input: CreateWebACLCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWebACLCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateWebACLCommandOutput> {
    return deserializeAws_json1_1CreateWebACLCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
