import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MarketplaceMeteringClient";
import { RegisterUsageRequest, RegisterUsageResult } from "../models/index";
import {
  deserializeAws_json1_1RegisterUsageCommand,
  serializeAws_json1_1RegisterUsageCommand
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

export type RegisterUsageCommandInput = RegisterUsageRequest;
export type RegisterUsageCommandOutput = RegisterUsageResult & __MetadataBearer;

export class RegisterUsageCommand extends $Command<
  RegisterUsageCommandInput,
  RegisterUsageCommandOutput,
  MarketplaceMeteringClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterUsageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceMeteringClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterUsageCommandInput, RegisterUsageCommandOutput> {
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
    input: RegisterUsageCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterUsageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterUsageCommandOutput> {
    return deserializeAws_json1_1RegisterUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
