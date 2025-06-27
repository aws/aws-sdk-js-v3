// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListDomainLayoutsRequest,
  ListDomainLayoutsResponse,
  ListDomainLayoutsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListDomainLayoutsCommand, se_ListDomainLayoutsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainLayoutsCommand}.
 */
export interface ListDomainLayoutsCommandInput extends ListDomainLayoutsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainLayoutsCommand}.
 */
export interface ListDomainLayoutsCommandOutput extends ListDomainLayoutsResponse, __MetadataBearer {}

/**
 * <p>Lists the existing layouts that can be used to view data for a specific domain. This API
 *          can only be invoked from the Amazon Connect admin website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListDomainLayoutsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListDomainLayoutsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListDomainLayoutsRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDomainLayoutsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainLayoutsResponse
 * //   Items: [ // LayoutList
 * //     { // LayoutItem
 * //       LayoutDefinitionName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       DisplayName: "STRING_VALUE", // required
 * //       IsDefault: true || false,
 * //       LayoutType: "PROFILE_EXPLORER", // required
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainLayoutsCommandInput - {@link ListDomainLayoutsCommandInput}
 * @returns {@link ListDomainLayoutsCommandOutput}
 * @see {@link ListDomainLayoutsCommandInput} for command's `input` shape.
 * @see {@link ListDomainLayoutsCommandOutput} for command's `response` shape.
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
export class ListDomainLayoutsCommand extends $Command
  .classBuilder<
    ListDomainLayoutsCommandInput,
    ListDomainLayoutsCommandOutput,
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
  .s("CustomerProfiles_20200815", "ListDomainLayouts", {})
  .n("CustomerProfilesClient", "ListDomainLayoutsCommand")
  .f(void 0, ListDomainLayoutsResponseFilterSensitiveLog)
  .ser(se_ListDomainLayoutsCommand)
  .de(de_ListDomainLayoutsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainLayoutsRequest;
      output: ListDomainLayoutsResponse;
    };
    sdk: {
      input: ListDomainLayoutsCommandInput;
      output: ListDomainLayoutsCommandOutput;
    };
  };
}
