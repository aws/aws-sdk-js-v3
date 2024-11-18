// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ProfileAttributeValuesRequest, ProfileAttributeValuesResponse } from "../models/models_0";
import { de_ListProfileAttributeValuesCommand, se_ListProfileAttributeValuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfileAttributeValuesCommand}.
 */
export interface ListProfileAttributeValuesCommandInput extends ProfileAttributeValuesRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileAttributeValuesCommand}.
 */
export interface ListProfileAttributeValuesCommandOutput extends ProfileAttributeValuesResponse, __MetadataBearer {}

/**
 * <p>Fetch the possible attribute values given the attribute name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileAttributeValuesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileAttributeValuesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ProfileAttributeValuesRequest
 *   DomainName: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 * };
 * const command = new ListProfileAttributeValuesCommand(input);
 * const response = await client.send(command);
 * // { // ProfileAttributeValuesResponse
 * //   DomainName: "STRING_VALUE",
 * //   AttributeName: "STRING_VALUE",
 * //   Items: [ // AttributeValueItemList
 * //     { // AttributeValueItem
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   StatusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListProfileAttributeValuesCommandInput - {@link ListProfileAttributeValuesCommandInput}
 * @returns {@link ListProfileAttributeValuesCommandOutput}
 * @see {@link ListProfileAttributeValuesCommandInput} for command's `input` shape.
 * @see {@link ListProfileAttributeValuesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListProfileAttributeValuesCommand extends $Command
  .classBuilder<
    ListProfileAttributeValuesCommandInput,
    ListProfileAttributeValuesCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "ListProfileAttributeValues", {})
  .n("CustomerProfilesClient", "ListProfileAttributeValuesCommand")
  .f(void 0, void 0)
  .ser(se_ListProfileAttributeValuesCommand)
  .de(de_ListProfileAttributeValuesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ProfileAttributeValuesRequest;
      output: ProfileAttributeValuesResponse;
    };
    sdk: {
      input: ListProfileAttributeValuesCommandInput;
      output: ListProfileAttributeValuesCommandOutput;
    };
  };
}
