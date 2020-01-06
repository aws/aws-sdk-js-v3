import {
  KinesisVideoClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KinesisVideoClient";
import {
  UpdateDataRetentionInput,
  UpdateDataRetentionOutput
} from "../models/index";
import {
  deserializeAws_restJson1_1UpdateDataRetentionCommand,
  serializeAws_restJson1_1UpdateDataRetentionCommand
} from "../protocols/Aws_restJson1_1";
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
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type UpdateDataRetentionCommandInput = UpdateDataRetentionInput;
export type UpdateDataRetentionCommandOutput = UpdateDataRetentionOutput;

export class UpdateDataRetentionCommand extends $Command<
  UpdateDataRetentionCommandInput,
  UpdateDataRetentionCommandOutput,
  KinesisVideoClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDataRetentionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    UpdateDataRetentionCommandInput,
    UpdateDataRetentionCommandOutput
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
    input: UpdateDataRetentionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateDataRetentionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateDataRetentionCommandOutput> {
    return deserializeAws_restJson1_1UpdateDataRetentionCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
