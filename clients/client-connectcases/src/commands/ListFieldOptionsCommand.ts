// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFieldOptionsRequest, ListFieldOptionsResponse } from "../models/models_0";
import { ListFieldOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFieldOptionsCommand}.
 */
export interface ListFieldOptionsCommandInput extends ListFieldOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFieldOptionsCommand}.
 */
export interface ListFieldOptionsCommandOutput extends ListFieldOptionsResponse, __MetadataBearer {}

/**
 * Lists all of the field options for a field identifier in the domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, ListFieldOptionsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, ListFieldOptionsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
 * const client = new ConnectCasesClient(config);
 * const input = { // ListFieldOptionsRequest
 *   domainId: "STRING_VALUE", // required
 *   fieldId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   values: [ // ValuesList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListFieldOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFieldOptionsResponse
 * //   options: [ // FieldOptionsList // required
 * //     { // FieldOption
 * //       name: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //       active: true || false, // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFieldOptionsCommandInput - {@link ListFieldOptionsCommandInput}
 * @returns {@link ListFieldOptionsCommandOutput}
 * @see {@link ListFieldOptionsCommandInput} for command's `input` shape.
 * @see {@link ListFieldOptionsCommandOutput} for command's `response` shape.
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
export class ListFieldOptionsCommand extends command<ListFieldOptionsCommandInput, ListFieldOptionsCommandOutput>(
  _ep0,
  _mw0,
  "ListFieldOptions",
  ListFieldOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFieldOptionsRequest;
      output: ListFieldOptionsResponse;
    };
    sdk: {
      input: ListFieldOptionsCommandInput;
      output: ListFieldOptionsCommandOutput;
    };
  };
}
