// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeleteThreatIntelSetRequest, DeleteThreatIntelSetResponse } from "../models/models_0";
import { DeleteThreatIntelSet } from "../schemas/schemas_28_DeleteThreatIntelSet";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteThreatIntelSetCommand}.
 */
export interface DeleteThreatIntelSetCommandInput extends DeleteThreatIntelSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteThreatIntelSetCommand}.
 */
export interface DeleteThreatIntelSetCommandOutput extends DeleteThreatIntelSetResponse, __MetadataBearer {}

/**
 * <p>Deletes the ThreatIntelSet specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteThreatIntelSetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   ThreatIntelSetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteThreatIntelSetCommandInput - {@link DeleteThreatIntelSetCommandInput}
 * @returns {@link DeleteThreatIntelSetCommandOutput}
 * @see {@link DeleteThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link DeleteThreatIntelSetCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DeleteThreatIntelSetCommand extends $Command
  .classBuilder<
    DeleteThreatIntelSetCommandInput,
    DeleteThreatIntelSetCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "DeleteThreatIntelSet", {})
  .n("GuardDutyClient", "DeleteThreatIntelSetCommand")
  .sc(DeleteThreatIntelSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteThreatIntelSetRequest;
      output: {};
    };
    sdk: {
      input: DeleteThreatIntelSetCommandInput;
      output: DeleteThreatIntelSetCommandOutput;
    };
  };
}
