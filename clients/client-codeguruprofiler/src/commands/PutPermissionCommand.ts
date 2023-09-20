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
import { PutPermissionRequest, PutPermissionResponse } from "../models/models_0";
import { de_PutPermissionCommand, se_PutPermissionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandInput extends PutPermissionRequest {}
/**
 * @public
 *
 * The output of {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandOutput extends PutPermissionResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Adds permissions to a profiling group's resource-based policy
 *             that are provided using an action group. If a profiling group doesn't have
 *             a resource-based policy, one is created for it using the permissions in the action group and
 *             the roles and users in the <code>principals</code> parameter.
 *         </p>
 *
 *         <p> The one supported action group that can be added is <code>agentPermission</code>
 *             which grants <code>ConfigureAgent</code> and <code>PostAgent</code> permissions. For
 *             more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html">Resource-based
 *                 policies in CodeGuru Profiler</a> in the <i>Amazon CodeGuru Profiler User
 *                 Guide</i>, <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html">
 *                <code>ConfigureAgent</code>
 *             </a>, and <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html">
 *                <code>PostAgentProfile</code>
 *             </a>. </p>
 *
 *         <p>
 *             The first time you call <code>PutPermission</code> on a profiling group, do not specify a <code>revisionId</code> because
 *             it doesn't have a resource-based policy. Subsequent calls must provide a <code>revisionId</code> to specify
 *             which revision of the resource-based policy to add the permissions to.
 *         </p>
 *
 *         <p>
 *             The response contains the profiling group's JSON-formatted resource policy.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, PutPermissionCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, PutPermissionCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // PutPermissionRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   actionGroup: "STRING_VALUE", // required
 *   principals: [ // Principals // required
 *     "STRING_VALUE",
 *   ],
 *   revisionId: "STRING_VALUE",
 * };
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * // { // PutPermissionResponse
 * //   policy: "STRING_VALUE", // required
 * //   revisionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutPermissionCommandInput - {@link PutPermissionCommandInput}
 * @returns {@link PutPermissionCommandOutput}
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
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
export class PutPermissionCommand extends $Command<
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
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
  constructor(readonly input: PutPermissionCommandInput) {
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
  ): Handler<PutPermissionCommandInput, PutPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutPermissionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "PutPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeGuruProfiler",
        operation: "PutPermission",
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
  private serialize(input: PutPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutPermissionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPermissionCommandOutput> {
    return de_PutPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
