// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListWirelessDeviceImportTasksRequest, ListWirelessDeviceImportTasksResponse } from "../models/models_1";
import {
  de_ListWirelessDeviceImportTasksCommand,
  se_ListWirelessDeviceImportTasksCommand,
} from "../protocols/Aws_restJson1";

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
 * <p>List wireless devices that have been added to an import task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListWirelessDeviceImportTasksCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListWirelessDeviceImportTasksCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * //       Sidewalk: { // SidewalkGetStartImportInfo
 * //         DeviceCreationFileList: [ // DeviceCreationFileList
 * //           "STRING_VALUE",
 * //         ],
 * //         Role: "STRING_VALUE",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("iotwireless", "ListWirelessDeviceImportTasks", {})
  .n("IoTWirelessClient", "ListWirelessDeviceImportTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListWirelessDeviceImportTasksCommand)
  .de(de_ListWirelessDeviceImportTasksCommand)
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
