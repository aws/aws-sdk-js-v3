// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListProfileObjectTypesRequest, ListProfileObjectTypesResponse } from "../models/models_0";
import { ListProfileObjectTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfileObjectTypesCommand}.
 */
export interface ListProfileObjectTypesCommandInput extends ListProfileObjectTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileObjectTypesCommand}.
 */
export interface ListProfileObjectTypesCommandOutput extends ListProfileObjectTypesResponse, __MetadataBearer {}

/**
 * <p>Lists all of the templates available within the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectTypesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectTypesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListProfileObjectTypesRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListProfileObjectTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileObjectTypesResponse
 * //   Items: [ // ProfileObjectTypeList
 * //     { // ListProfileObjectTypeItem
 * //       ObjectTypeName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       MaxProfileObjectCount: Number("int"),
 * //       MaxAvailableProfileObjectCount: Number("int"),
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
 * @param ListProfileObjectTypesCommandInput - {@link ListProfileObjectTypesCommandInput}
 * @returns {@link ListProfileObjectTypesCommandOutput}
 * @see {@link ListProfileObjectTypesCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectTypesCommandOutput} for command's `response` shape.
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
export class ListProfileObjectTypesCommand extends $Command
  .classBuilder<
    ListProfileObjectTypesCommandInput,
    ListProfileObjectTypesCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListProfileObjectTypes", {})
  .n("CustomerProfilesClient", "ListProfileObjectTypesCommand")
  .sc(ListProfileObjectTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileObjectTypesRequest;
      output: ListProfileObjectTypesResponse;
    };
    sdk: {
      input: ListProfileObjectTypesCommandInput;
      output: ListProfileObjectTypesCommandOutput;
    };
  };
}
