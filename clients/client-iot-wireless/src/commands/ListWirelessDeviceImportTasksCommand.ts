// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWirelessDeviceImportTasksRequest, ListWirelessDeviceImportTasksResponse } from "../models/models_0";
import { ListWirelessDeviceImportTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWirelessDeviceImportTasksCommand}.
 */
export interface ListWirelessDeviceImportTasksCommandInput extends ListWirelessDeviceImportTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListWirelessDeviceImportTasksCommand}.
 */
export interface ListWirelessDeviceImportTasksCommandOutput extends ListWirelessDeviceImportTasksResponse, __MetadataBearer {}

/**
 * List of import tasks and summary information of onboarding status of devices in each import task.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessDeviceImportTasksCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessDeviceImportTasksCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListWirelessDeviceImportTasksRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListWirelessDeviceImportTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListWirelessDeviceImportTasksResponse
 * //   NextToken: "STRING_VALUE",
 * //   WirelessDeviceImportTaskList: [ // WirelessDeviceImportTaskList
 * //     { // WirelessDeviceImportTask
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       DestinationName: "STRING_VALUE",
 * //       Positioning: "Enabled" || "Disabled",
 * //       Sidewalk: { // SidewalkGetStartImportInfo
 * //         DeviceCreationFileList: [ // DeviceCreationFileList
 * //           "STRING_VALUE",
 * //         ],
 * //         Role: "STRING_VALUE",
 * //         Positioning: { // SidewalkPositioning
 * //           DestinationName: "STRING_VALUE",
 * //         },
 * //       },
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Status: "INITIALIZING" || "INITIALIZED" || "PENDING" || "COMPLETE" || "FAILED" || "DELETING",
 * //       StatusReason: "STRING_VALUE",
 * //       InitializedImportedDeviceCount: Number("long"),
 * //       PendingImportedDeviceCount: Number("long"),
 * //       OnboardedImportedDeviceCount: Number("long"),
 * //       FailedImportedDeviceCount: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWirelessDeviceImportTasksCommandInput - {@link ListWirelessDeviceImportTasksCommandInput}
 * @returns {@link ListWirelessDeviceImportTasksCommandOutput}
 * @see {@link ListWirelessDeviceImportTasksCommandInput} for command's `input` shape.
 * @see {@link ListWirelessDeviceImportTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Adding, updating, or deleting the resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because it exceeded the allowed API request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input did not meet the specified constraints.
 *
 * @throws {@link IoTWirelessServiceException}
 *
 * Base exception class for all service exceptions from IoTWireless service.
 *
 * @public
 */
export class ListWirelessDeviceImportTasksCommand extends command<ListWirelessDeviceImportTasksCommandInput, ListWirelessDeviceImportTasksCommandOutput>(
  _ep0,
  _mw0,
  "ListWirelessDeviceImportTasks",
  ListWirelessDeviceImportTasks$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWirelessDeviceImportTasksRequest;
      output: ListWirelessDeviceImportTasksResponse;
    };
    sdk: {
      input: ListWirelessDeviceImportTasksCommandInput;
      output: ListWirelessDeviceImportTasksCommandOutput;
    };
  };
}
