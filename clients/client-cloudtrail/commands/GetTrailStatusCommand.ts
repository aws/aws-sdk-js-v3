import {
  CloudTrailClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudTrailClient";
import { GetTrailStatusRequest, GetTrailStatusResponse } from "../models/index";
import {
  deserializeAws_json1_1GetTrailStatusCommand,
  serializeAws_json1_1GetTrailStatusCommand
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

export type GetTrailStatusCommandInput = GetTrailStatusRequest;
export type GetTrailStatusCommandOutput = GetTrailStatusResponse &
  __MetadataBearer;

export class GetTrailStatusCommand extends $Command<
  GetTrailStatusCommandInput,
  GetTrailStatusCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetTrailStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTrailStatusCommandInput, GetTrailStatusCommandOutput> {
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
    input: GetTrailStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetTrailStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTrailStatusCommandOutput> {
    return deserializeAws_json1_1GetTrailStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
