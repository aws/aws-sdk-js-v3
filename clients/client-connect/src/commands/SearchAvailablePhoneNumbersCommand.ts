// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { SearchAvailablePhoneNumbersRequest, SearchAvailablePhoneNumbersResponse } from "../models/models_1";
import {
  deserializeAws_restJson1SearchAvailablePhoneNumbersCommand,
  serializeAws_restJson1SearchAvailablePhoneNumbersCommand,
} from "../protocols/Aws_restJson1";

export interface SearchAvailablePhoneNumbersCommandInput extends SearchAvailablePhoneNumbersRequest {}
export interface SearchAvailablePhoneNumbersCommandOutput
  extends SearchAvailablePhoneNumbersResponse,
    __MetadataBearer {}

/**
 * <p>Searches for available phone numbers that you can claim to your Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchAvailablePhoneNumbersCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchAvailablePhoneNumbersCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new SearchAvailablePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchAvailablePhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link SearchAvailablePhoneNumbersCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class SearchAvailablePhoneNumbersCommand extends $Command<
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchAvailablePhoneNumbersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchAvailablePhoneNumbersCommandInput, SearchAvailablePhoneNumbersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SearchAvailablePhoneNumbersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchAvailablePhoneNumbersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchAvailablePhoneNumbersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchAvailablePhoneNumbersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchAvailablePhoneNumbersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchAvailablePhoneNumbersCommandOutput> {
    return deserializeAws_restJson1SearchAvailablePhoneNumbersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
