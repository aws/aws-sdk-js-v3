// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExportComplianceInquiryRequest, ExportComplianceInquiryResponse } from "../models/models_0";
import { ExportComplianceInquiry$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExportComplianceInquiryCommand}.
 */
export interface ExportComplianceInquiryCommandInput extends ExportComplianceInquiryRequest {}
/**
 * @public
 *
 * The output of {@link ExportComplianceInquiryCommand}.
 */
export interface ExportComplianceInquiryCommandOutput extends ExportComplianceInquiryResponse, __MetadataBearer {}

/**
 * <p>Export a compliance inquiry report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, ExportComplianceInquiryCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, ExportComplianceInquiryCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // ExportComplianceInquiryRequest
 *   complianceInquiryId: "STRING_VALUE", // required
 *   queryIdentifiers: [ // QueryIdentifiersList
 *     Number("int"),
 *   ],
 *   includeCitations: true || false,
 * };
 * const command = new ExportComplianceInquiryCommand(input);
 * const response = await client.send(command);
 * // { // ExportComplianceInquiryResponse
 * //   documentPresignedUrl: "STRING_VALUE",
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ExportComplianceInquiryCommandInput - {@link ExportComplianceInquiryCommandInput}
 * @returns {@link ExportComplianceInquiryCommandOutput}
 * @see {@link ExportComplianceInquiryCommandInput} for command's `input` shape.
 * @see {@link ExportComplianceInquiryCommandOutput} for command's `response` shape.
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
 * @example Invoke ExportComplianceInquiry operation
 * ```javascript
 * // Exports a compliance inquiry report.
 * const input = {
 *   complianceInquiryId: "compliance-inquiry-abcdef0123456789",
 *   includeCitations: true,
 *   queryIdentifiers: [
 *     1,
 *     2
 *   ]
 * };
 * const command = new ExportComplianceInquiryCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   documentPresignedUrl: "https://s3.us-east-1.amazonaws.com/artifact-bucket/export.pdf?X-Amz-Signature=example"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ExportComplianceInquiryCommand extends command<ExportComplianceInquiryCommandInput, ExportComplianceInquiryCommandOutput>(
  _ep0,
  _mw0,
  "ExportComplianceInquiry",
  ExportComplianceInquiry$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportComplianceInquiryRequest;
      output: ExportComplianceInquiryResponse;
    };
    sdk: {
      input: ExportComplianceInquiryCommandInput;
      output: ExportComplianceInquiryCommandOutput;
    };
  };
}
