// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateThreatIntelSetRequest, CreateThreatIntelSetResponse } from "../models/models_0";
import { de_CreateThreatIntelSetCommand, se_CreateThreatIntelSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateThreatIntelSetCommand}.
 */
export interface CreateThreatIntelSetCommandInput extends CreateThreatIntelSetRequest {}
/**
 * @public
 *
 * The output of {@link CreateThreatIntelSetCommand}.
 */
export interface CreateThreatIntelSetCommandOutput extends CreateThreatIntelSetResponse, __MetadataBearer {}

/**
 * <p>Creates a new ThreatIntelSet. ThreatIntelSets consist of known malicious IP addresses.
 *       GuardDuty generates findings based on ThreatIntelSets. Only users of the administrator
 *       account can use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateThreatIntelSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateThreatIntelSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GuardDutyClient(config);
 * const input = { // CreateThreatIntelSetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Format: "TXT" || "STIX" || "OTX_CSV" || "ALIEN_VAULT" || "PROOF_POINT" || "FIRE_EYE", // required
 *   Location: "STRING_VALUE", // required
 *   Activate: true || false, // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateThreatIntelSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateThreatIntelSetResponse
 * //   ThreatIntelSetId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateThreatIntelSetCommandInput - {@link CreateThreatIntelSetCommandInput}
 * @returns {@link CreateThreatIntelSetCommandOutput}
 * @see {@link CreateThreatIntelSetCommandInput} for command's `input` shape.
 * @see {@link CreateThreatIntelSetCommandOutput} for command's `response` shape.
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
export class CreateThreatIntelSetCommand extends $Command
  .classBuilder<
    CreateThreatIntelSetCommandInput,
    CreateThreatIntelSetCommandOutput,
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
  .s("GuardDutyAPIService", "CreateThreatIntelSet", {})
  .n("GuardDutyClient", "CreateThreatIntelSetCommand")
  .f(void 0, void 0)
  .ser(se_CreateThreatIntelSetCommand)
  .de(de_CreateThreatIntelSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThreatIntelSetRequest;
      output: CreateThreatIntelSetResponse;
    };
    sdk: {
      input: CreateThreatIntelSetCommandInput;
      output: CreateThreatIntelSetCommandOutput;
    };
  };
}
