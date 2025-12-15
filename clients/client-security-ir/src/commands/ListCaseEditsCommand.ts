// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCaseEditsRequest, ListCaseEditsResponse } from "../models/models_0";
import { ListCaseEdits$ } from "../schemas/schemas_0";
import type { SecurityIRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityIRClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCaseEditsCommand}.
 */
export interface ListCaseEditsCommandInput extends ListCaseEditsRequest {}
/**
 * @public
 *
 * The output of {@link ListCaseEditsCommand}.
 */
export interface ListCaseEditsCommandOutput extends ListCaseEditsResponse, __MetadataBearer {}

/**
 * <p>Views the case history for edits made to a designated case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityIRClient, ListCaseEditsCommand } from "@aws-sdk/client-security-ir"; // ES Modules import
 * // const { SecurityIRClient, ListCaseEditsCommand } = require("@aws-sdk/client-security-ir"); // CommonJS import
 * // import type { SecurityIRClientConfig } from "@aws-sdk/client-security-ir";
 * const config = {}; // type is SecurityIRClientConfig
 * const client = new SecurityIRClient(config);
 * const input = { // ListCaseEditsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   caseId: "STRING_VALUE", // required
 * };
 * const command = new ListCaseEditsCommand(input);
 * const response = await client.send(command);
 * // { // ListCaseEditsResponse
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // CaseEditItems
 * //     { // CaseEditItem
 * //       eventTimestamp: new Date("TIMESTAMP"),
 * //       principal: "STRING_VALUE",
 * //       action: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   total: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListCaseEditsCommandInput - {@link ListCaseEditsCommandInput}
 * @returns {@link ListCaseEditsCommandOutput}
 * @see {@link ListCaseEditsCommandInput} for command's `input` shape.
 * @see {@link ListCaseEditsCommandOutput} for command's `response` shape.
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
 * @example Invoke ListCaseEdits
 * ```javascript
 * //
 * const input = {
 *   caseId: "8403556009"
 * };
 * const command = new ListCaseEditsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       action: "Add comment",
 *       eventTimestamp: "2023-03-27T15:32:01.789Z",
 *       message: "Added comment to ask question to responder.",
 *       principal: "00000000000"
 *     }
 *   ],
 *   total: 1
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListCaseEditsCommand extends $Command
  .classBuilder<
    ListCaseEditsCommandInput,
    ListCaseEditsCommandOutput,
    SecurityIRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityIRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityIncidentResponse", "ListCaseEdits", {})
  .n("SecurityIRClient", "ListCaseEditsCommand")
  .sc(ListCaseEdits$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCaseEditsRequest;
      output: ListCaseEditsResponse;
    };
    sdk: {
      input: ListCaseEditsCommandInput;
      output: ListCaseEditsCommandOutput;
    };
  };
}
