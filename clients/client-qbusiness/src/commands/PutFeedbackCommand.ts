// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutFeedbackRequest } from "../models/models_1";
import { de_PutFeedbackCommand, se_PutFeedbackCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutFeedbackCommand}.
 */
export interface PutFeedbackCommandInput extends PutFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link PutFeedbackCommand}.
 */
export interface PutFeedbackCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables your end user to provide feedback on their Amazon Q Business generated chat
 *             responses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, PutFeedbackCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, PutFeedbackCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // PutFeedbackRequest
 *   applicationId: "STRING_VALUE", // required
 *   userId: "STRING_VALUE",
 *   conversationId: "STRING_VALUE", // required
 *   messageId: "STRING_VALUE", // required
 *   messageCopiedAt: new Date("TIMESTAMP"),
 *   messageUsefulness: { // MessageUsefulnessFeedback
 *     usefulness: "USEFUL" || "NOT_USEFUL", // required
 *     reason: "NOT_FACTUALLY_CORRECT" || "HARMFUL_OR_UNSAFE" || "INCORRECT_OR_MISSING_SOURCES" || "NOT_HELPFUL" || "FACTUALLY_CORRECT" || "COMPLETE" || "RELEVANT_SOURCES" || "HELPFUL" || "NOT_BASED_ON_DOCUMENTS" || "NOT_COMPLETE" || "NOT_CONCISE" || "OTHER",
 *     comment: "STRING_VALUE",
 *     submittedAt: new Date("TIMESTAMP"), // required
 *   },
 * };
 * const command = new PutFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutFeedbackCommandInput - {@link PutFeedbackCommandInput}
 * @returns {@link PutFeedbackCommandOutput}
 * @see {@link PutFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutFeedbackCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required
 *             permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait
 *             some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have
 *             provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try
 *             again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the
 *             correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 * @public
 */
export class PutFeedbackCommand extends $Command
  .classBuilder<
    PutFeedbackCommandInput,
    PutFeedbackCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ExpertQ", "PutFeedback", {})
  .n("QBusinessClient", "PutFeedbackCommand")
  .f(void 0, void 0)
  .ser(se_PutFeedbackCommand)
  .de(de_PutFeedbackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutFeedbackRequest;
      output: {};
    };
    sdk: {
      input: PutFeedbackCommandInput;
      output: PutFeedbackCommandOutput;
    };
  };
}
