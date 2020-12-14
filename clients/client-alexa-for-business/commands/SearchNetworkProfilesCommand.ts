import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchNetworkProfilesRequest, SearchNetworkProfilesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchNetworkProfilesCommand,
  serializeAws_json1_1SearchNetworkProfilesCommand,
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

export type SearchNetworkProfilesCommandInput = SearchNetworkProfilesRequest;
export type SearchNetworkProfilesCommandOutput = SearchNetworkProfilesResponse & __MetadataBearer;

/**
 * <p>Searches network profiles and lists the ones that meet a set of filter and sort
 *          criteria.</p>
 */
export class SearchNetworkProfilesCommand extends $Command<
  SearchNetworkProfilesCommandInput,
  SearchNetworkProfilesCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchNetworkProfilesCommandInput) {
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
  ): Handler<SearchNetworkProfilesCommandInput, SearchNetworkProfilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "SearchNetworkProfilesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchNetworkProfilesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchNetworkProfilesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchNetworkProfilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchNetworkProfilesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchNetworkProfilesCommandOutput> {
    return deserializeAws_json1_1SearchNetworkProfilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
