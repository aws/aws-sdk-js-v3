import {
  CloudFormationClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudFormationClient";
import {
  DeleteStackInstancesInput,
  DeleteStackInstancesOutput
} from "../models/index";
import {
  deserializeAws_queryDeleteStackInstancesCommand,
  serializeAws_queryDeleteStackInstancesCommand
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

export type DeleteStackInstancesCommandInput = DeleteStackInstancesInput;
export type DeleteStackInstancesCommandOutput = DeleteStackInstancesOutput &
  __MetadataBearer;

export class DeleteStackInstancesCommand extends $Command<
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteStackInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteStackInstancesCommandInput,
    DeleteStackInstancesCommandOutput
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
    input: DeleteStackInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteStackInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteStackInstancesCommandOutput> {
    return deserializeAws_queryDeleteStackInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
