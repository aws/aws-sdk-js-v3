// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutComplianceInquiryFeedbackRequest, PutComplianceInquiryFeedbackResponse } from "../models/models_0";
import { PutComplianceInquiryFeedback$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutComplianceInquiryFeedbackCommand}.
 */
export interface PutComplianceInquiryFeedbackCommandInput extends PutComplianceInquiryFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link PutComplianceInquiryFeedbackCommand}.
 */
export interface PutComplianceInquiryFeedbackCommandOutput extends PutComplianceInquiryFeedbackResponse, __MetadataBearer {}

/**
 * <p>Submits feedback on a compliance inquiry response.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, PutComplianceInquiryFeedbackCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, PutComplianceInquiryFeedbackCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // PutComplianceInquiryFeedbackRequest
 *   complianceInquiryId: "STRING_VALUE", // required
 *   queryIdentifier: Number("int"),
 *   rating: "THUMBS_UP" || "THUMBS_DOWN", // required
 *   responseRevisionId: Number("int"),
 *   reasonCodes: [ // FeedbackReasonCodeList
 *     "OTHER" || "PARTIAL_RESPONSE" || "IRRELEVANT_RESPONSE",
 *   ],
 *   comment: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutComplianceInquiryFeedbackCommand(input);
 * const response = await client.send(command);
 * // { // PutComplianceInquiryFeedbackResponse
 * //   submittedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PutComplianceInquiryFeedbackCommandInput - {@link PutComplianceInquiryFeedbackCommandInput}
 * @returns {@link PutComplianceInquiryFeedbackCommandOutput}
 * @see {@link PutComplianceInquiryFeedbackCommandInput} for command's `input` shape.
 * @see {@link PutComplianceInquiryFeedbackCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PutComplianceInquiryFeedbackCommand extends command<PutComplianceInquiryFeedbackCommandInput, PutComplianceInquiryFeedbackCommandOutput>(
  _ep0,
  _mw0,
  "PutComplianceInquiryFeedback",
  PutComplianceInquiryFeedback$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutComplianceInquiryFeedbackRequest;
      output: PutComplianceInquiryFeedbackResponse;
    };
    sdk: {
      input: PutComplianceInquiryFeedbackCommandInput;
      output: PutComplianceInquiryFeedbackCommandOutput;
    };
  };
}
