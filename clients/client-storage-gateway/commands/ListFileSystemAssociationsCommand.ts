import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ListFileSystemAssociationsInput, ListFileSystemAssociationsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListFileSystemAssociationsCommand,
  serializeAws_json1_1ListFileSystemAssociationsCommand,
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

export interface ListFileSystemAssociationsCommandInput extends ListFileSystemAssociationsInput {}
export interface ListFileSystemAssociationsCommandOutput extends ListFileSystemAssociationsOutput, __MetadataBearer {}

/**
 * <p>Gets a list of <code>FileSystemAssociationSummary</code> objects. Each object contains a
 *          summary of a file system association. This operation is only supported for Amazon FSx file
 *          gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListFileSystemAssociationsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListFileSystemAssociationsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListFileSystemAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFileSystemAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListFileSystemAssociationsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListFileSystemAssociationsCommand extends $Command<
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListFileSystemAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFileSystemAssociationsCommandInput, ListFileSystemAssociationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListFileSystemAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFileSystemAssociationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListFileSystemAssociationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFileSystemAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFileSystemAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFileSystemAssociationsCommandOutput> {
    return deserializeAws_json1_1ListFileSystemAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
