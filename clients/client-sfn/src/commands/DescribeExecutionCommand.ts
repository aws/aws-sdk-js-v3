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

import {
  DescribeExecutionInput,
  DescribeExecutionOutput,
  DescribeExecutionOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeExecutionCommand, se_DescribeExecutionCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeExecutionCommand}.
 */
export interface DescribeExecutionCommandInput extends DescribeExecutionInput {}
/**
 * @public
 *
 * The output of {@link DescribeExecutionCommand}.
 */
export interface DescribeExecutionCommandOutput extends DescribeExecutionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about a state machine execution, such as the state machine
 *       associated with the execution, the execution input and output, and relevant execution
 *       metadata. Use this API action to return the Map Run Amazon Resource Name (ARN) if the execution was
 *       dispatched by a Map Run.</p>
 *          <p>If you specify a version or alias ARN when you call the <a>StartExecution</a>
 *       API action, <code>DescribeExecution</code> returns that ARN.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <p>Executions of an <code>EXPRESS</code> state machinearen't supported by <code>DescribeExecution</code> unless a Map Run dispatched them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DescribeExecutionInput
 *   executionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExecutionOutput
 * //   executionArn: "STRING_VALUE", // required
 * //   stateMachineArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE",
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "TIMED_OUT" || "ABORTED", // required
 * //   startDate: new Date("TIMESTAMP"), // required
 * //   stopDate: new Date("TIMESTAMP"),
 * //   input: "STRING_VALUE",
 * //   inputDetails: { // CloudWatchEventsExecutionDataDetails
 * //     included: true || false,
 * //   },
 * //   output: "STRING_VALUE",
 * //   outputDetails: {
 * //     included: true || false,
 * //   },
 * //   traceHeader: "STRING_VALUE",
 * //   mapRunArn: "STRING_VALUE",
 * //   error: "STRING_VALUE",
 * //   cause: "STRING_VALUE",
 * //   stateMachineVersionArn: "STRING_VALUE",
 * //   stateMachineAliasArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeExecutionCommandInput - {@link DescribeExecutionCommandInput}
 * @returns {@link DescribeExecutionCommandOutput}
 * @see {@link DescribeExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeExecutionCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ExecutionDoesNotExist} (client fault)
 *  <p>The specified execution does not exist.</p>
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class DescribeExecutionCommand extends $Command<
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
  SFNClientResolvedConfig
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
  constructor(readonly input: DescribeExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeExecutionCommandInput, DescribeExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DescribeExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeExecutionOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStepFunctions",
        operation: "DescribeExecution",
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
  private serialize(input: DescribeExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExecutionCommandOutput> {
    return de_DescribeExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
