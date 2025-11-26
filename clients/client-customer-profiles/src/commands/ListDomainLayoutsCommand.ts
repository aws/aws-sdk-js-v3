// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDomainLayoutsRequest, ListDomainLayoutsResponse } from "../models/models_0";
import { ListDomainLayouts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainLayoutsCommand}.
 */
export interface ListDomainLayoutsCommandInput extends ListDomainLayoutsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainLayoutsCommand}.
 */
export interface ListDomainLayoutsCommandOutput extends ListDomainLayoutsResponse, __MetadataBearer {}

/**
 * <p>Lists the existing layouts that can be used to view data for a specific domain. This API
 *          can only be invoked from the Amazon Connect admin website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListDomainLayoutsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListDomainLayoutsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListDomainLayoutsRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDomainLayoutsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainLayoutsResponse
 * //   Items: [ // LayoutList
 * //     { // LayoutItem
 * //       LayoutDefinitionName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       DisplayName: "STRING_VALUE", // required
 * //       IsDefault: true || false,
 * //       LayoutType: "PROFILE_EXPLORER", // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainLayoutsCommandInput - {@link ListDomainLayoutsCommandInput}
 * @returns {@link ListDomainLayoutsCommandOutput}
 * @see {@link ListDomainLayoutsCommandInput} for command's `input` shape.
 * @see {@link ListDomainLayoutsCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class ListDomainLayoutsCommand extends $Command
  .classBuilder<
    ListDomainLayoutsCommandInput,
    ListDomainLayoutsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListDomainLayouts", {})
  .n("CustomerProfilesClient", "ListDomainLayoutsCommand")
  .sc(ListDomainLayouts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainLayoutsRequest;
      output: ListDomainLayoutsResponse;
    };
    sdk: {
      input: ListDomainLayoutsCommandInput;
      output: ListDomainLayoutsCommandOutput;
    };
  };
}
