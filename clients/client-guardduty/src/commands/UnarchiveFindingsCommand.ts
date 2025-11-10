// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UnarchiveFindingsRequest, UnarchiveFindingsResponse } from "../models/models_1";
import { UnarchiveFindings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UnarchiveFindingsCommand}.
 */
export interface UnarchiveFindingsCommandInput extends UnarchiveFindingsRequest {}
/**
 * @public
 *
 * The output of {@link UnarchiveFindingsCommand}.
 */
export interface UnarchiveFindingsCommandOutput extends UnarchiveFindingsResponse, __MetadataBearer {}

/**
 * <p>Unarchives GuardDuty findings specified by the <code>findingIds</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UnarchiveFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UnarchiveFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UnarchiveFindingsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FindingIds: [ // FindingIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UnarchiveFindingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnarchiveFindingsCommandInput - {@link UnarchiveFindingsCommandInput}
 * @returns {@link UnarchiveFindingsCommandOutput}
 * @see {@link UnarchiveFindingsCommandInput} for command's `input` shape.
 * @see {@link UnarchiveFindingsCommandOutput} for command's `response` shape.
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
export class UnarchiveFindingsCommand extends $Command
  .classBuilder<
    UnarchiveFindingsCommandInput,
    UnarchiveFindingsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "UnarchiveFindings", {})
  .n("GuardDutyClient", "UnarchiveFindingsCommand")
  .sc(UnarchiveFindings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnarchiveFindingsRequest;
      output: {};
    };
    sdk: {
      input: UnarchiveFindingsCommandInput;
      output: UnarchiveFindingsCommandOutput;
    };
  };
}
