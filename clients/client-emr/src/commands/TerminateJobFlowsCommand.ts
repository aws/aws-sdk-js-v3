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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { TerminateJobFlowsInput } from "../models/models_0";
import { de_TerminateJobFlowsCommand, se_TerminateJobFlowsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link TerminateJobFlowsCommand}.
 */
export interface TerminateJobFlowsCommandInput extends TerminateJobFlowsInput {}
/**
 * @public
 *
 * The output of {@link TerminateJobFlowsCommand}.
 */
export interface TerminateJobFlowsCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>TerminateJobFlows shuts a list of clusters (job flows) down. When a job flow is shut
 *          down, any step not yet completed is canceled and the Amazon EC2 instances on which
 *          the cluster is running are stopped. Any log files not already saved are uploaded to Amazon S3 if a LogUri was specified when the cluster was created.</p>
 *          <p>The maximum number of clusters allowed is 10. The call to <code>TerminateJobFlows</code>
 *          is asynchronous. Depending on the configuration of the cluster, it may take up to 1-5
 *          minutes for the cluster to completely terminate and release allocated resources, such as
 *             Amazon EC2 instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, TerminateJobFlowsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, TerminateJobFlowsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // TerminateJobFlowsInput
 *   JobFlowIds: [ // XmlStringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new TerminateJobFlowsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateJobFlowsCommandInput - {@link TerminateJobFlowsCommandInput}
 * @returns {@link TerminateJobFlowsCommandOutput}
 * @see {@link TerminateJobFlowsCommandInput} for command's `input` shape.
 * @see {@link TerminateJobFlowsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class TerminateJobFlowsCommand extends $Command<
  TerminateJobFlowsCommandInput,
  TerminateJobFlowsCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: TerminateJobFlowsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TerminateJobFlowsCommandInput, TerminateJobFlowsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TerminateJobFlowsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "TerminateJobFlowsCommand";
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
  private serialize(input: TerminateJobFlowsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_TerminateJobFlowsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TerminateJobFlowsCommandOutput> {
    return de_TerminateJobFlowsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
