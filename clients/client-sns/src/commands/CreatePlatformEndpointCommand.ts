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
  CreateEndpointResponse,
  CreateEndpointResponseFilterSensitiveLog,
  CreatePlatformEndpointInput,
  CreatePlatformEndpointInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreatePlatformEndpointCommand,
  serializeAws_queryCreatePlatformEndpointCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface CreatePlatformEndpointCommandInput extends CreatePlatformEndpointInput {}
export interface CreatePlatformEndpointCommandOutput extends CreateEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates an endpoint for a device and mobile app on one of the supported push
 *             notification services, such as GCM (Firebase Cloud Messaging) and APNS.
 *                 <code>CreatePlatformEndpoint</code> requires the <code>PlatformApplicationArn</code>
 *             that is returned from <code>CreatePlatformApplication</code>. You can use the returned
 *                 <code>EndpointArn</code> to send a message to a mobile app or by the
 *                 <code>Subscribe</code> action for subscription to a topic. The
 *                 <code>CreatePlatformEndpoint</code> action is idempotent, so if the requester
 *             already owns an endpoint with the same device token and attributes, that endpoint's ARN
 *             is returned without creating a new endpoint. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *                 Notifications</a>. </p>
 *         <p>When using <code>CreatePlatformEndpoint</code> with Baidu, two attributes must be
 *             provided: ChannelId and UserId. The token field must also contain the ChannelId. For
 *             more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePushBaiduEndpoint.html">Creating an Amazon SNS Endpoint for
 *                 Baidu</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreatePlatformEndpointCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreatePlatformEndpointCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CreatePlatformEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePlatformEndpointCommandInput} for command's `input` shape.
 * @see {@link CreatePlatformEndpointCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class CreatePlatformEndpointCommand extends $Command<
  CreatePlatformEndpointCommandInput,
  CreatePlatformEndpointCommandOutput,
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

  constructor(readonly input: CreatePlatformEndpointCommandInput) {
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
  ): Handler<CreatePlatformEndpointCommandInput, CreatePlatformEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePlatformEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "CreatePlatformEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePlatformEndpointInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEndpointResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePlatformEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreatePlatformEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePlatformEndpointCommandOutput> {
    return deserializeAws_queryCreatePlatformEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
