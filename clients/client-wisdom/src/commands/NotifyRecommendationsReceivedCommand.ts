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

import {
  NotifyRecommendationsReceivedRequest,
  NotifyRecommendationsReceivedRequestFilterSensitiveLog,
  NotifyRecommendationsReceivedResponse,
  NotifyRecommendationsReceivedResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1NotifyRecommendationsReceivedCommand,
  serializeAws_restJson1NotifyRecommendationsReceivedCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

export interface NotifyRecommendationsReceivedCommandInput extends NotifyRecommendationsReceivedRequest {}
export interface NotifyRecommendationsReceivedCommandOutput
  extends NotifyRecommendationsReceivedResponse,
    __MetadataBearer {}

/**
 * <p>Removes the specified recommendations from the specified assistant's queue of newly
 *       available recommendations. You can use this API in conjunction with <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetRecommendations.html">GetRecommendations</a> and a <code>waitTimeSeconds</code> input for long-polling
 *       behavior and avoiding duplicate recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, NotifyRecommendationsReceivedCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, NotifyRecommendationsReceivedCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * const client = new WisdomClient(config);
 * const command = new NotifyRecommendationsReceivedCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link NotifyRecommendationsReceivedCommandInput} for command's `input` shape.
 * @see {@link NotifyRecommendationsReceivedCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
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
      inputFilterSensitiveLog: NotifyRecommendationsReceivedRequestFilterSensitiveLog,
      outputFilterSensitiveLog: NotifyRecommendationsReceivedResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyRecommendationsReceivedCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1NotifyRecommendationsReceivedCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<NotifyRecommendationsReceivedCommandOutput> {
    return deserializeAws_restJson1NotifyRecommendationsReceivedCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
