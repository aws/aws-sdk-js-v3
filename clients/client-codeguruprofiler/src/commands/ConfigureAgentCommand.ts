// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { ConfigureAgentRequest, ConfigureAgentResponse } from "../models/models_0";
import { de_ConfigureAgentCommand, se_ConfigureAgentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ConfigureAgentCommand}.
 */
export interface ConfigureAgentCommandInput extends ConfigureAgentRequest {}
/**
 * @public
 *
 * The output of {@link ConfigureAgentCommand}.
 */
export interface ConfigureAgentCommandOutput extends ConfigureAgentResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // ConfigureAgentRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   fleetInstanceId: "STRING_VALUE",
 *   metadata: { // Metadata
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ConfigureAgentCommand(input);
 * const response = await client.send(command);
 * // { // ConfigureAgentResponse
 * //   configuration: { // AgentConfiguration
 * //     shouldProfile: true || false, // required
 * //     periodInSeconds: Number("int"), // required
 * //     agentParameters: { // AgentParameters
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ConfigureAgentCommandInput - {@link ConfigureAgentCommandInput}
 * @returns {@link ConfigureAgentCommandOutput}
 * @see {@link ConfigureAgentCommandInput} for command's `input` shape.
 * @see {@link ConfigureAgentCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ConfigureAgentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ConfigureAgentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfigureAgentCommandOutput> {
    return de_ConfigureAgentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
