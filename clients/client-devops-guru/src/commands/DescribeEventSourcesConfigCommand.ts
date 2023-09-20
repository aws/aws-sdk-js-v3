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
import { DescribeEventSourcesConfigRequest, DescribeEventSourcesConfigResponse } from "../models/models_0";
import { de_DescribeEventSourcesConfigCommand, se_DescribeEventSourcesConfigCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventSourcesConfigCommand}.
 */
export interface DescribeEventSourcesConfigCommandInput extends DescribeEventSourcesConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventSourcesConfigCommand}.
 */
export interface DescribeEventSourcesConfigCommandOutput extends DescribeEventSourcesConfigResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the integration status of services that are integrated with DevOps Guru as Consumer
 * 			via EventBridge. The one service that can be integrated with DevOps Guru is Amazon CodeGuru
 * 			Profiler, which can produce proactive recommendations which can be stored and viewed in
 * 			DevOps Guru.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, DescribeEventSourcesConfigCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, DescribeEventSourcesConfigCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * const client = new DevOpsGuruClient(config);
 * const input = {};
 * const command = new DescribeEventSourcesConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventSourcesConfigResponse
 * //   EventSources: { // EventSourcesConfig
 * //     AmazonCodeGuruProfiler: { // AmazonCodeGuruProfilerIntegration
 * //       Status: "ENABLED" || "DISABLED",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEventSourcesConfigCommandInput - {@link DescribeEventSourcesConfigCommandInput}
 * @returns {@link DescribeEventSourcesConfigCommandOutput}
 * @see {@link DescribeEventSourcesConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSourcesConfigCommandOutput} for command's `response` shape.
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
export class DescribeEventSourcesConfigCommand extends $Command<
  DescribeEventSourcesConfigCommandInput,
  DescribeEventSourcesConfigCommandOutput,
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
  constructor(readonly input: DescribeEventSourcesConfigCommandInput) {
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
  ): Handler<DescribeEventSourcesConfigCommandInput, DescribeEventSourcesConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEventSourcesConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DevOpsGuruClient";
    const commandName = "DescribeEventSourcesConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CapstoneControlPlaneService",
        operation: "DescribeEventSourcesConfig",
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
  private serialize(input: DescribeEventSourcesConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEventSourcesConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeEventSourcesConfigCommandOutput> {
    return de_DescribeEventSourcesConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
