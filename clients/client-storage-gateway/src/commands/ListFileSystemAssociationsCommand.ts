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

import {
  ListFileSystemAssociationsInput,
  ListFileSystemAssociationsInputFilterSensitiveLog,
  ListFileSystemAssociationsOutput,
  ListFileSystemAssociationsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListFileSystemAssociationsCommand,
  serializeAws_json1_1ListFileSystemAssociationsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface ListFileSystemAssociationsCommandInput extends ListFileSystemAssociationsInput {}
export interface ListFileSystemAssociationsCommandOutput extends ListFileSystemAssociationsOutput, __MetadataBearer {}

/**
 * <p>Gets a list of <code>FileSystemAssociationSummary</code> objects. Each object contains a
 *          summary of a file system association. This operation is only supported for FSx File
 *          Gateways.</p>
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
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class ListFileSystemAssociationsCommand extends $Command<
  ListFileSystemAssociationsCommandInput,
  ListFileSystemAssociationsCommandOutput,
  StorageGatewayClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFileSystemAssociationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ListFileSystemAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFileSystemAssociationsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListFileSystemAssociationsOutputFilterSensitiveLog,
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
