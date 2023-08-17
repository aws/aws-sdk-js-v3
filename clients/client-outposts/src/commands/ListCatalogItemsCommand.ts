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

import { ListCatalogItemsInput, ListCatalogItemsOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_ListCatalogItemsCommand, se_ListCatalogItemsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCatalogItemsCommand}.
 */
export interface ListCatalogItemsCommandInput extends ListCatalogItemsInput {}
/**
 * @public
 *
 * The output of {@link ListCatalogItemsCommand}.
 */
export interface ListCatalogItemsCommandOutput extends ListCatalogItemsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists the items in the catalog.</p>
 *          <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match
 *  all of the specified filters. For a filter where you can specify multiple values, the results include
 *  items that match any of the values that you specify for the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListCatalogItemsCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListCatalogItemsCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // ListCatalogItemsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ItemClassFilter: [ // CatalogItemClassList
 *     "RACK" || "SERVER",
 *   ],
 *   SupportedStorageFilter: [ // SupportedStorageList
 *     "EBS" || "S3",
 *   ],
 *   EC2FamilyFilter: [ // EC2FamilyList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListCatalogItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListCatalogItemsOutput
 * //   CatalogItems: [ // CatalogItemListDefinition
 * //     { // CatalogItem
 * //       CatalogItemId: "STRING_VALUE",
 * //       ItemStatus: "AVAILABLE" || "DISCONTINUED",
 * //       EC2Capacities: [ // EC2CapacityListDefinition
 * //         { // EC2Capacity
 * //           Family: "STRING_VALUE",
 * //           MaxSize: "STRING_VALUE",
 * //           Quantity: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PowerKva: Number("float"),
 * //       WeightLbs: Number("int"),
 * //       SupportedUplinkGbps: [ // SupportedUplinkGbpsListDefinition
 * //         Number("int"),
 * //       ],
 * //       SupportedStorage: [ // SupportedStorageList
 * //         "EBS" || "S3",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCatalogItemsCommandInput - {@link ListCatalogItemsCommandInput}
 * @returns {@link ListCatalogItemsCommandOutput}
 * @see {@link ListCatalogItemsCommandInput} for command's `input` shape.
 * @see {@link ListCatalogItemsCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class ListCatalogItemsCommand extends $Command<
  ListCatalogItemsCommandInput,
  ListCatalogItemsCommandOutput,
  OutpostsClientResolvedConfig
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
  constructor(readonly input: ListCatalogItemsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCatalogItemsCommandInput, ListCatalogItemsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCatalogItemsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "ListCatalogItemsCommand";
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
  private serialize(input: ListCatalogItemsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCatalogItemsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCatalogItemsCommandOutput> {
    return de_ListCatalogItemsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
