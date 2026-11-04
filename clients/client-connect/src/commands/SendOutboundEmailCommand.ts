// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendOutboundEmailRequest, SendOutboundEmailResponse } from "../models/models_3";
import { SendOutboundEmail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendOutboundEmailCommand}.
 */
export interface SendOutboundEmailCommandInput extends SendOutboundEmailRequest {}
/**
 * @public
 *
 * The output of {@link SendOutboundEmailCommand}.
 */
export interface SendOutboundEmailCommandOutput extends SendOutboundEmailResponse, __MetadataBearer {}

/**
 * Send outbound email for outbound campaigns. For more information about outbound campaigns, see [Set up Connect Customer outbound campaigns](https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html).
 *
 * > **Note:** Only the Connect Customer outbound campaigns service principal is allowed to assume a role in your account and call this API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SendOutboundEmailCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SendOutboundEmailCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // SendOutboundEmailRequest
 *   InstanceId: "STRING_VALUE", // required
 *   FromEmailAddress: { // EmailAddressInfo
 *     EmailAddress: "STRING_VALUE", // required
 *     DisplayName: "STRING_VALUE",
 *   },
 *   DestinationEmailAddress: {
 *     EmailAddress: "STRING_VALUE", // required
 *     DisplayName: "STRING_VALUE",
 *   },
 *   AdditionalRecipients: { // OutboundAdditionalRecipients
 *     CcEmailAddresses: [ // EmailAddressRecipientList
 *       {
 *         EmailAddress: "STRING_VALUE", // required
 *         DisplayName: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   EmailMessage: { // OutboundEmailContent
 *     MessageSourceType: "TEMPLATE" || "RAW", // required
 *     TemplatedMessageConfig: { // TemplatedMessageConfig
 *       KnowledgeBaseId: "STRING_VALUE", // required
 *       MessageTemplateId: "STRING_VALUE", // required
 *       TemplateAttributes: { // TemplateAttributes
 *         CustomAttributes: { // Attributes
 *           "<keys>": "STRING_VALUE",
 *         },
 *         CustomerProfileAttributes: "STRING_VALUE",
 *       },
 *     },
 *     RawMessage: { // OutboundRawMessage
 *       Subject: "STRING_VALUE", // required
 *       Body: "STRING_VALUE", // required
 *       ContentType: "STRING_VALUE", // required
 *     },
 *   },
 *   TrafficType: "GENERAL" || "CAMPAIGN", // required
 *   SourceCampaign: { // SourceCampaign
 *     CampaignId: "STRING_VALUE",
 *     OutboundRequestId: "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new SendOutboundEmailCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendOutboundEmailCommandInput - {@link SendOutboundEmailCommandInput}
 * @returns {@link SendOutboundEmailCommandOutput}
 * @see {@link SendOutboundEmailCommandInput} for command's `input` shape.
 * @see {@link SendOutboundEmailCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link IdempotencyException} (client fault)
 *
 * An entity with the same name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class SendOutboundEmailCommand extends command<SendOutboundEmailCommandInput, SendOutboundEmailCommandOutput>(
  _ep0,
  _mw0,
  "SendOutboundEmail",
  SendOutboundEmail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendOutboundEmailRequest;
      output: {};
    };
    sdk: {
      input: SendOutboundEmailCommandInput;
      output: SendOutboundEmailCommandOutput;
    };
  };
}
