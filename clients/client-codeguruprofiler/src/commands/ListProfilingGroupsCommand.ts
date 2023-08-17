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
import { ListProfilingGroupsRequest, ListProfilingGroupsResponse } from "../models/models_0";
import { de_ListProfilingGroupsCommand, se_ListProfilingGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListProfilingGroupsCommand}.
 */
export interface ListProfilingGroupsCommandInput extends ListProfilingGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListProfilingGroupsCommand}.
 */
export interface ListProfilingGroupsCommandOutput extends ListProfilingGroupsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Returns a list of profiling groups. The profiling groups are returned as
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ProfilingGroupDescription.html">
 *                <code>ProfilingGroupDescription</code>
 *             </a>
 *          objects.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, ListProfilingGroupsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, ListProfilingGroupsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // ListProfilingGroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   includeDescription: true || false,
 * };
 * const command = new ListProfilingGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfilingGroupsResponse
 * //   profilingGroupNames: [ // ProfilingGroupNames // required
 * //     "STRING_VALUE",
 * //   ],
 * //   profilingGroups: [ // ProfilingGroupDescriptions
 * //     { // ProfilingGroupDescription
 * //       name: "STRING_VALUE",
 * //       agentOrchestrationConfig: { // AgentOrchestrationConfig
 * //         profilingEnabled: true || false, // required
 * //       },
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       profilingStatus: { // ProfilingStatus
 * //         latestAgentProfileReportedAt: new Date("TIMESTAMP"),
 * //         latestAggregatedProfile: { // AggregatedProfileTime
 * //           start: new Date("TIMESTAMP"),
 * //           period: "STRING_VALUE",
 * //         },
 * //         latestAgentOrchestratedAt: new Date("TIMESTAMP"),
 * //       },
 * //       computePlatform: "STRING_VALUE",
 * //       tags: { // TagsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfilingGroupsCommandInput - {@link ListProfilingGroupsCommandInput}
 * @returns {@link ListProfilingGroupsCommandOutput}
 * @see {@link ListProfilingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListProfilingGroupsCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 */
export class ListProfilingGroupsCommand extends $Command<
  ListProfilingGroupsCommandInput,
  ListProfilingGroupsCommandOutput,
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
  constructor(readonly input: ListProfilingGroupsCommandInput) {
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
  ): Handler<ListProfilingGroupsCommandInput, ListProfilingGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProfilingGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "ListProfilingGroupsCommand";
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
  private serialize(input: ListProfilingGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListProfilingGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProfilingGroupsCommandOutput> {
    return de_ListProfilingGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
