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

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import {
  ConfigureAgentRequest,
  ConfigureAgentRequestFilterSensitiveLog,
  ConfigureAgentResponse,
  ConfigureAgentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ConfigureAgentCommand,
  serializeAws_restJson1ConfigureAgentCommand,
} from "../protocols/Aws_restJson1";

export interface ConfigureAgentCommandInput extends ConfigureAgentRequest {}
export interface ConfigureAgentCommandOutput extends ConfigureAgentResponse, __MetadataBearer {}

/**
 * <p>
 *           Used by profiler agents to report their current state and to receive remote
 *           configuration updates. For example, <code>ConfigureAgent</code> can be used
 *          to tell an agent whether to profile or not and for how long to return profiling data.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ConfigureAgentCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ConfigureAgentCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new ConfigureAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureAgentCommandInput} for command's `input` shape.
 * @see {@link ConfigureAgentCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 */
export class ConfigureAgentCommand extends $Command<
  ConfigureAgentCommandInput,
  ConfigureAgentCommandOutput,
  CodeGuruProfilerClientResolvedConfig
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

  constructor(readonly input: ConfigureAgentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfigureAgentCommandInput, ConfigureAgentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfigureAgentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "ConfigureAgentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfigureAgentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfigureAgentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfigureAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ConfigureAgentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfigureAgentCommandOutput> {
    return deserializeAws_restJson1ConfigureAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
