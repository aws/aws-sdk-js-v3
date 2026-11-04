// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCaseRequest, CreateCaseResponse } from "../models/models_0";
import { CreateCase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandInput extends CreateCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandOutput extends CreateCaseResponse, __MetadataBearer {}

/**
 * Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case in the Amazon Web Services Support Center [Create Case](https://console.aws.amazon.com/support/home#/case/create) page.
 *
 * The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a service limit increase in the following ways:
 *
 * - Submit a request from the Amazon Web Services Support Center [Create Case](https://console.aws.amazon.com/support/home#/case/create) page.
 * - Use the Service Quotas [RequestServiceQuotaIncrease](https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html) operation.
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
 * A successful `CreateCase` request returns a Amazon Web Services Support case number. You can use the DescribeCases operation and specify the case number to get existing Amazon Web Services Support cases. After you create a case, use the AddCommunicationToCase operation to add additional communication or attachments to an existing case.
 *
 * The `caseId` is separate from the `displayId` that appears in the [Amazon Web Services Support Center](https://console.aws.amazon.com/support). Use the DescribeCases operation to get the `displayId`.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, CreateCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, CreateCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // CreateCaseRequest
 *   subject: "STRING_VALUE", // required
 *   serviceCode: "STRING_VALUE",
 *   severityCode: "STRING_VALUE",
 *   categoryCode: "STRING_VALUE",
 *   communicationBody: "STRING_VALUE", // required
 *   ccEmailAddresses: [ // CcEmailAddressList
 *     "STRING_VALUE",
 *   ],
 *   language: "STRING_VALUE",
 *   issueType: "STRING_VALUE",
 *   attachmentSetId: "STRING_VALUE",
 *   uploadIds: [ // UploadIds
 *     "STRING_VALUE",
 *   ],
 *   dryRun: true || false,
 * };
 * const command = new CreateCaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateCaseResponse
 * //   caseId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCaseCommandInput - {@link CreateCaseCommandInput}
 * @returns {@link CreateCaseCommandOutput}
 * @see {@link CreateCaseCommandInput} for command's `input` shape.
 * @see {@link CreateCaseCommandOutput} for command's `response` shape.
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
 * @throws {@link CaseCreationLimitExceeded} (client fault)
 *
 * The case creation limit for the account has been exceeded.
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
export class CreateCaseCommand extends command<CreateCaseCommandInput, CreateCaseCommandOutput>(
  _ep0,
  _mw0,
  "CreateCase",
  CreateCase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCaseRequest;
      output: CreateCaseResponse;
    };
    sdk: {
      input: CreateCaseCommandInput;
      output: CreateCaseCommandOutput;
    };
  };
}
