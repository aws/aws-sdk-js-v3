import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListConferenceProvidersRequest, ListConferenceProvidersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListConferenceProvidersCommand,
  serializeAws_json1_1ListConferenceProvidersCommand,
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

export type ListConferenceProvidersCommandInput = ListConferenceProvidersRequest;
export type ListConferenceProvidersCommandOutput = ListConferenceProvidersResponse & __MetadataBearer;

/**
 * <p>Lists conference providers under a specific AWS account.</p>
 */
export class ListConferenceProvidersCommand extends $Command<
  ListConferenceProvidersCommandInput,
  ListConferenceProvidersCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListConferenceProvidersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListConferenceProvidersCommandInput, ListConferenceProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "ListConferenceProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListConferenceProvidersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConferenceProvidersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListConferenceProvidersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListConferenceProvidersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListConferenceProvidersCommandOutput> {
    return deserializeAws_json1_1ListConferenceProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
