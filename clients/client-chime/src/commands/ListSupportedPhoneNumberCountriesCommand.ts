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
  ListSupportedPhoneNumberCountriesRequest,
  ListSupportedPhoneNumberCountriesRequestFilterSensitiveLog,
  ListSupportedPhoneNumberCountriesResponse,
  ListSupportedPhoneNumberCountriesResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommand,
  serializeAws_restJson1ListSupportedPhoneNumberCountriesCommand,
} from "../protocols/Aws_restJson1";

export interface ListSupportedPhoneNumberCountriesCommandInput extends ListSupportedPhoneNumberCountriesRequest {}
export interface ListSupportedPhoneNumberCountriesCommandOutput
  extends ListSupportedPhoneNumberCountriesResponse,
    __MetadataBearer {}

/**
 * <p>Lists supported phone number countries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListSupportedPhoneNumberCountriesCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListSupportedPhoneNumberCountriesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ListSupportedPhoneNumberCountriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSupportedPhoneNumberCountriesCommandInput} for command's `input` shape.
 * @see {@link ListSupportedPhoneNumberCountriesCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class ListSupportedPhoneNumberCountriesCommand extends $Command<
  ListSupportedPhoneNumberCountriesCommandInput,
  ListSupportedPhoneNumberCountriesCommandOutput,
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

  constructor(readonly input: ListSupportedPhoneNumberCountriesCommandInput) {
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
  ): Handler<ListSupportedPhoneNumberCountriesCommandInput, ListSupportedPhoneNumberCountriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSupportedPhoneNumberCountriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListSupportedPhoneNumberCountriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSupportedPhoneNumberCountriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSupportedPhoneNumberCountriesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListSupportedPhoneNumberCountriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSupportedPhoneNumberCountriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSupportedPhoneNumberCountriesCommandOutput> {
    return deserializeAws_restJson1ListSupportedPhoneNumberCountriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
