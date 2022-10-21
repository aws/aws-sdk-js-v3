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
  SubscribeInput,
  SubscribeInputFilterSensitiveLog,
  SubscribeResponse,
  SubscribeResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_querySubscribeCommand, serializeAws_querySubscribeCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface SubscribeCommandInput extends SubscribeInput {}
export interface SubscribeCommandOutput extends SubscribeResponse, __MetadataBearer {}

/**
 * <p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or
 *             if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must
 *             run the <code>ConfirmSubscription</code> action to confirm the subscription.</p>
 *         <p>You call the <code>ConfirmSubscription</code> action with the token from the
 *             subscription response. Confirmation tokens are valid for three days.</p>
 *         <p>This action is throttled at 100 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SubscribeCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SubscribeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubscribeCommandInput} for command's `input` shape.
 * @see {@link SubscribeCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class SubscribeCommand extends $Command<SubscribeCommandInput, SubscribeCommandOutput, SNSClientResolvedConfig> {
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

  constructor(readonly input: SubscribeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubscribeCommandInput, SubscribeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SubscribeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "SubscribeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubscribeInputFilterSensitiveLog,
      outputFilterSensitiveLog: SubscribeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubscribeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySubscribeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubscribeCommandOutput> {
    return deserializeAws_querySubscribeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
