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

import { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { UpdateEventSourcesConfigRequest, UpdateEventSourcesConfigResponse } from "../models/models_0";
import { de_UpdateEventSourcesConfigCommand, se_UpdateEventSourcesConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEventSourcesConfigCommand}.
 */
export interface UpdateEventSourcesConfigCommandInput extends UpdateEventSourcesConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventSourcesConfigCommand}.
 */
export interface UpdateEventSourcesConfigCommandOutput extends UpdateEventSourcesConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Enables or disables integration with a service that can be integrated with DevOps Guru. The
 * 			one service that can be integrated with DevOps Guru is Amazon CodeGuru Profiler, which
 * 			can produce proactive recommendations which can be stored and viewed in DevOps Guru.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, UpdateEventSourcesConfigCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, UpdateEventSourcesConfigCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = { // UpdateEventSourcesConfigRequest
 *   EventSources: { // EventSourcesConfig
 *     AmazonCodeGuruProfiler: { // AmazonCodeGuruProfilerIntegration
 *       Status: "ENABLED" || "DISABLED",
 *     },
 *   },
 * };
 * const command = new UpdateEventSourcesConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEventSourcesConfigCommandInput - {@link UpdateEventSourcesConfigCommandInput}
 * @returns {@link UpdateEventSourcesConfigCommandOutput}
 * @see {@link UpdateEventSourcesConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateEventSourcesConfigCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 */
export class UpdateEventSourcesConfigCommand extends $Command<
  UpdateEventSourcesConfigCommandInput,
  UpdateEventSourcesConfigCommandOutput,
  DevOpsGuruClientResolvedConfig
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
  constructor(readonly input: UpdateEventSourcesConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DevOpsGuruClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEventSourcesConfigCommandInput, UpdateEventSourcesConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEventSourcesConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "UpdateEventSourcesConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CapstoneControlPlaneService",
        operation: "UpdateEventSourcesConfig",
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
  private serialize(input: UpdateEventSourcesConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEventSourcesConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEventSourcesConfigCommandOutput> {
    return de_UpdateEventSourcesConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
