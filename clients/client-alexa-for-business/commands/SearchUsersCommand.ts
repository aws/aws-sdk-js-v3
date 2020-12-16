import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchUsersRequest, SearchUsersResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchUsersCommand,
  serializeAws_json1_1SearchUsersCommand,
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

export type SearchUsersCommandInput = SearchUsersRequest;
export type SearchUsersCommandOutput = SearchUsersResponse & __MetadataBearer;

/**
 * <p>Searches users and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 */
export class SearchUsersCommand extends $Command<
  SearchUsersCommandInput,
  SearchUsersCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchUsersCommandInput) {
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
  ): Handler<SearchUsersCommandInput, SearchUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchUsersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchUsersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchUsersCommandOutput> {
    return deserializeAws_json1_1SearchUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
