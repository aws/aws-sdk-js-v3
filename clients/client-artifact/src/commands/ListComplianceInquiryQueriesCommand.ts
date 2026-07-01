// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListComplianceInquiryQueriesRequest, ListComplianceInquiryQueriesResponse } from "../models/models_0";
import { ListComplianceInquiryQueries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComplianceInquiryQueriesCommand}.
 */
export interface ListComplianceInquiryQueriesCommandInput extends ListComplianceInquiryQueriesRequest {}
/**
 * @public
 *
 * The output of {@link ListComplianceInquiryQueriesCommand}.
 */
export interface ListComplianceInquiryQueriesCommandOutput extends ListComplianceInquiryQueriesResponse, __MetadataBearer {}

/**
 * <p>List queries within a compliance inquiry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, ListComplianceInquiryQueriesCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, ListComplianceInquiryQueriesCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // ListComplianceInquiryQueriesRequest
 *   complianceInquiryId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListComplianceInquiryQueriesCommand(input);
 * const response = await client.send(command);
 * // { // ListComplianceInquiryQueriesResponse
 * //   queries: [ // QueriesList
 * //     { // QuerySummary
 * //       queryIdentifier: Number("int"), // required
 * //       query: "STRING_VALUE", // required
 * //       response: "STRING_VALUE",
 * //       reviewType: "HUMAN" || "AI",
 * //       citations: [ // CitationList
 * //         { // Citation
 * //           sourceLabel: "STRING_VALUE",
 * //           sourceContent: "STRING_VALUE",
 * //           sourceLink: "STRING_VALUE",
 * //         },
 * //       ],
 * //       status: "PROCESSING" || "COMPLETED" || "FAILED", // required
 * //       statusMessage: "Query processing is complete." || "Query processing is in-progress." || "An internal error occurred while processing the query. Try again at a later time." || "Query is pending human review." || "Query contains restricted or unsupported content.", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedResponseVersions: [ // ResponseVersionList
 * //         { // ResponseVersion
 * //           responseText: "STRING_VALUE", // required
 * //           timestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComplianceInquiryQueriesCommandInput - {@link ListComplianceInquiryQueriesCommandInput}
 * @returns {@link ListComplianceInquiryQueriesCommandOutput}
 * @see {@link ListComplianceInquiryQueriesCommandInput} for command's `input` shape.
 * @see {@link ListComplianceInquiryQueriesCommandOutput} for command's `response` shape.
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
 * @example Invoke ListComplianceInquiryQueries operation
 * ```javascript
 * // Lists queries within a compliance inquiry.
 * const input = {
 *   complianceInquiryId: "compliance-inquiry-abcdef0123456789",
 *   maxResults: 10
 * };
 * const command = new ListComplianceInquiryQueriesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   queries: [
 *     {
 *       citations: [
 *         {
 *           sourceContent: "Relevant compliance content...",
 *           sourceLabel: "SOC 2 Type II Report",
 *           sourceLink: "https://example.com/soc2"
 *         }
 *       ],
 *       createdAt: "2026-03-24T12:00:00Z",
 *       query: "Is my workload compliant with SOC 2?",
 *       queryIdentifier: 1,
 *       response: "Based on the available compliance documentation...",
 *       reviewType: "AI",
 *       status: "COMPLETED",
 *       statusMessage: "Query processing is complete."
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListComplianceInquiryQueriesCommand extends command<ListComplianceInquiryQueriesCommandInput, ListComplianceInquiryQueriesCommandOutput>(
  _ep0,
  _mw0,
  "ListComplianceInquiryQueries",
  ListComplianceInquiryQueries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComplianceInquiryQueriesRequest;
      output: ListComplianceInquiryQueriesResponse;
    };
    sdk: {
      input: ListComplianceInquiryQueriesCommandInput;
      output: ListComplianceInquiryQueriesCommandOutput;
    };
  };
}
