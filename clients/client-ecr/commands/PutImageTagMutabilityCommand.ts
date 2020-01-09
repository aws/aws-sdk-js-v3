import {
  ECRClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ECRClient";
import {
  PutImageTagMutabilityRequest,
  PutImageTagMutabilityResponse,
} from "../models/index";
import {
  deserializeAws_json1_1PutImageTagMutabilityCommand,
  serializeAws_json1_1PutImageTagMutabilityCommand,
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

export type PutImageTagMutabilityCommandInput = PutImageTagMutabilityRequest;
export type PutImageTagMutabilityCommandOutput = PutImageTagMutabilityResponse;

export class PutImageTagMutabilityCommand extends $Command<PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput, ECRClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutImageTagMutabilityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutImageTagMutabilityCommandInput, PutImageTagMutabilityCommandOutput> {
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
    input: PutImageTagMutabilityCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutImageTagMutabilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PutImageTagMutabilityCommandOutput> {
    return deserializeAws_json1_1PutImageTagMutabilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
