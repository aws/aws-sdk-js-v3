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
  AddNotificationChannelRequest,
  AddNotificationChannelRequestFilterSensitiveLog,
  AddNotificationChannelResponse,
  AddNotificationChannelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AddNotificationChannelCommand,
  serializeAws_restJson1AddNotificationChannelCommand,
} from "../protocols/Aws_restJson1";

export interface AddNotificationChannelCommandInput extends AddNotificationChannelRequest {}
export interface AddNotificationChannelCommandOutput extends AddNotificationChannelResponse, __MetadataBearer {}

/**
 * <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you
 * 			about important DevOps Guru events, such as when an insight is generated. </p>
 * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
 * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. DevOps Guru only supports standard SNS topics.
 * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
 * 				for cross account Amazon SNS topics</a>.</p>
 * 				     <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see Permissions for cross account Amazon SNS topics.</p>
 * 				     <p>If you use an Amazon SNS topic that is encrypted by an Amazon Web Services Key Management Service customer-managed key (CMK), then you must add permissions
 * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
 * 				Amazon Web Services KMS–encrypted Amazon SNS topics</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, AddNotificationChannelCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, AddNotificationChannelCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const command = new AddNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link AddNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 */
export class AddNotificationChannelCommand extends $Command<
  AddNotificationChannelCommandInput,
  AddNotificationChannelCommandOutput,
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

  constructor(readonly input: AddNotificationChannelCommandInput) {
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
  ): Handler<AddNotificationChannelCommandInput, AddNotificationChannelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddNotificationChannelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "AddNotificationChannelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddNotificationChannelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddNotificationChannelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddNotificationChannelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddNotificationChannelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddNotificationChannelCommandOutput> {
    return deserializeAws_restJson1AddNotificationChannelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
