// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateResolverTypeRequest, UpdateResolverTypeResponse } from "../models/models_0";
import { de_UpdateResolverTypeCommand, se_UpdateResolverTypeCommand } from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

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
 * <p>Grants permission to update the resolver type for a case.</p>
 *          <important>
 *             <p>This is a one-way action and cannot be reversed.</p>
 *          </important>
 *          <p>Options include self-supported &gt; AWS-supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, UpdateResolverTypeCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, UpdateResolverTypeCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
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
 * @public
 * @example Invoke UpdateResolverType
 * ```javascript
 * //
 * const input = {
 *   "caseId": "8403556009",
 *   "resolverType": "AWS"
 * };
 * const command = new UpdateResolverTypeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "caseId": "8403556009",
 *   "caseStatus": "Detection and Analysis",
 *   "resolverType": "AWS"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityIncidentResponse", "UpdateResolverType", {})
  .n("SecurityIRClient", "UpdateResolverTypeCommand")
  .f(void 0, void 0)
  .ser(se_UpdateResolverTypeCommand)
  .de(de_UpdateResolverTypeCommand)
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
