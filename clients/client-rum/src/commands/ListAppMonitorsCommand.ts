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

import { ListAppMonitorsRequest, ListAppMonitorsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAppMonitorsCommand,
  serializeAws_restJson1ListAppMonitorsCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface ListAppMonitorsCommandInput extends ListAppMonitorsRequest {}
export interface ListAppMonitorsCommandOutput extends ListAppMonitorsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the Amazon CloudWatch RUM app monitors in the account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, ListAppMonitorsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, ListAppMonitorsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new ListAppMonitorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppMonitorsCommandInput} for command's `input` shape.
 * @see {@link ListAppMonitorsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class ListAppMonitorsCommand extends $Command<
  ListAppMonitorsCommandInput,
  ListAppMonitorsCommandOutput,
  RUMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAppMonitorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAppMonitorsCommandInput, ListAppMonitorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "ListAppMonitorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAppMonitorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppMonitorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAppMonitorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAppMonitorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAppMonitorsCommandOutput> {
    return deserializeAws_restJson1ListAppMonitorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
