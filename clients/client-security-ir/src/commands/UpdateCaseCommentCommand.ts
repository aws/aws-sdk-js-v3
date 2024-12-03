// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateCaseCommentRequest,
  UpdateCaseCommentRequestFilterSensitiveLog,
  UpdateCaseCommentResponse,
  UpdateCaseCommentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateCaseCommentCommand, se_UpdateCaseCommentCommand } from "../protocols/Aws_restJson1";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCaseCommentCommand}.
 */
export interface UpdateCaseCommentCommandInput extends UpdateCaseCommentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCaseCommentCommand}.
 */
export interface UpdateCaseCommentCommandOutput extends UpdateCaseCommentResponse, __MetadataBearer {}

/**
 * <p>Grants permission to update an existing case comment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, UpdateCaseCommentCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, UpdateCaseCommentCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * const client = new SecurityIRClient(config);
 * const input = { // UpdateCaseCommentRequest
 *   caseId: "STRING_VALUE", // required
 *   commentId: "STRING_VALUE", // required
 *   body: "STRING_VALUE", // required
 * };
 * const command = new UpdateCaseCommentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCaseCommentResponse
 * //   commentId: "STRING_VALUE", // required
 * //   body: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCaseCommentCommandInput - {@link UpdateCaseCommentCommandInput}
 * @returns {@link UpdateCaseCommentCommandOutput}
 * @see {@link UpdateCaseCommentCommandInput} for command's `input` shape.
 * @see {@link UpdateCaseCommentCommandOutput} for command's `response` shape.
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
 * @example Invoke UpdateCaseComment
 * ```javascript
 * //
 * const input = {
 *   "body": "Updated case comment.",
 *   "caseId": "8403556009",
 *   "commentId": "000000"
 * };
 * const command = new UpdateCaseCommentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "body": "Updated case comment.",
 *   "commentId": "000000"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class UpdateCaseCommentCommand extends $Command
  .classBuilder<
    UpdateCaseCommentCommandInput,
    UpdateCaseCommentCommandOutput,
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
  .s("SecurityIncidentResponse", "UpdateCaseComment", {})
  .n("SecurityIRClient", "UpdateCaseCommentCommand")
  .f(UpdateCaseCommentRequestFilterSensitiveLog, UpdateCaseCommentResponseFilterSensitiveLog)
  .ser(se_UpdateCaseCommentCommand)
  .de(de_UpdateCaseCommentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCaseCommentRequest;
      output: UpdateCaseCommentResponse;
    };
    sdk: {
      input: UpdateCaseCommentCommandInput;
      output: UpdateCaseCommentCommandOutput;
    };
  };
}
