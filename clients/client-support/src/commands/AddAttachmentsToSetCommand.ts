// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddAttachmentsToSetRequest, AddAttachmentsToSetResponse } from "../models/models_0";
import { AddAttachmentsToSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Adds one or more attachments to an attachment set.
 *
 * An attachment set is a temporary container for attachments that you add to a case or case communication. The set is available for 1 hour after it's created. The `expiryTime` returned in the response is when the set expires.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
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
 *   dryRun: true || false,
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
 *
 * The limit for the number of attachment sets created in a short period of time has been exceeded.
 *
 * @throws {@link AttachmentSetExpired} (client fault)
 *
 * The expiration time of the attachment set has passed. The set expires 1 hour after it is created.
 *
 * @throws {@link AttachmentSetIdNotFound} (client fault)
 *
 * An attachment set with the specified ID could not be found.
 *
 * @throws {@link AttachmentSetSizeLimitExceeded} (client fault)
 *
 * A limit for the size of an attachment set has been exceeded. The limits are three attachments and 5 MB per attachment.
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
export class AddAttachmentsToSetCommand extends command<AddAttachmentsToSetCommandInput, AddAttachmentsToSetCommandOutput>(
  _ep0,
  _mw0,
  "AddAttachmentsToSet",
  AddAttachmentsToSet$
) {
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
