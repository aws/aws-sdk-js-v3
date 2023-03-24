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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { ListAggregatedUtterancesRequest, ListAggregatedUtterancesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAggregatedUtterancesCommand,
  serializeAws_restJson1ListAggregatedUtterancesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link ListAggregatedUtterancesCommand}.
 */
export interface ListAggregatedUtterancesCommandInput extends ListAggregatedUtterancesRequest {}
/**
 * @public
 *
 * The output of {@link ListAggregatedUtterancesCommand}.
 */
export interface ListAggregatedUtterancesCommandOutput extends ListAggregatedUtterancesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of utterances that users have sent to the
 *          bot.</p>
 *          <p>Utterances are aggregated by the text of the utterance. For example,
 *          all instances where customers used the phrase "I want to order pizza"
 *          are aggregated into the same line in the response.</p>
 *          <p>You can see both detected utterances and missed utterances. A
 *          detected utterance is where the bot properly recognized the utterance
 *          and activated the associated intent. A missed utterance was not
 *          recognized by the bot and didn't activate an intent.</p>
 *          <p>Utterances can be aggregated for a bot alias or for a bot version,
 *          but not both at the same time.</p>
 *          <p>Utterances statistics are not generated under the following
 *          conditions:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>childDirected</code> field was set to true when the
 *                bot was created.</p>
 *             </li>
 *             <li>
 *                <p>You are using slot obfuscation with one or more slots.</p>
 *             </li>
 *             <li>
 *                <p>You opted out of participating in improving Amazon Lex.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListAggregatedUtterancesCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListAggregatedUtterancesCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = {
 *   botId: "STRING_VALUE", // required
 *   botAliasId: "STRING_VALUE",
 *   botVersion: "STRING_VALUE",
 *   localeId: "STRING_VALUE", // required
 *   aggregationDuration: {
 *     relativeAggregationDuration: {
 *       timeDimension: "Hours" || "Days" || "Weeks", // required
 *       timeValue: Number("int"), // required
 *     },
 *   },
 *   sortBy: {
 *     attribute: "HitCount" || "MissedCount", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   filters: [
 *     {
 *       name: "Utterance", // required
 *       values: [ // required
 *         "STRING_VALUE",
 *       ],
 *       operator: "CO" || "EQ", // required
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAggregatedUtterancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListAggregatedUtterancesCommandInput - {@link ListAggregatedUtterancesCommandInput}
 * @returns {@link ListAggregatedUtterancesCommandOutput}
 * @see {@link ListAggregatedUtterancesCommandInput} for command's `input` shape.
 * @see {@link ListAggregatedUtterancesCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
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
 *
 */
export class ListAggregatedUtterancesCommand extends $Command<
  ListAggregatedUtterancesCommandInput,
  ListAggregatedUtterancesCommandOutput,
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
  constructor(readonly input: ListAggregatedUtterancesCommandInput) {
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
  ): Handler<ListAggregatedUtterancesCommandInput, ListAggregatedUtterancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAggregatedUtterancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListAggregatedUtterancesCommand";
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
  private serialize(input: ListAggregatedUtterancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAggregatedUtterancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAggregatedUtterancesCommandOutput> {
    return deserializeAws_restJson1ListAggregatedUtterancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
