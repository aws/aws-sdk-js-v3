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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeMonitorRequest, DescribeMonitorResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMonitorCommand,
  serializeAws_json1_1DescribeMonitorCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeMonitorCommand}.
 */
export interface DescribeMonitorCommandInput extends DescribeMonitorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMonitorCommand}.
 */
export interface DescribeMonitorCommandOutput extends DescribeMonitorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Baseline</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastEvaluationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastEvaluationState</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeMonitorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeMonitorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeMonitorCommandInput - {@link DescribeMonitorCommandInput}
 * @returns {@link DescribeMonitorCommandOutput}
 * @see {@link DescribeMonitorCommandInput} for command's `input` shape.
 * @see {@link DescribeMonitorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 *
 */
export class DescribeMonitorCommand extends $Command<
  DescribeMonitorCommandInput,
  DescribeMonitorCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: DescribeMonitorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMonitorCommandInput, DescribeMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMonitorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeMonitorCommand";
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
  private serialize(input: DescribeMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMonitorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMonitorCommandOutput> {
    return deserializeAws_json1_1DescribeMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
