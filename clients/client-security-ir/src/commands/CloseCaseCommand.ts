// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CloseCaseRequest, CloseCaseResponse } from "../models/models_0";
import { de_CloseCaseCommand, se_CloseCaseCommand } from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CloseCaseCommand}.
 */
export interface CloseCaseCommandInput extends CloseCaseRequest {}
/**
 * @public
 *
 * The output of {@link CloseCaseCommand}.
 */
export interface CloseCaseCommandOutput extends CloseCaseResponse, __MetadataBearer {}

/**
 * <p>Grants permission to close an existing case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, CloseCaseCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, CloseCaseCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * const client = new SecurityIRClient(config);
 * const input = { // CloseCaseRequest
 *   caseId: "STRING_VALUE", // required
 * };
 * const command = new CloseCaseCommand(input);
 * const response = await client.send(command);
 * // { // CloseCaseResponse
 * //   caseStatus: "Submitted" || "Acknowledged" || "Detection and Analysis" || "Containment, Eradication and Recovery" || "Post-incident Activities" || "Ready to Close" || "Closed",
 * //   closedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CloseCaseCommandInput - {@link CloseCaseCommandInput}
 * @returns {@link CloseCaseCommandOutput}
 * @see {@link CloseCaseCommandInput} for command's `input` shape.
 * @see {@link CloseCaseCommandOutput} for command's `response` shape.
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
 * @example Invoke CloseCase
 * ```javascript
 * //
 * const input = {
 *   "caseId": "8403556009"
 * };
 * const command = new CloseCaseCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "caseStatus": "Closed",
 *   "closedDate": "2024-02-27T17:01:33.000Z"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class CloseCaseCommand extends $Command
  .classBuilder<
    CloseCaseCommandInput,
    CloseCaseCommandOutput,
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
  .s("SecurityIncidentResponse", "CloseCase", {})
  .n("SecurityIRClient", "CloseCaseCommand")
  .f(void 0, void 0)
  .ser(se_CloseCaseCommand)
  .de(de_CloseCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CloseCaseRequest;
      output: CloseCaseResponse;
    };
    sdk: {
      input: CloseCaseCommandInput;
      output: CloseCaseCommandOutput;
    };
  };
}
