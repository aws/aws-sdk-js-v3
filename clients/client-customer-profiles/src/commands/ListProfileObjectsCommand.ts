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
import type { ListProfileObjectsRequest, ListProfileObjectsResponse } from "../models/models_0";
import { ListProfileObjects$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfileObjectsCommand}.
 */
export interface ListProfileObjectsCommandInput extends ListProfileObjectsRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileObjectsCommand}.
 */
export interface ListProfileObjectsCommandOutput extends ListProfileObjectsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of objects associated with a profile of a given ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileObjectsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileObjectsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListProfileObjectsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 *   ObjectFilter: { // ObjectFilter
 *     KeyName: "STRING_VALUE", // required
 *     Values: [ // requestValueList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListProfileObjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileObjectsResponse
 * //   Items: [ // ProfileObjectList
 * //     { // ListProfileObjectsItem
 * //       ObjectTypeName: "STRING_VALUE",
 * //       ProfileObjectUniqueKey: "STRING_VALUE",
 * //       Object: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileObjectsCommandInput - {@link ListProfileObjectsCommandInput}
 * @returns {@link ListProfileObjectsCommandOutput}
 * @see {@link ListProfileObjectsCommandInput} for command's `input` shape.
 * @see {@link ListProfileObjectsCommandOutput} for command's `response` shape.
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
export class ListProfileObjectsCommand extends $Command
  .classBuilder<
    ListProfileObjectsCommandInput,
    ListProfileObjectsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListProfileObjects", {})
  .n("CustomerProfilesClient", "ListProfileObjectsCommand")
  .sc(ListProfileObjects$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileObjectsRequest;
      output: ListProfileObjectsResponse;
    };
    sdk: {
      input: ListProfileObjectsCommandInput;
      output: ListProfileObjectsCommandOutput;
    };
  };
}
