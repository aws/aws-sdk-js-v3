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
  CreateStateMachineInput,
  CreateStateMachineInputFilterSensitiveLog,
  CreateStateMachineOutput,
} from "../models/models_0";
import { de_CreateStateMachineCommand, se_CreateStateMachineCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStateMachineCommand}.
 */
export interface CreateStateMachineCommandInput extends CreateStateMachineInput {}
/**
 * @public
 *
 * The output of {@link CreateStateMachineCommand}.
 */
export interface CreateStateMachineCommandOutput extends CreateStateMachineOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a state machine. A state machine consists of a collection of states that can do
 *       work (<code>Task</code> states), determine to which states to transition next
 *         (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states),
 *       and so on. State machines are specified using a JSON-based, structured language. For more
 *       information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States
 *         Language</a> in the Step Functions User Guide.</p>
 *          <p>If you set the <code>publish</code> parameter of this API action to <code>true</code>, it
 *       publishes version <code>1</code> as the first revision of the state machine.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a
 *         duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency
 *         check is based on the state machine <code>name</code>, <code>definition</code>,
 *           <code>type</code>, <code>LoggingConfiguration</code>, and
 *         <code>TracingConfiguration</code>. The check is also based on the <code>publish</code> and <code>versionDescription</code> parameters. If a following request has a different
 *           <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat
 *         it as an idempotent request of the previous. In this case, <code>roleArn</code> and
 *           <code>tags</code> will not be updated, even if they are different.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, CreateStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, CreateStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * const client = new SFNClient(config);
 * const input = { // CreateStateMachineInput
 *   name: "STRING_VALUE", // required
 *   definition: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   type: "STANDARD" || "EXPRESS",
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
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   tracingConfiguration: { // TracingConfiguration
 *     enabled: true || false,
 *   },
 *   publish: true || false,
 *   versionDescription: "STRING_VALUE",
 * };
 * const command = new CreateStateMachineCommand(input);
 * const response = await client.send(command);
 * // { // CreateStateMachineOutput
 * //   stateMachineArn: "STRING_VALUE", // required
 * //   creationDate: new Date("TIMESTAMP"), // required
 * //   stateMachineVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateStateMachineCommandInput - {@link CreateStateMachineCommandInput}
 * @returns {@link CreateStateMachineCommandOutput}
 * @see {@link CreateStateMachineCommandInput} for command's `input` shape.
 * @see {@link CreateStateMachineCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for <a>DeleteStateMachineVersion</a>, <a>PublishStateMachineVersion</a>, or <a>UpdateStateMachine</a> with the <code>publish</code> parameter set to <code>true</code>.</p>
 *          <p>HTTP Status Code: 409</p>
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
 * @throws {@link InvalidName} (client fault)
 *  <p>The provided name is not valid.</p>
 *
 * @throws {@link InvalidTracingConfiguration} (client fault)
 *  <p>Your <code>tracingConfiguration</code> key does not match, or <code>enabled</code> has not
 *       been set to <code>true</code> or <code>false</code>.</p>
 *
 * @throws {@link StateMachineAlreadyExists} (client fault)
 *  <p>A state machine with the same name but a different definition or role ARN already
 *       exists.</p>
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *  <p>The specified state machine is being deleted.</p>
 *
 * @throws {@link StateMachineLimitExceeded} (client fault)
 *  <p>The maximum number of state machines has been reached. Existing state machines must be
 *       deleted before a new state machine can be created.</p>
 *
 * @throws {@link StateMachineTypeNotSupported} (client fault)
 *  <p></p>
 *
 * @throws {@link TooManyTags} (client fault)
 *  <p>You've exceeded the number of tags allowed for a resource. See the <a href="https://docs.aws.amazon.com/step-functions/latest/dg/limits.html"> Limits Topic</a> in the
 *       Step Functions Developer Guide.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 */
export class CreateStateMachineCommand extends $Command<
  CreateStateMachineCommandInput,
  CreateStateMachineCommandOutput,
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
  constructor(readonly input: CreateStateMachineCommandInput) {
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
  ): Handler<CreateStateMachineCommandInput, CreateStateMachineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStateMachineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SFNClient";
    const commandName = "CreateStateMachineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateStateMachineInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStepFunctions",
        operation: "CreateStateMachine",
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
  private serialize(input: CreateStateMachineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStateMachineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStateMachineCommandOutput> {
    return de_CreateStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
