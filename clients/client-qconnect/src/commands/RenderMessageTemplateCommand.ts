// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  RenderMessageTemplateRequest,
  RenderMessageTemplateRequestFilterSensitiveLog,
  RenderMessageTemplateResponse,
  RenderMessageTemplateResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_RenderMessageTemplateCommand, se_RenderMessageTemplateCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RenderMessageTemplateCommand}.
 */
export interface RenderMessageTemplateCommandInput extends RenderMessageTemplateRequest {}
/**
 * @public
 *
 * The output of {@link RenderMessageTemplateCommand}.
 */
export interface RenderMessageTemplateCommandOutput extends RenderMessageTemplateResponse, __MetadataBearer {}

/**
 * <p>Renders the Amazon Q in Connect message template based on the attribute values provided and generates the message content. For any variable present in the message template, if the attribute value is neither provided in the attribute request parameter nor the default attribute of the message template, the rendered message content will keep the variable placeholder as it is and return the attribute keys that are missing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, RenderMessageTemplateCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, RenderMessageTemplateCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // RenderMessageTemplateRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   attributes: { // MessageTemplateAttributes
 *     systemAttributes: { // SystemAttributes
 *       name: "STRING_VALUE",
 *       customerEndpoint: { // SystemEndpointAttributes
 *         address: "STRING_VALUE",
 *       },
 *       systemEndpoint: {
 *         address: "STRING_VALUE",
 *       },
 *     },
 *     agentAttributes: { // AgentAttributes
 *       firstName: "STRING_VALUE",
 *       lastName: "STRING_VALUE",
 *     },
 *     customerProfileAttributes: { // CustomerProfileAttributes
 *       profileId: "STRING_VALUE",
 *       profileARN: "STRING_VALUE",
 *       firstName: "STRING_VALUE",
 *       middleName: "STRING_VALUE",
 *       lastName: "STRING_VALUE",
 *       accountNumber: "STRING_VALUE",
 *       emailAddress: "STRING_VALUE",
 *       phoneNumber: "STRING_VALUE",
 *       additionalInformation: "STRING_VALUE",
 *       partyType: "STRING_VALUE",
 *       businessName: "STRING_VALUE",
 *       birthDate: "STRING_VALUE",
 *       gender: "STRING_VALUE",
 *       mobilePhoneNumber: "STRING_VALUE",
 *       homePhoneNumber: "STRING_VALUE",
 *       businessPhoneNumber: "STRING_VALUE",
 *       businessEmailAddress: "STRING_VALUE",
 *       address1: "STRING_VALUE",
 *       address2: "STRING_VALUE",
 *       address3: "STRING_VALUE",
 *       address4: "STRING_VALUE",
 *       city: "STRING_VALUE",
 *       county: "STRING_VALUE",
 *       country: "STRING_VALUE",
 *       postalCode: "STRING_VALUE",
 *       province: "STRING_VALUE",
 *       state: "STRING_VALUE",
 *       shippingAddress1: "STRING_VALUE",
 *       shippingAddress2: "STRING_VALUE",
 *       shippingAddress3: "STRING_VALUE",
 *       shippingAddress4: "STRING_VALUE",
 *       shippingCity: "STRING_VALUE",
 *       shippingCounty: "STRING_VALUE",
 *       shippingCountry: "STRING_VALUE",
 *       shippingPostalCode: "STRING_VALUE",
 *       shippingProvince: "STRING_VALUE",
 *       shippingState: "STRING_VALUE",
 *       mailingAddress1: "STRING_VALUE",
 *       mailingAddress2: "STRING_VALUE",
 *       mailingAddress3: "STRING_VALUE",
 *       mailingAddress4: "STRING_VALUE",
 *       mailingCity: "STRING_VALUE",
 *       mailingCounty: "STRING_VALUE",
 *       mailingCountry: "STRING_VALUE",
 *       mailingPostalCode: "STRING_VALUE",
 *       mailingProvince: "STRING_VALUE",
 *       mailingState: "STRING_VALUE",
 *       billingAddress1: "STRING_VALUE",
 *       billingAddress2: "STRING_VALUE",
 *       billingAddress3: "STRING_VALUE",
 *       billingAddress4: "STRING_VALUE",
 *       billingCity: "STRING_VALUE",
 *       billingCounty: "STRING_VALUE",
 *       billingCountry: "STRING_VALUE",
 *       billingPostalCode: "STRING_VALUE",
 *       billingProvince: "STRING_VALUE",
 *       billingState: "STRING_VALUE",
 *       custom: { // CustomAttributes
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     customAttributes: {
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new RenderMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // { // RenderMessageTemplateResponse
 * //   content: { // MessageTemplateContentProvider Union: only one key present
 * //     email: { // EmailMessageTemplateContent
 * //       subject: "STRING_VALUE",
 * //       body: { // EmailMessageTemplateContentBody
 * //         plainText: { // MessageTemplateBodyContentProvider Union: only one key present
 * //           content: "STRING_VALUE",
 * //         },
 * //         html: {//  Union: only one key present
 * //           content: "STRING_VALUE",
 * //         },
 * //       },
 * //       headers: [ // EmailHeaders
 * //         { // EmailHeader
 * //           name: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     sms: { // SMSMessageTemplateContent
 * //       body: { // SMSMessageTemplateContentBody
 * //         plainText: {//  Union: only one key present
 * //           content: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * //   attributesNotInterpolated: [ // MessageTemplateAttributeKeyList
 * //     "STRING_VALUE",
 * //   ],
 * //   attachments: [ // MessageTemplateAttachmentList
 * //     { // MessageTemplateAttachment
 * //       contentDisposition: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       uploadedTime: new Date("TIMESTAMP"), // required
 * //       url: "STRING_VALUE", // required
 * //       urlExpiry: new Date("TIMESTAMP"), // required
 * //       attachmentId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RenderMessageTemplateCommandInput - {@link RenderMessageTemplateCommandInput}
 * @returns {@link RenderMessageTemplateCommandOutput}
 * @see {@link RenderMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link RenderMessageTemplateCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class RenderMessageTemplateCommand extends $Command
  .classBuilder<
    RenderMessageTemplateCommandInput,
    RenderMessageTemplateCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "RenderMessageTemplate", {})
  .n("QConnectClient", "RenderMessageTemplateCommand")
  .f(RenderMessageTemplateRequestFilterSensitiveLog, RenderMessageTemplateResponseFilterSensitiveLog)
  .ser(se_RenderMessageTemplateCommand)
  .de(de_RenderMessageTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RenderMessageTemplateRequest;
      output: RenderMessageTemplateResponse;
    };
    sdk: {
      input: RenderMessageTemplateCommandInput;
      output: RenderMessageTemplateCommandOutput;
    };
  };
}
