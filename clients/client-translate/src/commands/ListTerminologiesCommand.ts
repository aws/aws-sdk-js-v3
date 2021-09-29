import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { ListTerminologiesRequest, ListTerminologiesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListTerminologiesCommand,
  serializeAws_json1_1ListTerminologiesCommand,
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

export interface ListTerminologiesCommandInput extends ListTerminologiesRequest {}
export interface ListTerminologiesCommandOutput extends ListTerminologiesResponse, __MetadataBearer {}

/**
 * <p>Provides a list of custom terminologies associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListTerminologiesCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListTerminologiesCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const command = new ListTerminologiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTerminologiesCommandInput} for command's `input` shape.
 * @see {@link ListTerminologiesCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListTerminologiesCommand extends $Command<
  ListTerminologiesCommandInput,
  ListTerminologiesCommandOutput,
  TranslateClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTerminologiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTerminologiesCommandInput, ListTerminologiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "ListTerminologiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTerminologiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTerminologiesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTerminologiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTerminologiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTerminologiesCommandOutput> {
    return deserializeAws_json1_1ListTerminologiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
