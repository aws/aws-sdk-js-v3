// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  SearchAvailablePhoneNumbersRequest,
  SearchAvailablePhoneNumbersRequestFilterSensitiveLog,
  SearchAvailablePhoneNumbersResponse,
  SearchAvailablePhoneNumbersResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1SearchAvailablePhoneNumbersCommand,
  serializeAws_restJson1SearchAvailablePhoneNumbersCommand,
} from "../protocols/Aws_restJson1";

export interface SearchAvailablePhoneNumbersCommandInput extends SearchAvailablePhoneNumbersRequest {}
export interface SearchAvailablePhoneNumbersCommandOutput
  extends SearchAvailablePhoneNumbersResponse,
    __MetadataBearer {}

/**
 * <p>Searches for phone numbers that can be ordered. For US numbers, provide at least one of
 *             the following search filters: <code>AreaCode</code>, <code>City</code>,
 *                 <code>State</code>, or <code>TollFreePrefix</code>. If you provide
 *             <code>City</code>, you must also provide <code>State</code>. Numbers outside the US only
 *             support the <code>PhoneNumberType</code> filter, which you must use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, SearchAvailablePhoneNumbersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, SearchAvailablePhoneNumbersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new SearchAvailablePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchAvailablePhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link SearchAvailablePhoneNumbersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class SearchAvailablePhoneNumbersCommand extends $Command<
  SearchAvailablePhoneNumbersCommandInput,
  SearchAvailablePhoneNumbersCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchAvailablePhoneNumbersCommandInput, SearchAvailablePhoneNumbersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchAvailablePhoneNumbersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "SearchAvailablePhoneNumbersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchAvailablePhoneNumbersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchAvailablePhoneNumbersResponseFilterSensitiveLog,
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
