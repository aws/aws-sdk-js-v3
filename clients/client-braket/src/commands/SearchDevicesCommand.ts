// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchDevicesRequest, SearchDevicesResponse } from "../models/models_0";
import { SearchDevices$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Searches for devices using the specified filters.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request failed because of an unknown error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The API throttling rate limit is exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input request failed to satisfy constraints expected by Amazon Braket.
 *
 * @throws {@link BraketServiceException}
 *
 * Base exception class for all service exceptions from Braket service.
 *
 * @public
 */
export class SearchDevicesCommand extends command<SearchDevicesCommandInput, SearchDevicesCommandOutput>(
  _ep0,
  _mw0,
  "SearchDevices",
  SearchDevices$
) {
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
