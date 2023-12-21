// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetContactRequest, GetContactResponse, GetContactResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetContactCommand, se_GetContactCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetContactCommand}.
 */
export interface GetContactCommandInput extends GetContactRequest {}
/**
 * @public
 *
 * The output of {@link GetContactCommand}.
 */
export interface GetContactCommandOutput extends GetContactResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets the contact details by the contact ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetContactCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetContactCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetContactRequest
 *   ContactArn: "STRING_VALUE", // required
 * };
 * const command = new GetContactCommand(input);
 * const response = await client.send(command);
 * // { // GetContactResponse
 * //   Contact: { // Contact
 * //     ContactArn: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     FirstName: "STRING_VALUE",
 * //     LastName: "STRING_VALUE",
 * //     PhoneNumber: "STRING_VALUE",
 * //     PhoneNumbers: [ // PhoneNumberList
 * //       { // PhoneNumber
 * //         Number: "STRING_VALUE", // required
 * //         Type: "MOBILE" || "WORK" || "HOME", // required
 * //       },
 * //     ],
 * //     SipAddresses: [ // SipAddressList
 * //       { // SipAddress
 * //         Uri: "STRING_VALUE", // required
 * //         Type: "WORK", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetContactCommandInput - {@link GetContactCommandInput}
 * @returns {@link GetContactCommandOutput}
 * @see {@link GetContactCommandInput} for command's `input` shape.
 * @see {@link GetContactCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetContactCommand extends $Command
  .classBuilder<
    GetContactCommandInput,
    GetContactCommandOutput,
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
  .s("AlexaForBusiness", "GetContact", {})
  .n("AlexaForBusinessClient", "GetContactCommand")
  .f(void 0, GetContactResponseFilterSensitiveLog)
  .ser(se_GetContactCommand)
  .de(de_GetContactCommand)
  .build() {}
