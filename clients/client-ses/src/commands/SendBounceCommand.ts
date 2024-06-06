// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendBounceRequest, SendBounceResponse } from "../models/models_0";
import { de_SendBounceCommand, se_SendBounceCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendBounceCommand}.
 */
export interface SendBounceCommandInput extends SendBounceRequest {}
/**
 * @public
 *
 * The output of {@link SendBounceCommand}.
 */
export interface SendBounceCommandOutput extends SendBounceResponse, __MetadataBearer {}

/**
 * <p>Generates and sends a bounce message to the sender of an email you received through
 *             Amazon SES. You can only use this operation on an email up to 24 hours after you receive
 *             it.</p>
 *          <note>
 *             <p>You cannot use this operation to send generic bounces for mail that was not
 *                 received by Amazon SES.</p>
 *          </note>
 *          <p>For information about receiving email through Amazon SES, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, SendBounceCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, SendBounceCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // SendBounceRequest
 *   OriginalMessageId: "STRING_VALUE", // required
 *   BounceSender: "STRING_VALUE", // required
 *   Explanation: "STRING_VALUE",
 *   MessageDsn: { // MessageDsn
 *     ReportingMta: "STRING_VALUE", // required
 *     ArrivalDate: new Date("TIMESTAMP"),
 *     ExtensionFields: [ // ExtensionFieldList
 *       { // ExtensionField
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   BouncedRecipientInfoList: [ // BouncedRecipientInfoList // required
 *     { // BouncedRecipientInfo
 *       Recipient: "STRING_VALUE", // required
 *       RecipientArn: "STRING_VALUE",
 *       BounceType: "DoesNotExist" || "MessageTooLarge" || "ExceededQuota" || "ContentRejected" || "Undefined" || "TemporaryFailure",
 *       RecipientDsnFields: { // RecipientDsnFields
 *         FinalRecipient: "STRING_VALUE",
 *         Action: "failed" || "delayed" || "delivered" || "relayed" || "expanded", // required
 *         RemoteMta: "STRING_VALUE",
 *         Status: "STRING_VALUE", // required
 *         DiagnosticCode: "STRING_VALUE",
 *         LastAttemptDate: new Date("TIMESTAMP"),
 *         ExtensionFields: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   BounceSenderArn: "STRING_VALUE",
 * };
 * const command = new SendBounceCommand(input);
 * const response = await client.send(command);
 * // { // SendBounceResponse
 * //   MessageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendBounceCommandInput - {@link SendBounceCommandInput}
 * @returns {@link SendBounceCommandOutput}
 * @see {@link SendBounceCommandInput} for command's `input` shape.
 * @see {@link SendBounceCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link MessageRejected} (client fault)
 *  <p>Indicates that the action failed, and the message could not be sent. Check the error
 *             stack for more information about what caused the error.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @public
 */
export class SendBounceCommand extends $Command
  .classBuilder<
    SendBounceCommandInput,
    SendBounceCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "SendBounce", {})
  .n("SESClient", "SendBounceCommand")
  .f(void 0, void 0)
  .ser(se_SendBounceCommand)
  .de(de_SendBounceCommand)
  .build() {}
