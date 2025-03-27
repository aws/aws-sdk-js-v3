// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { GetArchiveMessageContentRequest, GetArchiveMessageContentResponse } from "../models/models_0";
import { de_GetArchiveMessageContentCommand, se_GetArchiveMessageContentCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetArchiveMessageContentCommand}.
 */
export interface GetArchiveMessageContentCommandInput extends GetArchiveMessageContentRequest {}
/**
 * @public
 *
 * The output of {@link GetArchiveMessageContentCommand}.
 */
export interface GetArchiveMessageContentCommandOutput extends GetArchiveMessageContentResponse, __MetadataBearer {}

/**
 * <p>Returns the textual content of a specific email message stored in the archive. Attachments are not
 *             included.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, GetArchiveMessageContentCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, GetArchiveMessageContentCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * const client = new MailManagerClient(config);
 * const input = { // GetArchiveMessageContentRequest
 *   ArchivedMessageId: "STRING_VALUE", // required
 * };
 * const command = new GetArchiveMessageContentCommand(input);
 * const response = await client.send(command);
 * // { // GetArchiveMessageContentResponse
 * //   Body: { // MessageBody
 * //     Text: "STRING_VALUE",
 * //     Html: "STRING_VALUE",
 * //     MessageMalformed: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetArchiveMessageContentCommandInput - {@link GetArchiveMessageContentCommandInput}
 * @returns {@link GetArchiveMessageContentCommandOutput}
 * @see {@link GetArchiveMessageContentCommandInput} for command's `input` shape.
 * @see {@link GetArchiveMessageContentCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Occurs when a user is denied access to a specific resource or action.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Occurs when a service's request rate limit is exceeded, resulting in throttling of further requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 *
 * @public
 */
export class GetArchiveMessageContentCommand extends $Command
  .classBuilder<
    GetArchiveMessageContentCommandInput,
    GetArchiveMessageContentCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "GetArchiveMessageContent", {})
  .n("MailManagerClient", "GetArchiveMessageContentCommand")
  .f(void 0, void 0)
  .ser(se_GetArchiveMessageContentCommand)
  .de(de_GetArchiveMessageContentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetArchiveMessageContentRequest;
      output: GetArchiveMessageContentResponse;
    };
    sdk: {
      input: GetArchiveMessageContentCommandInput;
      output: GetArchiveMessageContentCommandOutput;
    };
  };
}
