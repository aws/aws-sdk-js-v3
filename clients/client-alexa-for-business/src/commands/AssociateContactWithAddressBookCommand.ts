// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateContactWithAddressBookRequest, AssociateContactWithAddressBookResponse } from "../models/models_0";
import {
  de_AssociateContactWithAddressBookCommand,
  se_AssociateContactWithAddressBookCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateContactWithAddressBookCommand}.
 */
export interface AssociateContactWithAddressBookCommandInput extends AssociateContactWithAddressBookRequest {}
/**
 * @public
 *
 * The output of {@link AssociateContactWithAddressBookCommand}.
 */
export interface AssociateContactWithAddressBookCommandOutput
  extends AssociateContactWithAddressBookResponse,
    __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Associates a contact with a given address book.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateContactWithAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateContactWithAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // AssociateContactWithAddressBookRequest
 *   ContactArn: "STRING_VALUE", // required
 *   AddressBookArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateContactWithAddressBookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateContactWithAddressBookCommandInput - {@link AssociateContactWithAddressBookCommandInput}
 * @returns {@link AssociateContactWithAddressBookCommandOutput}
 * @see {@link AssociateContactWithAddressBookCommandInput} for command's `input` shape.
 * @see {@link AssociateContactWithAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class AssociateContactWithAddressBookCommand extends $Command
  .classBuilder<
    AssociateContactWithAddressBookCommandInput,
    AssociateContactWithAddressBookCommandOutput,
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
  .s("AlexaForBusiness", "AssociateContactWithAddressBook", {})
  .n("AlexaForBusinessClient", "AssociateContactWithAddressBookCommand")
  .f(void 0, void 0)
  .ser(se_AssociateContactWithAddressBookCommand)
  .de(de_AssociateContactWithAddressBookCommand)
  .build() {}
