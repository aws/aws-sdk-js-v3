// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRelationshipRequest, UpdateRelationshipResponse } from "../models/models_0";
import type {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { UpdateRelationship } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRelationshipCommand}.
 */
export interface UpdateRelationshipCommandInput extends UpdateRelationshipRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRelationshipCommand}.
 */
export interface UpdateRelationshipCommandOutput extends UpdateRelationshipResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of a partner relationship.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, UpdateRelationshipCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, UpdateRelationshipCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // UpdateRelationshipRequest
 *   catalog: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   programManagementAccountIdentifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 *   displayName: "STRING_VALUE",
 *   requestedSupportPlan: { // SupportPlan Union: only one key present
 *     resoldBusiness: { // ResoldBusiness
 *       coverage: "ENTIRE_ORGANIZATION" || "MANAGEMENT_ACCOUNT_ONLY", // required
 *     },
 *     resoldEnterprise: { // ResoldEnterprise
 *       coverage: "ENTIRE_ORGANIZATION" || "MANAGEMENT_ACCOUNT_ONLY", // required
 *       tamLocation: "STRING_VALUE", // required
 *       chargeAccountId: "STRING_VALUE",
 *     },
 *     partnerLedSupport: { // PartnerLedSupport
 *       coverage: "ENTIRE_ORGANIZATION" || "MANAGEMENT_ACCOUNT_ONLY", // required
 *       provider: "DISTRIBUTOR" || "DISTRIBUTION_SELLER",
 *       tamLocation: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateRelationshipCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRelationshipResponse
 * //   relationshipDetail: { // UpdateRelationshipDetail
 * //     arn: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     revision: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRelationshipCommandInput - {@link UpdateRelationshipCommandInput}
 * @returns {@link UpdateRelationshipCommandOutput}
 * @see {@link UpdateRelationshipCommandInput} for command's `input` shape.
 * @see {@link UpdateRelationshipCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralChannelClientResolvedConfig | config} for PartnerCentralChannelClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
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
 * @example Example for UpdateRelationship
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   displayName: "TestDisplayName",
 *   identifier: "rs-l9o4fj3b5zb91",
 *   programManagementAccountIdentifier: "pma-u8ic702rtzng8",
 *   revision: "3"
 * };
 * const command = new UpdateRelationshipCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   relationshipDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/program-management-account/pma-u8ic702rtzng8/relationship/rs-l9o4fj3b5zb91",
 *     displayName: "TestDisplayName",
 *     id: "rs-l9o4fj3b5zb91",
 *     revision: "4"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateRelationshipCommand extends $Command
  .classBuilder<
    UpdateRelationshipCommandInput,
    UpdateRelationshipCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "UpdateRelationship", {})
  .n("PartnerCentralChannelClient", "UpdateRelationshipCommand")
  .sc(UpdateRelationship)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRelationshipRequest;
      output: UpdateRelationshipResponse;
    };
    sdk: {
      input: UpdateRelationshipCommandInput;
      output: UpdateRelationshipCommandOutput;
    };
  };
}
