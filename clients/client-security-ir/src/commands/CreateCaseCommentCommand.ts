// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCaseCommentRequest, CreateCaseCommentResponse } from "../models/models_0";
import { CreateCaseComment } from "../schemas/schemas_5_Comment";
import { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds a comment to an existing case.</p>
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
 * @example Invoke CreateCaseComment
 * ```javascript
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
export class CreateCaseCommentCommand extends $Command
  .classBuilder<
    CreateCaseCommentCommandInput,
    CreateCaseCommentCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "CreateCaseComment", {})
  .n("SecurityIRClient", "CreateCaseCommentCommand")
  .sc(CreateCaseComment)
  .build() {
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
