// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCasesForContactRequest, ListCasesForContactResponse } from "../models/models_0";
import { ListCasesForContact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCasesForContactCommand}.
 */
export interface ListCasesForContactCommandInput extends ListCasesForContactRequest {}
/**
 * @public
 *
 * The output of {@link ListCasesForContactCommand}.
 */
export interface ListCasesForContactCommandOutput extends ListCasesForContactResponse, __MetadataBearer {}

/**
 * Lists cases for a given contact.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, ListCasesForContactCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, ListCasesForContactCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // ListCasesForContactRequest
 *   domainId: "STRING_VALUE", // required
 *   contactArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCasesForContactCommand(input);
 * const response = await client.send(command);
 * // { // ListCasesForContactResponse
 * //   cases: [ // CaseSummaryList // required
 * //     { // CaseSummary
 * //       caseId: "STRING_VALUE", // required
 * //       templateId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCasesForContactCommandInput - {@link ListCasesForContactCommandInput}
 * @returns {@link ListCasesForContactCommandOutput}
 * @see {@link ListCasesForContactCommandInput} for command's `input` shape.
 * @see {@link ListCasesForContactCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * We couldn't process your request because of an issue with the server. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate has been exceeded for this API. Please try again after a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request isn't valid. Check the syntax and try again.
 *
 * @throws {@link ConnectCasesServiceException}
 *
 * Base exception class for all service exceptions from ConnectCases service.
 *
 * @public
 */
export class ListCasesForContactCommand extends command<ListCasesForContactCommandInput, ListCasesForContactCommandOutput>(
  _ep0,
  _mw0,
  "ListCasesForContact",
  ListCasesForContact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCasesForContactRequest;
      output: ListCasesForContactResponse;
    };
    sdk: {
      input: ListCasesForContactCommandInput;
      output: ListCasesForContactCommandOutput;
    };
  };
}
