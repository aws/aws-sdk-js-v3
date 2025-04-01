// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateMessageTemplateRequest,
  UpdateMessageTemplateRequestFilterSensitiveLog,
  UpdateMessageTemplateResponse,
  UpdateMessageTemplateResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_UpdateMessageTemplateCommand, se_UpdateMessageTemplateCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMessageTemplateCommand}.
 */
export interface UpdateMessageTemplateCommandInput extends UpdateMessageTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMessageTemplateCommand}.
 */
export interface UpdateMessageTemplateCommandOutput extends UpdateMessageTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates the Amazon Q in Connect message template. Partial update is supported. If any
 *       field is not supplied, it will remain unchanged for the message template that is referenced by
 *       the <code>$LATEST</code> qualifier. Any modification will only apply to the message template
 *       that is referenced by the <code>$LATEST</code> qualifier. The fields for all available
 *       versions will remain unchanged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateMessageTemplateCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateMessageTemplateCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // UpdateMessageTemplateRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   content: { // MessageTemplateContentProvider Union: only one key present
 *     email: { // EmailMessageTemplateContent
 *       subject: "STRING_VALUE",
 *       body: { // EmailMessageTemplateContentBody
 *         plainText: { // MessageTemplateBodyContentProvider Union: only one key present
 *           content: "STRING_VALUE",
 *         },
 *         html: {//  Union: only one key present
 *           content: "STRING_VALUE",
 *         },
 *       },
 *       headers: [ // EmailHeaders
 *         { // EmailHeader
 *           name: "STRING_VALUE",
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     sms: { // SMSMessageTemplateContent
 *       body: { // SMSMessageTemplateContentBody
 *         plainText: {//  Union: only one key present
 *           content: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   language: "STRING_VALUE",
 *   defaultAttributes: { // MessageTemplateAttributes
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
 * const command = new UpdateMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMessageTemplateResponse
 * //   messageTemplate: { // MessageTemplateData
 * //     messageTemplateArn: "STRING_VALUE", // required
 * //     messageTemplateId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     channelSubtype: "STRING_VALUE", // required
 * //     createdTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedTime: new Date("TIMESTAMP"), // required
 * //     lastModifiedBy: "STRING_VALUE", // required
 * //     content: { // MessageTemplateContentProvider Union: only one key present
 * //       email: { // EmailMessageTemplateContent
 * //         subject: "STRING_VALUE",
 * //         body: { // EmailMessageTemplateContentBody
 * //           plainText: { // MessageTemplateBodyContentProvider Union: only one key present
 * //             content: "STRING_VALUE",
 * //           },
 * //           html: {//  Union: only one key present
 * //             content: "STRING_VALUE",
 * //           },
 * //         },
 * //         headers: [ // EmailHeaders
 * //           { // EmailHeader
 * //             name: "STRING_VALUE",
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       sms: { // SMSMessageTemplateContent
 * //         body: { // SMSMessageTemplateContentBody
 * //           plainText: {//  Union: only one key present
 * //             content: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //     description: "STRING_VALUE",
 * //     language: "STRING_VALUE",
 * //     groupingConfiguration: { // GroupingConfiguration
 * //       criteria: "STRING_VALUE",
 * //       values: [ // GroupingValues
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     defaultAttributes: { // MessageTemplateAttributes
 * //       systemAttributes: { // SystemAttributes
 * //         name: "STRING_VALUE",
 * //         customerEndpoint: { // SystemEndpointAttributes
 * //           address: "STRING_VALUE",
 * //         },
 * //         systemEndpoint: {
 * //           address: "STRING_VALUE",
 * //         },
 * //       },
 * //       agentAttributes: { // AgentAttributes
 * //         firstName: "STRING_VALUE",
 * //         lastName: "STRING_VALUE",
 * //       },
 * //       customerProfileAttributes: { // CustomerProfileAttributes
 * //         profileId: "STRING_VALUE",
 * //         profileARN: "STRING_VALUE",
 * //         firstName: "STRING_VALUE",
 * //         middleName: "STRING_VALUE",
 * //         lastName: "STRING_VALUE",
 * //         accountNumber: "STRING_VALUE",
 * //         emailAddress: "STRING_VALUE",
 * //         phoneNumber: "STRING_VALUE",
 * //         additionalInformation: "STRING_VALUE",
 * //         partyType: "STRING_VALUE",
 * //         businessName: "STRING_VALUE",
 * //         birthDate: "STRING_VALUE",
 * //         gender: "STRING_VALUE",
 * //         mobilePhoneNumber: "STRING_VALUE",
 * //         homePhoneNumber: "STRING_VALUE",
 * //         businessPhoneNumber: "STRING_VALUE",
 * //         businessEmailAddress: "STRING_VALUE",
 * //         address1: "STRING_VALUE",
 * //         address2: "STRING_VALUE",
 * //         address3: "STRING_VALUE",
 * //         address4: "STRING_VALUE",
 * //         city: "STRING_VALUE",
 * //         county: "STRING_VALUE",
 * //         country: "STRING_VALUE",
 * //         postalCode: "STRING_VALUE",
 * //         province: "STRING_VALUE",
 * //         state: "STRING_VALUE",
 * //         shippingAddress1: "STRING_VALUE",
 * //         shippingAddress2: "STRING_VALUE",
 * //         shippingAddress3: "STRING_VALUE",
 * //         shippingAddress4: "STRING_VALUE",
 * //         shippingCity: "STRING_VALUE",
 * //         shippingCounty: "STRING_VALUE",
 * //         shippingCountry: "STRING_VALUE",
 * //         shippingPostalCode: "STRING_VALUE",
 * //         shippingProvince: "STRING_VALUE",
 * //         shippingState: "STRING_VALUE",
 * //         mailingAddress1: "STRING_VALUE",
 * //         mailingAddress2: "STRING_VALUE",
 * //         mailingAddress3: "STRING_VALUE",
 * //         mailingAddress4: "STRING_VALUE",
 * //         mailingCity: "STRING_VALUE",
 * //         mailingCounty: "STRING_VALUE",
 * //         mailingCountry: "STRING_VALUE",
 * //         mailingPostalCode: "STRING_VALUE",
 * //         mailingProvince: "STRING_VALUE",
 * //         mailingState: "STRING_VALUE",
 * //         billingAddress1: "STRING_VALUE",
 * //         billingAddress2: "STRING_VALUE",
 * //         billingAddress3: "STRING_VALUE",
 * //         billingAddress4: "STRING_VALUE",
 * //         billingCity: "STRING_VALUE",
 * //         billingCounty: "STRING_VALUE",
 * //         billingCountry: "STRING_VALUE",
 * //         billingPostalCode: "STRING_VALUE",
 * //         billingProvince: "STRING_VALUE",
 * //         billingState: "STRING_VALUE",
 * //         custom: { // CustomAttributes
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       customAttributes: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     attributeTypes: [ // MessageTemplateAttributeTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     messageTemplateContentSha256: "STRING_VALUE", // required
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMessageTemplateCommandInput - {@link UpdateMessageTemplateCommandInput}
 * @returns {@link UpdateMessageTemplateCommandOutput}
 * @see {@link UpdateMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateMessageTemplateCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
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
export class UpdateMessageTemplateCommand extends $Command
  .classBuilder<
    UpdateMessageTemplateCommandInput,
    UpdateMessageTemplateCommandOutput,
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
  .s("WisdomService", "UpdateMessageTemplate", {})
  .n("QConnectClient", "UpdateMessageTemplateCommand")
  .f(UpdateMessageTemplateRequestFilterSensitiveLog, UpdateMessageTemplateResponseFilterSensitiveLog)
  .ser(se_UpdateMessageTemplateCommand)
  .de(de_UpdateMessageTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMessageTemplateRequest;
      output: UpdateMessageTemplateResponse;
    };
    sdk: {
      input: UpdateMessageTemplateCommandInput;
      output: UpdateMessageTemplateCommandOutput;
    };
  };
}
