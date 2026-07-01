// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCaseCommentRequest, UpdateCaseCommentResponse } from "../models/models_0";
import { UpdateCaseComment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Updates an existing case comment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, UpdateCaseCommentCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, UpdateCaseCommentCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
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
 *
 * @example Invoke UpdateCaseComment
 * ```javascript
 * //
 * const input = {
 *   body: "Updated case comment.",
 *   caseId: "8403556009",
 *   commentId: "000000"
 * };
 * const command = new UpdateCaseCommentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   body: "Updated case comment.",
 *   commentId: "000000"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateCaseCommentCommand extends command<UpdateCaseCommentCommandInput, UpdateCaseCommentCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCaseComment",
  UpdateCaseComment$
) {
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
