// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ListFileSystemAssociationsInput, ListFileSystemAssociationsOutput } from "../models/models_0";
import { de_ListFileSystemAssociationsCommand, se_ListFileSystemAssociationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFileSystemAssociationsCommand}.
 */
export interface ListFileSystemAssociationsCommandInput extends ListFileSystemAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListFileSystemAssociationsCommand}.
 */
export interface ListFileSystemAssociationsCommandOutput extends ListFileSystemAssociationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of <code>FileSystemAssociationSummary</code> objects. Each object contains a
 *          summary of a file system association. This operation is only supported for FSx File
 *          Gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListFileSystemAssociationsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListFileSystemAssociationsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // ListFileSystemAssociationsInput
 *   GatewayARN: "STRING_VALUE",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListFileSystemAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListFileSystemAssociationsOutput
 * //   Marker: "STRING_VALUE",
 * //   NextMarker: "STRING_VALUE",
 * //   FileSystemAssociationSummaryList: [ // FileSystemAssociationSummaryList
 * //     { // FileSystemAssociationSummary
 * //       FileSystemAssociationId: "STRING_VALUE",
 * //       FileSystemAssociationARN: "STRING_VALUE",
 * //       FileSystemAssociationStatus: "STRING_VALUE",
 * //       GatewayARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFileSystemAssociationsCommandInput - {@link ListFileSystemAssociationsCommandInput}
 * @returns {@link ListFileSystemAssociationsCommandOutput}
 * @see {@link ListFileSystemAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListFileSystemAssociationsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListFileSystemAssociationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFileSystemAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListFileSystemAssociationsCommandOutput> {
    return de_ListFileSystemAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
