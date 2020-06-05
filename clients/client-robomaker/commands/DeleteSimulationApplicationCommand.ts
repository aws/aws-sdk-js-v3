import {
  RoboMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RoboMakerClient";
import {
  DeleteSimulationApplicationRequest,
  DeleteSimulationApplicationResponse
} from "../models/index";
import {
  deserializeAws_restJson1DeleteSimulationApplicationCommand,
  serializeAws_restJson1DeleteSimulationApplicationCommand
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

export type DeleteSimulationApplicationCommandInput = DeleteSimulationApplicationRequest;
export type DeleteSimulationApplicationCommandOutput = DeleteSimulationApplicationResponse &
  __MetadataBearer;

export class DeleteSimulationApplicationCommand extends $Command<
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSimulationApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteSimulationApplicationCommandInput,
    DeleteSimulationApplicationCommandOutput
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
    input: DeleteSimulationApplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSimulationApplicationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSimulationApplicationCommandOutput> {
    return deserializeAws_restJson1DeleteSimulationApplicationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
