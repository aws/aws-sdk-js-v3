import {
  KMSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KMSClient";
import {
  GenerateDataKeyPairRequest,
  GenerateDataKeyPairResponse
} from "../models/index";
import {
  deserializeAws_json1_1GenerateDataKeyPairCommand,
  serializeAws_json1_1GenerateDataKeyPairCommand
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

export type GenerateDataKeyPairCommandInput = GenerateDataKeyPairRequest;
export type GenerateDataKeyPairCommandOutput = GenerateDataKeyPairResponse &
  __MetadataBearer;

export class GenerateDataKeyPairCommand extends $Command<
  GenerateDataKeyPairCommandInput,
  GenerateDataKeyPairCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateDataKeyPairCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GenerateDataKeyPairCommandInput,
    GenerateDataKeyPairCommandOutput
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
    input: GenerateDataKeyPairCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateDataKeyPairCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GenerateDataKeyPairCommandOutput> {
    return deserializeAws_json1_1GenerateDataKeyPairCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
