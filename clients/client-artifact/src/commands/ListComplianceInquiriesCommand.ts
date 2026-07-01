// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListComplianceInquiriesRequest, ListComplianceInquiriesResponse } from "../models/models_0";
import { ListComplianceInquiries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComplianceInquiriesCommand}.
 */
export interface ListComplianceInquiriesCommandInput extends ListComplianceInquiriesRequest {}
/**
 * @public
 *
 * The output of {@link ListComplianceInquiriesCommand}.
 */
export interface ListComplianceInquiriesCommandOutput extends ListComplianceInquiriesResponse, __MetadataBearer {}

/**
 * <p>List available compliance inquiries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, ListComplianceInquiriesCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, ListComplianceInquiriesCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // ListComplianceInquiriesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListComplianceInquiriesCommand(input);
 * const response = await client.send(command);
 * // { // ListComplianceInquiriesResponse
 * //   complianceInquiries: [ // InquiriesList
 * //     { // InquirySummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       status: "PROCESSING" || "HUMAN_REVIEW" || "COMPLETED" || "FAILED", // required
 * //       statusMessage: "Compliance inquiry processing is complete." || "Malware was detected on the file. Provide a new file and try again." || "Compliance inquiry processing is in-progress." || "An internal error occurred while processing the inquiry. Try again at a later time." || "Human review is in progress." || "Compliance inquiry processing is complete. One or more queries encountered errors during processing.", // required
 * //       inputSource: "TEXT" || "FILE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComplianceInquiriesCommandInput - {@link ListComplianceInquiriesCommandInput}
 * @returns {@link ListComplianceInquiriesCommandOutput}
 * @see {@link ListComplianceInquiriesCommandInput} for command's `input` shape.
 * @see {@link ListComplianceInquiriesCommandOutput} for command's `response` shape.
 * @see {@link ArtifactClientResolvedConfig | config} for ArtifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown server exception has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Request fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ArtifactServiceException}
 * <p>Base exception class for all service exceptions from Artifact service.</p>
 *
 *
 * @example Invoke ListComplianceInquiries operation
 * ```javascript
 * // Lists all compliance inquiries.
 * const input = {
 *   maxResults: 10
 * };
 * const command = new ListComplianceInquiriesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   complianceInquiries: [
 *     {
 *       arn: "arn:aws:artifact:us-east-1:123456789012:compliance-inquiry/compliance-inquiry-abcdef0123456789",
 *       createdAt: "2026-03-24T12:00:00Z",
 *       id: "compliance-inquiry-abcdef0123456789",
 *       inputSource: "TEXT",
 *       name: "My Compliance Inquiry",
 *       status: "COMPLETED",
 *       statusMessage: "Compliance inquiry processing is complete."
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListComplianceInquiriesCommand extends command<ListComplianceInquiriesCommandInput, ListComplianceInquiriesCommandOutput>(
  _ep0,
  _mw0,
  "ListComplianceInquiries",
  ListComplianceInquiries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComplianceInquiriesRequest;
      output: ListComplianceInquiriesResponse;
    };
    sdk: {
      input: ListComplianceInquiriesCommandInput;
      output: ListComplianceInquiriesCommandOutput;
    };
  };
}
