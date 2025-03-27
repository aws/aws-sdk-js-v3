// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutRetentionPolicyRequest,
  PutRetentionPolicyRequestFilterSensitiveLog,
  PutRetentionPolicyResponse,
} from "../models/models_0";
import { de_PutRetentionPolicyCommand, se_PutRetentionPolicyCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutRetentionPolicyCommand}.
 */
export interface PutRetentionPolicyCommandInput extends PutRetentionPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutRetentionPolicyCommand}.
 */
export interface PutRetentionPolicyCommandOutput extends PutRetentionPolicyResponse, __MetadataBearer {}

/**
 * <p>Puts a retention policy to the specified organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutRetentionPolicyCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutRetentionPolicyCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // PutRetentionPolicyRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   FolderConfigurations: [ // FolderConfigurations // required
 *     { // FolderConfiguration
 *       Name: "INBOX" || "DELETED_ITEMS" || "SENT_ITEMS" || "DRAFTS" || "JUNK_EMAIL", // required
 *       Action: "NONE" || "DELETE" || "PERMANENTLY_DELETE", // required
 *       Period: Number("int"),
 *     },
 *   ],
 * };
 * const command = new PutRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRetentionPolicyCommandInput - {@link PutRetentionPolicyCommandInput}
 * @returns {@link PutRetentionPolicyCommandOutput}
 * @see {@link PutRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the limit of the resource.</p>
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
export class PutRetentionPolicyCommand extends $Command
  .classBuilder<
    PutRetentionPolicyCommandInput,
    PutRetentionPolicyCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "PutRetentionPolicy", {})
  .n("WorkMailClient", "PutRetentionPolicyCommand")
  .f(PutRetentionPolicyRequestFilterSensitiveLog, void 0)
  .ser(se_PutRetentionPolicyCommand)
  .de(de_PutRetentionPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRetentionPolicyRequest;
      output: {};
    };
    sdk: {
      input: PutRetentionPolicyCommandInput;
      output: PutRetentionPolicyCommandOutput;
    };
  };
}
