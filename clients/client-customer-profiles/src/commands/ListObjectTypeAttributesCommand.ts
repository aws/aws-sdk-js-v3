// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListObjectTypeAttributesRequest, ListObjectTypeAttributesResponse } from "../models/models_0";
import { ListObjectTypeAttributes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListObjectTypeAttributesCommand}.
 */
export interface ListObjectTypeAttributesCommandInput extends ListObjectTypeAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectTypeAttributesCommand}.
 */
export interface ListObjectTypeAttributesCommandOutput extends ListObjectTypeAttributesResponse, __MetadataBearer {}

/**
 * <p>Fetch the possible attribute values given the attribute name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListObjectTypeAttributesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListObjectTypeAttributesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListObjectTypeAttributesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 * };
 * const command = new ListObjectTypeAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectTypeAttributesResponse
 * //   Items: [ // ListObjectTypeAttributesList
 * //     { // ListObjectTypeAttributeItem
 * //       AttributeName: "STRING_VALUE", // required
 * //       LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListObjectTypeAttributesCommandInput - {@link ListObjectTypeAttributesCommandInput}
 * @returns {@link ListObjectTypeAttributesCommandOutput}
 * @see {@link ListObjectTypeAttributesCommandInput} for command's `input` shape.
 * @see {@link ListObjectTypeAttributesCommandOutput} for command's `response` shape.
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
export class ListObjectTypeAttributesCommand extends $Command
  .classBuilder<
    ListObjectTypeAttributesCommandInput,
    ListObjectTypeAttributesCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListObjectTypeAttributes", {})
  .n("CustomerProfilesClient", "ListObjectTypeAttributesCommand")
  .sc(ListObjectTypeAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListObjectTypeAttributesRequest;
      output: ListObjectTypeAttributesResponse;
    };
    sdk: {
      input: ListObjectTypeAttributesCommandInput;
      output: ListObjectTypeAttributesCommandOutput;
    };
  };
}
