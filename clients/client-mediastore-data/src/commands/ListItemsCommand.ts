import { MediaStoreDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreDataClient";
import { ListItemsRequest, ListItemsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListItemsCommand,
  serializeAws_restJson1ListItemsCommand,
} from "../protocols/Aws_restJson1";
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

export interface ListItemsCommandInput extends ListItemsRequest {}
export interface ListItemsCommandOutput extends ListItemsResponse, __MetadataBearer {}

/**
 * <p>Provides a list of metadata entries about folders and objects in the specified
 *          folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreDataClient, ListItemsCommand } from "@aws-sdk/client-mediastore-data"; // ES Modules import
 * // const { MediaStoreDataClient, ListItemsCommand } = require("@aws-sdk/client-mediastore-data"); // CommonJS import
 * const client = new MediaStoreDataClient(config);
 * const command = new ListItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListItemsCommandInput} for command's `input` shape.
 * @see {@link ListItemsCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreDataClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListItemsCommand extends $Command<
  ListItemsCommandInput,
  ListItemsCommandOutput,
  MediaStoreDataClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaStoreDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListItemsCommandInput, ListItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaStoreDataClient";
    const commandName = "ListItemsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListItemsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListItemsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListItemsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListItemsCommandOutput> {
    return deserializeAws_restJson1ListItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
