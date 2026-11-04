// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCasesRequest, DescribeCasesResponse } from "../models/models_0";
import { DescribeCases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCasesCommand}.
 */
export interface DescribeCasesCommandInput extends DescribeCasesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCasesCommand}.
 */
export interface DescribeCasesCommandOutput extends DescribeCasesResponse, __MetadataBearer {}

/**
 * Returns a list of cases that you specify by passing one or more case IDs. You can use the `afterTime` and `beforeTime` parameters to filter the cases by date. You can set values for the `includeResolvedCases` and `includeCommunications` parameters to specify how much information to return.
 *
 * The response returns the following in JSON format:
 *
 * - One or more [CaseDetails](https://docs.aws.amazon.com/awssupport/latest/APIReference/API_CaseDetails.html) data types.
 * - One or more `nextToken` values, which specify where to paginate the returned records represented by the `CaseDetails` objects.
 *
 * Case data is available for 24 months after creation. If a case was created more than 24 months ago, a request might return an error.
 *
 * > **Note:**
 * >
 * > - You must have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan to use the Amazon Web Services Support API. If you're in an Amazon Web Services Region that doesn't offer one of these Amazon Web Services Support plans, or if you haven't transitioned to one of these plans, you can use the Amazon Web Services Support API with a Business, Enterprise On-Ramp, or Enterprise Support plan.
 * > - If you call the Amazon Web Services Support API from an account that doesn't have an Amazon Web Services Business Support+, Amazon Web Services Enterprise Support, or Amazon Web Services Unified Operations plan, the `SubscriptionRequiredException` error message appears. For information about changing your support plan, see [Amazon Web Services Support](http://aws.amazon.com/premiumsupport/).
 *
 * > **Important:**
 * >
 * > Each Communication returned by this operation includes attachment information in two fields:
 * >
 * > - `attachmentSet`: returns only attachments that are 5 MB or smaller. Attachments larger than 5 MB are not included in this field.
 * > - `attachments`: returns all attachments regardless of size.
 * >
 * > Amazon Web Services recommends that you use the `attachments` field and download each attachment with GetAttachmentDownloadLink, which supports attachments of any size. The `attachmentSet` field and DescribeAttachment return only attachments that are 5 MB or smaller.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, DescribeCasesCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeCasesCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // DescribeCasesRequest
 *   caseIdList: [ // CaseIdList
 *     "STRING_VALUE",
 *   ],
 *   displayId: "STRING_VALUE",
 *   afterTime: "STRING_VALUE",
 *   beforeTime: "STRING_VALUE",
 *   includeResolvedCases: true || false,
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   language: "STRING_VALUE",
 *   includeCommunications: true || false,
 *   dryRun: true || false,
 * };
 * const command = new DescribeCasesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCasesResponse
 * //   cases: [ // CaseList
 * //     { // CaseDetails
 * //       caseId: "STRING_VALUE",
 * //       displayId: "STRING_VALUE",
 * //       subject: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       serviceCode: "STRING_VALUE",
 * //       categoryCode: "STRING_VALUE",
 * //       severityCode: "STRING_VALUE",
 * //       submittedBy: "STRING_VALUE",
 * //       timeCreated: "STRING_VALUE",
 * //       recentCommunications: { // RecentCaseCommunications
 * //         communications: [ // CommunicationList
 * //           { // Communication
 * //             caseId: "STRING_VALUE",
 * //             body: "STRING_VALUE",
 * //             submittedBy: "STRING_VALUE",
 * //             timeCreated: "STRING_VALUE",
 * //             attachments: [ // AttachmentSet
 * //               { // AttachmentDetails
 * //                 attachmentId: "STRING_VALUE",
 * //                 fileName: "STRING_VALUE",
 * //               },
 * //             ],
 * //             attachmentSet: [
 * //               {
 * //                 attachmentId: "STRING_VALUE",
 * //                 fileName: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         nextToken: "STRING_VALUE",
 * //       },
 * //       ccEmailAddresses: [ // CcEmailAddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       language: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCasesCommandInput - {@link DescribeCasesCommandInput}
 * @returns {@link DescribeCasesCommandOutput}
 * @see {@link DescribeCasesCommandInput} for command's `input` shape.
 * @see {@link DescribeCasesCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
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
export class DescribeCasesCommand extends command<DescribeCasesCommandInput, DescribeCasesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCases",
  DescribeCases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCasesRequest;
      output: DescribeCasesResponse;
    };
    sdk: {
      input: DescribeCasesCommandInput;
      output: DescribeCasesCommandOutput;
    };
  };
}
