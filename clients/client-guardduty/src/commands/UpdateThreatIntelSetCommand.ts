// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateThreatIntelSetRequest, UpdateThreatIntelSetResponse } from "../models/models_1";
import { de_UpdateThreatIntelSetCommand, se_UpdateThreatIntelSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThreatIntelSetCommand}.
 */
export interface UpdateThreatIntelSetCommandInput extends UpdateThreatIntelSetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThreatIntelSetCommand}.
 */
export interface UpdateThreatIntelSetCommandOutput extends UpdateThreatIntelSetResponse, __MetadataBearer {}

/**
 * <p>Updates the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateThreatIntelSetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   ThreatIntelSetId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Location: "STRING_VALUE",
 *   Activate: true || false,
 * };
 * const command = new UpdateThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateThreatIntelSetCommandInput - {@link UpdateThreatIntelSetCommandInput}
 * @returns {@link UpdateThreatIntelSetCommandOutput}
 * @see {@link UpdateThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link UpdateThreatIntelSetCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 * @public
 */
export class UpdateThreatIntelSetCommand extends $Command
  .classBuilder<
    UpdateThreatIntelSetCommandInput,
    UpdateThreatIntelSetCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "UpdateThreatIntelSet", {})
  .n("GuardDutyClient", "UpdateThreatIntelSetCommand")
  .f(void 0, void 0)
  .ser(se_UpdateThreatIntelSetCommand)
  .de(de_UpdateThreatIntelSetCommand)
  .build() {}
