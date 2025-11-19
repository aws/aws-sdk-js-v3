// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListProgramManagementAccountsRequest, ListProgramManagementAccountsResponse } from "../models/models_0";
import {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { ListProgramManagementAccounts } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListProgramManagementAccountsCommand}.
 */
export interface ListProgramManagementAccountsCommandInput extends ListProgramManagementAccountsRequest {}
/**
 * @public
 *
 * The output of {@link ListProgramManagementAccountsCommand}.
 */
export interface ListProgramManagementAccountsCommandOutput
  extends ListProgramManagementAccountsResponse,
    __MetadataBearer {}

/**
 * <p>Lists program management accounts based on specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, ListProgramManagementAccountsCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, ListProgramManagementAccountsCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // ListProgramManagementAccountsRequest
 *   catalog: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   displayNames: [ // ProgramManagementAccountDisplayNameList
 *     "STRING_VALUE",
 *   ],
 *   programs: [ // ProgramList
 *     "SOLUTION_PROVIDER" || "DISTRIBUTION" || "DISTRIBUTION_SELLER",
 *   ],
 *   accountIds: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   statuses: [ // ProgramManagementAccountStatusList
 *     "PENDING" || "ACTIVE" || "INACTIVE",
 *   ],
 *   sort: { // ListProgramManagementAccountsSortBase
 *     sortOrder: "Ascending" || "Descending", // required
 *     sortBy: "UpdatedAt", // required
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListProgramManagementAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListProgramManagementAccountsResponse
 * //   items: [ // ProgramManagementAccountSummaries
 * //     { // ProgramManagementAccountSummary
 * //       id: "STRING_VALUE",
 * //       revision: "STRING_VALUE",
 * //       catalog: "STRING_VALUE",
 * //       program: "SOLUTION_PROVIDER" || "DISTRIBUTION" || "DISTRIBUTION_SELLER",
 * //       displayName: "STRING_VALUE",
 * //       accountId: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       startDate: new Date("TIMESTAMP"),
 * //       status: "PENDING" || "ACTIVE" || "INACTIVE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProgramManagementAccountsCommandInput - {@link ListProgramManagementAccountsCommandInput}
 * @returns {@link ListProgramManagementAccountsCommandOutput}
 * @see {@link ListProgramManagementAccountsCommandInput} for command's `input` shape.
 * @see {@link ListProgramManagementAccountsCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation due to invalid input parameters.</p>
 *
 * @throws {@link PartnerCentralChannelServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralChannel service.</p>
 *
 *
 * @example Example for ListProgramManagementAccounts
 * ```javascript
 * //
 * const input = {
 *   accountIds: [
 *     "111122223333"
 *   ],
 *   catalog: "AWS",
 *   displayNames: [
 *     "TestDisplayName"
 *   ],
 *   maxResults: 20,
 *   programs: [
 *     "SOLUTION_PROVIDER"
 *   ],
 *   sort: {
 *     sortBy: "UpdatedAt",
 *     sortOrder: "Descending"
 *   },
 *   statuses: [
 *     "PENDING"
 *   ]
 * };
 * const command = new ListProgramManagementAccountsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       accountId: "111122223333",
 *       arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/program-management-account/pma-u8ic702rtzng8",
 *       catalog: "AWS",
 *       createdAt: "2024-04-29T08:52:46.397Z",
 *       displayName: "TestDisplayName",
 *       id: "pma-u8ic702rtzng8",
 *       program: "SOLUTION_PROVIDER",
 *       revision: "4",
 *       status: "PENDING",
 *       updatedAt: "2024-05-02T16:18:16.432Z"
 *     }
 *   ],
 *   nextToken: "nextToken"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListProgramManagementAccountsCommand extends $Command
  .classBuilder<
    ListProgramManagementAccountsCommandInput,
    ListProgramManagementAccountsCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "ListProgramManagementAccounts", {})
  .n("PartnerCentralChannelClient", "ListProgramManagementAccountsCommand")
  .sc(ListProgramManagementAccounts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProgramManagementAccountsRequest;
      output: ListProgramManagementAccountsResponse;
    };
    sdk: {
      input: ListProgramManagementAccountsCommandInput;
      output: ListProgramManagementAccountsCommandOutput;
    };
  };
}
