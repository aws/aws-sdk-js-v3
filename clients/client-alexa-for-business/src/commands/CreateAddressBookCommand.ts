// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAddressBookRequest, CreateAddressBookResponse } from "../models/models_0";
import { de_CreateAddressBookCommand, se_CreateAddressBookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAddressBookCommand}.
 */
export interface CreateAddressBookCommandInput extends CreateAddressBookRequest {}
/**
 * @public
 *
 * The output of {@link CreateAddressBookCommand}.
 */
export interface CreateAddressBookCommandOutput extends CreateAddressBookResponse, __MetadataBearer {}

/**
 * <p>Creates an address book with the specified details.</p>
 *
 * @deprecated Alexa For Business is no longer supported
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, CreateAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, CreateAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // CreateAddressBookRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateAddressBookCommand(input);
 * const response = await client.send(command);
 * // { // CreateAddressBookResponse
 * //   AddressBookArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAddressBookCommandInput - {@link CreateAddressBookCommandInput}
 * @returns {@link CreateAddressBookCommandOutput}
 * @see {@link CreateAddressBookCommandInput} for command's `input` shape.
 * @see {@link CreateAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource being created already exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You are performing an action that would put you beyond your account's limits.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 */
export class CreateAddressBookCommand extends $Command
  .classBuilder<
    CreateAddressBookCommandInput,
    CreateAddressBookCommandOutput,
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
  .s("AlexaForBusiness", "CreateAddressBook", {})
  .n("AlexaForBusinessClient", "CreateAddressBookCommand")
  .f(void 0, void 0)
  .ser(se_CreateAddressBookCommand)
  .de(de_CreateAddressBookCommand)
  .build() {}
