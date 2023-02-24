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
import { PutNotificationChannelRequest, PutNotificationChannelRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1PutNotificationChannelCommand,
  serializeAws_json1_1PutNotificationChannelCommand,
} from "../protocols/Aws_json1_1";

export interface PutNotificationChannelCommandInput extends PutNotificationChannelRequest {}
export interface PutNotificationChannelCommandOutput extends __MetadataBearer {}

/**
 * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that
 *       Firewall Manager uses to record SNS logs.</p>
 *          <p>To perform this action outside of the console, you must configure the SNS topic to allow the Firewall Manager
 *       role <code>AWSServiceRoleForFMS</code> to publish SNS logs. For more information, see
 *       <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a> in the <i>Firewall Manager Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, PutNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, PutNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new PutNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link PutNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class PutNotificationChannelCommand extends $Command<
  PutNotificationChannelCommandInput,
  PutNotificationChannelCommandOutput,
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

  constructor(readonly input: PutNotificationChannelCommandInput) {
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
  ): Handler<PutNotificationChannelCommandInput, PutNotificationChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutNotificationChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "PutNotificationChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutNotificationChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutNotificationChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutNotificationChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutNotificationChannelCommandOutput> {
    return deserializeAws_json1_1PutNotificationChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
