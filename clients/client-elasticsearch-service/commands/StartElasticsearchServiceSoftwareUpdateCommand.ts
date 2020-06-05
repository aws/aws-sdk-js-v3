import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../ElasticsearchServiceClient";
import {
  StartElasticsearchServiceSoftwareUpdateRequest,
  StartElasticsearchServiceSoftwareUpdateResponse
} from "../models/index";
import {
  deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand,
  serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand
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

export type StartElasticsearchServiceSoftwareUpdateCommandInput = StartElasticsearchServiceSoftwareUpdateRequest;
export type StartElasticsearchServiceSoftwareUpdateCommandOutput = StartElasticsearchServiceSoftwareUpdateResponse &
  __MetadataBearer;

export class StartElasticsearchServiceSoftwareUpdateCommand extends $Command<
  StartElasticsearchServiceSoftwareUpdateCommandInput,
  StartElasticsearchServiceSoftwareUpdateCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: StartElasticsearchServiceSoftwareUpdateCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    StartElasticsearchServiceSoftwareUpdateCommandInput,
    StartElasticsearchServiceSoftwareUpdateCommandOutput
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
    input: StartElasticsearchServiceSoftwareUpdateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartElasticsearchServiceSoftwareUpdateCommandOutput> {
    return deserializeAws_restJson1StartElasticsearchServiceSoftwareUpdateCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
