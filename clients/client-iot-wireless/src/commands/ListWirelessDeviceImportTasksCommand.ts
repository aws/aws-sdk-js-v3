// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { ListWirelessDeviceImportTasksRequest, ListWirelessDeviceImportTasksResponse } from "../models/models_0";
import { ListWirelessDeviceImportTasks$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListWirelessDeviceImportTasksCommandOutput
  extends ListWirelessDeviceImportTasksResponse,
    __MetadataBearer {}

/**
 * <p>List of import tasks and summary information of onboarding status of devices in each
 *             import task.</p>
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
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 *
 * @public
 */
export class ListWirelessDeviceImportTasksCommand extends $Command
  .classBuilder<
    ListWirelessDeviceImportTasksCommandInput,
    ListWirelessDeviceImportTasksCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ListWirelessDeviceImportTasks", {})
  .n("IoTWirelessClient", "ListWirelessDeviceImportTasksCommand")
  .sc(ListWirelessDeviceImportTasks$)
  .build() {
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
