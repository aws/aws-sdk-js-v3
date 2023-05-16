// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import {
  DescribeStateMachineForExecutionInput,
  DescribeStateMachineForExecutionOutput,
  DescribeStateMachineForExecutionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeStateMachineForExecutionCommand,
  se_DescribeStateMachineForExecutionCommand,
} from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 *
 * The input for {@link DescribeStateMachineForExecutionCommand}.
 */
export interface DescribeStateMachineForExecutionCommandInput extends DescribeStateMachineForExecutionInput {}
/**
 * @public
 *
 * The output of {@link DescribeStateMachineForExecutionCommand}.
 */
export interface DescribeStateMachineForExecutionCommandOutput
  extends DescribeStateMachineForExecutionOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides information about a state machine's definition, its execution role ARN, and configuration. If an execution was dispatched by a Map Run, the Map Run is returned in the response. Additionally, the state machine returned will be the state machine associated with the Map Run.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <p>This API action is not supported by <code>EXPRESS</code> state machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineForExecutionCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineForExecutionCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DescribeStateMachineForExecutionInput
 *   executionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeStateMachineForExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStateMachineForExecutionOutput
 * //   stateMachineArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   definition: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   updateDate: new Date("TIMESTAMP"), // required
 * //   loggingConfiguration: { // LoggingConfiguration
 * //     level: "ALL" || "ERROR" || "FATAL" || "OFF",
 * //     includeExecutionData: true || false,
 * //     destinations: [ // LogDestinationList
 * //       { // LogDestination
 * //         cloudWatchLogsLogGroup: { // CloudWatchLogsLogGroup
 * //           logGroupArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   tracingConfiguration: { // TracingConfiguration
 * //     enabled: true || false,
 * //   },
 * //   mapRunArn: "STRING_VALUE",
 * //   label: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStateMachineForExecutionCommandInput - {@link DescribeStateMachineForExecutionCommandInput}
 * @returns {@link DescribeStateMachineForExecutionCommandOutput}
 * @see {@link DescribeStateMachineForExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineForExecutionCommandOutput} for command's `response` shape.
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
export class DescribeStateMachineForExecutionCommand extends $Command<
  DescribeStateMachineForExecutionCommandInput,
  DescribeStateMachineForExecutionCommandOutput,
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
  constructor(readonly input: DescribeStateMachineForExecutionCommandInput) {
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
  ): Handler<DescribeStateMachineForExecutionCommandInput, DescribeStateMachineForExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStateMachineForExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DescribeStateMachineForExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeStateMachineForExecutionOutputFilterSensitiveLog,
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
  private serialize(
    input: DescribeStateMachineForExecutionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeStateMachineForExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeStateMachineForExecutionCommandOutput> {
    return de_DescribeStateMachineForExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
