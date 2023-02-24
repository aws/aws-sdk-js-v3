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
  DeleteSlackWorkspaceConfigurationRequest,
  DeleteSlackWorkspaceConfigurationRequestFilterSensitiveLog,
  DeleteSlackWorkspaceConfigurationResult,
  DeleteSlackWorkspaceConfigurationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSlackWorkspaceConfigurationCommand,
  serializeAws_restJson1DeleteSlackWorkspaceConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

export interface DeleteSlackWorkspaceConfigurationCommandInput extends DeleteSlackWorkspaceConfigurationRequest {}
export interface DeleteSlackWorkspaceConfigurationCommandOutput
  extends DeleteSlackWorkspaceConfigurationResult,
    __MetadataBearer {}

/**
 * <p>Deletes a Slack workspace configuration from your Amazon Web Services account. This operation doesn't
 *       delete your Slack workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, DeleteSlackWorkspaceConfigurationCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, DeleteSlackWorkspaceConfigurationCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * const client = new SupportAppClient(config);
 * const command = new DeleteSlackWorkspaceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSlackWorkspaceConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSlackWorkspaceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 */
export class DeleteSlackWorkspaceConfigurationCommand extends $Command<
  DeleteSlackWorkspaceConfigurationCommandInput,
  DeleteSlackWorkspaceConfigurationCommandOutput,
  SupportAppClientResolvedConfig
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

  constructor(readonly input: DeleteSlackWorkspaceConfigurationCommandInput) {
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
  ): Handler<DeleteSlackWorkspaceConfigurationCommandInput, DeleteSlackWorkspaceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSlackWorkspaceConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportAppClient";
    const commandName = "DeleteSlackWorkspaceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSlackWorkspaceConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteSlackWorkspaceConfigurationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteSlackWorkspaceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSlackWorkspaceConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteSlackWorkspaceConfigurationCommandOutput> {
    return deserializeAws_restJson1DeleteSlackWorkspaceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
