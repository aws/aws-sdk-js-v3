import {
  CloudSearchClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CloudSearchClient";
import {
  DefineAnalysisSchemeRequest,
  DefineAnalysisSchemeResponse
} from "../models/index";
import {
  deserializeAws_queryDefineAnalysisSchemeCommand,
  serializeAws_queryDefineAnalysisSchemeCommand
} from "../protocols/Aws_query";
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

export type DefineAnalysisSchemeCommandInput = DefineAnalysisSchemeRequest;
export type DefineAnalysisSchemeCommandOutput = DefineAnalysisSchemeResponse &
  __MetadataBearer;

export class DefineAnalysisSchemeCommand extends $Command<
  DefineAnalysisSchemeCommandInput,
  DefineAnalysisSchemeCommandOutput,
  CloudSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DefineAnalysisSchemeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DefineAnalysisSchemeCommandInput,
    DefineAnalysisSchemeCommandOutput
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
    input: DefineAnalysisSchemeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDefineAnalysisSchemeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DefineAnalysisSchemeCommandOutput> {
    return deserializeAws_queryDefineAnalysisSchemeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
