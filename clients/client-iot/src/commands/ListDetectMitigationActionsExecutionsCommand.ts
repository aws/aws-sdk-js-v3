// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type {
  ListDetectMitigationActionsExecutionsRequest,
  ListDetectMitigationActionsExecutionsResponse,
} from "../models/models_1";
import { ListDetectMitigationActionsExecutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDetectMitigationActionsExecutionsCommand}.
 */
export interface ListDetectMitigationActionsExecutionsCommandInput
  extends ListDetectMitigationActionsExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectMitigationActionsExecutionsCommand}.
 */
export interface ListDetectMitigationActionsExecutionsCommandOutput
  extends ListDetectMitigationActionsExecutionsResponse,
    __MetadataBearer {}

/**
 * <p>
 *       Lists mitigation actions executions for a Device Defender ML Detect Security Profile.
 *     </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListDetectMitigationActionsExecutions</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDetectMitigationActionsExecutionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDetectMitigationActionsExecutionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListDetectMitigationActionsExecutionsRequest
 *   taskId: "STRING_VALUE",
 *   violationId: "STRING_VALUE",
 *   thingName: "STRING_VALUE",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDetectMitigationActionsExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDetectMitigationActionsExecutionsResponse
 * //   actionsExecutions: [ // DetectMitigationActionExecutionList
 * //     { // DetectMitigationActionExecution
 * //       taskId: "STRING_VALUE",
 * //       violationId: "STRING_VALUE",
 * //       actionName: "STRING_VALUE",
 * //       thingName: "STRING_VALUE",
 * //       executionStartDate: new Date("TIMESTAMP"),
 * //       executionEndDate: new Date("TIMESTAMP"),
 * //       status: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "SKIPPED",
 * //       errorCode: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDetectMitigationActionsExecutionsCommandInput - {@link ListDetectMitigationActionsExecutionsCommandInput}
 * @returns {@link ListDetectMitigationActionsExecutionsCommandOutput}
 * @see {@link ListDetectMitigationActionsExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListDetectMitigationActionsExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListDetectMitigationActionsExecutionsCommand extends $Command
  .classBuilder<
    ListDetectMitigationActionsExecutionsCommandInput,
    ListDetectMitigationActionsExecutionsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListDetectMitigationActionsExecutions", {})
  .n("IoTClient", "ListDetectMitigationActionsExecutionsCommand")
  .sc(ListDetectMitigationActionsExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDetectMitigationActionsExecutionsRequest;
      output: ListDetectMitigationActionsExecutionsResponse;
    };
    sdk: {
      input: ListDetectMitigationActionsExecutionsCommandInput;
      output: ListDetectMitigationActionsExecutionsCommandOutput;
    };
  };
}
