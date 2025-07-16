// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetIPSetRequest, GetIPSetResponse } from "../models/models_1";
import { de_GetIPSetCommand, se_GetIPSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIPSetCommand}.
 */
export interface GetIPSetCommandInput extends GetIPSetRequest {}
/**
 * @public
 *
 * The output of {@link GetIPSetCommand}.
 */
export interface GetIPSetCommandOutput extends GetIPSetResponse, __MetadataBearer {}

/**
 * <p>Retrieves the IPSet specified by the <code>ipSetId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetIPSetCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetIPSetCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetIPSetRequest
 *   DetectorId: "STRING_VALUE", // required
 *   IpSetId: "STRING_VALUE", // required
 * };
 * const command = new GetIPSetCommand(input);
 * const response = await client.send(command);
 * // { // GetIPSetResponse
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
 * @param GetIPSetCommandInput - {@link GetIPSetCommandInput}
 * @returns {@link GetIPSetCommandOutput}
 * @see {@link GetIPSetCommandInput} for command's `input` shape.
 * @see {@link GetIPSetCommandOutput} for command's `response` shape.
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
export class GetIPSetCommand extends $Command
  .classBuilder<
    GetIPSetCommandInput,
    GetIPSetCommandOutput,
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
  .s("GuardDutyAPIService", "GetIPSet", {})
  .n("GuardDutyClient", "GetIPSetCommand")
  .f(void 0, void 0)
  .ser(se_GetIPSetCommand)
  .de(de_GetIPSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIPSetRequest;
      output: GetIPSetResponse;
    };
    sdk: {
      input: GetIPSetCommandInput;
      output: GetIPSetCommandOutput;
    };
  };
}
