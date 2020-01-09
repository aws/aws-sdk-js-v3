import {
  KinesisClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisClient";
import { DeleteStreamInput } from "../models/index";
import {
  deserializeAws_json1_1DeleteStreamCommand,
  serializeAws_json1_1DeleteStreamCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
} from "@aws-sdk/types";

export type DeleteStreamCommandInput = DeleteStreamInput;
export type DeleteStreamCommandOutput = __MetadataBearer

export class DeleteStreamCommand extends $Command<DeleteStreamCommandInput, DeleteStreamCommandOutput, KinesisClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStreamCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteStreamCommandInput, DeleteStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    }
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteStreamCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteStreamCommandOutput> {
    return deserializeAws_json1_1DeleteStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
