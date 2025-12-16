// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateCaseStatusRequest, UpdateCaseStatusResponse } from "../models/models_0";
import { UpdateCaseStatus$ } from "../schemas/schemas_0";
import type { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the state transitions for a designated cases.</p> <p> <b>Self-managed</b>: the following states are available for self-managed cases. </p> <ul> <li> <p>Submitted → Detection and Analysis</p> </li> <li> <p>Detection and Analysis → Containment, Eradication, and Recovery</p> </li> <li> <p>Detection and Analysis → Post-incident Activities</p> </li> <li> <p>Containment, Eradication, and Recovery → Detection and Analysis</p> </li> <li> <p>Containment, Eradication, and Recovery → Post-incident Activities</p> </li> <li> <p>Post-incident Activities → Containment, Eradication, and Recovery</p> </li> <li> <p>Post-incident Activities → Detection and Analysis</p> </li> <li> <p>Any → Closed</p> </li> </ul> <p> <b>AWS supported</b>: You must use the <code>CloseCase</code> API to close. </p>
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
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIncidentResponseNotActiveException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link SecurityIRServiceException}
 * <p>Base exception class for all service exceptions from SecurityIR service.</p>
 *
 *
 * @example Invoke UpdateCaseStatus
 * ```javascript
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
export class UpdateCaseStatusCommand extends $Command
  .classBuilder<
    UpdateCaseStatusCommandInput,
    UpdateCaseStatusCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "UpdateCaseStatus", {})
  .n("SecurityIRClient", "UpdateCaseStatusCommand")
  .sc(UpdateCaseStatus$)
  .build() {
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
