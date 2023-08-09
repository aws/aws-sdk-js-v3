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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { SearchAssociatedTranscriptsRequest, SearchAssociatedTranscriptsResponse } from "../models/models_1";
import {
  de_SearchAssociatedTranscriptsCommand,
  se_SearchAssociatedTranscriptsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchAssociatedTranscriptsCommand}.
 */
export interface SearchAssociatedTranscriptsCommandInput extends SearchAssociatedTranscriptsRequest {}
/**
 * @public
 *
 * The output of {@link SearchAssociatedTranscriptsCommand}.
 */
export interface SearchAssociatedTranscriptsCommandOutput
  extends SearchAssociatedTranscriptsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Search for associated transcripts that meet the specified
 *          criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, SearchAssociatedTranscriptsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, SearchAssociatedTranscriptsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // SearchAssociatedTranscriptsRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   botRecommendationId: "STRING_VALUE", // required
 *   searchOrder: "Ascending" || "Descending",
 *   filters: [ // AssociatedTranscriptFilters // required
 *     { // AssociatedTranscriptFilter
 *       name: "IntentId" || "SlotTypeId", // required
 *       values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextIndex: Number("int"),
 * };
 * const command = new SearchAssociatedTranscriptsCommand(input);
 * const response = await client.send(command);
 * // { // SearchAssociatedTranscriptsResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botRecommendationId: "STRING_VALUE",
 * //   nextIndex: Number("int"),
 * //   associatedTranscripts: [ // AssociatedTranscriptList
 * //     { // AssociatedTranscript
 * //       transcript: "STRING_VALUE",
 * //     },
 * //   ],
 * //   totalResults: Number("int"),
 * // };
 *
 * ```
 *
 * @param SearchAssociatedTranscriptsCommandInput - {@link SearchAssociatedTranscriptsCommandInput}
 * @returns {@link SearchAssociatedTranscriptsCommandOutput}
 * @see {@link SearchAssociatedTranscriptsCommandInput} for command's `input` shape.
 * @see {@link SearchAssociatedTranscriptsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
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
export class SearchAssociatedTranscriptsCommand extends $Command<
  SearchAssociatedTranscriptsCommandInput,
  SearchAssociatedTranscriptsCommandOutput,
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
  constructor(readonly input: SearchAssociatedTranscriptsCommandInput) {
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
  ): Handler<SearchAssociatedTranscriptsCommandInput, SearchAssociatedTranscriptsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchAssociatedTranscriptsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "SearchAssociatedTranscriptsCommand";
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
  private serialize(input: SearchAssociatedTranscriptsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchAssociatedTranscriptsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchAssociatedTranscriptsCommandOutput> {
    return de_SearchAssociatedTranscriptsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
