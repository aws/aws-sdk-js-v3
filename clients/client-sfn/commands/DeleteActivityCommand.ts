import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { DeleteActivityInput, DeleteActivityOutput } from "../models/index";
import {
  deserializeAws_json1_0DeleteActivityCommand,
  serializeAws_json1_0DeleteActivityCommand,
} from "../protocols/Aws_json1_0";
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

export type DeleteActivityCommandInput = DeleteActivityInput;
export type DeleteActivityCommandOutput = DeleteActivityOutput & __MetadataBearer;

export class DeleteActivityCommand extends $Command<
  DeleteActivityCommandInput,
  DeleteActivityCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteActivityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteActivityCommandInput, DeleteActivityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteActivityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DeleteActivityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteActivityCommandOutput> {
    return deserializeAws_json1_0DeleteActivityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
