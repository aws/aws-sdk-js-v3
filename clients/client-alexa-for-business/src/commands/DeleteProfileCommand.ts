// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteProfileRequest, DeleteProfileResponse } from "../models/models_0";
import { de_DeleteProfileCommand, se_DeleteProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteProfileCommand}.
 */
export interface DeleteProfileCommandInput extends DeleteProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProfileCommand}.
 */
export interface DeleteProfileCommandOutput extends DeleteProfileResponse, __MetadataBearer {}

/**
 * <p>Deletes a room profile by the profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteProfileRequest
 *   ProfileArn: "STRING_VALUE",
 * };
 * const command = new DeleteProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProfileCommandInput - {@link DeleteProfileCommandInput}
 * @returns {@link DeleteProfileCommandOutput}
 * @see {@link DeleteProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
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
export class DeleteProfileCommand extends $Command
  .classBuilder<
    DeleteProfileCommandInput,
    DeleteProfileCommandOutput,
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
  .s("AlexaForBusiness", "DeleteProfile", {})
  .n("AlexaForBusinessClient", "DeleteProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProfileCommand)
  .de(de_DeleteProfileCommand)
  .build() {}
