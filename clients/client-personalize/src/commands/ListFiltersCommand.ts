// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFiltersRequest, ListFiltersResponse } from "../models/models_0";
import { ListFilters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFiltersCommand}.
 */
export interface ListFiltersCommandInput extends ListFiltersRequest {}
/**
 * @public
 *
 * The output of {@link ListFiltersCommand}.
 */
export interface ListFiltersCommandOutput extends ListFiltersResponse, __MetadataBearer {}

/**
 * <p>Lists all filters that belong to a given dataset group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListFiltersCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListFiltersCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // ListFiltersRequest
 *   datasetGroupArn: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFiltersCommand(input);
 * const response = await client.send(command);
 * // { // ListFiltersResponse
 * //   Filters: [ // Filters
 * //     { // FilterSummary
 * //       name: "STRING_VALUE",
 * //       filterArn: "STRING_VALUE",
 * //       creationDateTime: new Date("TIMESTAMP"),
 * //       lastUpdatedDateTime: new Date("TIMESTAMP"),
 * //       datasetGroupArn: "STRING_VALUE",
 * //       failureReason: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFiltersCommandInput - {@link ListFiltersCommandInput}
 * @returns {@link ListFiltersCommandOutput}
 * @see {@link ListFiltersCommandInput} for command's `input` shape.
 * @see {@link ListFiltersCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid.</p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class ListFiltersCommand extends command<ListFiltersCommandInput, ListFiltersCommandOutput>(
  _ep0,
  _mw0,
  "ListFilters",
  ListFilters$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFiltersRequest;
      output: ListFiltersResponse;
    };
    sdk: {
      input: ListFiltersCommandInput;
      output: ListFiltersCommandOutput;
    };
  };
}
