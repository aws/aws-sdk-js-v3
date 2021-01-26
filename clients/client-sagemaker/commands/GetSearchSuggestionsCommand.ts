import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { GetSearchSuggestionsRequest, GetSearchSuggestionsResponse } from "../models/models_2";
import {
  deserializeAws_json1_1GetSearchSuggestionsCommand,
  serializeAws_json1_1GetSearchSuggestionsCommand,
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

export type GetSearchSuggestionsCommandInput = GetSearchSuggestionsRequest;
export type GetSearchSuggestionsCommandOutput = GetSearchSuggestionsResponse & __MetadataBearer;

/**
 * <p>An auto-complete API for the search functionality in the Amazon SageMaker console. It returns
 *       suggestions of possible matches for the property name to use in <code>Search</code>
 *       queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and
 *       <code>Metrics</code>.</p>
 */
export class GetSearchSuggestionsCommand extends $Command<
  GetSearchSuggestionsCommandInput,
  GetSearchSuggestionsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSearchSuggestionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSearchSuggestionsCommandInput, GetSearchSuggestionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "GetSearchSuggestionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSearchSuggestionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSearchSuggestionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSearchSuggestionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetSearchSuggestionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSearchSuggestionsCommandOutput> {
    return deserializeAws_json1_1GetSearchSuggestionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
