import {
  IoTThingsGraphClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../IoTThingsGraphClient";
import { GetEntitiesRequest, GetEntitiesResponse } from "../models/index";
import {
  deserializeAws_json1_1GetEntitiesCommand,
  serializeAws_json1_1GetEntitiesCommand
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

export type GetEntitiesCommandInput = GetEntitiesRequest;
export type GetEntitiesCommandOutput = GetEntitiesResponse & __MetadataBearer;

export class GetEntitiesCommand extends $Command<
  GetEntitiesCommandInput,
  GetEntitiesCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEntitiesCommandInput, GetEntitiesCommandOutput> {
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
    input: GetEntitiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetEntitiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEntitiesCommandOutput> {
    return deserializeAws_json1_1GetEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
