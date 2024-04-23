// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateContactRequest,
  UpdateContactRequestFilterSensitiveLog,
  UpdateContactResponse,
} from "../models/models_0";
import { de_UpdateContactCommand, se_UpdateContactCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateContactCommand}.
 */
export interface UpdateContactCommandInput extends UpdateContactRequest {}
/**
 * @public
 *
 * The output of {@link UpdateContactCommand}.
 */
export interface UpdateContactCommandOutput extends UpdateContactResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Updates the contact details by the contact ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateContactCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateContactCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateContactRequest
 *   ContactArn: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   FirstName: "STRING_VALUE",
 *   LastName: "STRING_VALUE",
 *   PhoneNumber: "STRING_VALUE",
 *   PhoneNumbers: [ // PhoneNumberList
 *     { // PhoneNumber
 *       Number: "STRING_VALUE", // required
 *       Type: "MOBILE" || "WORK" || "HOME", // required
 *     },
 *   ],
 *   SipAddresses: [ // SipAddressList
 *     { // SipAddress
 *       Uri: "STRING_VALUE", // required
 *       Type: "WORK", // required
 *     },
 *   ],
 * };
 * const command = new UpdateContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateContactCommandInput - {@link UpdateContactCommandInput}
 * @returns {@link UpdateContactCommandOutput}
 * @see {@link UpdateContactCommandInput} for command's `input` shape.
 * @see {@link UpdateContactCommandOutput} for command's `response` shape.
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
 */
export class UpdateContactCommand extends $Command
  .classBuilder<
    UpdateContactCommandInput,
    UpdateContactCommandOutput,
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
  .s("AlexaForBusiness", "UpdateContact", {})
  .n("AlexaForBusinessClient", "UpdateContactCommand")
  .f(UpdateContactRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateContactCommand)
  .de(de_UpdateContactCommand)
  .build() {}
