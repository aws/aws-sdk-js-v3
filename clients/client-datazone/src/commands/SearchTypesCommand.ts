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
import { SearchTypesInput, SearchTypesOutput, SearchTypesOutputFilterSensitiveLog } from "../models/models_1";
import { de_SearchTypesCommand, se_SearchTypesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchTypesCommand}.
 */
export interface SearchTypesCommandInput extends SearchTypesInput {}
/**
 * @public
 *
 * The output of {@link SearchTypesCommand}.
 */
export interface SearchTypesCommandOutput extends SearchTypesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Searches for types in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, SearchTypesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, SearchTypesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // SearchTypesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   searchScope: "ASSET_TYPE" || "FORM_TYPE", // required
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
 *   managed: true || false, // required
 * };
 * const command = new SearchTypesCommand(input);
 * const response = await client.send(command);
 * // { // SearchTypesOutput
 * //   items: [ // SearchTypesResultItems
 * //     { // SearchTypesResultItem Union: only one key present
 * //       assetTypeItem: { // AssetTypeItem
 * //         domainId: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         revision: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         formsOutput: { // FormsOutputMap // required
 * //           "<keys>": { // FormEntryOutput
 * //             typeName: "STRING_VALUE", // required
 * //             typeRevision: "STRING_VALUE", // required
 * //             required: true || false,
 * //           },
 * //         },
 * //         owningProjectId: "STRING_VALUE", // required
 * //         originDomainId: "STRING_VALUE",
 * //         originProjectId: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         updatedBy: "STRING_VALUE",
 * //       },
 * //       formTypeItem: { // FormTypeData
 * //         domainId: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         revision: "STRING_VALUE", // required
 * //         model: { // Model Union: only one key present
 * //           smithy: "STRING_VALUE",
 * //         },
 * //         status: "ENABLED" || "DISABLED",
 * //         owningProjectId: "STRING_VALUE",
 * //         originDomainId: "STRING_VALUE",
 * //         originProjectId: "STRING_VALUE",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         createdBy: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         imports: [ // ImportList
 * //           { // Import
 * //             name: "STRING_VALUE", // required
 * //             revision: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   totalMatchCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchTypesCommandInput - {@link SearchTypesCommandInput}
 * @returns {@link SearchTypesCommandOutput}
 * @see {@link SearchTypesCommandInput} for command's `input` shape.
 * @see {@link SearchTypesCommandOutput} for command's `response` shape.
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
export class SearchTypesCommand extends $Command<
  SearchTypesCommandInput,
  SearchTypesCommandOutput,
  DataZoneClientResolvedConfig
> {
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
  constructor(readonly input: SearchTypesCommandInput) {
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
  ): Handler<SearchTypesCommandInput, SearchTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchTypesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "SearchTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: SearchTypesOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "SearchTypes",
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
  private serialize(input: SearchTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchTypesCommandOutput> {
    return de_SearchTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
