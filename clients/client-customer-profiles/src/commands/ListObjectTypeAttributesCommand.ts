// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListObjectTypeAttributesRequest, ListObjectTypeAttributesResponse } from "../models/models_0";
import { ListObjectTypeAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Fetch the possible attribute values given the attribute name.
 *
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
export class ListObjectTypeAttributesCommand extends command<ListObjectTypeAttributesCommandInput, ListObjectTypeAttributesCommandOutput>(
  _ep0,
  _mw0,
  "ListObjectTypeAttributes",
  ListObjectTypeAttributes$
) {
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
