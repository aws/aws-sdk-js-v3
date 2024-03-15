// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAddressBookRequest, DeleteAddressBookResponse } from "../models/models_0";
import { de_DeleteAddressBookCommand, se_DeleteAddressBookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAddressBookCommand}.
 */
export interface DeleteAddressBookCommandInput extends DeleteAddressBookRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAddressBookCommand}.
 */
export interface DeleteAddressBookCommandOutput extends DeleteAddressBookResponse, __MetadataBearer {}

/**
 * <p>Deletes an address book by the address book ARN.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, DeleteAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, DeleteAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // DeleteAddressBookRequest
 *   AddressBookArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAddressBookCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAddressBookCommandInput - {@link DeleteAddressBookCommandInput}
 * @returns {@link DeleteAddressBookCommandOutput}
 * @see {@link DeleteAddressBookCommandInput} for command's `input` shape.
 * @see {@link DeleteAddressBookCommandOutput} for command's `response` shape.
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
 */
export class DeleteAddressBookCommand extends $Command
  .classBuilder<
    DeleteAddressBookCommandInput,
    DeleteAddressBookCommandOutput,
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
  .s("AlexaForBusiness", "DeleteAddressBook", {})
  .n("AlexaForBusinessClient", "DeleteAddressBookCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAddressBookCommand)
  .de(de_DeleteAddressBookCommand)
  .build() {}
