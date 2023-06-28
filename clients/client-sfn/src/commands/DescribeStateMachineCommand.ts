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

import {
  DescribeStateMachineInput,
  DescribeStateMachineOutput,
  DescribeStateMachineOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeStateMachineCommand, se_DescribeStateMachineCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStateMachineCommand}.
 */
export interface DescribeStateMachineCommandInput extends DescribeStateMachineInput {}
/**
 * @public
 *
 * The output of {@link DescribeStateMachineCommand}.
 */
export interface DescribeStateMachineCommandOutput extends DescribeStateMachineOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration.</p>
 *          <p>A qualified state machine ARN can either refer to a <i>Distributed Map state</i> defined within a state machine, a version ARN, or an alias ARN.</p>
 *          <p>The following are some examples of qualified and unqualified state machine ARNs:</p>
 *          <ul>
 *             <li>
 *                <p>The following qualified state machine ARN refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in a state machine named <code>myStateMachine</code>.</p>
 *                <p>
 *                   <code>arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel</code>
 *                </p>
 *                <note>
 *                   <p>If you provide a qualified state machine ARN that refers to a <i>Distributed Map state</i>, the request fails with <code>ValidationException</code>.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>The following qualified state machine ARN refers to an alias named <code>PROD</code>.</p>
 *                <p>
 *                   <code>arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD></code>
 *                </p>
 *                <note>
 *                   <p>If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>The following unqualified state machine ARN refers to a state machine named <code>myStateMachine</code>.</p>
 *                <p>
 *                   <code>arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine></code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>This API action returns the details for a state machine version if the
 *         <code>stateMachineArn</code> you specify is a state machine version ARN.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // DescribeStateMachineInput
 *   stateMachineArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeStateMachineCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStateMachineOutput
 * //   stateMachineArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "DELETING",
 * //   definition: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   type: "STANDARD" || "EXPRESS", // required
 * //   creationDate: new Date("TIMESTAMP"), // required
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
 * //   label: "STRING_VALUE",
 * //   revisionId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStateMachineCommandInput - {@link DescribeStateMachineCommandInput}
 * @returns {@link DescribeStateMachineCommandOutput}
 * @see {@link DescribeStateMachineCommandInput} for command's `input` shape.
 * @see {@link DescribeStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *  <p>The specified state machine does not exist.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class DescribeStateMachineCommand extends $Command<
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
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
  constructor(readonly input: DescribeStateMachineCommandInput) {
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
  ): Handler<DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStateMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "DescribeStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeStateMachineOutputFilterSensitiveLog,
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
  private serialize(input: DescribeStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStateMachineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStateMachineCommandOutput> {
    return de_DescribeStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
