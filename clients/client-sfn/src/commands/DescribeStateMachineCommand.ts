// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
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
export type { __MetadataBearer };
export { $Command };
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
 *  <p>The provided Amazon Resource Name (ARN) is not valid.</p>
 *
 * @throws {@link KmsAccessDeniedException} (client fault)
 *  <p>Either your KMS key policy or API caller does not have the required permissions.</p>
 *
 * @throws {@link KmsInvalidStateException} (client fault)
 *  <p>The KMS key is not in valid state, for example: Disabled or Deleted.</p>
 *
 * @throws {@link KmsThrottlingException} (client fault)
 *  <p>Received when KMS returns <code>ThrottlingException</code> for a KMS call that Step Functions makes on behalf of the caller.</p>
 *
 * @throws {@link StateMachineDoesNotExist} (client fault)
 *  <p>The specified state machine does not exist.</p>
 *
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class DescribeStateMachineCommand extends $Command
  .classBuilder<
    DescribeStateMachineCommandInput,
    DescribeStateMachineCommandOutput,
    SFNClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SFNClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStepFunctions", "DescribeStateMachine", {})
  .n("SFNClient", "DescribeStateMachineCommand")
  .f(void 0, DescribeStateMachineOutputFilterSensitiveLog)
  .ser(se_DescribeStateMachineCommand)
  .de(de_DescribeStateMachineCommand)
  .build() {
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
