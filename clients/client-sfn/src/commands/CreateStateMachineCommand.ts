// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateStateMachineInput, CreateStateMachineOutput } from "../models/models_0";
import { CreateStateMachine$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a state machine. A state machine consists of a collection of states that can do
 *       work (<code>Task</code> states), determine to which states to transition next
 *         (<code>Choice</code> states), stop an execution with an error (<code>Fail</code> states),
 *       and so on. State machines are specified using a JSON-based, structured language. For more
 *       information, see <a href="https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html">Amazon States
 *         Language</a> in the Step Functions User Guide.</p>
 *          <p>If you set the <code>publish</code> parameter of this API action to <code>true</code>, it
 *       publishes version <code>1</code> as the first revision of the state machine.</p>
 *          <p>
 *         For additional control over security, you can encrypt your data using a <b>customer-managed key</b> for Step Functions state machines. You can configure a symmetric KMS key and data key reuse period when creating or updating a <b>State Machine</b>. The execution history and state machine definition will be encrypted with the key applied to the State Machine.
 *     </p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.</p>
 *          </note>
 *          <note>
 *             <p>
 *                <code>CreateStateMachine</code> is an idempotent API. Subsequent requests won’t create a
 *         duplicate resource if it was already created. <code>CreateStateMachine</code>'s idempotency
 *         check is based on the state machine <code>name</code>, <code>definition</code>,
 *           <code>type</code>, <code>LoggingConfiguration</code>,
 *         <code>TracingConfiguration</code>, and <code>EncryptionConfiguration</code> The check is also based on the <code>publish</code> and <code>versionDescription</code> parameters. If a following request has a different
 *           <code>roleArn</code> or <code>tags</code>, Step Functions will ignore these differences and treat
 *         it as an idempotent request of the previous. In this case, <code>roleArn</code> and
 *           <code>tags</code> will not be updated, even if they are different.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, CreateStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, CreateStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
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
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE",
 *     kmsDataKeyReusePeriodSeconds: Number("int"),
 *     type: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KMS_KEY", // required
 *   },
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
 * @throws {@link InvalidEncryptionConfiguration} (client fault)
 *  <p>Received when <code>encryptionConfiguration</code> is specified but various conditions exist which make the configuration invalid. For example, if <code>type</code> is set to <code>CUSTOMER_MANAGED_KMS_KEY</code>, but <code>kmsKeyId</code> is null, or <code>kmsDataKeyReusePeriodSeconds</code> is not between 60 and 900, or the KMS key is not symmetric or inactive.</p>
 *
 * @throws {@link InvalidLoggingConfiguration} (client fault)
 *  <p>Configuration is not valid.</p>
 *
 * @throws {@link InvalidName} (client fault)
 *  <p>The provided name is not valid.</p>
 *
 * @throws {@link InvalidTracingConfiguration} (client fault)
 *  <p>Your <code>tracingConfiguration</code> key does not match, or <code>enabled</code> has not
 *       been set to <code>true</code> or <code>false</code>.</p>
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *  <p>Either your KMS key policy or API caller does not have the required permissions.</p>
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *  <p>Received when KMS returns <code>ThrottlingException</code> for a KMS call that Step Functions makes on behalf of the caller.</p>
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
 *  <p>State machine type is not supported.</p>
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
 *
 * @public
 */
export class CreateStateMachineCommand extends $Command
  .classBuilder<
    CreateStateMachineCommandInput,
    CreateStateMachineCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStepFunctions", "CreateStateMachine", {})
  .n("SFNClient", "CreateStateMachineCommand")
  .sc(CreateStateMachine$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateStateMachineInput;
      output: CreateStateMachineOutput;
    };
    sdk: {
      input: CreateStateMachineCommandInput;
      output: CreateStateMachineCommandOutput;
    };
  };
}
