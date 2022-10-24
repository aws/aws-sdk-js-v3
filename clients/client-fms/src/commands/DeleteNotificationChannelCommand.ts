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
  DeleteNotificationChannelRequest,
  DeleteNotificationChannelRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteNotificationChannelCommand,
  serializeAws_json1_1DeleteNotificationChannelCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteNotificationChannelCommandInput extends DeleteNotificationChannelRequest {}
export interface DeleteNotificationChannelCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an Firewall Manager association with the IAM role and the Amazon Simple
 *       Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DeleteNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for FMSClient's `config` shape.
 *
 */
export class DeleteNotificationChannelCommand extends $Command<
  DeleteNotificationChannelCommandInput,
  DeleteNotificationChannelCommandOutput,
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

  constructor(readonly input: DeleteNotificationChannelCommandInput) {
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
  ): Handler<DeleteNotificationChannelCommandInput, DeleteNotificationChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNotificationChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FMSClient";
    const commandName = "DeleteNotificationChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNotificationChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNotificationChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteNotificationChannelCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNotificationChannelCommandOutput> {
    return deserializeAws_json1_1DeleteNotificationChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
