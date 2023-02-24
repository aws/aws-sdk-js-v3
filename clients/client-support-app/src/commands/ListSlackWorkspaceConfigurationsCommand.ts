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
  ListSlackWorkspaceConfigurationsRequest,
  ListSlackWorkspaceConfigurationsRequestFilterSensitiveLog,
  ListSlackWorkspaceConfigurationsResult,
  ListSlackWorkspaceConfigurationsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListSlackWorkspaceConfigurationsCommand,
  serializeAws_restJson1ListSlackWorkspaceConfigurationsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SupportAppClientResolvedConfig } from "../SupportAppClient";

export interface ListSlackWorkspaceConfigurationsCommandInput extends ListSlackWorkspaceConfigurationsRequest {}
export interface ListSlackWorkspaceConfigurationsCommandOutput
  extends ListSlackWorkspaceConfigurationsResult,
    __MetadataBearer {}

/**
 * <p>Lists the Slack workspace configurations for an Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, ListSlackWorkspaceConfigurationsCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, ListSlackWorkspaceConfigurationsCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * const client = new SupportAppClient(config);
 * const command = new ListSlackWorkspaceConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListSlackWorkspaceConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListSlackWorkspaceConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 */
export class ListSlackWorkspaceConfigurationsCommand extends $Command<
  ListSlackWorkspaceConfigurationsCommandInput,
  ListSlackWorkspaceConfigurationsCommandOutput,
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

  constructor(readonly input: ListSlackWorkspaceConfigurationsCommandInput) {
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
  ): Handler<ListSlackWorkspaceConfigurationsCommandInput, ListSlackWorkspaceConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSlackWorkspaceConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SupportAppClient";
    const commandName = "ListSlackWorkspaceConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSlackWorkspaceConfigurationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListSlackWorkspaceConfigurationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListSlackWorkspaceConfigurationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSlackWorkspaceConfigurationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListSlackWorkspaceConfigurationsCommandOutput> {
    return deserializeAws_restJson1ListSlackWorkspaceConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
