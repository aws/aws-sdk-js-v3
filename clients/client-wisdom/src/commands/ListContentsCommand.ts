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

import { ListContentsRequest, ListContentsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListContentsCommand,
  serializeAws_restJson1ListContentsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

export interface ListContentsCommandInput extends ListContentsRequest {}
export interface ListContentsCommandOutput extends ListContentsResponse, __MetadataBearer {}

/**
 * <p>Lists the content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, ListContentsCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, ListContentsCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new ListContentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContentsCommandInput} for command's `input` shape.
 * @see {@link ListContentsCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 */
export class ListContentsCommand extends $Command<
  ListContentsCommandInput,
  ListContentsCommandOutput,
  WisdomClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListContentsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WisdomClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListContentsCommandInput, ListContentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "ListContentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListContentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListContentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListContentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListContentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListContentsCommandOutput> {
    return deserializeAws_restJson1ListContentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
