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
  DescribeWorkspaceAuthenticationRequest,
  DescribeWorkspaceAuthenticationRequestFilterSensitiveLog,
  DescribeWorkspaceAuthenticationResponse,
  DescribeWorkspaceAuthenticationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DescribeWorkspaceAuthenticationCommand,
  serializeAws_restJson1DescribeWorkspaceAuthenticationCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeWorkspaceAuthenticationCommandInput extends DescribeWorkspaceAuthenticationRequest {}
export interface DescribeWorkspaceAuthenticationCommandOutput
  extends DescribeWorkspaceAuthenticationResponse,
    __MetadataBearer {}

/**
 * <p>Displays information about the authentication methods used in one Amazon Managed Grafana workspace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, DescribeWorkspaceAuthenticationCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, DescribeWorkspaceAuthenticationCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const command = new DescribeWorkspaceAuthenticationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeWorkspaceAuthenticationCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 */
export class DescribeWorkspaceAuthenticationCommand extends $Command<
  DescribeWorkspaceAuthenticationCommandInput,
  DescribeWorkspaceAuthenticationCommandOutput,
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

  constructor(readonly input: DescribeWorkspaceAuthenticationCommandInput) {
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
  ): Handler<DescribeWorkspaceAuthenticationCommandInput, DescribeWorkspaceAuthenticationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeWorkspaceAuthenticationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "DescribeWorkspaceAuthenticationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeWorkspaceAuthenticationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeWorkspaceAuthenticationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeWorkspaceAuthenticationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeWorkspaceAuthenticationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeWorkspaceAuthenticationCommandOutput> {
    return deserializeAws_restJson1DescribeWorkspaceAuthenticationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
