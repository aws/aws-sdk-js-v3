import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesClientResolvedConfig
} from "../WorkSpacesClient";
import {
  CopyWorkspaceImageRequest,
  CopyWorkspaceImageResult
} from "../models/index";
import {
  deserializeAws_json1_1CopyWorkspaceImageCommand,
  serializeAws_json1_1CopyWorkspaceImageCommand
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

export type CopyWorkspaceImageCommandInput = CopyWorkspaceImageRequest;
export type CopyWorkspaceImageCommandOutput = CopyWorkspaceImageResult &
  __MetadataBearer;

export class CopyWorkspaceImageCommand extends $Command<
  CopyWorkspaceImageCommandInput,
  CopyWorkspaceImageCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyWorkspaceImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput> {
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
    input: CopyWorkspaceImageCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CopyWorkspaceImageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CopyWorkspaceImageCommandOutput> {
    return deserializeAws_json1_1CopyWorkspaceImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
