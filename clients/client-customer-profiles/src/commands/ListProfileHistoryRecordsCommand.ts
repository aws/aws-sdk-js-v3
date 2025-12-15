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
import type { ListProfileHistoryRecordsRequest, ListProfileHistoryRecordsResponse } from "../models/models_0";
import { ListProfileHistoryRecords$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProfileHistoryRecordsCommand}.
 */
export interface ListProfileHistoryRecordsCommandInput extends ListProfileHistoryRecordsRequest {}
/**
 * @public
 *
 * The output of {@link ListProfileHistoryRecordsCommand}.
 */
export interface ListProfileHistoryRecordsCommandOutput extends ListProfileHistoryRecordsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of history records for a specific profile, for a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, ListProfileHistoryRecordsCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, ListProfileHistoryRecordsCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // ListProfileHistoryRecordsRequest
 *   DomainName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ActionType: "ADDED_PROFILE_KEY" || "DELETED_PROFILE_KEY" || "CREATED" || "UPDATED" || "INGESTED" || "DELETED_BY_CUSTOMER" || "EXPIRED" || "MERGED" || "DELETED_BY_MERGE",
 *   PerformedBy: "STRING_VALUE",
 * };
 * const command = new ListProfileHistoryRecordsCommand(input);
 * const response = await client.send(command);
 * // { // ListProfileHistoryRecordsResponse
 * //   ProfileHistoryRecords: [ // ProfileHistoryRecords
 * //     { // ProfileHistoryRecord
 * //       Id: "STRING_VALUE", // required
 * //       ObjectTypeName: "STRING_VALUE", // required
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       ActionType: "ADDED_PROFILE_KEY" || "DELETED_PROFILE_KEY" || "CREATED" || "UPDATED" || "INGESTED" || "DELETED_BY_CUSTOMER" || "EXPIRED" || "MERGED" || "DELETED_BY_MERGE", // required
 * //       ProfileObjectUniqueKey: "STRING_VALUE",
 * //       PerformedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProfileHistoryRecordsCommandInput - {@link ListProfileHistoryRecordsCommandInput}
 * @returns {@link ListProfileHistoryRecordsCommandOutput}
 * @see {@link ListProfileHistoryRecordsCommandInput} for command's `input` shape.
 * @see {@link ListProfileHistoryRecordsCommandOutput} for command's `response` shape.
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
export class ListProfileHistoryRecordsCommand extends $Command
  .classBuilder<
    ListProfileHistoryRecordsCommandInput,
    ListProfileHistoryRecordsCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "ListProfileHistoryRecords", {})
  .n("CustomerProfilesClient", "ListProfileHistoryRecordsCommand")
  .sc(ListProfileHistoryRecords$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProfileHistoryRecordsRequest;
      output: ListProfileHistoryRecordsResponse;
    };
    sdk: {
      input: ListProfileHistoryRecordsCommandInput;
      output: ListProfileHistoryRecordsCommandOutput;
    };
  };
}
