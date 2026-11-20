// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListAutonomousDatabaseRefreshableClonesInput,
  ListAutonomousDatabaseRefreshableClonesOutput,
} from "../models/models_0";
import { ListAutonomousDatabaseRefreshableClones$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAutonomousDatabaseRefreshableClonesCommand}.
 */
export interface ListAutonomousDatabaseRefreshableClonesCommandInput extends ListAutonomousDatabaseRefreshableClonesInput {}
/**
 * @public
 *
 * The output of {@link ListAutonomousDatabaseRefreshableClonesCommand}.
 */
export interface ListAutonomousDatabaseRefreshableClonesCommandOutput extends ListAutonomousDatabaseRefreshableClonesOutput, __MetadataBearer {}

/**
 * <p>Lists the refreshable clones of the specified Autonomous Database.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListAutonomousDatabaseRefreshableClonesCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListAutonomousDatabaseRefreshableClonesCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListAutonomousDatabaseRefreshableClonesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   autonomousDatabaseId: "STRING_VALUE", // required
 * };
 * const command = new ListAutonomousDatabaseRefreshableClonesCommand(input);
 * const response = await client.send(command);
 * // { // ListAutonomousDatabaseRefreshableClonesOutput
 * //   nextToken: "STRING_VALUE",
 * //   autonomousDatabaseRefreshableClones: [ // AutonomousDatabaseRefreshableCloneList // required
 * //     { // AutonomousDatabaseRefreshableCloneSummary
 * //       autonomousDatabaseId: "STRING_VALUE",
 * //       autonomousDatabaseArn: "STRING_VALUE",
 * //       ocid: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAutonomousDatabaseRefreshableClonesCommandInput - {@link ListAutonomousDatabaseRefreshableClonesCommandInput}
 * @returns {@link ListAutonomousDatabaseRefreshableClonesCommandOutput}
 * @see {@link ListAutonomousDatabaseRefreshableClonesCommandInput} for command's `input` shape.
 * @see {@link ListAutonomousDatabaseRefreshableClonesCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
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
export class ListAutonomousDatabaseRefreshableClonesCommand extends command<ListAutonomousDatabaseRefreshableClonesCommandInput, ListAutonomousDatabaseRefreshableClonesCommandOutput>(
  _ep0,
  _mw0,
  "ListAutonomousDatabaseRefreshableClones",
  ListAutonomousDatabaseRefreshableClones$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutonomousDatabaseRefreshableClonesInput;
      output: ListAutonomousDatabaseRefreshableClonesOutput;
    };
    sdk: {
      input: ListAutonomousDatabaseRefreshableClonesCommandInput;
      output: ListAutonomousDatabaseRefreshableClonesCommandOutput;
    };
  };
}
