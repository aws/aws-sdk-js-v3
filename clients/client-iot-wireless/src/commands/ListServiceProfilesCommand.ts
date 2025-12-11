// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import type { ListServiceProfilesRequest, ListServiceProfilesResponse } from "../models/models_0";
import { ListServiceProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceProfilesCommand}.
 */
export interface ListServiceProfilesCommandInput extends ListServiceProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceProfilesCommand}.
 */
export interface ListServiceProfilesCommandOutput extends ListServiceProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists the service profiles registered to your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListServiceProfilesCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListServiceProfilesCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListServiceProfilesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListServiceProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceProfilesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServiceProfileList: [ // ServiceProfileList
 * //     { // ServiceProfile
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServiceProfilesCommandInput - {@link ListServiceProfilesCommandInput}
 * @returns {@link ListServiceProfilesCommandOutput}
 * @see {@link ListServiceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListServiceProfilesCommandOutput} for command's `response` shape.
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
export class ListServiceProfilesCommand extends $Command
  .classBuilder<
    ListServiceProfilesCommandInput,
    ListServiceProfilesCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ListServiceProfiles", {})
  .n("IoTWirelessClient", "ListServiceProfilesCommand")
  .sc(ListServiceProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceProfilesRequest;
      output: ListServiceProfilesResponse;
    };
    sdk: {
      input: ListServiceProfilesCommandInput;
      output: ListServiceProfilesCommandOutput;
    };
  };
}
