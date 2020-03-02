import {
  SageMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SageMakerClient";
import {
  CreatePresignedDomainUrlRequest,
  CreatePresignedDomainUrlResponse
} from "../models/index";
import {
  deserializeAws_json1_1CreatePresignedDomainUrlCommand,
  serializeAws_json1_1CreatePresignedDomainUrlCommand
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

export type CreatePresignedDomainUrlCommandInput = CreatePresignedDomainUrlRequest;
export type CreatePresignedDomainUrlCommandOutput = CreatePresignedDomainUrlResponse &
  __MetadataBearer;

export class CreatePresignedDomainUrlCommand extends $Command<
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePresignedDomainUrlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    CreatePresignedDomainUrlCommandInput,
    CreatePresignedDomainUrlCommandOutput
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
    input: CreatePresignedDomainUrlCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePresignedDomainUrlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePresignedDomainUrlCommandOutput> {
    return deserializeAws_json1_1CreatePresignedDomainUrlCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
