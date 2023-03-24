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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { RemoveLFTagsFromResourceRequest, RemoveLFTagsFromResourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveLFTagsFromResourceCommand,
  serializeAws_restJson1RemoveLFTagsFromResourceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link RemoveLFTagsFromResourceCommand}.
 */
export interface RemoveLFTagsFromResourceCommandInput extends RemoveLFTagsFromResourceRequest {}
/**
 * @public
 *
 * The output of {@link RemoveLFTagsFromResourceCommand}.
 */
export interface RemoveLFTagsFromResourceCommandOutput extends RemoveLFTagsFromResourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RemoveLFTagsFromResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RemoveLFTagsFromResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = {
 *   CatalogId: "STRING_VALUE",
 *   Resource: {
 *     Catalog: {},
 *     Database: {
 *       CatalogId: "STRING_VALUE",
 *       Name: "STRING_VALUE", // required
 *     },
 *     Table: {
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE", // required
 *       Name: "STRING_VALUE",
 *       TableWildcard: {},
 *     },
 *     TableWithColumns: {
 *       CatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE", // required
 *       Name: "STRING_VALUE", // required
 *       ColumnNames: [
 *         "STRING_VALUE",
 *       ],
 *       ColumnWildcard: {
 *         ExcludedColumnNames: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     DataLocation: {
 *       CatalogId: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE", // required
 *     },
 *     DataCellsFilter: {
 *       TableCatalogId: "STRING_VALUE",
 *       DatabaseName: "STRING_VALUE",
 *       TableName: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *     },
 *     LFTag: {
 *       CatalogId: "STRING_VALUE",
 *       TagKey: "STRING_VALUE", // required
 *       TagValues: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     LFTagPolicy: {
 *       CatalogId: "STRING_VALUE",
 *       ResourceType: "DATABASE" || "TABLE", // required
 *       Expression: [ // required
 *         {
 *           TagKey: "STRING_VALUE", // required
 *           TagValues: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *     },
 *   },
 *   LFTags: [ // required
 *     {
 *       CatalogId: "STRING_VALUE",
 *       TagKey: "STRING_VALUE", // required
 *       TagValues: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new RemoveLFTagsFromResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param RemoveLFTagsFromResourceCommandInput - {@link RemoveLFTagsFromResourceCommandInput}
 * @returns {@link RemoveLFTagsFromResourceCommandOutput}
 * @see {@link RemoveLFTagsFromResourceCommandInput} for command's `input` shape.
 * @see {@link RemoveLFTagsFromResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 *
 */
export class RemoveLFTagsFromResourceCommand extends $Command<
  RemoveLFTagsFromResourceCommandInput,
  RemoveLFTagsFromResourceCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: RemoveLFTagsFromResourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveLFTagsFromResourceCommandInput, RemoveLFTagsFromResourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveLFTagsFromResourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "RemoveLFTagsFromResourceCommand";
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
  private serialize(input: RemoveLFTagsFromResourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveLFTagsFromResourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveLFTagsFromResourceCommandOutput> {
    return deserializeAws_restJson1RemoveLFTagsFromResourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
