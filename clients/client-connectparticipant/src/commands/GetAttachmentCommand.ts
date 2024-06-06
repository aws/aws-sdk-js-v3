// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ConnectParticipantClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ConnectParticipantClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAttachmentRequest, GetAttachmentResponse } from "../models/models_0";
import { de_GetAttachmentCommand, se_GetAttachmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAttachmentCommand}.
 */
export interface GetAttachmentCommandInput extends GetAttachmentRequest {}
/**
 * @public
 *
 * The output of {@link GetAttachmentCommand}.
 */
export interface GetAttachmentCommandOutput extends GetAttachmentResponse, __MetadataBearer {}

/**
 * <p>Provides a pre-signed URL for download of a completed attachment. This is an
 *             asynchronous API for use with active contacts.</p>
 *          <note>
 *             <p>
 *                <code>ConnectionToken</code> is used for invoking this API instead of
 *                     <code>ParticipantToken</code>.</p>
 *          </note>
 *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
 *                     authentication</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectParticipantClient, GetAttachmentCommand } from "@aws-sdk/client-connectparticipant"; // ES Modules import
 * // const { ConnectParticipantClient, GetAttachmentCommand } = require("@aws-sdk/client-connectparticipant"); // CommonJS import
 * const client = new ConnectParticipantClient(config);
 * const input = { // GetAttachmentRequest
 *   AttachmentId: "STRING_VALUE", // required
 *   ConnectionToken: "STRING_VALUE", // required
 * };
 * const command = new GetAttachmentCommand(input);
 * const response = await client.send(command);
 * // { // GetAttachmentResponse
 * //   Url: "STRING_VALUE",
 * //   UrlExpiry: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAttachmentCommandInput - {@link GetAttachmentCommandInput}
 * @returns {@link GetAttachmentCommandOutput}
 * @see {@link GetAttachmentCommandInput} for command's `input` shape.
 * @see {@link GetAttachmentCommandOutput} for command's `response` shape.
 * @see {@link ConnectParticipantClientResolvedConfig | config} for ConnectParticipantClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon Connect service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Amazon Connect.</p>
 *
 * @throws {@link ConnectParticipantServiceException}
 * <p>Base exception class for all service exceptions from ConnectParticipant service.</p>
 *
 * @public
 */
export class GetAttachmentCommand extends $Command
  .classBuilder<
    GetAttachmentCommandInput,
    GetAttachmentCommandOutput,
    ConnectParticipantClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectParticipantClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectParticipantServiceLambda", "GetAttachment", {})
  .n("ConnectParticipantClient", "GetAttachmentCommand")
  .f(void 0, void 0)
  .ser(se_GetAttachmentCommand)
  .de(de_GetAttachmentCommand)
  .build() {}
