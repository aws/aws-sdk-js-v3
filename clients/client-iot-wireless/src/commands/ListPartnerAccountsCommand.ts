// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import { ListPartnerAccountsRequest, ListPartnerAccountsResponse } from "../models/models_1";
import { ListPartnerAccounts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPartnerAccountsCommand}.
 */
export interface ListPartnerAccountsCommandInput extends ListPartnerAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListPartnerAccountsCommand}.
 */
export interface ListPartnerAccountsCommandOutput extends ListPartnerAccountsResponse, __MetadataBearer {}

/**
 * <p>Lists the partner accounts associated with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, ListPartnerAccountsCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, ListPartnerAccountsCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * // import type { IoTWirelessClientConfig } from "@aws-sdk/client-iot-wireless";
 * const config = {}; // type is IoTWirelessClientConfig
 * const client = new IoTWirelessClient(config);
 * const input = { // ListPartnerAccountsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPartnerAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListPartnerAccountsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Sidewalk: [ // SidewalkAccountList
 * //     { // SidewalkAccountInfoWithFingerprint
 * //       AmazonId: "STRING_VALUE",
 * //       Fingerprint: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPartnerAccountsCommandInput - {@link ListPartnerAccountsCommandInput}
 * @returns {@link ListPartnerAccountsCommandOutput}
 * @see {@link ListPartnerAccountsCommandInput} for command's `input` shape.
 * @see {@link ListPartnerAccountsCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
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
export class ListPartnerAccountsCommand extends $Command
  .classBuilder<
    ListPartnerAccountsCommandInput,
    ListPartnerAccountsCommandOutput,
    IoTWirelessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTWirelessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("iotwireless", "ListPartnerAccounts", {})
  .n("IoTWirelessClient", "ListPartnerAccountsCommand")
  .sc(ListPartnerAccounts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPartnerAccountsRequest;
      output: ListPartnerAccountsResponse;
    };
    sdk: {
      input: ListPartnerAccountsCommandInput;
      output: ListPartnerAccountsCommandOutput;
    };
  };
}
