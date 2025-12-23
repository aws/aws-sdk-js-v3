// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchAvailablePhoneNumbersRequest, SearchAvailablePhoneNumbersResponse } from "../models/models_0";
import { SearchAvailablePhoneNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchAvailablePhoneNumbersCommand}.
 */
export interface SearchAvailablePhoneNumbersCommandInput extends SearchAvailablePhoneNumbersRequest {}
/**
 * @public
 *
 * The output of {@link SearchAvailablePhoneNumbersCommand}.
 */
export interface SearchAvailablePhoneNumbersCommandOutput extends SearchAvailablePhoneNumbersResponse, __MetadataBearer {}

/**
 * <p>Searches for phone numbers that can be ordered. For US numbers, provide at least one of
 *             the following search filters: <code>AreaCode</code>, <code>City</code>,
 *                 <code>State</code>, or <code>TollFreePrefix</code>. If you provide
 *             <code>City</code>, you must also provide <code>State</code>. Numbers outside the US only
 *             support the <code>PhoneNumberType</code> filter, which you must use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, SearchAvailablePhoneNumbersCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, SearchAvailablePhoneNumbersCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // SearchAvailablePhoneNumbersRequest
 *   AreaCode: "STRING_VALUE",
 *   City: "STRING_VALUE",
 *   Country: "STRING_VALUE",
 *   State: "STRING_VALUE",
 *   TollFreePrefix: "STRING_VALUE",
 *   PhoneNumberType: "Local" || "TollFree",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchAvailablePhoneNumbersCommand(input);
 * const response = await client.send(command);
 * // { // SearchAvailablePhoneNumbersResponse
 * //   E164PhoneNumbers: [ // E164PhoneNumberList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchAvailablePhoneNumbersCommandInput - {@link SearchAvailablePhoneNumbersCommandInput}
 * @returns {@link SearchAvailablePhoneNumbersCommandOutput}
 * @see {@link SearchAvailablePhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link SearchAvailablePhoneNumbersCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class SearchAvailablePhoneNumbersCommand extends $Command
  .classBuilder<
    SearchAvailablePhoneNumbersCommandInput,
    SearchAvailablePhoneNumbersCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "SearchAvailablePhoneNumbers", {})
  .n("ChimeClient", "SearchAvailablePhoneNumbersCommand")
  .sc(SearchAvailablePhoneNumbers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchAvailablePhoneNumbersRequest;
      output: SearchAvailablePhoneNumbersResponse;
    };
    sdk: {
      input: SearchAvailablePhoneNumbersCommandInput;
      output: SearchAvailablePhoneNumbersCommandOutput;
    };
  };
}
