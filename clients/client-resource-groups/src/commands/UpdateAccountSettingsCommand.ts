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
  UpdateAccountSettingsInput,
  UpdateAccountSettingsInputFilterSensitiveLog,
  UpdateAccountSettingsOutput,
  UpdateAccountSettingsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateAccountSettingsCommand,
  serializeAws_restJson1UpdateAccountSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ResourceGroupsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsClient";

export interface UpdateAccountSettingsCommandInput extends UpdateAccountSettingsInput {}
export interface UpdateAccountSettingsCommandOutput extends UpdateAccountSettingsOutput, __MetadataBearer {}

/**
 * <p>Turns on or turns off optional features in Resource Groups.</p>
 *          <p>The preceding example shows that the request to turn on group lifecycle events is
 *                 <code>IN_PROGRESS</code>. You can call the <a>GetAccountSettings</a>
 *             operation to check for completion by looking for <code>GroupLifecycleEventsStatus</code>
 *             to change to <code>ACTIVE</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsClient, UpdateAccountSettingsCommand } from "@aws-sdk/client-resource-groups"; // ES Modules import
 * // const { ResourceGroupsClient, UpdateAccountSettingsCommand } = require("@aws-sdk/client-resource-groups"); // CommonJS import
 * const client = new ResourceGroupsClient(config);
 * const command = new UpdateAccountSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAccountSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountSettingsCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsClientResolvedConfig | config} for ResourceGroupsClient's `config` shape.
 *
 */
export class UpdateAccountSettingsCommand extends $Command<
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
  ResourceGroupsClientResolvedConfig
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

  constructor(readonly input: UpdateAccountSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ResourceGroupsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAccountSettingsCommandInput, UpdateAccountSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAccountSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ResourceGroupsClient";
    const commandName = "UpdateAccountSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAccountSettingsInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAccountSettingsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateAccountSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateAccountSettingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAccountSettingsCommandOutput> {
    return deserializeAws_restJson1UpdateAccountSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
