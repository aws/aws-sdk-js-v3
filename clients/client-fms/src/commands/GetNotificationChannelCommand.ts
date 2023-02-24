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

import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import {
  GetNotificationChannelRequest,
  GetNotificationChannelRequestFilterSensitiveLog,
  GetNotificationChannelResponse,
  GetNotificationChannelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetNotificationChannelCommand,
  serializeAws_json1_1GetNotificationChannelCommand,
} from "../protocols/Aws_json1_1";

export interface GetNotificationChannelCommandInput extends GetNotificationChannelRequest {}
export interface GetNotificationChannelCommandOutput extends GetNotificationChannelResponse, __MetadataBearer {}

/**
 * <p>Information
 *       about the Amazon Simple Notification Service (SNS) topic that is used to
 *       record Firewall Manager SNS logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, GetNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, GetNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new GetNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link GetNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class GetNotificationChannelCommand extends $Command<
  GetNotificationChannelCommandInput,
  GetNotificationChannelCommandOutput,
  FMSClientResolvedConfig
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

  constructor(readonly input: GetNotificationChannelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetNotificationChannelCommandInput, GetNotificationChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNotificationChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "GetNotificationChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetNotificationChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetNotificationChannelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetNotificationChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetNotificationChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNotificationChannelCommandOutput> {
    return deserializeAws_json1_1GetNotificationChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
