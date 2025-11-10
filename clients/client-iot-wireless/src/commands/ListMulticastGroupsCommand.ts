// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListMulticastGroupsRequest, ListMulticastGroupsResponse } from "../models/models_0";
import { ListMulticastGroups } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMulticastGroupsCommand}.
 */
export interface ListMulticastGroupsCommandInput extends ListMulticastGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListMulticastGroupsCommand}.
 */
export interface ListMulticastGroupsCommandOutput extends ListMulticastGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists the multicast groups registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListMulticastGroupsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListMulticastGroupsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListMulticastGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMulticastGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListMulticastGroupsResponse
 * //   NextToken: "STRING_VALUE",
 * //   MulticastGroupList: [ // MulticastGroupList
 * //     { // MulticastGroup
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMulticastGroupsCommandInput - {@link ListMulticastGroupsCommandInput}
 * @returns {@link ListMulticastGroupsCommandOutput}
 * @see {@link ListMulticastGroupsCommandInput} for command's `input` shape.
 * @see {@link ListMulticastGroupsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
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
export class ListMulticastGroupsCommand extends $Command
  .classBuilder<
    ListMulticastGroupsCommandInput,
    ListMulticastGroupsCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ListMulticastGroups", {})
  .n("IoTWirelessClient", "ListMulticastGroupsCommand")
  .sc(ListMulticastGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMulticastGroupsRequest;
      output: ListMulticastGroupsResponse;
    };
    sdk: {
      input: ListMulticastGroupsCommandInput;
      output: ListMulticastGroupsCommandOutput;
    };
  };
}
