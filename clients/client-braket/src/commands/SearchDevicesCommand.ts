// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BraketClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BraketClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchDevicesRequest, SearchDevicesResponse } from "../models/models_0";
import { SearchDevices } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchDevicesCommand}.
 */
export interface SearchDevicesCommandInput extends SearchDevicesRequest {}
/**
 * @public
 *
 * The output of {@link SearchDevicesCommand}.
 */
export interface SearchDevicesCommandOutput extends SearchDevicesResponse, __MetadataBearer {}

/**
 * <p>Searches for devices using the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BraketClient, SearchDevicesCommand } from "@aws-sdk/client-braket"; // ES Modules import
 * // const { BraketClient, SearchDevicesCommand } = require("@aws-sdk/client-braket"); // CommonJS import
 * // import type { BraketClientConfig } from "@aws-sdk/client-braket";
 * const config = {}; // type is BraketClientConfig
 * const client = new BraketClient(config);
 * const input = { // SearchDevicesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // SearchDevicesFilterList // required
 *     { // SearchDevicesFilter
 *       name: "STRING_VALUE", // required
 *       values: [ // String256List // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new SearchDevicesCommand(input);
 * const response = await client.send(command);
 * // { // SearchDevicesResponse
 * //   devices: [ // DeviceSummaryList // required
 * //     { // DeviceSummary
 * //       deviceArn: "STRING_VALUE", // required
 * //       deviceName: "STRING_VALUE", // required
 * //       providerName: "STRING_VALUE", // required
 * //       deviceType: "STRING_VALUE", // required
 * //       deviceStatus: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchDevicesCommandInput - {@link SearchDevicesCommandInput}
 * @returns {@link SearchDevicesCommandOutput}
 * @see {@link SearchDevicesCommandInput} for command's `input` shape.
 * @see {@link SearchDevicesCommandOutput} for command's `response` shape.
 * @see {@link BraketClientResolvedConfig | config} for BraketClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request failed because of an unknown error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The API throttling rate limit is exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input request failed to satisfy constraints expected by Amazon Braket.</p>
 *
 * @throws {@link BraketServiceException}
 * <p>Base exception class for all service exceptions from Braket service.</p>
 *
 *
 * @public
 */
export class SearchDevicesCommand extends $Command
  .classBuilder<
    SearchDevicesCommandInput,
    SearchDevicesCommandOutput,
    BraketClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BraketClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Braket", "SearchDevices", {})
  .n("BraketClient", "SearchDevicesCommand")
  .sc(SearchDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchDevicesRequest;
      output: SearchDevicesResponse;
    };
    sdk: {
      input: SearchDevicesCommandInput;
      output: SearchDevicesCommandOutput;
    };
  };
}
