// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListMulticastGroupsByFuotaTaskRequest } from "../models/models_0";
import { ListMulticastGroupsByFuotaTaskResponse } from "../models/models_1";
import { ListMulticastGroupsByFuotaTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMulticastGroupsByFuotaTaskCommand}.
 */
export interface ListMulticastGroupsByFuotaTaskCommandInput extends ListMulticastGroupsByFuotaTaskRequest {}
/**
 * @public
 *
 * The output of {@link ListMulticastGroupsByFuotaTaskCommand}.
 */
export interface ListMulticastGroupsByFuotaTaskCommandOutput
  extends ListMulticastGroupsByFuotaTaskResponse,
    __MetadataBearer {}

/**
 * <p>List all multicast groups associated with a FUOTA task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListMulticastGroupsByFuotaTaskCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListMulticastGroupsByFuotaTaskCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListMulticastGroupsByFuotaTaskRequest
 *   Id: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMulticastGroupsByFuotaTaskCommand(input);
 * const response = await client.send(command);
 * // { // ListMulticastGroupsByFuotaTaskResponse
 * //   NextToken: "STRING_VALUE",
 * //   MulticastGroupList: [ // MulticastGroupListByFuotaTask
 * //     { // MulticastGroupByFuotaTask
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMulticastGroupsByFuotaTaskCommandInput - {@link ListMulticastGroupsByFuotaTaskCommandInput}
 * @returns {@link ListMulticastGroupsByFuotaTaskCommandOutput}
 * @see {@link ListMulticastGroupsByFuotaTaskCommandInput} for command's `input` shape.
 * @see {@link ListMulticastGroupsByFuotaTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
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
export class ListMulticastGroupsByFuotaTaskCommand extends $Command
  .classBuilder<
    ListMulticastGroupsByFuotaTaskCommandInput,
    ListMulticastGroupsByFuotaTaskCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ListMulticastGroupsByFuotaTask", {})
  .n("IoTWirelessClient", "ListMulticastGroupsByFuotaTaskCommand")
  .sc(ListMulticastGroupsByFuotaTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMulticastGroupsByFuotaTaskRequest;
      output: ListMulticastGroupsByFuotaTaskResponse;
    };
    sdk: {
      input: ListMulticastGroupsByFuotaTaskCommandInput;
      output: ListMulticastGroupsByFuotaTaskCommandOutput;
    };
  };
}
