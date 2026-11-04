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
 * Adds additional customer communication to a Amazon Web Services Support case. Use the `caseId` parameter to identify the case to which to add communication. To list a set of email addresses to copy on the communication, use the `ccEmailAddresses` parameter. The `communicationBody` value contains the text of the communication.
 *
 * To attach files larger than 5 MB to the communication, use the `uploadIds` parameter.
 *
 * > **Important:**
 * >
 * > Amazon Web Services Support automatically redacts sensitive information from support cases to protect your data. The following information is replaced with `[REDACTED_BY_Amazon Web Services]` and is not stored:
 * >
 * > - Amazon Web Services secret keys - The complete key is replaced. Example: `[REDACTED_BY_Amazon Web Services]`
 * > - Private keys - The complete key is replaced. Example: `[REDACTED_BY_Amazon Web Services]`
 * > - Credit card numbers - The number is redacted, but the last 4 digits remain. Example: `[REDACTED_BY_Amazon Web Services]-7016`
 * >
 * > This sensitive information is never required by Amazon Web Services Support.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
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
 *
 * The expiration time of the attachment set has passed. The set expires 1 hour after it is created.
 *
 * @throws {@link AttachmentSetIdNotFound} (client fault)
 *
 * An attachment set with the specified ID could not be found.
 *
 * @throws {@link CaseIdNotFound} (client fault)
 *
 * The requested `caseId` couldn't be located.
 *
 * @throws {@link DryRunOperationException} (client fault)
 *
 * The request was valid, but the operation wasn't performed because `dryRun` was set to `true`.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An internal server error occurred.
 *
 * @throws {@link SupportServiceException}
 *
 * Base exception class for all service exceptions from Support service.
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
