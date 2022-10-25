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
  PutPermissionRequest,
  PutPermissionRequestFilterSensitiveLog,
  PutPermissionResponse,
  PutPermissionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutPermissionCommand,
  serializeAws_restJson1PutPermissionCommand,
} from "../protocols/Aws_restJson1";

export interface PutPermissionCommandInput extends PutPermissionRequest {}
export interface PutPermissionCommandOutput extends PutPermissionResponse, __MetadataBearer {}

/**
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
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
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
      inputFilterSensitiveLog: PutPermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutPermissionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutPermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPermissionCommandOutput> {
    return deserializeAws_restJson1PutPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
