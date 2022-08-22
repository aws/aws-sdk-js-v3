// smithy-typescript generated code
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
  CreateSlackChannelConfigurationRequest,
  CreateSlackChannelConfigurationRequestFilterSensitiveLog,
  CreateSlackChannelConfigurationResult,
  CreateSlackChannelConfigurationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSlackChannelConfigurationCommand,
  serializeAws_restJson1CreateSlackChannelConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

export interface CreateSlackChannelConfigurationCommandInput extends CreateSlackChannelConfigurationRequest {}
export interface CreateSlackChannelConfigurationCommandOutput
  extends CreateSlackChannelConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Creates a Slack channel configuration for your Amazon Web Services account.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You can add up to 5 Slack workspaces for your account.</p>
 *                </li>
 *                <li>
 *                   <p>You can add up to 20 Slack channels for your account.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>A Slack channel can have up to 100 Amazon Web Services accounts. This means that only 100 accounts can
 *       add the same Slack channel to the Amazon Web Services Support App. We recommend that you only add the accounts that
 *       you need to manage support cases for your organization. This can reduce the notifications
 *       about case updates that you receive in the Slack channel.</p>
 *          <note>
 *             <p>We recommend that you choose a private Slack channel so that only members in that
 *         channel have read and write access to your support cases. Anyone in your Slack channel can
 *         create, update, or resolve support cases for your account. Users require an invitation to
 *         join private channels. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, CreateSlackChannelConfigurationCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, CreateSlackChannelConfigurationCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * const client = new SupportAppClient(config);
 * const command = new CreateSlackChannelConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSlackChannelConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateSlackChannelConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 */
export class CreateSlackChannelConfigurationCommand extends $Command<
  CreateSlackChannelConfigurationCommandInput,
  CreateSlackChannelConfigurationCommandOutput,
  SupportAppClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSlackChannelConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SupportAppClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSlackChannelConfigurationCommandInput, CreateSlackChannelConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportAppClient";
    const commandName = "CreateSlackChannelConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSlackChannelConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSlackChannelConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateSlackChannelConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSlackChannelConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSlackChannelConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateSlackChannelConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
