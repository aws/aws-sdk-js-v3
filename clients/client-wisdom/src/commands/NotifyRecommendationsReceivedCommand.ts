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

import { NotifyRecommendationsReceivedRequest, NotifyRecommendationsReceivedResponse } from "../models/models_0";
import {
  de_NotifyRecommendationsReceivedCommand,
  se_NotifyRecommendationsReceivedCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link NotifyRecommendationsReceivedCommand}.
 */
export interface NotifyRecommendationsReceivedCommandInput extends NotifyRecommendationsReceivedRequest {}
/**
 * @public
 *
 * The output of {@link NotifyRecommendationsReceivedCommand}.
 */
export interface NotifyRecommendationsReceivedCommandOutput
  extends NotifyRecommendationsReceivedResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Removes the specified recommendations from the specified assistant's queue of newly
 *       available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling
 *       behavior and avoiding duplicate recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, NotifyRecommendationsReceivedCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, NotifyRecommendationsReceivedCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const input = { // NotifyRecommendationsReceivedRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   recommendationIds: [ // RecommendationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new NotifyRecommendationsReceivedCommand(input);
 * const response = await client.send(command);
 * // { // NotifyRecommendationsReceivedResponse
 * //   recommendationIds: [ // RecommendationIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   errors: [ // NotifyRecommendationsReceivedErrorList
 * //     { // NotifyRecommendationsReceivedError
 * //       recommendationId: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param NotifyRecommendationsReceivedCommandInput - {@link NotifyRecommendationsReceivedCommandInput}
 * @returns {@link NotifyRecommendationsReceivedCommandOutput}
 * @see {@link NotifyRecommendationsReceivedCommandInput} for command's `input` shape.
 * @see {@link NotifyRecommendationsReceivedCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 */
export class NotifyRecommendationsReceivedCommand extends $Command<
  NotifyRecommendationsReceivedCommandInput,
  NotifyRecommendationsReceivedCommandOutput,
  WisdomClientResolvedConfig
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
  constructor(readonly input: NotifyRecommendationsReceivedCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WisdomClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyRecommendationsReceivedCommandInput, NotifyRecommendationsReceivedCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, NotifyRecommendationsReceivedCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WisdomClient";
    const commandName = "NotifyRecommendationsReceivedCommand";
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
  private serialize(input: NotifyRecommendationsReceivedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_NotifyRecommendationsReceivedCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NotifyRecommendationsReceivedCommandOutput> {
    return de_NotifyRecommendationsReceivedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
