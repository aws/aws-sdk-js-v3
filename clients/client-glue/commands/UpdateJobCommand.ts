import {
  GlueClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlueClient";
import {
  UpdateJobRequest,
  UpdateJobResponse,
} from "../models/index";
import {
  deserializeAws_json1_1UpdateJobCommand,
  serializeAws_json1_1UpdateJobCommand,
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
} from "@aws-sdk/types";

export type UpdateJobCommandInput = UpdateJobRequest;
export type UpdateJobCommandOutput = UpdateJobResponse;

export class UpdateJobCommand extends $Command<UpdateJobCommandInput, UpdateJobCommandOutput, GlueClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobCommandInput, UpdateJobCommandOutput> {
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
    input: UpdateJobCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateJobCommandOutput> {
    return deserializeAws_json1_1UpdateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
