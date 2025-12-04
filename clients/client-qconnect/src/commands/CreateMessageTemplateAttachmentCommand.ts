// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateMessageTemplateAttachmentRequest,
  CreateMessageTemplateAttachmentResponse,
} from "../models/models_0";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { CreateMessageTemplateAttachment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMessageTemplateAttachmentCommand}.
 */
export interface CreateMessageTemplateAttachmentCommandInput extends CreateMessageTemplateAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateMessageTemplateAttachmentCommand}.
 */
export interface CreateMessageTemplateAttachmentCommandOutput
  extends CreateMessageTemplateAttachmentResponse,
    __MetadataBearer {}

/**
 * <p>Uploads an attachment file to the specified Amazon Q in Connect message template. The name of the message template attachment has to be unique for each message template referenced by the <code>$LATEST</code> qualifier. The body of the attachment file should be encoded using base64 encoding. After the file is uploaded, you can use the pre-signed Amazon S3 URL returned in response to download the uploaded file.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateMessageTemplateAttachmentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateMessageTemplateAttachmentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // CreateMessageTemplateAttachmentRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   messageTemplateId: "STRING_VALUE", // required
 *   contentDisposition: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   body: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateMessageTemplateAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateMessageTemplateAttachmentResponse
 * //   attachment: { // MessageTemplateAttachment
 * //     contentDisposition: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     uploadedTime: new Date("TIMESTAMP"), // required
 * //     url: "STRING_VALUE", // required
 * //     urlExpiry: new Date("TIMESTAMP"), // required
 * //     attachmentId: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMessageTemplateAttachmentCommandInput - {@link CreateMessageTemplateAttachmentCommandInput}
 * @returns {@link CreateMessageTemplateAttachmentCommandOutput}
 * @see {@link CreateMessageTemplateAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateMessageTemplateAttachmentCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
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
export class CreateMessageTemplateAttachmentCommand extends $Command
  .classBuilder<
    CreateMessageTemplateAttachmentCommandInput,
    CreateMessageTemplateAttachmentCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "CreateMessageTemplateAttachment", {})
  .n("QConnectClient", "CreateMessageTemplateAttachmentCommand")
  .sc(CreateMessageTemplateAttachment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMessageTemplateAttachmentRequest;
      output: CreateMessageTemplateAttachmentResponse;
    };
    sdk: {
      input: CreateMessageTemplateAttachmentCommandInput;
      output: CreateMessageTemplateAttachmentCommandOutput;
    };
  };
}
