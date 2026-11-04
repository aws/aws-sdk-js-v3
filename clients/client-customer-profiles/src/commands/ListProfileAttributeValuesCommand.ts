// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ProfileAttributeValuesRequest, ProfileAttributeValuesResponse } from "../models/models_0";
import { ListProfileAttributeValues$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Fetch the possible attribute values given the attribute name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileAttributeValuesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileAttributeValuesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class ListProfileAttributeValuesCommand extends command<ListProfileAttributeValuesCommandInput, ListProfileAttributeValuesCommandOutput>(
  _ep0,
  _mw0,
  "ListProfileAttributeValues",
  ListProfileAttributeValues$
) {
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
