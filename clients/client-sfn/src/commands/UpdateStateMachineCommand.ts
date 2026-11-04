// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStateMachineInput, UpdateStateMachineOutput } from "../models/models_0";
import { UpdateStateMachine$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates an existing state machine by modifying its `definition`, `roleArn`, `loggingConfiguration`, or `EncryptionConfiguration`. Running executions will continue to use the previous `definition` and `roleArn`. You must include at least one of `definition` or `roleArn` or you will receive a `MissingRequiredParameter` error.
 *
 * A qualified state machine ARN refers to a *Distributed Map state* defined within a state machine. For example, the qualified state machine ARN `arn:partition:states:region:account-id:stateMachine:stateMachineName/mapStateLabel` refers to a *Distributed Map state* with a label `mapStateLabel` in the state machine named `stateMachineName`.
 *
 * A qualified state machine ARN can either refer to a *Distributed Map state* defined within a state machine, a version ARN, or an alias ARN.
 *
 * The following are some examples of qualified and unqualified state machine ARNs:
 *
 * - The following qualified state machine ARN refers to a *Distributed Map state* with a label `mapStateLabel` in a state machine named `myStateMachine`.
 *
 *   `arn:partition:states:region:account-id:stateMachine:myStateMachine/mapStateLabel`
 *
 *   > **Note:** If you provide a qualified state machine ARN that refers to a *Distributed Map state*, the request fails with `ValidationException`.
 * - The following qualified state machine ARN refers to an alias named `PROD`.
 *
 *   `arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine:PROD>`
 *
 *   > **Note:** If you provide a qualified state machine ARN that refers to a version ARN or an alias ARN, the request starts execution for that version or alias.
 * - The following unqualified state machine ARN refers to a state machine named `myStateMachine`.
 *
 *   `arn:<partition>:states:<region>:<account-id>:stateMachine:<myStateMachine>`
 *
 * After you update your state machine, you can set the `publish` parameter to `true` in the same action to publish a new [version](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html). This way, you can opt-in to strict versioning of your state machine.
 *
 * > **Note:** Step Functions assigns monotonically increasing integers for state machine versions, starting at version number 1.
 *
 * > **Note:** All `StartExecution` calls within a few seconds use the updated `definition` and `roleArn`. Executions started immediately after you call `UpdateStateMachine` may use the previous state machine `definition` and `roleArn`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, UpdateStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, UpdateStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
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
 *   publish: true || false,
 *   versionDescription: "STRING_VALUE",
 *   encryptionConfiguration: { // EncryptionConfiguration
 *     kmsKeyId: "STRING_VALUE",
 *     kmsDataKeyReusePeriodSeconds: Number("int"),
 *     type: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KMS_KEY", // required
 *   },
 * };
 * const command = new UpdateStateMachineCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStateMachineOutput
 * //   updateDate: new Date("TIMESTAMP"), // required
 * //   revisionId: "STRING_VALUE",
 * //   stateMachineVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateStateMachineCommandInput - {@link UpdateStateMachineCommandInput}
 * @returns {@link UpdateStateMachineCommandOutput}
 * @see {@link UpdateStateMachineCommandInput} for command's `input` shape.
 * @see {@link UpdateStateMachineCommandOutput} for command's `response` shape.
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
 * @throws {@link MissingRequiredParameter} (client fault)
 *
 * Request is missing a required parameter. This error occurs if both `definition` and `roleArn` are not specified.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request would cause a service quota to be exceeded.
 *
 * HTTP Status Code: 402
 *
 * @throws {@link StateMachineDeleting} (client fault)
 *
 * The specified state machine is being deleted.
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *
 * The specified state machine does not exist.
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
export class UpdateStateMachineCommand extends command<UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStateMachine",
  UpdateStateMachine$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStateMachineInput;
      output: UpdateStateMachineOutput;
    };
    sdk: {
      input: UpdateStateMachineCommandInput;
      output: UpdateStateMachineCommandOutput;
    };
  };
}
