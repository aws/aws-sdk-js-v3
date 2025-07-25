// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetLinkedWhatsAppBusinessAccountPhoneNumberInput,
  GetLinkedWhatsAppBusinessAccountPhoneNumberOutput,
} from "../models/models_0";
import {
  de_GetLinkedWhatsAppBusinessAccountPhoneNumberCommand,
  se_GetLinkedWhatsAppBusinessAccountPhoneNumberCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SocialMessagingClientResolvedConfig } from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommand}.
 */
export interface GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput
  extends GetLinkedWhatsAppBusinessAccountPhoneNumberInput {}
/**
 * @public
 *
 * The output of {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommand}.
 */
export interface GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput
  extends GetLinkedWhatsAppBusinessAccountPhoneNumberOutput,
    __MetadataBearer {}

/**
 * <p>Use your WhatsApp phone number id to get the WABA account id and phone number
 *          details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, GetLinkedWhatsAppBusinessAccountPhoneNumberCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, GetLinkedWhatsAppBusinessAccountPhoneNumberCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * const client = new SocialMessagingClient(config);
 * const input = { // GetLinkedWhatsAppBusinessAccountPhoneNumberInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetLinkedWhatsAppBusinessAccountPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // GetLinkedWhatsAppBusinessAccountPhoneNumberOutput
 * //   phoneNumber: { // WhatsAppPhoneNumberDetail
 * //     arn: "STRING_VALUE", // required
 * //     phoneNumber: "STRING_VALUE", // required
 * //     phoneNumberId: "STRING_VALUE", // required
 * //     metaPhoneNumberId: "STRING_VALUE", // required
 * //     displayPhoneNumberName: "STRING_VALUE", // required
 * //     displayPhoneNumber: "STRING_VALUE", // required
 * //     qualityRating: "STRING_VALUE", // required
 * //     dataLocalizationRegion: "STRING_VALUE",
 * //   },
 * //   linkedWhatsAppBusinessAccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput - {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput}
 * @returns {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput}
 * @see {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *  <p>Thrown when performing an action because a dependency would be broken.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the action are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value. </p>
 *
 * @throws {@link SocialMessagingServiceException}
 * <p>Base exception class for all service exceptions from SocialMessaging service.</p>
 *
 *
 * @public
 */
export class GetLinkedWhatsAppBusinessAccountPhoneNumberCommand extends $Command
  .classBuilder<
    GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput,
    GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SocialMessaging", "GetLinkedWhatsAppBusinessAccountPhoneNumber", {})
  .n("SocialMessagingClient", "GetLinkedWhatsAppBusinessAccountPhoneNumberCommand")
  .f(void 0, void 0)
  .ser(se_GetLinkedWhatsAppBusinessAccountPhoneNumberCommand)
  .de(de_GetLinkedWhatsAppBusinessAccountPhoneNumberCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLinkedWhatsAppBusinessAccountPhoneNumberInput;
      output: GetLinkedWhatsAppBusinessAccountPhoneNumberOutput;
    };
    sdk: {
      input: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandInput;
      output: GetLinkedWhatsAppBusinessAccountPhoneNumberCommandOutput;
    };
  };
}
