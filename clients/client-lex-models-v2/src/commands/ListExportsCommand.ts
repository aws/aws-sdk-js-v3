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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListExportsRequest, ListExportsResponse } from "../models/models_1";
import { de_ListExportsCommand, se_ListExportsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListExportsCommand}.
 */
export interface ListExportsCommandInput extends ListExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListExportsCommand}.
 */
export interface ListExportsCommandOutput extends ListExportsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the exports for a bot, bot locale, or custom vocabulary.
 *          Exports are kept in the list for 7 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListExportsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListExportsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListExportsRequest
 *   botId: "STRING_VALUE",
 *   botVersion: "STRING_VALUE",
 *   sortBy: { // ExportSortBy
 *     attribute: "LastUpdatedDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [ // ExportFilters
 *     { // ExportFilter
 *       name: "ExportResourceType", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   localeId: "STRING_VALUE",
 * };
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListExportsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   exportSummaries: [ // ExportSummaryList
 * //     { // ExportSummary
 * //       exportId: "STRING_VALUE",
 * //       resourceSpecification: { // ExportResourceSpecification
 * //         botExportSpecification: { // BotExportSpecification
 * //           botId: "STRING_VALUE", // required
 * //           botVersion: "STRING_VALUE", // required
 * //         },
 * //         botLocaleExportSpecification: { // BotLocaleExportSpecification
 * //           botId: "STRING_VALUE", // required
 * //           botVersion: "STRING_VALUE", // required
 * //           localeId: "STRING_VALUE", // required
 * //         },
 * //         customVocabularyExportSpecification: { // CustomVocabularyExportSpecification
 * //           botId: "STRING_VALUE", // required
 * //           botVersion: "STRING_VALUE", // required
 * //           localeId: "STRING_VALUE", // required
 * //         },
 * //         testSetExportSpecification: { // TestSetExportSpecification
 * //           testSetId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       fileFormat: "LexJson" || "TSV" || "CSV",
 * //       exportStatus: "InProgress" || "Completed" || "Failed" || "Deleting",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportsCommandInput - {@link ListExportsCommandInput}
 * @returns {@link ListExportsCommandOutput}
 * @see {@link ListExportsCommandInput} for command's `input` shape.
 * @see {@link ListExportsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class ListExportsCommand extends $Command<
  ListExportsCommandInput,
  ListExportsCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: ListExportsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListExportsCommandInput, ListExportsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListExportsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListExportsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "ListExports",
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
  private serialize(input: ListExportsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListExportsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExportsCommandOutput> {
    return de_ListExportsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
