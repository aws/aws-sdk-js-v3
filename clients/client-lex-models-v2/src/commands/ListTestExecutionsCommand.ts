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
import { ListTestExecutionsRequest, ListTestExecutionsResponse } from "../models/models_1";
import { de_ListTestExecutionsCommand, se_ListTestExecutionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTestExecutionsCommand}.
 */
export interface ListTestExecutionsCommandInput extends ListTestExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTestExecutionsCommand}.
 */
export interface ListTestExecutionsCommandOutput extends ListTestExecutionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>The list of test set executions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, ListTestExecutionsCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, ListTestExecutionsCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // ListTestExecutionsRequest
 *   sortBy: { // TestExecutionSortBy
 *     attribute: "TestSetName" || "CreationDateTime", // required
 *     order: "Ascending" || "Descending", // required
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTestExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTestExecutionsResponse
 * //   testExecutions: [ // TestExecutionSummaryList
 * //     { // TestExecutionSummary
 * //       testExecutionId: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       testExecutionStatus: "Pending" || "Waiting" || "InProgress" || "Completed" || "Failed" || "Stopping" || "Stopped",
 * //       testSetId: "STRING_VALUE",
 * //       testSetName: "STRING_VALUE",
 * //       target: { // TestExecutionTarget
 * //         botAliasTarget: { // BotAliasTestExecutionTarget
 * //           botId: "STRING_VALUE", // required
 * //           botAliasId: "STRING_VALUE", // required
 * //           localeId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       apiMode: "Streaming" || "NonStreaming",
 * //       testExecutionModality: "Text" || "Audio",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTestExecutionsCommandInput - {@link ListTestExecutionsCommandInput}
 * @returns {@link ListTestExecutionsCommandOutput}
 * @see {@link ListTestExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListTestExecutionsCommandOutput} for command's `response` shape.
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
export class ListTestExecutionsCommand extends $Command<
  ListTestExecutionsCommandInput,
  ListTestExecutionsCommandOutput,
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
  constructor(readonly input: ListTestExecutionsCommandInput) {
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
  ): Handler<ListTestExecutionsCommandInput, ListTestExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTestExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "ListTestExecutionsCommand";
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
  private serialize(input: ListTestExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTestExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTestExecutionsCommandOutput> {
    return de_ListTestExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
