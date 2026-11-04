// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCaseStatusRequest, UpdateCaseStatusResponse } from "../models/models_0";
import { UpdateCaseStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCaseStatusCommand}.
 */
export interface UpdateCaseStatusCommandInput extends UpdateCaseStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCaseStatusCommand}.
 */
export interface UpdateCaseStatusCommandOutput extends UpdateCaseStatusResponse, __MetadataBearer {}

/**
 * Updates the state transitions for a designated cases.
 *
 * **Self-managed**: the following states are available for self-managed cases.
 *
 * - Submitted → Detection and Analysis
 * - Detection and Analysis → Containment, Eradication, and Recovery
 * - Detection and Analysis → Post-incident Activities
 * - Containment, Eradication, and Recovery → Detection and Analysis
 * - Containment, Eradication, and Recovery → Post-incident Activities
 * - Post-incident Activities → Containment, Eradication, and Recovery
 * - Post-incident Activities → Detection and Analysis
 * - Any → Closed
 *
 * **AWS supported**: You must use the `CloseCase` API to close.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, UpdateCaseStatusCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, UpdateCaseStatusCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // UpdateCaseStatusRequest
 *   caseId: "STRING_VALUE", // required
 *   caseStatus: "Submitted" || "Detection and Analysis" || "Containment, Eradication and Recovery" || "Post-incident Activities", // required
 * };
 * const command = new UpdateCaseStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCaseStatusResponse
 * //   caseStatus: "Submitted" || "Detection and Analysis" || "Containment, Eradication and Recovery" || "Post-incident Activities",
 * // };
 *
 * ```
 *
 * @param UpdateCaseStatusCommandInput - {@link UpdateCaseStatusCommandInput}
 * @returns {@link UpdateCaseStatusCommandOutput}
 * @see {@link UpdateCaseStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateCaseStatusCommandOutput} for command's `response` shape.
 * @see {@link SecurityIRClientResolvedConfig | config} for SecurityIRClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * @throws {@link ConflictException} (client fault)
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * @throws {@link InvalidTokenException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link SecurityIRServiceException}
 *
 * Base exception class for all service exceptions from SecurityIR service.
 *
 * @example Invoke UpdateCaseStatus```javascript
 * //
 * const input = {
 *   caseId: "8403556009",
 *   caseStatus: "Post-incident Activities"
 * };
 * const command = new UpdateCaseStatusCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   caseStatus: "Post-incident Activities"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateCaseStatusCommand extends command<UpdateCaseStatusCommandInput, UpdateCaseStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCaseStatus",
  UpdateCaseStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCaseStatusRequest;
      output: UpdateCaseStatusResponse;
    };
    sdk: {
      input: UpdateCaseStatusCommandInput;
      output: UpdateCaseStatusCommandOutput;
    };
  };
}
