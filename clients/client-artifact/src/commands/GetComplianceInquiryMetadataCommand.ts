// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetComplianceInquiryMetadataRequest, GetComplianceInquiryMetadataResponse } from "../models/models_0";
import { GetComplianceInquiryMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetComplianceInquiryMetadataCommand}.
 */
export interface GetComplianceInquiryMetadataCommandInput extends GetComplianceInquiryMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetComplianceInquiryMetadataCommand}.
 */
export interface GetComplianceInquiryMetadataCommandOutput extends GetComplianceInquiryMetadataResponse, __MetadataBearer {}

/**
 * <p>Get the metadata for a single compliance inquiry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, GetComplianceInquiryMetadataCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, GetComplianceInquiryMetadataCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // GetComplianceInquiryMetadataRequest
 *   complianceInquiryId: "STRING_VALUE", // required
 * };
 * const command = new GetComplianceInquiryMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetComplianceInquiryMetadataResponse
 * //   complianceInquiryDetail: { // InquiryDetail
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     status: "PROCESSING" || "HUMAN_REVIEW" || "COMPLETED" || "FAILED", // required
 * //     statusMessage: "Compliance inquiry processing is complete." || "Malware was detected on the file. Provide a new file and try again." || "Compliance inquiry processing is in-progress." || "An internal error occurred while processing the inquiry. Try again at a later time." || "Human review is in progress." || "Compliance inquiry processing is complete. One or more queries encountered errors during processing.", // required
 * //     inputSource: "TEXT" || "FILE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     supportMode: "AI_ONLY" || "FULL_SUPPORT",
 * //   },
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetComplianceInquiryMetadataCommandInput - {@link GetComplianceInquiryMetadataCommandInput}
 * @returns {@link GetComplianceInquiryMetadataCommandOutput}
 * @see {@link GetComplianceInquiryMetadataCommandInput} for command's `input` shape.
 * @see {@link GetComplianceInquiryMetadataCommandOutput} for command's `response` shape.
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
 * @example Invoke GetComplianceInquiryMetadata operation
 * ```javascript
 * // Gets metadata for a compliance inquiry.
 * const input = {
 *   complianceInquiryId: "compliance-inquiry-abcdef0123456789"
 * };
 * const command = new GetComplianceInquiryMetadataCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   complianceInquiryDetail: {
 *     arn: "arn:aws:artifact:us-east-1:123456789012:compliance-inquiry/compliance-inquiry-abcdef0123456789",
 *     createdAt: "2026-03-24T12:00:00Z",
 *     id: "compliance-inquiry-abcdef0123456789",
 *     inputSource: "TEXT",
 *     name: "My Compliance Inquiry",
 *     status: "COMPLETED",
 *     statusMessage: "Compliance inquiry processing is complete.",
 *     supportMode: "AI_ONLY",
 *     updatedAt: "2026-03-24T12:05:00Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetComplianceInquiryMetadataCommand extends command<GetComplianceInquiryMetadataCommandInput, GetComplianceInquiryMetadataCommandOutput>(
  _ep0,
  _mw0,
  "GetComplianceInquiryMetadata",
  GetComplianceInquiryMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetComplianceInquiryMetadataRequest;
      output: GetComplianceInquiryMetadataResponse;
    };
    sdk: {
      input: GetComplianceInquiryMetadataCommandInput;
      output: GetComplianceInquiryMetadataCommandOutput;
    };
  };
}
