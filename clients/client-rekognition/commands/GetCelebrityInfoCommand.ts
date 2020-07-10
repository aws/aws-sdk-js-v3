import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { GetCelebrityInfoRequest, GetCelebrityInfoResponse } from "../models/index";
import {
  deserializeAws_json1_1GetCelebrityInfoCommand,
  serializeAws_json1_1GetCelebrityInfoCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type GetCelebrityInfoCommandInput = GetCelebrityInfoRequest;
export type GetCelebrityInfoCommandOutput = GetCelebrityInfoResponse & __MetadataBearer;

export class GetCelebrityInfoCommand extends $Command<
  GetCelebrityInfoCommandInput,
  GetCelebrityInfoCommandOutput,
  RekognitionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCelebrityInfoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCelebrityInfoCommandInput, GetCelebrityInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCelebrityInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCelebrityInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCelebrityInfoCommandOutput> {
    return deserializeAws_json1_1GetCelebrityInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
