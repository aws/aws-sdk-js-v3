import {
  KMSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KMSClient";
import {
  CancelKeyDeletionRequest,
  CancelKeyDeletionResponse,
} from "../models/index";
import {
  deserializeAws_json1_1CancelKeyDeletionCommand,
  serializeAws_json1_1CancelKeyDeletionCommand,
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

export type CancelKeyDeletionCommandInput = CancelKeyDeletionRequest;
export type CancelKeyDeletionCommandOutput = CancelKeyDeletionResponse;

export class CancelKeyDeletionCommand extends $Command<CancelKeyDeletionCommandInput, CancelKeyDeletionCommandOutput, KMSClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelKeyDeletionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelKeyDeletionCommandInput, CancelKeyDeletionCommandOutput> {
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
    input: CancelKeyDeletionCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelKeyDeletionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CancelKeyDeletionCommandOutput> {
    return deserializeAws_json1_1CancelKeyDeletionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
