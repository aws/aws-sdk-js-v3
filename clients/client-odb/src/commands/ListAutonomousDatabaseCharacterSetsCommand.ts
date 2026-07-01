// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAutonomousDatabaseCharacterSetsInput,
  ListAutonomousDatabaseCharacterSetsOutput,
} from "../models/models_0";
import { ListAutonomousDatabaseCharacterSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutonomousDatabaseCharacterSetsCommand}.
 */
export interface ListAutonomousDatabaseCharacterSetsCommandInput extends ListAutonomousDatabaseCharacterSetsInput {}
/**
 * @public
 *
 * The output of {@link ListAutonomousDatabaseCharacterSetsCommand}.
 */
export interface ListAutonomousDatabaseCharacterSetsCommandOutput extends ListAutonomousDatabaseCharacterSetsOutput, __MetadataBearer {}

/**
 * <p>Lists the available character sets for Autonomous Databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListAutonomousDatabaseCharacterSetsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListAutonomousDatabaseCharacterSetsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListAutonomousDatabaseCharacterSetsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   characterSetType: "DATABASE" || "NATIONAL",
 * };
 * const command = new ListAutonomousDatabaseCharacterSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutonomousDatabaseCharacterSetsOutput
 * //   nextToken: "STRING_VALUE",
 * //   autonomousDatabaseCharacterSets: [ // AutonomousDatabaseCharacterSetList // required
 * //     { // AutonomousDatabaseCharacterSetSummary
 * //       characterSet: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAutonomousDatabaseCharacterSetsCommandInput - {@link ListAutonomousDatabaseCharacterSetsCommandInput}
 * @returns {@link ListAutonomousDatabaseCharacterSetsCommandOutput}
 * @see {@link ListAutonomousDatabaseCharacterSetsCommandInput} for command's `input` shape.
 * @see {@link ListAutonomousDatabaseCharacterSetsCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class ListAutonomousDatabaseCharacterSetsCommand extends command<ListAutonomousDatabaseCharacterSetsCommandInput, ListAutonomousDatabaseCharacterSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListAutonomousDatabaseCharacterSets",
  ListAutonomousDatabaseCharacterSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutonomousDatabaseCharacterSetsInput;
      output: ListAutonomousDatabaseCharacterSetsOutput;
    };
    sdk: {
      input: ListAutonomousDatabaseCharacterSetsCommandInput;
      output: ListAutonomousDatabaseCharacterSetsCommandOutput;
    };
  };
}
