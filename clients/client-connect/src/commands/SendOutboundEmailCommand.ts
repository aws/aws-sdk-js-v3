// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  SendOutboundEmailRequest,
  SendOutboundEmailRequestFilterSensitiveLog,
  SendOutboundEmailResponse,
} from "../models/models_2";
import { de_SendOutboundEmailCommand, se_SendOutboundEmailCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Send outbound email for outbound campaigns. For more information about outbound campaigns,
 *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-outbound-campaigns.html">Set up Amazon Connect outbound campaigns</a>.</p>
 *          <note>
 *             <p>Only the Amazon Connect outbound campaigns service principal is allowed to assume a
 *     role in your account and call this API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SendOutboundEmailCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SendOutboundEmailCommand } = require("@aws-sdk/client-connect"); // CommonJS import
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
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class SendOutboundEmailCommand extends $Command
  .classBuilder<
    SendOutboundEmailCommandInput,
    SendOutboundEmailCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "SendOutboundEmail", {})
  .n("ConnectClient", "SendOutboundEmailCommand")
  .f(SendOutboundEmailRequestFilterSensitiveLog, void 0)
  .ser(se_SendOutboundEmailCommand)
  .de(de_SendOutboundEmailCommand)
  .build() {
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
