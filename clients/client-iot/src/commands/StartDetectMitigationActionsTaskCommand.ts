// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { StartDetectMitigationActionsTaskRequest, StartDetectMitigationActionsTaskResponse } from "../models/models_2";
import {
  de_StartDetectMitigationActionsTaskCommand,
  se_StartDetectMitigationActionsTaskCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDetectMitigationActionsTaskCommand}.
 */
export interface StartDetectMitigationActionsTaskCommandInput extends StartDetectMitigationActionsTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartDetectMitigationActionsTaskCommand}.
 */
export interface StartDetectMitigationActionsTaskCommandOutput
  extends StartDetectMitigationActionsTaskResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Starts a Device Defender ML Detect mitigation actions task.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartDetectMitigationActionsTask</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartDetectMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartDetectMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // StartDetectMitigationActionsTaskRequest
 *   taskId: "STRING_VALUE", // required
 *   target: { // DetectMitigationActionsTaskTarget
 *     violationIds: [ // TargetViolationIdsForDetectMitigationActions
 *       "STRING_VALUE",
 *     ],
 *     securityProfileName: "STRING_VALUE",
 *     behaviorName: "STRING_VALUE",
 *   },
 *   actions: [ // DetectMitigationActionsToExecuteList // required
 *     "STRING_VALUE",
 *   ],
 *   violationEventOccurrenceRange: { // ViolationEventOccurrenceRange
 *     startTime: new Date("TIMESTAMP"), // required
 *     endTime: new Date("TIMESTAMP"), // required
 *   },
 *   includeOnlyActiveViolations: true || false,
 *   includeSuppressedAlerts: true || false,
 *   clientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new StartDetectMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartDetectMitigationActionsTaskResponse
 * //   taskId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDetectMitigationActionsTaskCommandInput - {@link StartDetectMitigationActionsTaskCommandInput}
 * @returns {@link StartDetectMitigationActionsTaskCommandOutput}
 * @see {@link StartDetectMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link StartDetectMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has been exceeded.</p>
 *
 * @throws {@link TaskAlreadyExistsException} (client fault)
 *  <p>
 *             This exception occurs if you attempt to start a task with the same task-id as an existing task but with a different clientRequestToken.
 *         </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class StartDetectMitigationActionsTaskCommand extends $Command
  .classBuilder<
    StartDetectMitigationActionsTaskCommandInput,
    StartDetectMitigationActionsTaskCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "StartDetectMitigationActionsTask", {})
  .n("IoTClient", "StartDetectMitigationActionsTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartDetectMitigationActionsTaskCommand)
  .de(de_StartDetectMitigationActionsTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDetectMitigationActionsTaskRequest;
      output: StartDetectMitigationActionsTaskResponse;
    };
    sdk: {
      input: StartDetectMitigationActionsTaskCommandInput;
      output: StartDetectMitigationActionsTaskCommandOutput;
    };
  };
}
