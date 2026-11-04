// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDetectMitigationActionsExecutionsRequest,
  ListDetectMitigationActionsExecutionsResponse,
} from "../models/models_1";
import { ListDetectMitigationActionsExecutions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDetectMitigationActionsExecutionsCommand}.
 */
export interface ListDetectMitigationActionsExecutionsCommandInput extends ListDetectMitigationActionsExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDetectMitigationActionsExecutionsCommand}.
 */
export interface ListDetectMitigationActionsExecutionsCommandOutput extends ListDetectMitigationActionsExecutionsResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Lists mitigation actions executions for a Device Defender ML Detect Security Profile.
 *
 * Requires permission to access the [ListDetectMitigationActionsExecutions](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class ListDetectMitigationActionsExecutionsCommand extends command<ListDetectMitigationActionsExecutionsCommandInput, ListDetectMitigationActionsExecutionsCommandOutput>(
  _ep0,
  _mw0,
  "ListDetectMitigationActionsExecutions",
  ListDetectMitigationActionsExecutions$
) {
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
