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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { SearchInput, SearchOutput, SearchOutputFilterSensitiveLog } from "../models/models_1";
import { de_SearchCommand, se_SearchCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchCommand}.
 */
export interface SearchCommandInput extends SearchInput {}
/**
 * @public
 *
 * The output of {@link SearchCommand}.
 */
export interface SearchCommandOutput extends SearchOutput, __MetadataBearer {}

/**
 * @public
 * <p>Searches for assets in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // SearchInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   owningProjectIdentifier: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   searchScope: "ASSET" || "GLOSSARY" || "GLOSSARY_TERM", // required
 *   searchText: "STRING_VALUE",
 *   searchIn: [ // SearchInList
 *     { // SearchInItem
 *       attribute: "STRING_VALUE", // required
 *     },
 *   ],
 *   filters: { // FilterClause Union: only one key present
 *     filter: { // Filter
 *       attribute: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *     and: [ // FilterList
 *       {//  Union: only one key present
 *         filter: {
 *           attribute: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *         and: [
 *           "<FilterClause>",
 *         ],
 *         or: [
 *           "<FilterClause>",
 *         ],
 *       },
 *     ],
 *     or: [
 *       "<FilterClause>",
 *     ],
 *   },
 *   sort: { // SearchSort
 *     attribute: "STRING_VALUE", // required
 *     order: "ASCENDING" || "DESCENDING",
 *   },
 *   additionalAttributes: [ // SearchOutputAdditionalAttributes
 *     "FORMS",
 *   ],
 * };
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * // { // SearchOutput
 * //   items: [ // SearchInventoryResultItems
 * //     { // SearchInventoryResultItem Union: only one key present
 * //       glossaryItem: { // GlossaryItem
 * //         domainId: "STRING_VALUE", // required
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         owningProjectId: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         status: "DISABLED" || "ENABLED", // required
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         updatedBy: "STRING_VALUE",
 * //       },
 * //       glossaryTermItem: { // GlossaryTermItem
 * //         domainId: "STRING_VALUE", // required
 * //         glossaryId: "STRING_VALUE", // required
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         shortDescription: "STRING_VALUE",
 * //         longDescription: "STRING_VALUE",
 * //         termRelations: { // TermRelations
 * //           isA: [ // GlossaryTerms
 * //             "STRING_VALUE",
 * //           ],
 * //           classifies: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         status: "ENABLED" || "DISABLED", // required
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         updatedBy: "STRING_VALUE",
 * //       },
 * //       assetItem: { // AssetItem
 * //         domainId: "STRING_VALUE", // required
 * //         identifier: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         typeIdentifier: "STRING_VALUE", // required
 * //         typeRevision: "STRING_VALUE", // required
 * //         externalIdentifier: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         firstRevisionCreatedAt: new Date("TIMESTAMP"),
 * //         firstRevisionCreatedBy: "STRING_VALUE",
 * //         glossaryTerms: [
 * //           "STRING_VALUE",
 * //         ],
 * //         owningProjectId: "STRING_VALUE", // required
 * //         additionalAttributes: { // AssetItemAdditionalAttributes
 * //           formsOutput: [ // FormOutputList
 * //             { // FormOutput
 * //               formName: "STRING_VALUE", // required
 * //               typeName: "STRING_VALUE",
 * //               typeRevision: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //             },
 * //           ],
 * //           readOnlyFormsOutput: [
 * //             {
 * //               formName: "STRING_VALUE", // required
 * //               typeName: "STRING_VALUE",
 * //               typeRevision: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       dataProductItem: { // DataProductSummary
 * //         domainId: "STRING_VALUE", // required
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         owningProjectId: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         glossaryTerms: [
 * //           "STRING_VALUE",
 * //         ],
 * //         dataProductItems: [ // DataProductItems
 * //           { // DataProductItem
 * //             itemId: "STRING_VALUE",
 * //             domainId: "STRING_VALUE",
 * //           },
 * //         ],
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         updatedBy: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   totalMatchCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchCommandInput - {@link SearchCommandInput}
 * @returns {@link SearchCommandOutput}
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class SearchCommand extends $Command<SearchCommandInput, SearchCommandOutput, DataZoneClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: SearchCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchCommandInput, SearchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "SearchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: SearchOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "Search",
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
  private serialize(input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchCommandOutput> {
    return de_SearchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
