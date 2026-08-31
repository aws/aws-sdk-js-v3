// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddCommunicationToCaseRequest, AddCommunicationToCaseResponse } from "../models/models_0";
import { AddCommunicationToCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddCommunicationToCaseCommand}.
 */
export interface AddCommunicationToCaseCommandInput extends AddCommunicationToCaseRequest {}
/**
 * @public
 *
 * The output of {@link AddCommunicationToCaseCommand}.
 */
export interface AddCommunicationToCaseCommandOutput extends AddCommunicationToCaseResponse, __MetadataBearer {}

/**
 * <p>Adds additional customer communication to a Amazon Web Services Support case. Use the <code>caseId</code>
 *             parameter to identify the case to which to add communication. To list a set of
 *             email addresses to copy on the communication, use the <code>ccEmailAddresses</code>
 *             parameter. The <code>communicationBody</code> value contains the text of the
 *             communication.</p>
 *          <p>To attach files larger than 5 MB to the communication, use the <code>uploadIds</code> parameter.</p>
 *          <important>
 *             <p>Amazon Web Services Support automatically redacts sensitive information from support cases to protect your data. The following information is replaced with <code>[REDACTED_BY_Amazon Web Services]</code> and is not stored:</p>
 *             <ul>
 *                <li>
 *                   <p>Amazon Web Services secret keys - The complete key is replaced. Example: <code>[REDACTED_BY_Amazon Web Services]</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Private keys - The complete key is replaced. Example: <code>[REDACTED_BY_Amazon Web Services]</code>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>Credit card numbers - The number is redacted, but the last 4 digits remain. Example: <code>[REDACTED_BY_Amazon Web Services]-7016</code>
 *                   </p>
 *                </li>
 *             </ul>
 *             <p>This sensitive information is never required by Amazon Web Services Support.</p>
 *          </important>
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
 * import { SupportClient, AddCommunicationToCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddCommunicationToCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // AddCommunicationToCaseRequest
 *   caseId: "STRING_VALUE",
 *   communicationBody: "STRING_VALUE", // required
 *   ccEmailAddresses: [ // CcEmailAddressList
 *     "STRING_VALUE",
 *   ],
 *   attachmentSetId: "STRING_VALUE",
 *   uploadIds: [ // UploadIds
 *     "STRING_VALUE",
 *   ],
 *   dryRun: true || false,
 * };
 * const command = new AddCommunicationToCaseCommand(input);
 * const response = await client.send(command);
 * // { // AddCommunicationToCaseResponse
 * //   result: true || false,
 * // };
 *
 * ```
 *
 * @param AddCommunicationToCaseCommandInput - {@link AddCommunicationToCaseCommandInput}
 * @returns {@link AddCommunicationToCaseCommandOutput}
 * @see {@link AddCommunicationToCaseCommandInput} for command's `input` shape.
 * @see {@link AddCommunicationToCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link AttachmentSetExpired} (client fault)
 *  <p>The expiration time of the attachment set has passed. The set expires 1 hour after it
 *             is created.</p>
 *
 * @throws {@link AttachmentSetIdNotFound} (client fault)
 *  <p>An attachment set with the specified ID could not be found.</p>
 *
 * @throws {@link CaseIdNotFound} (client fault)
 *  <p>The requested <code>caseId</code> couldn't be located.</p>
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
export class AddCommunicationToCaseCommand extends command<AddCommunicationToCaseCommandInput, AddCommunicationToCaseCommandOutput>(
  _ep0,
  _mw0,
  "AddCommunicationToCase",
  AddCommunicationToCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddCommunicationToCaseRequest;
      output: AddCommunicationToCaseResponse;
    };
    sdk: {
      input: AddCommunicationToCaseCommandInput;
      output: AddCommunicationToCaseCommandOutput;
    };
  };
}
