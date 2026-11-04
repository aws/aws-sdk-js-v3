// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCaseEditsRequest, ListCaseEditsResponse } from "../models/models_0";
import { ListCaseEdits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Views the case history for edits made to a designated case.
 *
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
 * @example Invoke ListCaseEdits```javascript
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
export class ListCaseEditsCommand extends command<ListCaseEditsCommandInput, ListCaseEditsCommandOutput>(
  _ep0,
  _mw0,
  "ListCaseEdits",
  ListCaseEdits$
) {
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
