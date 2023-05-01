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

import {
  UpdateStateMachineInput,
  UpdateStateMachineInputFilterSensitiveLog,
  UpdateStateMachineOutput,
} from "../models/models_0";
import { de_UpdateStateMachineCommand, se_UpdateStateMachineCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 *
 * The input for {@link UpdateStateMachineCommand}.
 */
export interface UpdateStateMachineCommandInput extends UpdateStateMachineInput {}
/**
 * @public
 *
 * The output of {@link UpdateStateMachineCommand}.
 */
export interface UpdateStateMachineCommandOutput extends UpdateStateMachineOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing state machine by modifying its <code>definition</code>,
 *         <code>roleArn</code>, or <code>loggingConfiguration</code>. Running executions will continue
 *       to use the previous <code>definition</code> and <code>roleArn</code>. You must include at
 *       least one of <code>definition</code> or <code>roleArn</code> or you will receive a
 *         <code>MissingRequiredParameter</code> error.</p>
 *
 *          <p>If the given state machine Amazon Resource Name (ARN) is a qualified state machine ARN, it will fail with ValidationException.</p>
 *
 *          <p>A qualified state machine ARN refers to a <i>Distributed Map state</i> defined within a state machine. For example, the qualified state machine ARN <code>arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel</code> refers to a <i>Distributed Map state</i> with a label <code>mapStateLabel</code> in the state machine named <code>stateMachineName</code>.</p>
 *
 *          <note>
 *             <p>All <code>StartExecution</code> calls within a few seconds will use the updated
 *           <code>definition</code> and <code>roleArn</code>. Executions started immediately after
 *         calling <code>UpdateStateMachine</code> may use the previous state machine
 *           <code>definition</code> and <code>roleArn</code>. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, UpdateStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, UpdateStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // UpdateStateMachineInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   definition: "STRING_VALUE",
 *   roleArn: "STRING_VALUE",
 *   loggingConfiguration: { // LoggingConfiguration
 *     level: "ALL" || "ERROR" || "FATAL" || "OFF",
 *     includeExecutionData: true || false,
 *     destinations: [ // LogDestinationList
 *       { // LogDestination
 *         cloudWatchLogsLogGroup: { // CloudWatchLogsLogGroup
 *           logGroupArn: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   tracingConfiguration: { // TracingConfiguration
 *     enabled: true || false,
 *   },
 * };
 * const command = new UpdateStateMachineCommand(input);
 * const response = await client.send(command);
 * /**
 * { // UpdateStateMachineOutput
 *   updateDate: new Date("TIMESTAMP"), // required
 * };
 *
 * ```
 *
 * @param UpdateStateMachineCommandInput - {@link UpdateStateMachineCommandInput}
 * @returns {@link UpdateStateMachineCommandOutput}
 * @see {@link UpdateStateMachineCommandInput} for command's `input` shape.
 * @see {@link UpdateStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link InvalidArn} (client fault)
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link InvalidDefinition} (client fault)
 *  <p>The provided Amazon States Language definition is not valid.</p>
 *
 * @throws {@link InvalidLoggingConfiguration} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidTracingConfiguration} (client fault)
 *  <p>Your <code>tracingConfiguration</code> key does not match, or <code>enabled</code> has not
 *       been set to <code>true</code> or <code>false</code>.</p>
 *
 * @throws {@link MissingRequiredParameter} (client fault)
 *  <p>Request is missing a required parameter. This error occurs if both <code>definition</code>
 *       and <code>roleArn</code> are not specified.</p>
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *  <p>The specified state machine does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class UpdateStateMachineCommand extends $Command<
  UpdateStateMachineCommandInput,
  UpdateStateMachineCommandOutput,
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
  constructor(readonly input: UpdateStateMachineCommandInput) {
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
  ): Handler<UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateStateMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "UpdateStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateStateMachineInputFilterSensitiveLog,
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
  private serialize(input: UpdateStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateStateMachineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateStateMachineCommandOutput> {
    return de_UpdateStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
