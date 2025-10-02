// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateTrustedEntitySetRequest, CreateTrustedEntitySetResponse } from "../models/models_0";
import { de_CreateTrustedEntitySetCommand, se_CreateTrustedEntitySetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrustedEntitySetCommand}.
 */
export interface CreateTrustedEntitySetCommandInput extends CreateTrustedEntitySetRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrustedEntitySetCommand}.
 */
export interface CreateTrustedEntitySetCommandOutput extends CreateTrustedEntitySetResponse, __MetadataBearer {}

/**
 * <p>Creates a new trusted entity set. In the trusted entity set, you can provide IP addresses
 *       and domains that you believe are secure for communication in your Amazon Web Services environment. GuardDuty
 *       will not generate findings for the entries that are specified in a trusted entity set. At any
 *       given time, you can have only one trusted entity set. </p>
 *          <p>Only users of the administrator account can manage the entity sets, which automatically
 *      apply to member accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateTrustedEntitySetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateTrustedEntitySetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // CreateTrustedEntitySetRequest
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
 * const command = new CreateTrustedEntitySetCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrustedEntitySetResponse
 * //   TrustedEntitySetId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTrustedEntitySetCommandInput - {@link CreateTrustedEntitySetCommandInput}
 * @returns {@link CreateTrustedEntitySetCommandOutput}
 * @see {@link CreateTrustedEntitySetCommandInput} for command's `input` shape.
 * @see {@link CreateTrustedEntitySetCommandOutput} for command's `response` shape.
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
export class CreateTrustedEntitySetCommand extends $Command
  .classBuilder<
    CreateTrustedEntitySetCommandInput,
    CreateTrustedEntitySetCommandOutput,
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
  .s("GuardDutyAPIService", "CreateTrustedEntitySet", {})
  .n("GuardDutyClient", "CreateTrustedEntitySetCommand")
  .f(void 0, void 0)
  .ser(se_CreateTrustedEntitySetCommand)
  .de(de_CreateTrustedEntitySetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrustedEntitySetRequest;
      output: CreateTrustedEntitySetResponse;
    };
    sdk: {
      input: CreateTrustedEntitySetCommandInput;
      output: CreateTrustedEntitySetCommandOutput;
    };
  };
}
