// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFieldsRequest, ListFieldsResponse } from "../models/models_0";
import { ListFields$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFieldsCommand}.
 */
export interface ListFieldsCommandInput extends ListFieldsRequest {}
/**
 * @public
 *
 * The output of {@link ListFieldsCommand}.
 */
export interface ListFieldsCommandOutput extends ListFieldsResponse, __MetadataBearer {}

/**
 * Lists all fields in a Cases domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, ListFieldsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, ListFieldsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // ListFieldsRequest
 *   domainId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFieldsCommand(input);
 * const response = await client.send(command);
 * // { // ListFieldsResponse
 * //   fields: [ // FieldSummaryList // required
 * //     { // FieldSummary
 * //       fieldId: "STRING_VALUE", // required
 * //       fieldArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       namespace: "STRING_VALUE", // required
 * //       attributes: { // FieldAttributes Union: only one key present
 * //         text: { // TextAttributes
 * //           isMultiline: true || false, // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFieldsCommandInput - {@link ListFieldsCommandInput}
 * @returns {@link ListFieldsCommandOutput}
 * @see {@link ListFieldsCommandInput} for command's `input` shape.
 * @see {@link ListFieldsCommandOutput} for command's `response` shape.
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
export class ListFieldsCommand extends command<ListFieldsCommandInput, ListFieldsCommandOutput>(
  _ep0,
  _mw0,
  "ListFields",
  ListFields$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFieldsRequest;
      output: ListFieldsResponse;
    };
    sdk: {
      input: ListFieldsCommandInput;
      output: ListFieldsCommandOutput;
    };
  };
}
