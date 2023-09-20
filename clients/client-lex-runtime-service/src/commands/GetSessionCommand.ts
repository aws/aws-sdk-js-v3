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

import {
  LexRuntimeServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexRuntimeServiceClient";
import { GetSessionRequest, GetSessionResponse, GetSessionResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetSessionCommand, se_GetSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns session information for a specified bot, alias, and user
 *       ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, GetSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, GetSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const input = { // GetSessionRequest
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 *   checkpointLabelFilter: "STRING_VALUE",
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   recentIntentSummaryView: [ // IntentSummaryList
 * //     { // IntentSummary
 * //       intentName: "STRING_VALUE",
 * //       checkpointLabel: "STRING_VALUE",
 * //       slots: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       confirmationStatus: "None" || "Confirmed" || "Denied",
 * //       dialogActionType: "ElicitIntent" || "ConfirmIntent" || "ElicitSlot" || "Close" || "Delegate", // required
 * //       fulfillmentState: "Fulfilled" || "Failed" || "ReadyForFulfillment",
 * //       slotToElicit: "STRING_VALUE",
 * //     },
 * //   ],
 * //   sessionAttributes: {
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   sessionId: "STRING_VALUE",
 * //   dialogAction: { // DialogAction
 * //     type: "ElicitIntent" || "ConfirmIntent" || "ElicitSlot" || "Close" || "Delegate", // required
 * //     intentName: "STRING_VALUE",
 * //     slots: "<StringMap>",
 * //     slotToElicit: "STRING_VALUE",
 * //     fulfillmentState: "Fulfilled" || "Failed" || "ReadyForFulfillment",
 * //     message: "STRING_VALUE",
 * //     messageFormat: "PlainText" || "CustomPayload" || "SSML" || "Composite",
 * //   },
 * //   activeContexts: [ // ActiveContextsList
 * //     { // ActiveContext
 * //       name: "STRING_VALUE", // required
 * //       timeToLive: { // ActiveContextTimeToLive
 * //         timeToLiveInSeconds: Number("int"),
 * //         turnsToLive: Number("int"),
 * //       },
 * //       parameters: { // ActiveContextParametersMap // required
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for LexRuntimeServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p> Request validation failed, there is no usable message in the context,
 *       or the bot build failed, is still in progress, or contains unbuilt
 *       changes. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>Internal service error. Retry the call.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Exceeded a limit.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource (such as the Amazon Lex bot or an alias) that is referred
 *       to is not found.</p>
 *
 * @throws {@link LexRuntimeServiceServiceException}
 * <p>Base exception class for all service exceptions from LexRuntimeService service.</p>
 *
 */
export class GetSessionCommand extends $Command<
  GetSessionCommandInput,
  GetSessionCommandOutput,
  LexRuntimeServiceClientResolvedConfig
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
  constructor(readonly input: GetSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSessionCommandInput, GetSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeServiceClient";
    const commandName = "GetSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetSessionResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSDeepSenseRunTimeService",
        operation: "GetSession",
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
  private serialize(input: GetSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSessionCommandOutput> {
    return de_GetSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
