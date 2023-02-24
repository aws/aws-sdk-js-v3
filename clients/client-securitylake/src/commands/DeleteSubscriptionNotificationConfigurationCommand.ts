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
  DeleteSubscriptionNotificationConfigurationRequest,
  DeleteSubscriptionNotificationConfigurationRequestFilterSensitiveLog,
  DeleteSubscriptionNotificationConfigurationResponse,
  DeleteSubscriptionNotificationConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommand,
  serializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface DeleteSubscriptionNotificationConfigurationCommandInput
  extends DeleteSubscriptionNotificationConfigurationRequest {}
export interface DeleteSubscriptionNotificationConfigurationCommandOutput
  extends DeleteSubscriptionNotificationConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the specified notification subscription in Amazon Security Lake for the organization
 *          you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, DeleteSubscriptionNotificationConfigurationCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, DeleteSubscriptionNotificationConfigurationCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new DeleteSubscriptionNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubscriptionNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class DeleteSubscriptionNotificationConfigurationCommand extends $Command<
  DeleteSubscriptionNotificationConfigurationCommandInput,
  DeleteSubscriptionNotificationConfigurationCommandOutput,
  SecurityLakeClientResolvedConfig
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

  constructor(readonly input: DeleteSubscriptionNotificationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteSubscriptionNotificationConfigurationCommandInput,
    DeleteSubscriptionNotificationConfigurationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DeleteSubscriptionNotificationConfigurationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "DeleteSubscriptionNotificationConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSubscriptionNotificationConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteSubscriptionNotificationConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteSubscriptionNotificationConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSubscriptionNotificationConfigurationCommandOutput> {
    return deserializeAws_restJson1DeleteSubscriptionNotificationConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
