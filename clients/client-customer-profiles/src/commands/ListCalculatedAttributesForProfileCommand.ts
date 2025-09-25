// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCalculatedAttributesForProfileRequest,
  ListCalculatedAttributesForProfileResponse,
} from "../models/models_0";
import { ListCalculatedAttributesForProfile } from "../schemas/schemas_1_Calculated";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCalculatedAttributesForProfileCommand}.
 */
export interface ListCalculatedAttributesForProfileCommandInput extends ListCalculatedAttributesForProfileRequest {}
/**
 * @public
 *
 * The output of {@link ListCalculatedAttributesForProfileCommand}.
 */
export interface ListCalculatedAttributesForProfileCommandOutput
  extends ListCalculatedAttributesForProfileResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve a list of calculated attributes for a customer profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListCalculatedAttributesForProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListCalculatedAttributesForProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListCalculatedAttributesForProfileRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 * };
 * const command = new ListCalculatedAttributesForProfileCommand(input);
 * const response = await client.send(command);
 * // { // ListCalculatedAttributesForProfileResponse
 * //   Items: [ // CalculatedAttributesForProfileList
 * //     { // ListCalculatedAttributeForProfileItem
 * //       CalculatedAttributeName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       IsDataPartial: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       LastObjectTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCalculatedAttributesForProfileCommandInput - {@link ListCalculatedAttributesForProfileCommandInput}
 * @returns {@link ListCalculatedAttributesForProfileCommandOutput}
 * @see {@link ListCalculatedAttributesForProfileCommandInput} for command's `input` shape.
 * @see {@link ListCalculatedAttributesForProfileCommandOutput} for command's `response` shape.
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
export class ListCalculatedAttributesForProfileCommand extends $Command
  .classBuilder<
    ListCalculatedAttributesForProfileCommandInput,
    ListCalculatedAttributesForProfileCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListCalculatedAttributesForProfile", {})
  .n("CustomerProfilesClient", "ListCalculatedAttributesForProfileCommand")
  .sc(ListCalculatedAttributesForProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCalculatedAttributesForProfileRequest;
      output: ListCalculatedAttributesForProfileResponse;
    };
    sdk: {
      input: ListCalculatedAttributesForProfileCommandInput;
      output: ListCalculatedAttributesForProfileCommandOutput;
    };
  };
}
