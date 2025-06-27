// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartEmailContactResponse } from "../models/models_2";
import { StartEmailContactRequest, StartEmailContactRequestFilterSensitiveLog } from "../models/models_3";
import { de_StartEmailContactCommand, se_StartEmailContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartEmailContactCommand}.
 */
export interface StartEmailContactCommandInput extends StartEmailContactRequest {}
/**
 * @public
 *
 * The output of {@link StartEmailContactCommand}.
 */
export interface StartEmailContactCommandOutput extends StartEmailContactResponse, __MetadataBearer {}

/**
 * <p>Creates an inbound email contact and initiates a flow to start the email contact for the
 *    customer. Response of this API provides the ContactId of the email contact created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartEmailContactCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartEmailContactCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // StartEmailContactRequest
 *   InstanceId: "STRING_VALUE", // required
 *   FromEmailAddress: { // EmailAddressInfo
 *     EmailAddress: "STRING_VALUE", // required
 *     DisplayName: "STRING_VALUE",
 *   },
 *   DestinationEmailAddress: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   References: { // ContactReferences
 *     "<keys>": { // Reference
 *       Value: "STRING_VALUE",
 *       Type: "URL" || "ATTACHMENT" || "CONTACT_ANALYSIS" || "NUMBER" || "STRING" || "DATE" || "EMAIL" || "EMAIL_MESSAGE", // required
 *       Status: "AVAILABLE" || "DELETED" || "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED",
 *       Arn: "STRING_VALUE",
 *       StatusReason: "STRING_VALUE",
 *     },
 *   },
 *   Name: "STRING_VALUE",
 *   EmailMessage: { // InboundEmailContent
 *     MessageSourceType: "RAW", // required
 *     RawMessage: { // InboundRawMessage
 *       Subject: "STRING_VALUE", // required
 *       Body: "STRING_VALUE", // required
 *       ContentType: "STRING_VALUE", // required
 *       Headers: { // EmailHeaders
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   AdditionalRecipients: { // InboundAdditionalRecipients
 *     ToAddresses: [ // EmailAddressRecipientList
 *       {
 *         EmailAddress: "STRING_VALUE", // required
 *         DisplayName: "STRING_VALUE",
 *       },
 *     ],
 *     CcAddresses: [
 *       {
 *         EmailAddress: "STRING_VALUE", // required
 *         DisplayName: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Attachments: [ // EmailAttachments
 *     { // EmailAttachment
 *       FileName: "STRING_VALUE", // required
 *       S3Url: "STRING_VALUE", // required
 *     },
 *   ],
 *   ContactFlowId: "STRING_VALUE",
 *   RelatedContactId: "STRING_VALUE",
 *   Attributes: { // Attributes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   SegmentAttributes: { // SegmentAttributes
 *     "<keys>": { // SegmentAttributeValue
 *       ValueString: "STRING_VALUE",
 *       ValueMap: { // SegmentAttributeValueMap
 *         "<keys>": {
 *           ValueString: "STRING_VALUE",
 *           ValueMap: {
 *             "<keys>": "<SegmentAttributeValue>",
 *           },
 *           ValueInteger: Number("int"),
 *         },
 *       },
 *       ValueInteger: Number("int"),
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new StartEmailContactCommand(input);
 * const response = await client.send(command);
 * // { // StartEmailContactResponse
 * //   ContactId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartEmailContactCommandInput - {@link StartEmailContactCommandInput}
 * @returns {@link StartEmailContactCommandOutput}
 * @see {@link StartEmailContactCommandInput} for command's `input` shape.
 * @see {@link StartEmailContactCommandOutput} for command's `response` shape.
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
export class StartEmailContactCommand extends $Command
  .classBuilder<
    StartEmailContactCommandInput,
    StartEmailContactCommandOutput,
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
  .s("AmazonConnectService", "StartEmailContact", {})
  .n("ConnectClient", "StartEmailContactCommand")
  .f(StartEmailContactRequestFilterSensitiveLog, void 0)
  .ser(se_StartEmailContactCommand)
  .de(de_StartEmailContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartEmailContactRequest;
      output: StartEmailContactResponse;
    };
    sdk: {
      input: StartEmailContactCommandInput;
      output: StartEmailContactCommandOutput;
    };
  };
}
