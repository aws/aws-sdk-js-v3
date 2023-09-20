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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { ListAllowedNodeTypeUpdatesRequest, ListAllowedNodeTypeUpdatesResponse } from "../models/models_0";
import { de_ListAllowedNodeTypeUpdatesCommand, se_ListAllowedNodeTypeUpdatesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAllowedNodeTypeUpdatesCommand}.
 */
export interface ListAllowedNodeTypeUpdatesCommandInput extends ListAllowedNodeTypeUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListAllowedNodeTypeUpdatesCommand}.
 */
export interface ListAllowedNodeTypeUpdatesCommandOutput extends ListAllowedNodeTypeUpdatesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all available node types that you can scale to from your cluster's current node type.
 *
 *          When you use the UpdateCluster operation to scale your cluster, the value of the NodeType parameter must be one of the node types returned by this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, ListAllowedNodeTypeUpdatesCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, ListAllowedNodeTypeUpdatesCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // ListAllowedNodeTypeUpdatesRequest
 *   ClusterName: "STRING_VALUE", // required
 * };
 * const command = new ListAllowedNodeTypeUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListAllowedNodeTypeUpdatesResponse
 * //   ScaleUpNodeTypes: [ // NodeTypeList
 * //     "STRING_VALUE",
 * //   ],
 * //   ScaleDownNodeTypes: [
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAllowedNodeTypeUpdatesCommandInput - {@link ListAllowedNodeTypeUpdatesCommandInput}
 * @returns {@link ListAllowedNodeTypeUpdatesCommandOutput}
 * @see {@link ListAllowedNodeTypeUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListAllowedNodeTypeUpdatesCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 */
export class ListAllowedNodeTypeUpdatesCommand extends $Command<
  ListAllowedNodeTypeUpdatesCommandInput,
  ListAllowedNodeTypeUpdatesCommandOutput,
  MemoryDBClientResolvedConfig
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
  constructor(readonly input: ListAllowedNodeTypeUpdatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MemoryDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAllowedNodeTypeUpdatesCommandInput, ListAllowedNodeTypeUpdatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAllowedNodeTypeUpdatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MemoryDBClient";
    const commandName = "ListAllowedNodeTypeUpdatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonMemoryDB",
        operation: "ListAllowedNodeTypeUpdates",
      },
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
  private serialize(input: ListAllowedNodeTypeUpdatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAllowedNodeTypeUpdatesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAllowedNodeTypeUpdatesCommandOutput> {
    return de_ListAllowedNodeTypeUpdatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
