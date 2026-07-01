// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAutonomousDatabaseVersionsInput, ListAutonomousDatabaseVersionsOutput } from "../models/models_0";
import { ListAutonomousDatabaseVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutonomousDatabaseVersionsCommand}.
 */
export interface ListAutonomousDatabaseVersionsCommandInput extends ListAutonomousDatabaseVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListAutonomousDatabaseVersionsCommand}.
 */
export interface ListAutonomousDatabaseVersionsCommandOutput extends ListAutonomousDatabaseVersionsOutput, __MetadataBearer {}

/**
 * <p>Lists the available Oracle Database software versions for Autonomous Databases.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListAutonomousDatabaseVersionsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListAutonomousDatabaseVersionsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListAutonomousDatabaseVersionsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   dbWorkload: "OLTP" || "AJD" || "APEX" || "LH",
 * };
 * const command = new ListAutonomousDatabaseVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutonomousDatabaseVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   autonomousDatabaseVersions: [ // AutonomousDatabaseVersionList // required
 * //     { // AutonomousDatabaseVersionSummary
 * //       dbWorkload: "OLTP" || "AJD" || "APEX" || "LH",
 * //       details: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAutonomousDatabaseVersionsCommandInput - {@link ListAutonomousDatabaseVersionsCommandInput}
 * @returns {@link ListAutonomousDatabaseVersionsCommandOutput}
 * @see {@link ListAutonomousDatabaseVersionsCommandInput} for command's `input` shape.
 * @see {@link ListAutonomousDatabaseVersionsCommandOutput} for command's `response` shape.
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
export class ListAutonomousDatabaseVersionsCommand extends command<ListAutonomousDatabaseVersionsCommandInput, ListAutonomousDatabaseVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAutonomousDatabaseVersions",
  ListAutonomousDatabaseVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutonomousDatabaseVersionsInput;
      output: ListAutonomousDatabaseVersionsOutput;
    };
    sdk: {
      input: ListAutonomousDatabaseVersionsCommandInput;
      output: ListAutonomousDatabaseVersionsCommandOutput;
    };
  };
}
