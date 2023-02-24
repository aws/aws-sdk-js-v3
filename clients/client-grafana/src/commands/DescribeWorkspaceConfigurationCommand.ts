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

import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import {
  DescribeWorkspaceConfigurationRequest,
  DescribeWorkspaceConfigurationRequestFilterSensitiveLog,
  DescribeWorkspaceConfigurationResponse,
  DescribeWorkspaceConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeWorkspaceConfigurationCommand,
  serializeAws_restJson1DescribeWorkspaceConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeWorkspaceConfigurationCommandInput extends DescribeWorkspaceConfigurationRequest {}
export interface DescribeWorkspaceConfigurationCommandOutput
  extends DescribeWorkspaceConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Gets the current configuration string for the given workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DescribeWorkspaceConfigurationCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DescribeWorkspaceConfigurationCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const command = new DescribeWorkspaceConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 */
export class DescribeWorkspaceConfigurationCommand extends $Command<
  DescribeWorkspaceConfigurationCommandInput,
  DescribeWorkspaceConfigurationCommandOutput,
  GrafanaClientResolvedConfig
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

  constructor(readonly input: DescribeWorkspaceConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GrafanaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeWorkspaceConfigurationCommandInput, DescribeWorkspaceConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkspaceConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "DescribeWorkspaceConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspaceConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeWorkspaceConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeWorkspaceConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkspaceConfigurationCommandOutput> {
    return deserializeAws_restJson1DescribeWorkspaceConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
