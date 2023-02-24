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
  GetSubscriptionAttributesInput,
  GetSubscriptionAttributesInputFilterSensitiveLog,
  GetSubscriptionAttributesResponse,
  GetSubscriptionAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetSubscriptionAttributesCommand,
  serializeAws_queryGetSubscriptionAttributesCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface GetSubscriptionAttributesCommandInput extends GetSubscriptionAttributesInput {}
export interface GetSubscriptionAttributesCommandOutput extends GetSubscriptionAttributesResponse, __MetadataBearer {}

/**
 * <p>Returns all of the properties of a subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, GetSubscriptionAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, GetSubscriptionAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new GetSubscriptionAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubscriptionAttributesCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class GetSubscriptionAttributesCommand extends $Command<
  GetSubscriptionAttributesCommandInput,
  GetSubscriptionAttributesCommandOutput,
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

  constructor(readonly input: GetSubscriptionAttributesCommandInput) {
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
  ): Handler<GetSubscriptionAttributesCommandInput, GetSubscriptionAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSubscriptionAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "GetSubscriptionAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSubscriptionAttributesInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetSubscriptionAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSubscriptionAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetSubscriptionAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSubscriptionAttributesCommandOutput> {
    return deserializeAws_queryGetSubscriptionAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
