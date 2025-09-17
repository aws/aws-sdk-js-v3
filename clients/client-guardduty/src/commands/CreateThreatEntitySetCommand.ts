// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateThreatEntitySetRequest, CreateThreatEntitySetResponse } from "../models/models_0";
import { de_CreateThreatEntitySetCommand, se_CreateThreatEntitySetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateThreatEntitySetCommand}.
 */
export interface CreateThreatEntitySetCommandInput extends CreateThreatEntitySetRequest {}
/**
 * @public
 *
 * The output of {@link CreateThreatEntitySetCommand}.
 */
export interface CreateThreatEntitySetCommandOutput extends CreateThreatEntitySetResponse, __MetadataBearer {}

/**
 * <p>Creates a new threat entity set. In a threat entity set, you can provide known malicious
 *         IP addresses and domains for your Amazon Web Services environment.
 *         GuardDuty generates findings based on the entries in the threat entity sets.
 *         Only users of the administrator account can manage entity sets, which automatically apply
 *         to member accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateThreatEntitySetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateThreatEntitySetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // CreateThreatEntitySetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Format: "TXT" || "STIX" || "OTX_CSV" || "ALIEN_VAULT" || "PROOF_POINT" || "FIRE_EYE", // required
 *   Location: "STRING_VALUE", // required
 *   ExpectedBucketOwner: "STRING_VALUE",
 *   Activate: true || false, // required
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateThreatEntitySetCommand(input);
 * const response = await client.send(command);
 * // { // CreateThreatEntitySetResponse
 * //   ThreatEntitySetId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateThreatEntitySetCommandInput - {@link CreateThreatEntitySetCommandInput}
 * @returns {@link CreateThreatEntitySetCommandOutput}
 * @see {@link CreateThreatEntitySetCommandInput} for command's `input` shape.
 * @see {@link CreateThreatEntitySetCommandOutput} for command's `response` shape.
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
export class CreateThreatEntitySetCommand extends $Command
  .classBuilder<
    CreateThreatEntitySetCommandInput,
    CreateThreatEntitySetCommandOutput,
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
  .s("GuardDutyAPIService", "CreateThreatEntitySet", {})
  .n("GuardDutyClient", "CreateThreatEntitySetCommand")
  .f(void 0, void 0)
  .ser(se_CreateThreatEntitySetCommand)
  .de(de_CreateThreatEntitySetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateThreatEntitySetRequest;
      output: CreateThreatEntitySetResponse;
    };
    sdk: {
      input: CreateThreatEntitySetCommandInput;
      output: CreateThreatEntitySetCommandOutput;
    };
  };
}
