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

import { SetSubscriptionAttributesInput, SetSubscriptionAttributesInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_querySetSubscriptionAttributesCommand,
  serializeAws_querySetSubscriptionAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface SetSubscriptionAttributesCommandInput extends SetSubscriptionAttributesInput {}
export interface SetSubscriptionAttributesCommandOutput extends __MetadataBearer {}

/**
 * <p>Allows a subscription owner to set an attribute of the subscription to a new
 *             value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link SetSubscriptionAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class SetSubscriptionAttributesCommand extends $Command<
  SetSubscriptionAttributesCommandInput,
  SetSubscriptionAttributesCommandOutput,
  SNSClientResolvedConfig
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

  constructor(readonly input: SetSubscriptionAttributesCommandInput) {
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
  ): Handler<SetSubscriptionAttributesCommandInput, SetSubscriptionAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetSubscriptionAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "SetSubscriptionAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetSubscriptionAttributesInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetSubscriptionAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySetSubscriptionAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SetSubscriptionAttributesCommandOutput> {
    return deserializeAws_querySetSubscriptionAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
