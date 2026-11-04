// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeStateMachineInput, DescribeStateMachineOutput } from "../models/models_0";
import { DescribeStateMachine$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Provides information about a state machine's definition, its IAM role Amazon Resource Name (ARN), and configuration.
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
 * This API action returns the details for a state machine version if the `stateMachineArn` you specify is a state machine version ARN.
 *
 * > **Note:** This operation is eventually consistent. The results are best effort and may not reflect very recent updates and changes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, DescribeStateMachineCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, DescribeStateMachineCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // DescribeStateMachineInput
 *   stateMachineArn: "STRING_VALUE", // required
 *   includedData: "ALL_DATA" || "METADATA_ONLY",
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
 * //   encryptionConfiguration: { // EncryptionConfiguration
 * //     kmsKeyId: "STRING_VALUE",
 * //     kmsDataKeyReusePeriodSeconds: Number("int"),
 * //     type: "AWS_OWNED_KEY" || "CUSTOMER_MANAGED_KMS_KEY", // required
 * //   },
 * //   variableReferences: { // VariableReferences
 * //     "<keys>": [ // VariableNameList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
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
 *
 * The provided Amazon Resource Name (ARN) is not valid.
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *
 * Either your KMS key policy or API caller does not have the required permissions.
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *
 * The KMS key is not in valid state, for example: Disabled or Deleted.
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *
 * Received when KMS returns `ThrottlingException` for a KMS call that Step Functions makes on behalf of the caller.
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *
 * The specified state machine does not exist.
 *
 * @throws {@link SFNServiceException}
 *
 * Base exception class for all service exceptions from SFN service.
 *
 * @public
 */
export class DescribeStateMachineCommand extends command<DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput>(
  _ep0,
  _mw0,
  "DescribeStateMachine",
  DescribeStateMachine$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStateMachineInput;
      output: DescribeStateMachineOutput;
    };
    sdk: {
      input: DescribeStateMachineCommandInput;
      output: DescribeStateMachineCommandOutput;
    };
  };
}
