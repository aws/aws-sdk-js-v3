// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAddressBookRequest, GetAddressBookResponse } from "../models/models_0";
import { de_GetAddressBookCommand, se_GetAddressBookCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAddressBookCommand}.
 */
export interface GetAddressBookCommandInput extends GetAddressBookRequest {}
/**
 * @public
 *
 * The output of {@link GetAddressBookCommand}.
 */
export interface GetAddressBookCommandOutput extends GetAddressBookResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets address the book details by the address book ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetAddressBookCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetAddressBookCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetAddressBookRequest
 *   AddressBookArn: "STRING_VALUE", // required
 * };
 * const command = new GetAddressBookCommand(input);
 * const response = await client.send(command);
 * // { // GetAddressBookResponse
 * //   AddressBook: { // AddressBook
 * //     AddressBookArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAddressBookCommandInput - {@link GetAddressBookCommandInput}
 * @returns {@link GetAddressBookCommandOutput}
 * @see {@link GetAddressBookCommandInput} for command's `input` shape.
 * @see {@link GetAddressBookCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetAddressBookCommand extends $Command
  .classBuilder<
    GetAddressBookCommandInput,
    GetAddressBookCommandOutput,
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
  .s("AlexaForBusiness", "GetAddressBook", {})
  .n("AlexaForBusinessClient", "GetAddressBookCommand")
  .f(void 0, void 0)
  .ser(se_GetAddressBookCommand)
  .de(de_GetAddressBookCommand)
  .build() {}
