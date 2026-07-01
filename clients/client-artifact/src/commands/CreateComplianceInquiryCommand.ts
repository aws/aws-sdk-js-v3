// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateComplianceInquiryRequest, CreateComplianceInquiryResponse } from "../models/models_0";
import { CreateComplianceInquiry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateComplianceInquiryCommand}.
 */
export interface CreateComplianceInquiryCommandInput extends CreateComplianceInquiryRequest {}
/**
 * @public
 *
 * The output of {@link CreateComplianceInquiryCommand}.
 */
export interface CreateComplianceInquiryCommandOutput extends CreateComplianceInquiryResponse, __MetadataBearer {}

/**
 * <p>Create a new compliance inquiry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, CreateComplianceInquiryCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, CreateComplianceInquiryCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // CreateComplianceInquiryRequest
 *   name: "STRING_VALUE", // required
 *   inquiryContent: { // InquiryContent Union: only one key present
 *     query: "STRING_VALUE",
 *     fileContent: { // InquiryFileContent
 *       fileSections: [ // FileSectionList
 *         "STRING_VALUE",
 *       ],
 *       content: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")       // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   supportMode: "AI_ONLY" || "FULL_SUPPORT",
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateComplianceInquiryCommand(input);
 * const response = await client.send(command);
 * // { // CreateComplianceInquiryResponse
 * //   complianceInquirySummary: { // InquirySummary
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     status: "PROCESSING" || "HUMAN_REVIEW" || "COMPLETED" || "FAILED", // required
 * //     statusMessage: "Compliance inquiry processing is complete." || "Malware was detected on the file. Provide a new file and try again." || "Compliance inquiry processing is in-progress." || "An internal error occurred while processing the inquiry. Try again at a later time." || "Human review is in progress." || "Compliance inquiry processing is complete. One or more queries encountered errors during processing.", // required
 * //     inputSource: "TEXT" || "FILE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //   },
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateComplianceInquiryCommandInput - {@link CreateComplianceInquiryCommandInput}
 * @returns {@link CreateComplianceInquiryCommandOutput}
 * @see {@link CreateComplianceInquiryCommandInput} for command's `input` shape.
 * @see {@link CreateComplianceInquiryCommandOutput} for command's `response` shape.
 * @see {@link ArtifactClientResolvedConfig | config} for ArtifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Request to create/modify content would result in a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown server exception has occurred.</p>
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
 * @example Invoke CreateComplianceInquiry operation
 * ```javascript
 * // Creates a compliance inquiry with a single text query.
 * const input = {
 *   clientToken: "unique-client-token-1234",
 *   inquiryContent: {
 *     query: "Is my workload compliant with SOC 2?"
 *   },
 *   name: "My Compliance Inquiry",
 *   supportMode: "AI_ONLY"
 * };
 * const command = new CreateComplianceInquiryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   complianceInquirySummary: {
 *     arn: "arn:aws:artifact:us-east-1:123456789012:compliance-inquiry/compliance-inquiry-abcdef0123456789",
 *     createdAt: "2026-03-24T12:00:00Z",
 *     id: "compliance-inquiry-abcdef0123456789",
 *     inputSource: "TEXT",
 *     name: "My Compliance Inquiry",
 *     status: "PROCESSING",
 *     statusMessage: "Compliance inquiry processing is in-progress."
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateComplianceInquiryCommand extends command<CreateComplianceInquiryCommandInput, CreateComplianceInquiryCommandOutput>(
  _ep0,
  _mw0,
  "CreateComplianceInquiry",
  CreateComplianceInquiry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateComplianceInquiryRequest;
      output: CreateComplianceInquiryResponse;
    };
    sdk: {
      input: CreateComplianceInquiryCommandInput;
      output: CreateComplianceInquiryCommandOutput;
    };
  };
}
