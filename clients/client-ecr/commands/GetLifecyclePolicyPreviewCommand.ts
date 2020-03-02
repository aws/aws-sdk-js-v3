import {
  ECRClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ECRClient";
import {
  GetLifecyclePolicyPreviewRequest,
  GetLifecyclePolicyPreviewResponse
} from "../models/index";
import {
  deserializeAws_json1_1GetLifecyclePolicyPreviewCommand,
  serializeAws_json1_1GetLifecyclePolicyPreviewCommand
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

export type GetLifecyclePolicyPreviewCommandInput = GetLifecyclePolicyPreviewRequest;
export type GetLifecyclePolicyPreviewCommandOutput = GetLifecyclePolicyPreviewResponse &
  __MetadataBearer;

export class GetLifecyclePolicyPreviewCommand extends $Command<
  GetLifecyclePolicyPreviewCommandInput,
  GetLifecyclePolicyPreviewCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetLifecyclePolicyPreviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetLifecyclePolicyPreviewCommandInput,
    GetLifecyclePolicyPreviewCommandOutput
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
    input: GetLifecyclePolicyPreviewCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLifecyclePolicyPreviewCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetLifecyclePolicyPreviewCommandOutput> {
    return deserializeAws_json1_1GetLifecyclePolicyPreviewCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
