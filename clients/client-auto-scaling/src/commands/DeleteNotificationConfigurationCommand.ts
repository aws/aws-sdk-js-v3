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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import {
  DeleteNotificationConfigurationType,
  DeleteNotificationConfigurationTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteNotificationConfigurationCommand,
  serializeAws_queryDeleteNotificationConfigurationCommand,
} from "../protocols/Aws_query";

export interface DeleteNotificationConfigurationCommandInput extends DeleteNotificationConfigurationType {}
export interface DeleteNotificationConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified notification.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DeleteNotificationConfigurationCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DeleteNotificationConfigurationCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DeleteNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DeleteNotificationConfigurationCommand extends $Command<
  DeleteNotificationConfigurationCommandInput,
  DeleteNotificationConfigurationCommandOutput,
  AutoScalingClientResolvedConfig
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

  constructor(readonly input: DeleteNotificationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNotificationConfigurationCommandInput, DeleteNotificationConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNotificationConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DeleteNotificationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNotificationConfigurationTypeFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteNotificationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteNotificationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteNotificationConfigurationCommandOutput> {
    return deserializeAws_queryDeleteNotificationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
