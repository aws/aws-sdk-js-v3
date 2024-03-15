// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConferenceProviderRequest, DeleteConferenceProviderResponse } from "../models/models_0";
import { de_DeleteConferenceProviderCommand, se_DeleteConferenceProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteConferenceProviderCommand}.
 */
export interface DeleteConferenceProviderCommandInput extends DeleteConferenceProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConferenceProviderCommand}.
 */
export interface DeleteConferenceProviderCommandOutput extends DeleteConferenceProviderResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Deletes a conference provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteConferenceProviderCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteConferenceProviderCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteConferenceProviderRequest
 *   ConferenceProviderArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteConferenceProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConferenceProviderCommandInput - {@link DeleteConferenceProviderCommandInput}
 * @returns {@link DeleteConferenceProviderCommandOutput}
 * @see {@link DeleteConferenceProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteConferenceProviderCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class DeleteConferenceProviderCommand extends $Command
  .classBuilder<
    DeleteConferenceProviderCommandInput,
    DeleteConferenceProviderCommandOutput,
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
  .s("AlexaForBusiness", "DeleteConferenceProvider", {})
  .n("AlexaForBusinessClient", "DeleteConferenceProviderCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConferenceProviderCommand)
  .de(de_DeleteConferenceProviderCommand)
  .build() {}
