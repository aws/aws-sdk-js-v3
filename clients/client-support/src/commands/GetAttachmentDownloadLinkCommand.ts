// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAttachmentDownloadLinkRequest, GetAttachmentDownloadLinkResponse } from "../models/models_0";
import { GetAttachmentDownloadLink$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAttachmentDownloadLinkCommand}.
 */
export interface GetAttachmentDownloadLinkCommandInput extends GetAttachmentDownloadLinkRequest {}
/**
 * @public
 *
 * The output of {@link GetAttachmentDownloadLinkCommand}.
 */
export interface GetAttachmentDownloadLinkCommandOutput extends GetAttachmentDownloadLinkResponse, __MetadataBearer {}

/**
 * <p>Returns a presigned download URL for an attachment that is associated with a case
 *          communication. The download link works for an attachment of any size, including attachments
 *          added through <code>AddAttachmentsToSet</code> and attachments uploaded through <a>GetAttachmentUploadLinks</a>. The download URL is time-limited and expires at the
 *          date and time indicated in the <code>downloadUrl</code> response field. Download the
 *          attachment from the URL before it expires.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support
 *                         API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.</p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have an
 *                         Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, GetAttachmentDownloadLinkCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, GetAttachmentDownloadLinkCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // GetAttachmentDownloadLinkRequest
 *   attachmentId: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new GetAttachmentDownloadLinkCommand(input);
 * const response = await client.send(command);
 * // { // GetAttachmentDownloadLinkResponse
 * //   fileName: "STRING_VALUE", // required
 * //   downloadUrl: { // DownloadUrl
 * //     url: "STRING_VALUE", // required
 * //     expiryDate: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAttachmentDownloadLinkCommandInput - {@link GetAttachmentDownloadLinkCommandInput}
 * @returns {@link GetAttachmentDownloadLinkCommandOutput}
 * @see {@link GetAttachmentDownloadLinkCommandInput} for command's `input` shape.
 * @see {@link GetAttachmentDownloadLinkCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link AttachmentIdNotFound} (client fault)
 *  <p>An attachment with the specified ID could not be found.</p>
 *
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The request was valid, but the operation wasn't performed because <code>dryRun</code> was
 *          set to <code>true</code>.</p>
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
export class GetAttachmentDownloadLinkCommand extends command<GetAttachmentDownloadLinkCommandInput, GetAttachmentDownloadLinkCommandOutput>(
  _ep0,
  _mw0,
  "GetAttachmentDownloadLink",
  GetAttachmentDownloadLink$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAttachmentDownloadLinkRequest;
      output: GetAttachmentDownloadLinkResponse;
    };
    sdk: {
      input: GetAttachmentDownloadLinkCommandInput;
      output: GetAttachmentDownloadLinkCommandOutput;
    };
  };
}
