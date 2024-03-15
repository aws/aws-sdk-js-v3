// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateContactFromAddressBookRequest,
  DisassociateContactFromAddressBookResponse,
} from "../models/models_0";
import {
  de_DisassociateContactFromAddressBookCommand,
  se_DisassociateContactFromAddressBookCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisassociateContactFromAddressBookCommand}.
 */
export interface DisassociateContactFromAddressBookCommandInput extends DisassociateContactFromAddressBookRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateContactFromAddressBookCommand}.
 */
export interface DisassociateContactFromAddressBookCommandOutput
  extends DisassociateContactFromAddressBookResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates a contact from a given address book.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DisassociateContactFromAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DisassociateContactFromAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DisassociateContactFromAddressBookRequest
 *   ContactArn: "STRING_VALUE", // required
 *   AddressBookArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateContactFromAddressBookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateContactFromAddressBookCommandInput - {@link DisassociateContactFromAddressBookCommandInput}
 * @returns {@link DisassociateContactFromAddressBookCommandOutput}
 * @see {@link DisassociateContactFromAddressBookCommandInput} for command's `input` shape.
 * @see {@link DisassociateContactFromAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class DisassociateContactFromAddressBookCommand extends $Command
  .classBuilder<
    DisassociateContactFromAddressBookCommandInput,
    DisassociateContactFromAddressBookCommandOutput,
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
  .s("AlexaForBusiness", "DisassociateContactFromAddressBook", {})
  .n("AlexaForBusinessClient", "DisassociateContactFromAddressBookCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateContactFromAddressBookCommand)
  .de(de_DisassociateContactFromAddressBookCommand)
  .build() {}
