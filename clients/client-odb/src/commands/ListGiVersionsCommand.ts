// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGiVersionsInput, ListGiVersionsOutput } from "../models/models_0";
import { ListGiVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGiVersionsCommand}.
 */
export interface ListGiVersionsCommandInput extends ListGiVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListGiVersionsCommand}.
 */
export interface ListGiVersionsCommandOutput extends ListGiVersionsOutput, __MetadataBearer {}

/**
 * Returns information about Oracle Grid Infrastructure (GI) software versions that are available for a VM cluster for the specified shape.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListGiVersionsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListGiVersionsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListGiVersionsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   shape: "STRING_VALUE",
 * };
 * const command = new ListGiVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListGiVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   giVersions: [ // GiVersionList // required
 * //     { // GiVersionSummary
 * //       version: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListGiVersionsCommandInput - {@link ListGiVersionsCommandInput}
 * @returns {@link ListGiVersionsCommandOutput}
 * @see {@link ListGiVersionsCommandInput} for command's `input` shape.
 * @see {@link ListGiVersionsCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it is missing required fields or has invalid inputs.
 *
 * @throws {@link OdbServiceException}
 *
 * Base exception class for all service exceptions from Odb service.
 *
 * @public
 */
export class ListGiVersionsCommand extends command<ListGiVersionsCommandInput, ListGiVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListGiVersions",
  ListGiVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGiVersionsInput;
      output: ListGiVersionsOutput;
    };
    sdk: {
      input: ListGiVersionsCommandInput;
      output: ListGiVersionsCommandOutput;
    };
  };
}
