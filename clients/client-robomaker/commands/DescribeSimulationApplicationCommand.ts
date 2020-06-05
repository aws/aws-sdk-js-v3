import {
  RoboMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../RoboMakerClient";
import {
  DescribeSimulationApplicationRequest,
  DescribeSimulationApplicationResponse
} from "../models/index";
import {
  deserializeAws_restJson1DescribeSimulationApplicationCommand,
  serializeAws_restJson1DescribeSimulationApplicationCommand
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

export type DescribeSimulationApplicationCommandInput = DescribeSimulationApplicationRequest;
export type DescribeSimulationApplicationCommandOutput = DescribeSimulationApplicationResponse &
  __MetadataBearer;

export class DescribeSimulationApplicationCommand extends $Command<
  DescribeSimulationApplicationCommandInput,
  DescribeSimulationApplicationCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeSimulationApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeSimulationApplicationCommandInput,
    DescribeSimulationApplicationCommandOutput
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
    input: DescribeSimulationApplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeSimulationApplicationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSimulationApplicationCommandOutput> {
    return deserializeAws_restJson1DescribeSimulationApplicationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
