// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAttachedFileRequest, CreateAttachedFileResponse } from "../models/models_0";
import { CreateAttachedFile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAttachedFileCommand}.
 */
export interface CreateAttachedFileCommandInput extends CreateAttachedFileRequest {}
/**
 * @public
 *
 * The output of {@link CreateAttachedFileCommand}.
 */
export interface CreateAttachedFileCommandOutput extends CreateAttachedFileResponse, __MetadataBearer {}

/**
 * <p>Creates an attached file for a completed voice contact by copying a recording from a source S3 URI into
 *    Connect Customer managed storage. Use this API to attach voice recordings to contacts for downstream
 *    processing such as conversational analytics.</p>
 *          <important>
 *             <p>The <code>AssociatedResourceArn</code> must be the ARN of a completed voice contact, <code>FileUseCaseType</code>
 *     must be set to <code>VOICE_RECORDING</code>, and <code>FileSourceUri</code> must be a valid S3 URI.</p>
 *          </important>
 *          <note>
 *             <p>For example, you can call <code>CreateContact</code>, then <code>CreateAttachedFile</code>, then
 *     <code>StartContactConversationalAnalyticsJob</code> to create a contact, attach a recording, and
 *     run post-call analytics.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateAttachedFileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateAttachedFileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateAttachedFileRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   FileUseCaseType: "CONTACT_ANALYSIS" || "EMAIL_MESSAGE" || "EMAIL_MESSAGE_PLAIN_TEXT" || "EMAIL_MESSAGE_REDACTED" || "EMAIL_MESSAGE_PLAIN_TEXT_REDACTED" || "ATTACHMENT" || "VOICE_RECORDING", // required
 *   FileSourceUri: "STRING_VALUE", // required
 *   AssociatedResourceArn: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAttachedFileCommand(input);
 * const response = await client.send(command);
 * // { // CreateAttachedFileResponse
 * //   FileArn: "STRING_VALUE",
 * //   FileId: "STRING_VALUE",
 * //   CreationTime: "STRING_VALUE",
 * //   FileStatus: "APPROVED" || "REJECTED" || "PROCESSING" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateAttachedFileCommandInput - {@link CreateAttachedFileCommandInput}
 * @returns {@link CreateAttachedFileCommandOutput}
 * @see {@link CreateAttachedFileCommandInput} for command's `input` shape.
 * @see {@link CreateAttachedFileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>A resource already has that name.</p>
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
export class CreateAttachedFileCommand extends command<CreateAttachedFileCommandInput, CreateAttachedFileCommandOutput>(
  _ep0,
  _mw0,
  "CreateAttachedFile",
  CreateAttachedFile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAttachedFileRequest;
      output: CreateAttachedFileResponse;
    };
    sdk: {
      input: CreateAttachedFileCommandInput;
      output: CreateAttachedFileCommandOutput;
    };
  };
}
