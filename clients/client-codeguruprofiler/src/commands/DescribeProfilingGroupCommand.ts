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
import { DescribeProfilingGroupRequest, DescribeProfilingGroupResponse } from "../models/models_0";
import { de_DescribeProfilingGroupCommand, se_DescribeProfilingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProfilingGroupCommand}.
 */
export interface DescribeProfilingGroupCommandInput extends DescribeProfilingGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProfilingGroupCommand}.
 */
export interface DescribeProfilingGroupCommandOutput extends DescribeProfilingGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Returns a <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
 *                <code>ProfilingGroupDescription</code>
 *             </a>
 *          object that contains information about the requested profiling group.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, DescribeProfilingGroupCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, DescribeProfilingGroupCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // DescribeProfilingGroupRequest
 *   profilingGroupName: "STRING_VALUE", // required
 * };
 * const command = new DescribeProfilingGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProfilingGroupResponse
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
 * @param DescribeProfilingGroupCommandInput - {@link DescribeProfilingGroupCommandInput}
 * @returns {@link DescribeProfilingGroupCommandOutput}
 * @see {@link DescribeProfilingGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeProfilingGroupCommandOutput} for command's `response` shape.
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
export class DescribeProfilingGroupCommand extends $Command<
  DescribeProfilingGroupCommandInput,
  DescribeProfilingGroupCommandOutput,
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
  constructor(readonly input: DescribeProfilingGroupCommandInput) {
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
  ): Handler<DescribeProfilingGroupCommandInput, DescribeProfilingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProfilingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "DescribeProfilingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeGuruProfiler",
        operation: "DescribeProfilingGroup",
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
  private serialize(input: DescribeProfilingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProfilingGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProfilingGroupCommandOutput> {
    return de_DescribeProfilingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
