// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListDeviceIdentifiersRequest,
  ListDeviceIdentifiersResponse,
  ListDeviceIdentifiersResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ListDeviceIdentifiersCommand, se_ListDeviceIdentifiersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceIdentifiersCommand}.
 */
export interface ListDeviceIdentifiersCommandInput extends ListDeviceIdentifiersRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceIdentifiersCommand}.
 */
export interface ListDeviceIdentifiersCommandOutput extends ListDeviceIdentifiersResponse, __MetadataBearer {}

/**
 * <p>Lists device identifiers. Add filters to your request to return a more specific list
 *             of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status
 *             of device identifiers, or the ARN of the traffic group.</p>
 *          <p>If you specify multiple filters, filters are joined with an OR, and the request
 * returns results that match all of the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ListDeviceIdentifiersCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ListDeviceIdentifiersCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new PrivateNetworksClient(config);
 * const input = { // ListDeviceIdentifiersRequest
 *   filters: { // DeviceIdentifierFilters
 *     "<keys>": [ // DeviceIdentifierFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   networkArn: "STRING_VALUE", // required
 *   startToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDeviceIdentifiersCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceIdentifiersResponse
 * //   deviceIdentifiers: [ // DeviceIdentifierList
 * //     { // DeviceIdentifier
 * //       deviceIdentifierArn: "STRING_VALUE",
 * //       trafficGroupArn: "STRING_VALUE",
 * //       networkArn: "STRING_VALUE",
 * //       imsi: "STRING_VALUE",
 * //       iccid: "STRING_VALUE",
 * //       vendor: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       orderArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeviceIdentifiersCommandInput - {@link ListDeviceIdentifiersCommandInput}
 * @returns {@link ListDeviceIdentifiersCommandOutput}
 * @see {@link ListDeviceIdentifiersCommandInput} for command's `input` shape.
 * @see {@link ListDeviceIdentifiersCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 * @public
 */
export class ListDeviceIdentifiersCommand extends $Command
  .classBuilder<
    ListDeviceIdentifiersCommandInput,
    ListDeviceIdentifiersCommandOutput,
    PrivateNetworksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PrivateNetworksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("E5GNetworkControllerLambda", "ListDeviceIdentifiers", {})
  .n("PrivateNetworksClient", "ListDeviceIdentifiersCommand")
  .f(void 0, ListDeviceIdentifiersResponseFilterSensitiveLog)
  .ser(se_ListDeviceIdentifiersCommand)
  .de(de_ListDeviceIdentifiersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeviceIdentifiersRequest;
      output: ListDeviceIdentifiersResponse;
    };
    sdk: {
      input: ListDeviceIdentifiersCommandInput;
      output: ListDeviceIdentifiersCommandOutput;
    };
  };
}
