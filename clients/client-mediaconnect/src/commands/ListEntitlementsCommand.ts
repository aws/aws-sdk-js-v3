// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListEntitlementsRequest, ListEntitlementsResponse } from "../models/models_0";
import { ListEntitlements } from "../schemas/schemas_1_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEntitlementsCommand}.
 */
export interface ListEntitlementsCommandInput extends ListEntitlementsRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitlementsCommand}.
 */
export interface ListEntitlementsCommandOutput extends ListEntitlementsResponse, __MetadataBearer {}

/**
 * <p> Displays a list of all entitlements that have been granted to this account. This request returns 20 results per page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListEntitlementsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListEntitlementsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ListEntitlementsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEntitlementsCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitlementsResponse
 * //   Entitlements: [ // __listOfListedEntitlement
 * //     { // ListedEntitlement
 * //       DataTransferSubscriberFeePercent: Number("int"),
 * //       EntitlementArn: "STRING_VALUE", // required
 * //       EntitlementName: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitlementsCommandInput - {@link ListEntitlementsCommandInput}
 * @returns {@link ListEntitlementsCommandOutput}
 * @see {@link ListEntitlementsCommandInput} for command's `input` shape.
 * @see {@link ListEntitlementsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class ListEntitlementsCommand extends $Command
  .classBuilder<
    ListEntitlementsCommandInput,
    ListEntitlementsCommandOutput,
    MediaConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaConnect", "ListEntitlements", {})
  .n("MediaConnectClient", "ListEntitlementsCommand")
  .sc(ListEntitlements)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEntitlementsRequest;
      output: ListEntitlementsResponse;
    };
    sdk: {
      input: ListEntitlementsCommandInput;
      output: ListEntitlementsCommandOutput;
    };
  };
}
