// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRelationshipsRequest, ListRelationshipsResponse } from "../models/models_0";
import {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { ListRelationships } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRelationshipsCommand}.
 */
export interface ListRelationshipsCommandInput extends ListRelationshipsRequest {}
/**
 * @public
 *
 * The output of {@link ListRelationshipsCommand}.
 */
export interface ListRelationshipsCommandOutput extends ListRelationshipsResponse, __MetadataBearer {}

/**
 * <p>Lists partner relationships based on specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, ListRelationshipsCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, ListRelationshipsCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // ListRelationshipsRequest
 *   catalog: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   associatedAccountIds: [ // AccountIdList
 *     "STRING_VALUE",
 *   ],
 *   associationTypes: [ // AssociationTypeList
 *     "DOWNSTREAM_SELLER" || "END_CUSTOMER" || "INTERNAL",
 *   ],
 *   displayNames: [ // RelationshipDisplayNameList
 *     "STRING_VALUE",
 *   ],
 *   programManagementAccountIdentifiers: [ // ProgramManagementAccountIdentifierList
 *     "STRING_VALUE",
 *   ],
 *   sort: { // ListRelationshipsSortBase
 *     sortOrder: "Ascending" || "Descending", // required
 *     sortBy: "UpdatedAt", // required
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListRelationshipsCommand(input);
 * const response = await client.send(command);
 * // { // ListRelationshipsResponse
 * //   items: [ // RelationshipSummaries
 * //     { // RelationshipSummary
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       revision: "STRING_VALUE",
 * //       catalog: "STRING_VALUE",
 * //       associationType: "DOWNSTREAM_SELLER" || "END_CUSTOMER" || "INTERNAL",
 * //       programManagementAccountId: "STRING_VALUE",
 * //       associatedAccountId: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       sector: "COMMERCIAL" || "GOVERNMENT" || "GOVERNMENT_EXCEPTION",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       startDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRelationshipsCommandInput - {@link ListRelationshipsCommandInput}
 * @returns {@link ListRelationshipsCommandOutput}
 * @see {@link ListRelationshipsCommandInput} for command's `input` shape.
 * @see {@link ListRelationshipsCommandOutput} for command's `response` shape.
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
 * @example Example for ListRelationships
 * ```javascript
 * //
 * const input = {
 *   associatedAccountIds: [
 *     "123456789012"
 *   ],
 *   associationTypes: [
 *     "DOWNSTREAM_SELLER"
 *   ],
 *   catalog: "AWS",
 *   displayNames: [
 *     "TestDisplayName"
 *   ],
 *   maxResults: 100,
 *   nextToken: "nextToken",
 *   programManagementAccountIdentifiers: [
 *     "pma-u8ic702rtzng8"
 *   ],
 *   sort: {
 *     sortBy: "UpdatedAt",
 *     sortOrder: "Descending"
 *   }
 * };
 * const command = new ListRelationshipsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/program-management-account/pma-u8ic702rtzng8/relationship/rs-l9o4fj3b5zb91",
 *       associatedAccountId: "987654321012",
 *       associationType: "DOWNSTREAM_SELLER",
 *       createdAt: "2024-04-29T16:18:16Z",
 *       displayName: "TestDisplayName",
 *       id: "rs-l9o4fj3b5zb91",
 *       programManagementAccountId: "pma-u8ic702rtzng8",
 *       revision: "3",
 *       updatedAt: "2024-05-02T16:18:16Z"
 *     }
 *   ],
 *   nextToken: "nextToken"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListRelationshipsCommand extends $Command
  .classBuilder<
    ListRelationshipsCommandInput,
    ListRelationshipsCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "ListRelationships", {})
  .n("PartnerCentralChannelClient", "ListRelationshipsCommand")
  .sc(ListRelationships)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRelationshipsRequest;
      output: ListRelationshipsResponse;
    };
    sdk: {
      input: ListRelationshipsCommandInput;
      output: ListRelationshipsCommandOutput;
    };
  };
}
