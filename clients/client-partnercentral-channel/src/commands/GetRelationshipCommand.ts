// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetRelationshipRequest, GetRelationshipResponse } from "../models/models_0";
import type {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { GetRelationship } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRelationshipCommand}.
 */
export interface GetRelationshipCommandInput extends GetRelationshipRequest {}
/**
 * @public
 *
 * The output of {@link GetRelationshipCommand}.
 */
export interface GetRelationshipCommandOutput extends GetRelationshipResponse, __MetadataBearer {}

/**
 * <p>Retrieves details of a specific partner relationship.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, GetRelationshipCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, GetRelationshipCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // GetRelationshipRequest
 *   catalog: "STRING_VALUE", // required
 *   programManagementAccountIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetRelationshipCommand(input);
 * const response = await client.send(command);
 * // { // GetRelationshipResponse
 * //   relationshipDetail: { // RelationshipDetail
 * //     arn: "STRING_VALUE",
 * //     id: "STRING_VALUE",
 * //     revision: "STRING_VALUE",
 * //     catalog: "STRING_VALUE",
 * //     associationType: "DOWNSTREAM_SELLER" || "END_CUSTOMER" || "INTERNAL",
 * //     programManagementAccountId: "STRING_VALUE",
 * //     associatedAccountId: "STRING_VALUE",
 * //     displayName: "STRING_VALUE",
 * //     resaleAccountModel: "DISTRIBUTOR" || "END_CUSTOMER" || "SOLUTION_PROVIDER",
 * //     sector: "COMMERCIAL" || "GOVERNMENT" || "GOVERNMENT_EXCEPTION",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     startDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRelationshipCommandInput - {@link GetRelationshipCommandInput}
 * @returns {@link GetRelationshipCommandOutput}
 * @see {@link GetRelationshipCommandInput} for command's `input` shape.
 * @see {@link GetRelationshipCommandOutput} for command's `response` shape.
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
 * @example Example for GetRelationship
 * ```javascript
 * //
 * const input = {
 *   catalog: "AWS",
 *   identifier: "rs-l9o4fj3b5zb91",
 *   programManagementAccountIdentifier: "pma-u8ic702rtzng8"
 * };
 * const command = new GetRelationshipCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   relationshipDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/program-management-account/pma-u8ic702rtzng8/relationship/rs-l9o4fj3b5zb91",
 *     associatedAccountId: "987654321012",
 *     associationType: "DOWNSTREAM_SELLER",
 *     createdAt: "2024-04-29T16:18:16Z",
 *     displayName: "TestDisplayName",
 *     id: "rs-l9o4fj3b5zb91",
 *     programManagementAccountId: "pma-u8ic702rtzng8",
 *     resaleAccountModel: "END_CUSTOMER",
 *     revision: "3",
 *     sector: "COMMERCIAL",
 *     updatedAt: "2024-05-02T16:18:16Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRelationshipCommand extends $Command
  .classBuilder<
    GetRelationshipCommandInput,
    GetRelationshipCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "GetRelationship", {})
  .n("PartnerCentralChannelClient", "GetRelationshipCommand")
  .sc(GetRelationship)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRelationshipRequest;
      output: GetRelationshipResponse;
    };
    sdk: {
      input: GetRelationshipCommandInput;
      output: GetRelationshipCommandOutput;
    };
  };
}
