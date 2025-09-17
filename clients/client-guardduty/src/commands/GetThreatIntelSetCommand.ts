// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetThreatIntelSetRequest, GetThreatIntelSetResponse } from "../models/models_1";
import { de_GetThreatIntelSetCommand, se_GetThreatIntelSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetThreatIntelSetCommand}.
 */
export interface GetThreatIntelSetCommandInput extends GetThreatIntelSetRequest {}
/**
 * @public
 *
 * The output of {@link GetThreatIntelSetCommand}.
 */
export interface GetThreatIntelSetCommandOutput extends GetThreatIntelSetResponse, __MetadataBearer {}

/**
 * <p>Retrieves the ThreatIntelSet that is specified by the ThreatIntelSet ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // GetThreatIntelSetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   ThreatIntelSetId: "STRING_VALUE", // required
 * };
 * const command = new GetThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * // { // GetThreatIntelSetResponse
 * //   Name: "STRING_VALUE", // required
 * //   Format: "TXT" || "STIX" || "OTX_CSV" || "ALIEN_VAULT" || "PROOF_POINT" || "FIRE_EYE", // required
 * //   Location: "STRING_VALUE", // required
 * //   Status: "INACTIVE" || "ACTIVATING" || "ACTIVE" || "DEACTIVATING" || "ERROR" || "DELETE_PENDING" || "DELETED", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ExpectedBucketOwner: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetThreatIntelSetCommandInput - {@link GetThreatIntelSetCommandInput}
 * @returns {@link GetThreatIntelSetCommandOutput}
 * @see {@link GetThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link GetThreatIntelSetCommandOutput} for command's `response` shape.
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
export class GetThreatIntelSetCommand extends $Command
  .classBuilder<
    GetThreatIntelSetCommandInput,
    GetThreatIntelSetCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "GetThreatIntelSet", {})
  .n("GuardDutyClient", "GetThreatIntelSetCommand")
  .f(void 0, void 0)
  .ser(se_GetThreatIntelSetCommand)
  .de(de_GetThreatIntelSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetThreatIntelSetRequest;
      output: GetThreatIntelSetResponse;
    };
    sdk: {
      input: GetThreatIntelSetCommandInput;
      output: GetThreatIntelSetCommandOutput;
    };
  };
}
