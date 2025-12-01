// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListObjectTypeAttributeValuesRequest, ListObjectTypeAttributeValuesResponse } from "../models/models_0";
import { ListObjectTypeAttributeValues } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListObjectTypeAttributeValuesCommand}.
 */
export interface ListObjectTypeAttributeValuesCommandInput extends ListObjectTypeAttributeValuesRequest {}
/**
 * @public
 *
 * The output of {@link ListObjectTypeAttributeValuesCommand}.
 */
export interface ListObjectTypeAttributeValuesCommandOutput
  extends ListObjectTypeAttributeValuesResponse,
    __MetadataBearer {}

/**
 * <p>The ListObjectTypeAttributeValues API provides access to the most recent distinct values for any specified attribute, making it valuable for real-time data validation and consistency checks within your object types. This API works across domain, supporting both custom and standard object types. The API accepts the object type name, attribute name, and domain name as input parameters and returns values up to the storage limit of approximately 350KB.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListObjectTypeAttributeValuesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListObjectTypeAttributeValuesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListObjectTypeAttributeValuesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 * };
 * const command = new ListObjectTypeAttributeValuesCommand(input);
 * const response = await client.send(command);
 * // { // ListObjectTypeAttributeValuesResponse
 * //   Items: [ // ListObjectTypeAttributeValuesList
 * //     { // ListObjectTypeAttributeValuesItem
 * //       Value: "STRING_VALUE", // required
 * //       LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListObjectTypeAttributeValuesCommandInput - {@link ListObjectTypeAttributeValuesCommandInput}
 * @returns {@link ListObjectTypeAttributeValuesCommandOutput}
 * @see {@link ListObjectTypeAttributeValuesCommandInput} for command's `input` shape.
 * @see {@link ListObjectTypeAttributeValuesCommandOutput} for command's `response` shape.
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
export class ListObjectTypeAttributeValuesCommand extends $Command
  .classBuilder<
    ListObjectTypeAttributeValuesCommandInput,
    ListObjectTypeAttributeValuesCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListObjectTypeAttributeValues", {})
  .n("CustomerProfilesClient", "ListObjectTypeAttributeValuesCommand")
  .sc(ListObjectTypeAttributeValues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListObjectTypeAttributeValuesRequest;
      output: ListObjectTypeAttributeValuesResponse;
    };
    sdk: {
      input: ListObjectTypeAttributeValuesCommandInput;
      output: ListObjectTypeAttributeValuesCommandOutput;
    };
  };
}
