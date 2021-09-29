import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { ListInstanceStorageConfigsRequest, ListInstanceStorageConfigsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListInstanceStorageConfigsCommand,
  serializeAws_restJson1ListInstanceStorageConfigsCommand,
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

export interface ListInstanceStorageConfigsCommandInput extends ListInstanceStorageConfigsRequest {}
export interface ListInstanceStorageConfigsCommandOutput extends ListInstanceStorageConfigsResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *
 *          <p>Returns a paginated list of storage configs for the identified instance and resource
 *    type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListInstanceStorageConfigsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListInstanceStorageConfigsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListInstanceStorageConfigsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceStorageConfigsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceStorageConfigsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListInstanceStorageConfigsCommand extends $Command<
  ListInstanceStorageConfigsCommandInput,
  ListInstanceStorageConfigsCommandOutput,
  ConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInstanceStorageConfigsCommandInput) {
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
  ): Handler<ListInstanceStorageConfigsCommandInput, ListInstanceStorageConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListInstanceStorageConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceStorageConfigsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceStorageConfigsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceStorageConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInstanceStorageConfigsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListInstanceStorageConfigsCommandOutput> {
    return deserializeAws_restJson1ListInstanceStorageConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
