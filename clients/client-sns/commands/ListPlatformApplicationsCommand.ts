import {
  SNSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SNSClient";
import {
  ListPlatformApplicationsInput,
  ListPlatformApplicationsResponse
} from "../models/index";
import {
  deserializeAws_queryListPlatformApplicationsCommand,
  serializeAws_queryListPlatformApplicationsCommand
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

export type ListPlatformApplicationsCommandInput = ListPlatformApplicationsInput;
export type ListPlatformApplicationsCommandOutput = ListPlatformApplicationsResponse &
  __MetadataBearer;

export class ListPlatformApplicationsCommand extends $Command<
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPlatformApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ListPlatformApplicationsCommandInput,
    ListPlatformApplicationsCommandOutput
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
    input: ListPlatformApplicationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryListPlatformApplicationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListPlatformApplicationsCommandOutput> {
    return deserializeAws_queryListPlatformApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
