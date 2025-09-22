// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDefaultRetentionPolicyRequest, GetDefaultRetentionPolicyResponse } from "../models/models_0";
import { GetDefaultRetentionPolicy } from "../schemas/schemas_3_Policy";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDefaultRetentionPolicyCommand}.
 */
export interface GetDefaultRetentionPolicyCommandInput extends GetDefaultRetentionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetDefaultRetentionPolicyCommand}.
 */
export interface GetDefaultRetentionPolicyCommandOutput extends GetDefaultRetentionPolicyResponse, __MetadataBearer {}

/**
 * <p>Gets the default retention policy details for the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetDefaultRetentionPolicyCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetDefaultRetentionPolicyCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // GetDefaultRetentionPolicyRequest
 *   OrganizationId: "STRING_VALUE", // required
 * };
 * const command = new GetDefaultRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetDefaultRetentionPolicyResponse
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   FolderConfigurations: [ // FolderConfigurations
 * //     { // FolderConfiguration
 * //       Name: "INBOX" || "DELETED_ITEMS" || "SENT_ITEMS" || "DRAFTS" || "JUNK_EMAIL", // required
 * //       Action: "NONE" || "DELETE" || "PERMANENTLY_DELETE", // required
 * //       Period: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDefaultRetentionPolicyCommandInput - {@link GetDefaultRetentionPolicyCommandInput}
 * @returns {@link GetDefaultRetentionPolicyCommandOutput}
 * @see {@link GetDefaultRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link GetDefaultRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class GetDefaultRetentionPolicyCommand extends $Command
  .classBuilder<
    GetDefaultRetentionPolicyCommandInput,
    GetDefaultRetentionPolicyCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "GetDefaultRetentionPolicy", {})
  .n("WorkMailClient", "GetDefaultRetentionPolicyCommand")
  .sc(GetDefaultRetentionPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDefaultRetentionPolicyRequest;
      output: GetDefaultRetentionPolicyResponse;
    };
    sdk: {
      input: GetDefaultRetentionPolicyCommandInput;
      output: GetDefaultRetentionPolicyCommandOutput;
    };
  };
}
