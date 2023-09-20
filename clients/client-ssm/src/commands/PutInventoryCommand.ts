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

import { PutInventoryRequest, PutInventoryResult } from "../models/models_1";
import { de_PutInventoryCommand, se_PutInventoryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutInventoryCommand}.
 */
export interface PutInventoryCommandInput extends PutInventoryRequest {}
/**
 * @public
 *
 * The output of {@link PutInventoryCommand}.
 */
export interface PutInventoryCommandOutput extends PutInventoryResult, __MetadataBearer {}

/**
 * @public
 * <p>Bulk update custom inventory items on one or more managed nodes. The request adds an
 *    inventory item, if it doesn't already exist, or updates an inventory item, if it does
 *    exist.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // PutInventoryRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Items: [ // InventoryItemList // required
 *     { // InventoryItem
 *       TypeName: "STRING_VALUE", // required
 *       SchemaVersion: "STRING_VALUE", // required
 *       CaptureTime: "STRING_VALUE", // required
 *       ContentHash: "STRING_VALUE",
 *       Content: [ // InventoryItemEntryList
 *         { // InventoryItemEntry
 *           "<keys>": "STRING_VALUE",
 *         },
 *       ],
 *       Context: { // InventoryItemContentContext
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new PutInventoryCommand(input);
 * const response = await client.send(command);
 * // { // PutInventoryResult
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutInventoryCommandInput - {@link PutInventoryCommandInput}
 * @returns {@link PutInventoryCommandOutput}
 * @see {@link PutInventoryCommandInput} for command's `input` shape.
 * @see {@link PutInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link CustomSchemaCountLimitExceededException} (client fault)
 *  <p>You have exceeded the limit for custom schemas. Delete one or more custom schemas and try
 *    again.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent(SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidInventoryItemContextException} (client fault)
 *  <p>You specified invalid keys or values in the <code>Context</code> attribute for
 *     <code>InventoryItem</code>. Verify the keys and values, and try again.</p>
 *
 * @throws {@link InvalidItemContentException} (client fault)
 *  <p>One or more content items isn't valid.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link ItemContentMismatchException} (client fault)
 *  <p>The inventory item has invalid content. </p>
 *
 * @throws {@link ItemSizeLimitExceededException} (client fault)
 *  <p>The inventory item size has exceeded the size limit.</p>
 *
 * @throws {@link SubTypeCountLimitExceededException} (client fault)
 *  <p>The sub-type count exceeded the limit for the inventory type.</p>
 *
 * @throws {@link TotalSizeLimitExceededException} (client fault)
 *  <p>The size of inventory data has exceeded the total size limit for the resource.</p>
 *
 * @throws {@link UnsupportedInventoryItemContextException} (client fault)
 *  <p>The <code>Context</code> attribute that you specified for the <code>InventoryItem</code>
 *    isn't allowed for this inventory type. You can only use the <code>Context</code> attribute with
 *    inventory types like <code>AWS:ComplianceItem</code>.</p>
 *
 * @throws {@link UnsupportedInventorySchemaVersionException} (client fault)
 *  <p>Inventory item type schema version has to match supported versions in the service. Check
 *    output of GetInventorySchema to see the available schema version for each type.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class PutInventoryCommand extends $Command<
  PutInventoryCommandInput,
  PutInventoryCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: PutInventoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutInventoryCommandInput, PutInventoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutInventoryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "PutInventoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "PutInventory",
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
  private serialize(input: PutInventoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutInventoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutInventoryCommandOutput> {
    return de_PutInventoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
