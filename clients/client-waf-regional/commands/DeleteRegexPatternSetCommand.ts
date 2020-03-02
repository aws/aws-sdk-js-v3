import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFRegionalClientResolvedConfig
} from "../WAFRegionalClient";
import {
  DeleteRegexPatternSetRequest,
  DeleteRegexPatternSetResponse
} from "../models/index";
import {
  deserializeAws_json1_1DeleteRegexPatternSetCommand,
  serializeAws_json1_1DeleteRegexPatternSetCommand
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

export type DeleteRegexPatternSetCommandInput = DeleteRegexPatternSetRequest;
export type DeleteRegexPatternSetCommandOutput = DeleteRegexPatternSetResponse &
  __MetadataBearer;

export class DeleteRegexPatternSetCommand extends $Command<
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
  WAFRegionalClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRegexPatternSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFRegionalClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteRegexPatternSetCommandInput,
    DeleteRegexPatternSetCommandOutput
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
    input: DeleteRegexPatternSetCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRegexPatternSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRegexPatternSetCommandOutput> {
    return deserializeAws_json1_1DeleteRegexPatternSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
