// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSystemVersionsInput, ListSystemVersionsOutput } from "../models/models_0";
import { ListSystemVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSystemVersionsCommand}.
 */
export interface ListSystemVersionsCommandInput extends ListSystemVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListSystemVersionsCommand}.
 */
export interface ListSystemVersionsCommandOutput extends ListSystemVersionsOutput, __MetadataBearer {}

/**
 * Returns information about the system versions that are available for a VM cluster for the specified `giVersion` and `shape`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListSystemVersionsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListSystemVersionsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListSystemVersionsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   giVersion: "STRING_VALUE", // required
 *   shape: "STRING_VALUE", // required
 * };
 * const command = new ListSystemVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSystemVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   systemVersions: [ // SystemVersionList // required
 * //     { // SystemVersionSummary
 * //       giVersion: "STRING_VALUE",
 * //       shape: "STRING_VALUE",
 * //       systemVersions: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSystemVersionsCommandInput - {@link ListSystemVersionsCommandInput}
 * @returns {@link ListSystemVersionsCommandOutput}
 * @see {@link ListSystemVersionsCommandInput} for command's `input` shape.
 * @see {@link ListSystemVersionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.
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
export class ListSystemVersionsCommand extends command<ListSystemVersionsCommandInput, ListSystemVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListSystemVersions",
  ListSystemVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSystemVersionsInput;
      output: ListSystemVersionsOutput;
    };
    sdk: {
      input: ListSystemVersionsCommandInput;
      output: ListSystemVersionsCommandOutput;
    };
  };
}
