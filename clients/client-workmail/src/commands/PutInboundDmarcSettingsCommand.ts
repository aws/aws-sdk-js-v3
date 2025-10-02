// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutInboundDmarcSettingsRequest, PutInboundDmarcSettingsResponse } from "../models/models_0";
import { de_PutInboundDmarcSettingsCommand, se_PutInboundDmarcSettingsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutInboundDmarcSettingsCommand}.
 */
export interface PutInboundDmarcSettingsCommandInput extends PutInboundDmarcSettingsRequest {}
/**
 * @public
 *
 * The output of {@link PutInboundDmarcSettingsCommand}.
 */
export interface PutInboundDmarcSettingsCommandOutput extends PutInboundDmarcSettingsResponse, __MetadataBearer {}

/**
 * <p>Enables or disables a DMARC policy for a given organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutInboundDmarcSettingsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutInboundDmarcSettingsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // PutInboundDmarcSettingsRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Enforced: true || false, // required
 * };
 * const command = new PutInboundDmarcSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutInboundDmarcSettingsCommandInput - {@link PutInboundDmarcSettingsCommandInput}
 * @returns {@link PutInboundDmarcSettingsCommandOutput}
 * @see {@link PutInboundDmarcSettingsCommandInput} for command's `input` shape.
 * @see {@link PutInboundDmarcSettingsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
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
export class PutInboundDmarcSettingsCommand extends $Command
  .classBuilder<
    PutInboundDmarcSettingsCommandInput,
    PutInboundDmarcSettingsCommandOutput,
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
  .s("WorkMailService", "PutInboundDmarcSettings", {})
  .n("WorkMailClient", "PutInboundDmarcSettingsCommand")
  .f(void 0, void 0)
  .ser(se_PutInboundDmarcSettingsCommand)
  .de(de_PutInboundDmarcSettingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutInboundDmarcSettingsRequest;
      output: {};
    };
    sdk: {
      input: PutInboundDmarcSettingsCommandInput;
      output: PutInboundDmarcSettingsCommandOutput;
    };
  };
}
