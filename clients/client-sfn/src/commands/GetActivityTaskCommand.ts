// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetActivityTaskInput,
  GetActivityTaskOutput,
  GetActivityTaskOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetActivityTaskCommand, se_GetActivityTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SFNClientResolvedConfig } from "../SFNClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetActivityTaskCommand}.
 */
export interface GetActivityTaskCommandInput extends GetActivityTaskInput {}
/**
 * @public
 *
 * The output of {@link GetActivityTaskCommand}.
 */
export interface GetActivityTaskCommandOutput extends GetActivityTaskOutput, __MetadataBearer {}

/**
 * <p>Used by workers to retrieve a task (with the specified activity ARN) which has been
 *       scheduled for execution by a running state machine. This initiates a long poll, where the
 *       service holds the HTTP connection open and responds as soon as a task becomes available (i.e.
 *       an execution of a task of this type is needed.) The maximum time the service holds on to the
 *       request before responding is 60 seconds. If no task is available within 60 seconds, the poll
 *       returns a <code>taskToken</code> with a null string.</p>
 *          <note>
 *             <p>This API action isn't logged in CloudTrail.</p>
 *          </note>
 *          <important>
 *             <p>Workers should set their client side socket timeout to at least 65 seconds (5 seconds
 *         higher than the maximum time the service may hold the poll request).</p>
 *             <p>Polling with <code>GetActivityTask</code> can cause latency in some implementations. See
 *           <a href="https://docs.aws.amazon.com/step-functions/latest/dg/bp-activity-pollers.html">Avoid
 *           Latency When Polling for Activity Tasks</a> in the Step Functions Developer Guide.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SFNClient, GetActivityTaskCommand } from "@aws-sdk/client-sfn"; // ES Modules import
 * // const { SFNClient, GetActivityTaskCommand } = require("@aws-sdk/client-sfn"); // CommonJS import
 * // import type { SFNClientConfig } from "@aws-sdk/client-sfn";
 * const config = {}; // type is SFNClientConfig
 * const client = new SFNClient(config);
 * const input = { // GetActivityTaskInput
 *   activityArn: "STRING_VALUE", // required
 *   workerName: "STRING_VALUE",
 * };
 * const command = new GetActivityTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetActivityTaskOutput
 * //   taskToken: "STRING_VALUE",
 * //   input: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetActivityTaskCommandInput - {@link GetActivityTaskCommandInput}
 * @returns {@link GetActivityTaskCommandOutput}
 * @see {@link GetActivityTaskCommandInput} for command's `input` shape.
 * @see {@link GetActivityTaskCommandOutput} for command's `response` shape.
 * @see {@link SFNClientResolvedConfig | config} for SFNClient's `config` shape.
 *
 * @throws {@link ActivityDoesNotExist} (client fault)
 *  <p>The specified activity does not exist.</p>
 *
 * @throws {@link ActivityWorkerLimitExceeded} (client fault)
 *  <p>The maximum number of workers concurrently polling for activity tasks has been
 *       reached.</p>
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
 * @throws {@link SFNServiceException}
 * <p>Base exception class for all service exceptions from SFN service.</p>
 *
 *
 * @public
 */
export class GetActivityTaskCommand extends $Command
  .classBuilder<
    GetActivityTaskCommandInput,
    GetActivityTaskCommandOutput,
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
  .s("AWSStepFunctions", "GetActivityTask", {})
  .n("SFNClient", "GetActivityTaskCommand")
  .f(void 0, GetActivityTaskOutputFilterSensitiveLog)
  .ser(se_GetActivityTaskCommand)
  .de(de_GetActivityTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetActivityTaskInput;
      output: GetActivityTaskOutput;
    };
    sdk: {
      input: GetActivityTaskCommandInput;
      output: GetActivityTaskCommandOutput;
    };
  };
}
