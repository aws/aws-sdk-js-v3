// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutConferencePreferenceRequest, PutConferencePreferenceResponse } from "../models/models_0";
import { de_PutConferencePreferenceCommand, se_PutConferencePreferenceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutConferencePreferenceCommand}.
 */
export interface PutConferencePreferenceCommandInput extends PutConferencePreferenceRequest {}
/**
 * @public
 *
 * The output of {@link PutConferencePreferenceCommand}.
 */
export interface PutConferencePreferenceCommandOutput extends PutConferencePreferenceResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Sets the conference preferences on a specific conference provider at the account
 *          level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, PutConferencePreferenceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, PutConferencePreferenceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // PutConferencePreferenceRequest
 *   ConferencePreference: { // ConferencePreference
 *     DefaultConferenceProviderArn: "STRING_VALUE",
 *   },
 * };
 * const command = new PutConferencePreferenceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConferencePreferenceCommandInput - {@link PutConferencePreferenceCommandInput}
 * @returns {@link PutConferencePreferenceCommandOutput}
 * @see {@link PutConferencePreferenceCommandInput} for command's `input` shape.
 * @see {@link PutConferencePreferenceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class PutConferencePreferenceCommand extends $Command
  .classBuilder<
    PutConferencePreferenceCommandInput,
    PutConferencePreferenceCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "PutConferencePreference", {})
  .n("AlexaForBusinessClient", "PutConferencePreferenceCommand")
  .f(void 0, void 0)
  .ser(se_PutConferencePreferenceCommand)
  .de(de_PutConferencePreferenceCommand)
  .build() {}
