// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { AddAttachmentsToSetRequest, AddAttachmentsToSetResponse } from "../models/models_0";
import { AddAttachmentsToSet$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddAttachmentsToSetCommand}.
 */
export interface AddAttachmentsToSetCommandInput extends AddAttachmentsToSetRequest {}
/**
 * @public
 *
 * The output of {@link AddAttachmentsToSetCommand}.
 */
export interface AddAttachmentsToSetCommandOutput extends AddAttachmentsToSetResponse, __MetadataBearer {}

/**
 * <p>Adds one or more attachments to an attachment set. </p>
 *          <p>An attachment set is a temporary container for attachments that you add to a case or
 *             case communication. The set is available for 1 hour after it's created. The
 *                 <code>expiryTime</code> returned in the response is when the set expires. </p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, AddAttachmentsToSetCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddAttachmentsToSetCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // AddAttachmentsToSetRequest
 *   attachmentSetId: "STRING_VALUE",
 *   attachments: [ // Attachments // required
 *     { // Attachment
 *       fileName: "STRING_VALUE",
 *       data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     },
 *   ],
 * };
 * const command = new AddAttachmentsToSetCommand(input);
 * const response = await client.send(command);
 * // { // AddAttachmentsToSetResponse
 * //   attachmentSetId: "STRING_VALUE",
 * //   expiryTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddAttachmentsToSetCommandInput - {@link AddAttachmentsToSetCommandInput}
 * @returns {@link AddAttachmentsToSetCommandOutput}
 * @see {@link AddAttachmentsToSetCommandInput} for command's `input` shape.
 * @see {@link AddAttachmentsToSetCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link AttachmentLimitExceeded} (client fault)
 *  <p>The limit for the number of attachment sets created in a short period of time has been
 *             exceeded.</p>
 *
 * @throws {@link AttachmentSetExpired} (client fault)
 *  <p>The expiration time of the attachment set has passed. The set expires 1 hour after it
 *             is created.</p>
 *
 * @throws {@link AttachmentSetIdNotFound} (client fault)
 *  <p>An attachment set with the specified ID could not be found.</p>
 *
 * @throws {@link AttachmentSetSizeLimitExceeded} (client fault)
 *  <p>A limit for the size of an attachment set has been exceeded. The limits are three
 *             attachments and 5 MB per attachment.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 *
 * @public
 */
export class AddAttachmentsToSetCommand extends $Command
  .classBuilder<
    AddAttachmentsToSetCommandInput,
    AddAttachmentsToSetCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSupport_20130415", "AddAttachmentsToSet", {})
  .n("SupportClient", "AddAttachmentsToSetCommand")
  .sc(AddAttachmentsToSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddAttachmentsToSetRequest;
      output: AddAttachmentsToSetResponse;
    };
    sdk: {
      input: AddAttachmentsToSetCommandInput;
      output: AddAttachmentsToSetCommandOutput;
    };
  };
}
