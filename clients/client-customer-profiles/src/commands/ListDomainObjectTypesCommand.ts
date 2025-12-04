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
import type { ListDomainObjectTypesRequest, ListDomainObjectTypesResponse } from "../models/models_0";
import { ListDomainObjectTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List all DomainObjectType(s) in a Customer Profiles domain. </p>
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
export class ListDomainObjectTypesCommand extends $Command
  .classBuilder<
    ListDomainObjectTypesCommandInput,
    ListDomainObjectTypesCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListDomainObjectTypes", {})
  .n("CustomerProfilesClient", "ListDomainObjectTypesCommand")
  .sc(ListDomainObjectTypes)
  .build() {
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
