// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateProgramManagementAccountRequest, CreateProgramManagementAccountResponse } from "../models/models_0";
import {
  PartnerCentralChannelClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralChannelClient";
import { CreateProgramManagementAccount } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProgramManagementAccountCommand}.
 */
export interface CreateProgramManagementAccountCommandInput extends CreateProgramManagementAccountRequest {}
/**
 * @public
 *
 * The output of {@link CreateProgramManagementAccountCommand}.
 */
export interface CreateProgramManagementAccountCommandOutput
  extends CreateProgramManagementAccountResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new program management account for managing partner relationships.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralChannelClient, CreateProgramManagementAccountCommand } from "@aws-sdk/client-partnercentral-channel"; // ES Modules import
 * // const { PartnerCentralChannelClient, CreateProgramManagementAccountCommand } = require("@aws-sdk/client-partnercentral-channel"); // CommonJS import
 * // import type { PartnerCentralChannelClientConfig } from "@aws-sdk/client-partnercentral-channel";
 * const config = {}; // type is PartnerCentralChannelClientConfig
 * const client = new PartnerCentralChannelClient(config);
 * const input = { // CreateProgramManagementAccountRequest
 *   catalog: "STRING_VALUE", // required
 *   program: "SOLUTION_PROVIDER" || "DISTRIBUTION" || "DISTRIBUTION_SELLER", // required
 *   displayName: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateProgramManagementAccountCommand(input);
 * const response = await client.send(command);
 * // { // CreateProgramManagementAccountResponse
 * //   programManagementAccountDetail: { // CreateProgramManagementAccountDetail
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateProgramManagementAccountCommandInput - {@link CreateProgramManagementAccountCommandInput}
 * @returns {@link CreateProgramManagementAccountCommandOutput}
 * @see {@link CreateProgramManagementAccountCommandInput} for command's `input` shape.
 * @see {@link CreateProgramManagementAccountCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would exceed a service quota limit.</p>
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
 * @example Example for CreateProgramManagementAccount
 * ```javascript
 * //
 * const input = {
 *   accountId: "111122223333",
 *   catalog: "AWS",
 *   clientToken: "clientToken",
 *   displayName: "TestDisplayName",
 *   program: "SOLUTION_PROVIDER"
 * };
 * const command = new CreateProgramManagementAccountCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   programManagementAccountDetail: {
 *     arn: "arn:aws:partnercentral:us-east-1:123456789012:catalog/AWS/program-management-account/pma-u8ic702rtzng8",
 *     id: "pma-u8ic702rtzng8"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateProgramManagementAccountCommand extends $Command
  .classBuilder<
    CreateProgramManagementAccountCommandInput,
    CreateProgramManagementAccountCommandOutput,
    PartnerCentralChannelClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralChannelClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralChannel", "CreateProgramManagementAccount", {})
  .n("PartnerCentralChannelClient", "CreateProgramManagementAccountCommand")
  .sc(CreateProgramManagementAccount)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProgramManagementAccountRequest;
      output: CreateProgramManagementAccountResponse;
    };
    sdk: {
      input: CreateProgramManagementAccountCommandInput;
      output: CreateProgramManagementAccountCommandOutput;
    };
  };
}
