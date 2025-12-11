// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { DeleteIPSetRequest, DeleteIPSetResponse } from "../models/models_0";
import { DeleteIPSet } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIPSetCommand}.
 */
export interface DeleteIPSetCommandInput extends DeleteIPSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIPSetCommand}.
 */
export interface DeleteIPSetCommandOutput extends DeleteIPSetResponse, __MetadataBearer {}

/**
 * <p>Deletes the IPSet specified by the <code>ipSetId</code>. IPSets are called trusted IP
 *       lists in the console user interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteIPSetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   IpSetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteIPSetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIPSetCommandInput - {@link DeleteIPSetCommandInput}
 * @returns {@link DeleteIPSetCommandOutput}
 * @see {@link DeleteIPSetCommandInput} for command's `input` shape.
 * @see {@link DeleteIPSetCommandOutput} for command's `response` shape.
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
export class DeleteIPSetCommand extends $Command
  .classBuilder<
    DeleteIPSetCommandInput,
    DeleteIPSetCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "DeleteIPSet", {})
  .n("GuardDutyClient", "DeleteIPSetCommand")
  .sc(DeleteIPSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIPSetRequest;
      output: {};
    };
    sdk: {
      input: DeleteIPSetCommandInput;
      output: DeleteIPSetCommandOutput;
    };
  };
}
