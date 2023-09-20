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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { UpdateProfilingGroupRequest, UpdateProfilingGroupResponse } from "../models/models_0";
import { de_UpdateProfilingGroupCommand, se_UpdateProfilingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfilingGroupCommand}.
 */
export interface UpdateProfilingGroupCommandInput extends UpdateProfilingGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfilingGroupCommand}.
 */
export interface UpdateProfilingGroupCommandOutput extends UpdateProfilingGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, UpdateProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, UpdateProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // UpdateProfilingGroupRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   agentOrchestrationConfig: { // AgentOrchestrationConfig
 *     profilingEnabled: true || false, // required
 *   },
 * };
 * const command = new UpdateProfilingGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateProfilingGroupResponse
 * //   profilingGroup: { // ProfilingGroupDescription
 * //     name: "STRING_VALUE",
 * //     agentOrchestrationConfig: { // AgentOrchestrationConfig
 * //       profilingEnabled: true || false, // required
 * //     },
 * //     arn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     profilingStatus: { // ProfilingStatus
 * //       latestAgentProfileReportedAt: new Date("TIMESTAMP"),
 * //       latestAggregatedProfile: { // AggregatedProfileTime
 * //         start: new Date("TIMESTAMP"),
 * //         period: "STRING_VALUE",
 * //       },
 * //       latestAgentOrchestratedAt: new Date("TIMESTAMP"),
 * //     },
 * //     computePlatform: "STRING_VALUE",
 * //     tags: { // TagsMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProfilingGroupCommandInput - {@link UpdateProfilingGroupCommandInput}
 * @returns {@link UpdateProfilingGroupCommandOutput}
 * @see {@link UpdateProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateProfilingGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state
 *         of a service resource associated with the request. Resolve the conflict
 *         before retrying this request.
 *       </p>
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
export class UpdateProfilingGroupCommand extends $Command<
  UpdateProfilingGroupCommandInput,
  UpdateProfilingGroupCommandOutput,
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
  constructor(readonly input: UpdateProfilingGroupCommandInput) {
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
  ): Handler<UpdateProfilingGroupCommandInput, UpdateProfilingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateProfilingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "UpdateProfilingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeGuruProfiler",
        operation: "UpdateProfilingGroup",
      },
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
  private serialize(input: UpdateProfilingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateProfilingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateProfilingGroupCommandOutput> {
    return de_UpdateProfilingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
