import {
  RoboMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RoboMakerClient";
import {
  ListRobotApplicationsRequest,
  ListRobotApplicationsResponse,
} from "../models/index";
import {
  deserializeAws_restJson1_1ListRobotApplicationsCommand,
  serializeAws_restJson1_1ListRobotApplicationsCommand,
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

export type ListRobotApplicationsCommandInput = ListRobotApplicationsRequest;
export type ListRobotApplicationsCommandOutput = ListRobotApplicationsResponse;

export class ListRobotApplicationsCommand extends $Command<ListRobotApplicationsCommandInput, ListRobotApplicationsCommandOutput, RoboMakerClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListRobotApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListRobotApplicationsCommandInput, ListRobotApplicationsCommandOutput> {
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
    input: ListRobotApplicationsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1ListRobotApplicationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<ListRobotApplicationsCommandOutput> {
    return deserializeAws_restJson1_1ListRobotApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
