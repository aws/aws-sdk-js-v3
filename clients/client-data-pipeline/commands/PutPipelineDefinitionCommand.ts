import {
  DataPipelineClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DataPipelineClient";
import {
  PutPipelineDefinitionInput,
  PutPipelineDefinitionOutput
} from "../models/index";
import {
  deserializeAws_json1_1PutPipelineDefinitionCommand,
  serializeAws_json1_1PutPipelineDefinitionCommand
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

export type PutPipelineDefinitionCommandInput = PutPipelineDefinitionInput;
export type PutPipelineDefinitionCommandOutput = PutPipelineDefinitionOutput &
  __MetadataBearer;

export class PutPipelineDefinitionCommand extends $Command<
  PutPipelineDefinitionCommandInput,
  PutPipelineDefinitionCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPipelineDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutPipelineDefinitionCommandInput,
    PutPipelineDefinitionCommandOutput
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
    input: PutPipelineDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPipelineDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutPipelineDefinitionCommandOutput> {
    return deserializeAws_json1_1PutPipelineDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
