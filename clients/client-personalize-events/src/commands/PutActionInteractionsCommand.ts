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

import { PutActionInteractionsRequest, PutActionInteractionsRequestFilterSensitiveLog } from "../models/models_0";
import {
  PersonalizeEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeEventsClient";
import { de_PutActionInteractionsCommand, se_PutActionInteractionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutActionInteractionsCommand}.
 */
export interface PutActionInteractionsCommandInput extends PutActionInteractionsRequest {}
/**
 * @public
 *
 * The output of {@link PutActionInteractionsCommand}.
 */
export interface PutActionInteractionsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Records action interaction event data. An <i>action interaction</i> event is an interaction between a user and an <i>action</i>.
 *       For example, a user taking an action, such a enrolling in a membership program or downloading your app.</p>
 *          <p>
 *       For more information about recording action interactions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-action-interaction-events.html">Recording action interaction events</a>.
 *       For more information about actions in an Actions dataset, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/actions-datasets.html">Actions dataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeEventsClient, PutActionInteractionsCommand } from "@aws-sdk/client-personalize-events"; // ES Modules import
 * // const { PersonalizeEventsClient, PutActionInteractionsCommand } = require("@aws-sdk/client-personalize-events"); // CommonJS import
 * const client = new PersonalizeEventsClient(config);
 * const input = { // PutActionInteractionsRequest
 *   trackingId: "STRING_VALUE", // required
 *   actionInteractions: [ // ActionInteractionsList // required
 *     { // ActionInteraction
 *       actionId: "STRING_VALUE", // required
 *       userId: "STRING_VALUE",
 *       sessionId: "STRING_VALUE", // required
 *       timestamp: new Date("TIMESTAMP"), // required
 *       eventType: "STRING_VALUE", // required
 *       eventId: "STRING_VALUE",
 *       recommendationId: "STRING_VALUE",
 *       impression: [ // ActionImpression
 *         "STRING_VALUE",
 *       ],
 *       properties: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutActionInteractionsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutActionInteractionsCommandInput - {@link PutActionInteractionsCommandInput}
 * @returns {@link PutActionInteractionsCommandOutput}
 * @see {@link PutActionInteractionsCommandInput} for command's `input` shape.
 * @see {@link PutActionInteractionsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeEventsClientResolvedConfig | config} for PersonalizeEventsClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link PersonalizeEventsServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeEvents service.</p>
 *
 */
export class PutActionInteractionsCommand extends $Command<
  PutActionInteractionsCommandInput,
  PutActionInteractionsCommandOutput,
  PersonalizeEventsClientResolvedConfig
> {
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
  constructor(readonly input: PutActionInteractionsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutActionInteractionsCommandInput, PutActionInteractionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutActionInteractionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeEventsClient";
    const commandName = "PutActionInteractionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutActionInteractionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPersonalizeEvents",
        operation: "PutActionInteractions",
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
  private serialize(input: PutActionInteractionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutActionInteractionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutActionInteractionsCommandOutput> {
    return de_PutActionInteractionsCommand(output, context);
  }
}
