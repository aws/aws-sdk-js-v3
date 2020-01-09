import {
  RoboMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RoboMakerClient";
import {
  ListSimulationApplicationsRequest,
  ListSimulationApplicationsResponse,
} from "../models/index";
import {
  deserializeAws_restJson1_1ListSimulationApplicationsCommand,
  serializeAws_restJson1_1ListSimulationApplicationsCommand,
} from "../protocols/Aws_restJson1_1";
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

export type ListSimulationApplicationsCommandInput = ListSimulationApplicationsRequest;
export type ListSimulationApplicationsCommandOutput = ListSimulationApplicationsResponse;

export class ListSimulationApplicationsCommand extends $Command<ListSimulationApplicationsCommandInput, ListSimulationApplicationsCommandOutput, RoboMakerClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSimulationApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSimulationApplicationsCommandInput, ListSimulationApplicationsCommandOutput> {
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
    input: ListSimulationApplicationsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListSimulationApplicationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListSimulationApplicationsCommandOutput> {
    return deserializeAws_restJson1_1ListSimulationApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
