// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCaseCommentRequest, CreateCaseCommentResponse } from "../models/models_0";
import { CreateCaseComment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCaseCommentCommand}.
 */
export interface CreateCaseCommentCommandInput extends CreateCaseCommentRequest {}
/**
 * @public
 *
 * The output of {@link CreateCaseCommentCommand}.
 */
export interface CreateCaseCommentCommandOutput extends CreateCaseCommentResponse, __MetadataBearer {}

/**
 * Adds a comment to an existing case.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, CreateCaseCommentCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, CreateCaseCommentCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // CreateCaseCommentRequest
 *   caseId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   body: "STRING_VALUE", // required
 * };
 * const command = new CreateCaseCommentCommand(input);
 * const response = await client.send(command);
 * // { // CreateCaseCommentResponse
 * //   commentId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCaseCommentCommandInput - {@link CreateCaseCommentCommandInput}
 * @returns {@link CreateCaseCommentCommandOutput}
 * @see {@link CreateCaseCommentCommandInput} for command's `input` shape.
 * @see {@link CreateCaseCommentCommandOutput} for command's `response` shape.
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
 * @example Invoke CreateCaseComment```javascript
 * //
 * const input = {
 *   body: "Case comment body.",
 *   caseId: "8403556009"
 * };
 * const command = new CreateCaseCommentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   commentId: "000000"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCaseCommentCommand extends command<CreateCaseCommentCommandInput, CreateCaseCommentCommandOutput>(
  _ep0,
  _mw0,
  "CreateCaseComment",
  CreateCaseComment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCaseCommentRequest;
      output: CreateCaseCommentResponse;
    };
    sdk: {
      input: CreateCaseCommentCommandInput;
      output: CreateCaseCommentCommandOutput;
    };
  };
}
