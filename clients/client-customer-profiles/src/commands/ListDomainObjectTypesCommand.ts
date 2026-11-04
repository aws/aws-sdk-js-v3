// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDomainObjectTypesRequest, ListDomainObjectTypesResponse } from "../models/models_0";
import { ListDomainObjectTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDomainObjectTypesCommand}.
 */
export interface ListDomainObjectTypesCommandInput extends ListDomainObjectTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainObjectTypesCommand}.
 */
export interface ListDomainObjectTypesCommandOutput extends ListDomainObjectTypesResponse, __MetadataBearer {}

/**
 * List all DomainObjectType(s) in a Customer Profiles domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListDomainObjectTypesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListDomainObjectTypesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListDomainObjectTypesRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDomainObjectTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainObjectTypesResponse
 * //   Items: [ // DomainObjectTypesList
 * //     { // DomainObjectTypesListItem
 * //       ObjectTypeName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainObjectTypesCommandInput - {@link ListDomainObjectTypesCommandInput}
 * @returns {@link ListDomainObjectTypesCommandOutput}
 * @see {@link ListDomainObjectTypesCommandInput} for command's `input` shape.
 * @see {@link ListDomainObjectTypesCommandOutput} for command's `response` shape.
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
export class ListDomainObjectTypesCommand extends command<ListDomainObjectTypesCommandInput, ListDomainObjectTypesCommandOutput>(
  _ep0,
  _mw0,
  "ListDomainObjectTypes",
  ListDomainObjectTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainObjectTypesRequest;
      output: ListDomainObjectTypesResponse;
    };
    sdk: {
      input: ListDomainObjectTypesCommandInput;
      output: ListDomainObjectTypesCommandOutput;
    };
  };
}
