// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateResolverTypeRequest, UpdateResolverTypeResponse } from "../models/models_0";
import { UpdateResolverType$ } from "../schemas/schemas_0";
import type { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateResolverTypeCommand}.
 */
export interface UpdateResolverTypeCommandInput extends UpdateResolverTypeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateResolverTypeCommand}.
 */
export interface UpdateResolverTypeCommandOutput extends UpdateResolverTypeResponse, __MetadataBearer {}

/**
 * <p>Updates the resolver type for a case.</p> <important> <p>This is a one-way action and cannot be reversed.</p> </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, UpdateResolverTypeCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, UpdateResolverTypeCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // UpdateResolverTypeRequest
 *   caseId: "STRING_VALUE", // required
 *   resolverType: "AWS" || "Self", // required
 * };
 * const command = new UpdateResolverTypeCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResolverTypeResponse
 * //   caseId: "STRING_VALUE", // required
 * //   caseStatus: "Submitted" || "Acknowledged" || "Detection and Analysis" || "Containment, Eradication and Recovery" || "Post-incident Activities" || "Ready to Close" || "Closed",
 * //   resolverType: "AWS" || "Self",
 * // };
 *
 * ```
 *
 * @param UpdateResolverTypeCommandInput - {@link UpdateResolverTypeCommandInput}
 * @returns {@link UpdateResolverTypeCommandOutput}
 * @see {@link UpdateResolverTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateResolverTypeCommandOutput} for command's `response` shape.
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
 * @example Invoke UpdateResolverType
 * ```javascript
 * //
 * const input = {
 *   caseId: "8403556009",
 *   resolverType: "AWS"
 * };
 * const command = new UpdateResolverTypeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   caseId: "8403556009",
 *   caseStatus: "Detection and Analysis",
 *   resolverType: "AWS"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateResolverTypeCommand extends $Command
  .classBuilder<
    UpdateResolverTypeCommandInput,
    UpdateResolverTypeCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "UpdateResolverType", {})
  .n("SecurityIRClient", "UpdateResolverTypeCommand")
  .sc(UpdateResolverType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResolverTypeRequest;
      output: UpdateResolverTypeResponse;
    };
    sdk: {
      input: UpdateResolverTypeCommandInput;
      output: UpdateResolverTypeCommandOutput;
    };
  };
}
