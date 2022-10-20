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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import {
  ListNotificationChannelsRequest,
  ListNotificationChannelsRequestFilterSensitiveLog,
  ListNotificationChannelsResponse,
  ListNotificationChannelsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListNotificationChannelsCommand,
  serializeAws_restJson1ListNotificationChannelsCommand,
} from "../protocols/Aws_restJson1";

export interface ListNotificationChannelsCommandInput extends ListNotificationChannelsRequest {}
export interface ListNotificationChannelsCommandOutput extends ListNotificationChannelsResponse, __MetadataBearer {}

/**
 * <p> Returns a list of notification channels configured for DevOps Guru. Each notification
 * 			channel is used to notify you when DevOps Guru generates an insight that contains information
 * 			about how to improve your operations. The one
 *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, ListNotificationChannelsCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, ListNotificationChannelsCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new ListNotificationChannelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotificationChannelsCommandInput} for command's `input` shape.
 * @see {@link ListNotificationChannelsCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class ListNotificationChannelsCommand extends $Command<
  ListNotificationChannelsCommandInput,
  ListNotificationChannelsCommandOutput,
  DevOpsGuruClientResolvedConfig
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

  constructor(readonly input: ListNotificationChannelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListNotificationChannelsCommandInput, ListNotificationChannelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListNotificationChannelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "ListNotificationChannelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListNotificationChannelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListNotificationChannelsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListNotificationChannelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListNotificationChannelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListNotificationChannelsCommandOutput> {
    return deserializeAws_restJson1ListNotificationChannelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
