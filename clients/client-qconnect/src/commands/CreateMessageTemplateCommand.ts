// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateMessageTemplateRequest, CreateMessageTemplateResponse } from "../models/models_0";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { CreateMessageTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMessageTemplateCommand}.
 */
export interface CreateMessageTemplateCommandInput extends CreateMessageTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateMessageTemplateCommand}.
 */
export interface CreateMessageTemplateCommandOutput extends CreateMessageTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Q in Connect message template. The name of the message template has to be unique for each knowledge base. The channel subtype of the message template is immutable and cannot be modified after creation. After the message template is created, you can use the <code>$LATEST</code> qualifier to reference the created message template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateMessageTemplateCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateMessageTemplateCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // CreateMessageTemplateRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
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
 *     whatsApp: { // WhatsAppMessageTemplateContent
 *       data: "STRING_VALUE",
 *     },
 *     push: { // PushMessageTemplateContent
 *       adm: { // PushADMMessageTemplateContent
 *         title: "STRING_VALUE",
 *         body: {//  Union: only one key present
 *           content: "STRING_VALUE",
 *         },
 *         action: "STRING_VALUE",
 *         sound: "STRING_VALUE",
 *         url: "STRING_VALUE",
 *         imageUrl: "STRING_VALUE",
 *         imageIconUrl: "STRING_VALUE",
 *         smallImageIconUrl: "STRING_VALUE",
 *         rawContent: {//  Union: only one key present
 *           content: "STRING_VALUE",
 *         },
 *       },
 *       apns: { // PushAPNSMessageTemplateContent
 *         title: "STRING_VALUE",
 *         body: "<MessageTemplateBodyContentProvider>",
 *         action: "STRING_VALUE",
 *         sound: "STRING_VALUE",
 *         url: "STRING_VALUE",
 *         mediaUrl: "STRING_VALUE",
 *         rawContent: "<MessageTemplateBodyContentProvider>",
 *       },
 *       fcm: { // PushFCMMessageTemplateContent
 *         title: "STRING_VALUE",
 *         body: "<MessageTemplateBodyContentProvider>",
 *         action: "STRING_VALUE",
 *         sound: "STRING_VALUE",
 *         url: "STRING_VALUE",
 *         imageUrl: "STRING_VALUE",
 *         imageIconUrl: "STRING_VALUE",
 *         smallImageIconUrl: "STRING_VALUE",
 *         rawContent: "<MessageTemplateBodyContentProvider>",
 *       },
 *       baidu: { // PushBaiduMessageTemplateContent
 *         title: "STRING_VALUE",
 *         body: "<MessageTemplateBodyContentProvider>",
 *         action: "STRING_VALUE",
 *         sound: "STRING_VALUE",
 *         url: "STRING_VALUE",
 *         imageUrl: "STRING_VALUE",
 *         imageIconUrl: "STRING_VALUE",
 *         smallImageIconUrl: "STRING_VALUE",
 *         rawContent: "<MessageTemplateBodyContentProvider>",
 *       },
 *     },
 *   },
 *   description: "STRING_VALUE",
 *   channelSubtype: "STRING_VALUE", // required
 *   language: "STRING_VALUE",
 *   sourceConfiguration: { // MessageTemplateSourceConfiguration Union: only one key present
 *     whatsApp: { // WhatsAppMessageTemplateSourceConfiguration
 *       businessAccountId: "STRING_VALUE", // required
 *       templateId: "STRING_VALUE", // required
 *       components: [ // WhatsAppMessageTemplateComponents
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
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
 *   groupingConfiguration: { // GroupingConfiguration
 *     criteria: "STRING_VALUE",
 *     values: [ // GroupingValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMessageTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateMessageTemplateResponse
 * //   messageTemplate: { // MessageTemplateData
 * //     messageTemplateArn: "STRING_VALUE", // required
 * //     messageTemplateId: "STRING_VALUE", // required
 * //     knowledgeBaseArn: "STRING_VALUE", // required
 * //     knowledgeBaseId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     channel: "STRING_VALUE",
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
 * //       whatsApp: { // WhatsAppMessageTemplateContent
 * //         data: "STRING_VALUE",
 * //       },
 * //       push: { // PushMessageTemplateContent
 * //         adm: { // PushADMMessageTemplateContent
 * //           title: "STRING_VALUE",
 * //           body: {//  Union: only one key present
 * //             content: "STRING_VALUE",
 * //           },
 * //           action: "STRING_VALUE",
 * //           sound: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //           imageUrl: "STRING_VALUE",
 * //           imageIconUrl: "STRING_VALUE",
 * //           smallImageIconUrl: "STRING_VALUE",
 * //           rawContent: {//  Union: only one key present
 * //             content: "STRING_VALUE",
 * //           },
 * //         },
 * //         apns: { // PushAPNSMessageTemplateContent
 * //           title: "STRING_VALUE",
 * //           body: "<MessageTemplateBodyContentProvider>",
 * //           action: "STRING_VALUE",
 * //           sound: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //           mediaUrl: "STRING_VALUE",
 * //           rawContent: "<MessageTemplateBodyContentProvider>",
 * //         },
 * //         fcm: { // PushFCMMessageTemplateContent
 * //           title: "STRING_VALUE",
 * //           body: "<MessageTemplateBodyContentProvider>",
 * //           action: "STRING_VALUE",
 * //           sound: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //           imageUrl: "STRING_VALUE",
 * //           imageIconUrl: "STRING_VALUE",
 * //           smallImageIconUrl: "STRING_VALUE",
 * //           rawContent: "<MessageTemplateBodyContentProvider>",
 * //         },
 * //         baidu: { // PushBaiduMessageTemplateContent
 * //           title: "STRING_VALUE",
 * //           body: "<MessageTemplateBodyContentProvider>",
 * //           action: "STRING_VALUE",
 * //           sound: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //           imageUrl: "STRING_VALUE",
 * //           imageIconUrl: "STRING_VALUE",
 * //           smallImageIconUrl: "STRING_VALUE",
 * //           rawContent: "<MessageTemplateBodyContentProvider>",
 * //         },
 * //       },
 * //     },
 * //     description: "STRING_VALUE",
 * //     language: "STRING_VALUE",
 * //     sourceConfigurationSummary: { // MessageTemplateSourceConfigurationSummary Union: only one key present
 * //       whatsApp: { // WhatsAppMessageTemplateSourceConfigurationSummary
 * //         businessAccountId: "STRING_VALUE", // required
 * //         templateId: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //         language: "STRING_VALUE",
 * //         components: [ // WhatsAppMessageTemplateComponents
 * //           "STRING_VALUE",
 * //         ],
 * //         status: "STRING_VALUE",
 * //         statusReason: "STRING_VALUE",
 * //       },
 * //     },
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
 * @param CreateMessageTemplateCommandInput - {@link CreateMessageTemplateCommandInput}
 * @returns {@link CreateMessageTemplateCommandOutput}
 * @see {@link CreateMessageTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateMessageTemplateCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. For example, if you're using a <code>Create</code> API (such as <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.</p>
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
export class CreateMessageTemplateCommand extends $Command
  .classBuilder<
    CreateMessageTemplateCommandInput,
    CreateMessageTemplateCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "CreateMessageTemplate", {})
  .n("QConnectClient", "CreateMessageTemplateCommand")
  .sc(CreateMessageTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMessageTemplateRequest;
      output: CreateMessageTemplateResponse;
    };
    sdk: {
      input: CreateMessageTemplateCommandInput;
      output: CreateMessageTemplateCommandOutput;
    };
  };
}
