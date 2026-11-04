// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMessageTemplateVersionRequest, CreateMessageTemplateVersionResponse } from "../models/models_1";
import { CreateMessageTemplateVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMessageTemplateVersionCommand}.
 */
export interface CreateMessageTemplateVersionCommandInput extends CreateMessageTemplateVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateMessageTemplateVersionCommand}.
 */
export interface CreateMessageTemplateVersionCommandOutput extends CreateMessageTemplateVersionResponse, __MetadataBearer {}

/**
 * Creates a new Amazon Q in Connect message template version from the current content and configuration of a message template. Versions are immutable and monotonically increasing. Once a version is created, you can reference a specific version of the message template by passing in `<message-template-id>:<versionNumber>` as the message template identifier. An error is displayed if the supplied `messageTemplateContentSha256` is different from the `messageTemplateContentSha256` of the message template with `$LATEST` qualifier. If multiple `CreateMessageTemplateVersion` requests are made while the message template remains the same, only the first invocation creates a new version and the succeeding requests will return the same response as the first invocation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateMessageTemplateVersionCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateMessageTemplateVersionCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // CreateMessageTemplateVersionRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   messageTemplateContentSha256: "STRING_VALUE",
 * };
 * const command = new CreateMessageTemplateVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateMessageTemplateVersionResponse
 * //   messageTemplate: { // ExtendedMessageTemplateData
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
 * //     attachments: [ // MessageTemplateAttachmentList
 * //       { // MessageTemplateAttachment
 * //         contentDisposition: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         uploadedTime: new Date("TIMESTAMP"), // required
 * //         url: "STRING_VALUE", // required
 * //         urlExpiry: new Date("TIMESTAMP"), // required
 * //         attachmentId: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     isActive: true || false,
 * //     versionNumber: Number("long"),
 * //     messageTemplateContentSha256: "STRING_VALUE", // required
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMessageTemplateVersionCommandInput - {@link CreateMessageTemplateVersionCommandInput}
 * @returns {@link CreateMessageTemplateVersionCommandOutput}
 * @see {@link CreateMessageTemplateVersionCommandInput} for command's `input` shape.
 * @see {@link CreateMessageTemplateVersionCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource. For example, if you're using a `Create` API (such as `CreateAssistant`) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You've exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use service quotas to request a service quota increase.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by a service.
 *
 * @throws {@link QConnectServiceException}
 *
 * Base exception class for all service exceptions from QConnect service.
 *
 * @public
 */
export class CreateMessageTemplateVersionCommand extends command<CreateMessageTemplateVersionCommandInput, CreateMessageTemplateVersionCommandOutput>(
  _ep0,
  _mw0,
  "CreateMessageTemplateVersion",
  CreateMessageTemplateVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMessageTemplateVersionRequest;
      output: CreateMessageTemplateVersionResponse;
    };
    sdk: {
      input: CreateMessageTemplateVersionCommandInput;
      output: CreateMessageTemplateVersionCommandOutput;
    };
  };
}
