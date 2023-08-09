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
import { ListBuiltInIntentsRequest, ListBuiltInIntentsResponse } from "../models/models_1";
import { de_ListBuiltInIntentsCommand, se_ListBuiltInIntentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListBuiltInIntentsCommand}.
 */
export interface ListBuiltInIntentsCommandInput extends ListBuiltInIntentsRequest {}
/**
 * @public
 *
 * The output of {@link ListBuiltInIntentsCommand}.
 */
export interface ListBuiltInIntentsCommandOutput extends ListBuiltInIntentsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of built-in intents provided by Amazon Lex that you can use
 *          in your bot. </p>
 *          <p>To use a built-in intent as a the base for your own intent, include
 *          the built-in intent signature in the <code>parentIntentSignature</code>
 *          parameter when you call the <code>CreateIntent</code> operation. For
 *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateIntent.html">CreateIntent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListBuiltInIntentsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListBuiltInIntentsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListBuiltInIntentsRequest
 *   localeId: "STRING_VALUE", // required
 *   sortBy: { // BuiltInIntentSortBy
 *     attribute: "IntentSignature", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBuiltInIntentsCommand(input);
 * const response = await client.send(command);
 * // { // ListBuiltInIntentsResponse
 * //   builtInIntentSummaries: [ // BuiltInIntentSummaryList
 * //     { // BuiltInIntentSummary
 * //       intentSignature: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBuiltInIntentsCommandInput - {@link ListBuiltInIntentsCommandInput}
 * @returns {@link ListBuiltInIntentsCommandOutput}
 * @see {@link ListBuiltInIntentsCommandInput} for command's `input` shape.
 * @see {@link ListBuiltInIntentsCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
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
export class ListBuiltInIntentsCommand extends $Command<
  ListBuiltInIntentsCommandInput,
  ListBuiltInIntentsCommandOutput,
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
  constructor(readonly input: ListBuiltInIntentsCommandInput) {
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
  ): Handler<ListBuiltInIntentsCommandInput, ListBuiltInIntentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBuiltInIntentsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListBuiltInIntentsCommand";
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
  private serialize(input: ListBuiltInIntentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListBuiltInIntentsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBuiltInIntentsCommandOutput> {
    return de_ListBuiltInIntentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
