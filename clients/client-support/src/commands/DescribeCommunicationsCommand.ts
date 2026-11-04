// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCommunicationsRequest, DescribeCommunicationsResponse } from "../models/models_0";
import { DescribeCommunications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCommunicationsCommand}.
 */
export interface DescribeCommunicationsCommandInput extends DescribeCommunicationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCommunicationsCommand}.
 */
export interface DescribeCommunicationsCommandOutput extends DescribeCommunicationsResponse, __MetadataBearer {}

/**
 * Returns communications and attachments for one or more support cases. Use the `afterTime` and `beforeTime` parameters to filter by date. You can use the `caseId` parameter to restrict the results to a specific case.
 *
 * Case data is available for 24 months after creation. If a case was created more than 24 months ago, a request for data might cause an error.
 *
 * You can use the `maxResults` and `nextToken` parameters to control the pagination of the results. Set `maxResults` to the number of cases that you want to display on each page, and use `nextToken` to specify the resumption of pagination.
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
 * import { SupportClient, DescribeCommunicationsCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeCommunicationsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // DescribeCommunicationsRequest
 *   caseId: "STRING_VALUE", // required
 *   beforeTime: "STRING_VALUE",
 *   afterTime: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   dryRun: true || false,
 * };
 * const command = new DescribeCommunicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCommunicationsResponse
 * //   communications: [ // CommunicationList
 * //     { // Communication
 * //       caseId: "STRING_VALUE",
 * //       body: "STRING_VALUE",
 * //       submittedBy: "STRING_VALUE",
 * //       timeCreated: "STRING_VALUE",
 * //       attachments: [ // AttachmentSet
 * //         { // AttachmentDetails
 * //           attachmentId: "STRING_VALUE",
 * //           fileName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       attachmentSet: [
 * //         {
 * //           attachmentId: "STRING_VALUE",
 * //           fileName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCommunicationsCommandInput - {@link DescribeCommunicationsCommandInput}
 * @returns {@link DescribeCommunicationsCommandOutput}
 * @see {@link DescribeCommunicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommunicationsCommandOutput} for command's `response` shape.
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
export class DescribeCommunicationsCommand extends command<DescribeCommunicationsCommandInput, DescribeCommunicationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCommunications",
  DescribeCommunications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCommunicationsRequest;
      output: DescribeCommunicationsResponse;
    };
    sdk: {
      input: DescribeCommunicationsCommandInput;
      output: DescribeCommunicationsCommandOutput;
    };
  };
}
