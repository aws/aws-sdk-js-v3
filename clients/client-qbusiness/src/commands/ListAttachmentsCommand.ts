// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAttachmentsRequest, ListAttachmentsResponse } from "../models/models_0";
import { de_ListAttachmentsCommand, se_ListAttachmentsCommand } from "../protocols/Aws_restJson1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAttachmentsCommand}.
 */
export interface ListAttachmentsCommandInput extends ListAttachmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachmentsCommand}.
 */
export interface ListAttachmentsCommandOutput extends ListAttachmentsResponse, __MetadataBearer {}

/**
 * <p>Gets a list of attachments associated with an Amazon Q Business web experience or a list of attachements associated with a specific Amazon Q Business conversation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, ListAttachmentsCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, ListAttachmentsCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * const client = new QBusinessClient(config);
 * const input = { // ListAttachmentsRequest
 *   applicationId: "STRING_VALUE", // required
 *   conversationId: "STRING_VALUE",
 *   userId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAttachmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachmentsResponse
 * //   attachments: [ // AttachmentList
 * //     { // Attachment
 * //       attachmentId: "STRING_VALUE",
 * //       conversationId: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       copyFrom: { // CopyFromSource Union: only one key present
 * //         conversation: { // ConversationSource
 * //           conversationId: "STRING_VALUE", // required
 * //           attachmentId: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       fileType: "STRING_VALUE",
 * //       fileSize: Number("int"),
 * //       md5chksum: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       status: "FAILED" || "SUCCESS",
 * //       error: { // ErrorDetail
 * //         errorMessage: "STRING_VALUE",
 * //         errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachmentsCommandInput - {@link ListAttachmentsCommandInput}
 * @returns {@link ListAttachmentsCommandOutput}
 * @see {@link ListAttachmentsCommandInput} for command's `input` shape.
 * @see {@link ListAttachmentsCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link LicenseNotFoundException} (client fault)
 *  <p>You don't have permissions to perform the action because your license is inactive. Ask your admin to activate your license and try again after your licence is active.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class ListAttachmentsCommand extends $Command
  .classBuilder<
    ListAttachmentsCommandInput,
    ListAttachmentsCommandOutput,
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
  .s("ExpertQ", "ListAttachments", {})
  .n("QBusinessClient", "ListAttachmentsCommand")
  .f(void 0, void 0)
  .ser(se_ListAttachmentsCommand)
  .de(de_ListAttachmentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachmentsRequest;
      output: ListAttachmentsResponse;
    };
    sdk: {
      input: ListAttachmentsCommandInput;
      output: ListAttachmentsCommandOutput;
    };
  };
}
