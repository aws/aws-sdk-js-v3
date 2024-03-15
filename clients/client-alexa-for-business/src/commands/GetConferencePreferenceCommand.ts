// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConferencePreferenceRequest, GetConferencePreferenceResponse } from "../models/models_0";
import { de_GetConferencePreferenceCommand, se_GetConferencePreferenceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetConferencePreferenceCommand}.
 */
export interface GetConferencePreferenceCommandInput extends GetConferencePreferenceRequest {}
/**
 * @public
 *
 * The output of {@link GetConferencePreferenceCommand}.
 */
export interface GetConferencePreferenceCommandOutput extends GetConferencePreferenceResponse, __MetadataBearer {}

/**
 * <p>Retrieves the existing conference preferences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetConferencePreferenceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetConferencePreferenceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = {};
 * const command = new GetConferencePreferenceCommand(input);
 * const response = await client.send(command);
 * // { // GetConferencePreferenceResponse
 * //   Preference: { // ConferencePreference
 * //     DefaultConferenceProviderArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetConferencePreferenceCommandInput - {@link GetConferencePreferenceCommandInput}
 * @returns {@link GetConferencePreferenceCommandOutput}
 * @see {@link GetConferencePreferenceCommandInput} for command's `input` shape.
 * @see {@link GetConferencePreferenceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class GetConferencePreferenceCommand extends $Command
  .classBuilder<
    GetConferencePreferenceCommandInput,
    GetConferencePreferenceCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "GetConferencePreference", {})
  .n("AlexaForBusinessClient", "GetConferencePreferenceCommand")
  .f(void 0, void 0)
  .ser(se_GetConferencePreferenceCommand)
  .de(de_GetConferencePreferenceCommand)
  .build() {}
