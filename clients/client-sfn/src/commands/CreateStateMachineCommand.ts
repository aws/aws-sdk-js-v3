// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateStateMachineInput, CreateStateMachineOutput } from "../models/models_0";
import { CreateStateMachine$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a state machine. A state machine consists of a collection of states that can do work (`Task` states), determine to which states to transition next (`Choice` states), stop an execution with an error (`Fail` states), and so on. State machines are specified using a JSON-based, structured language. For more information, see [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) in the Step Functions User Guide.
 *
 * If you set the `publish` parameter of this API action to `true`, it publishes version `1` as the first revision of the state machine.
 *
 * For additional control over security, you can encrypt your data using a **customer-managed key** for Step Functions state machines. You can configure a symmetric KMS key and data key reuse period when creating or updating a **State Machine**. The execution history and state machine definition will be encrypted with the key applied to the State Machine.
 *
 * > **Note:** This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.
 *
 * > **Note:** `CreateStateMachine` is an idempotent API. Subsequent requests won’t create a duplicate resource if it was already created. `CreateStateMachine`'s idempotency check is based on the state machine `name`, `definition`, `type`, `LoggingConfiguration`, `TracingConfiguration`, and `EncryptionConfiguration` The check is also based on the `publish` and `versionDescription` parameters. If a following request has a different `roleArn` or `tags`, Step Functions will ignore these differences and treat it as an idempotent request of the previous. In this case, `roleArn` and `tags` will not be updated, even if they are different.
 *
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
 *
 * Updating or deleting a resource can cause an inconsistent state. This error occurs when there're concurrent requests for DeleteStateMachineVersion, PublishStateMachineVersion, or UpdateStateMachine with the `publish` parameter set to `true`.
 *
 * HTTP Status Code: 409
 *
 * @throws {@link InvalidArn} (client fault)
 *
 * The provided Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link InvalidDefinition} (client fault)
 *
 * The provided Amazon States Language definition is not valid.
 *
 * @throws {@link InvalidEncryptionConfiguration} (client fault)
 *
 * Received when `encryptionConfiguration` is specified but various conditions exist which make the configuration invalid. For example, if `type` is set to `CUSTOMER_MANAGED_KMS_KEY`, but `kmsKeyId` is null, or `kmsDataKeyReusePeriodSeconds` is not between 60 and 900, or the KMS key is not symmetric or inactive.
 *
 * @throws {@link InvalidLoggingConfiguration} (client fault)
 *
 * Configuration is not valid.
 *
 * @throws {@link InvalidName} (client fault)
 *
 * The provided name is not valid.
 *
 * @throws {@link InvalidTracingConfiguration} (client fault)
 *
 * Your `tracingConfiguration` key does not match, or `enabled` has not been set to `true` or `false`.
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *
 * Either your KMS key policy or API caller does not have the required permissions.
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *
 * Received when KMS returns `ThrottlingException` for a KMS call that Step Functions makes on behalf of the caller.
 *
 * @throws {@link StateMachineAlreadyExists} (client fault)
 *
 * A state machine with the same name but a different definition or role ARN already exists.
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *
 * The specified state machine is being deleted.
 *
 * @throws {@link StateMachineLimitExceeded} (client fault)
 *
 * The maximum number of state machines has been reached. Existing state machines must be deleted before a new state machine can be created.
 *
 * @throws {@link StateMachineTypeNotSupported} (client fault)
 *
 * State machine type is not supported.
 *
 * @throws {@link TooManyTags} (client fault)
 *
 * You've exceeded the number of tags allowed for a resource. See the [Limits Topic](https://docs.aws.amazon.com/step-functions/latest/dg/limits.html) in the Step Functions Developer Guide.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input does not satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class CreateStateMachineCommand extends command<CreateStateMachineCommandInput, CreateStateMachineCommandOutput>(
  _ep0,
  _mw0,
  "CreateStateMachine",
  CreateStateMachine$
) {
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
