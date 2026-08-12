// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListGiMinorVersionsInput, ListGiMinorVersionsOutput } from "../models/models_0";
import { ListGiMinorVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListGiMinorVersionsCommand}.
 */
export interface ListGiMinorVersionsCommandInput extends ListGiMinorVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListGiMinorVersionsCommand}.
 */
export interface ListGiMinorVersionsCommandOutput extends ListGiMinorVersionsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of the Oracle Grid Infrastructure (GI) minor versions for the specified major version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, ListGiMinorVersionsCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, ListGiMinorVersionsCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // ListGiMinorVersionsInput
 *   giVersion: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   shapeFamily: "STRING_VALUE",
 *   availabilityZone: "STRING_VALUE",
 *   availabilityZoneId: "STRING_VALUE",
 * };
 * const command = new ListGiMinorVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListGiMinorVersionsOutput
 * //   nextToken: "STRING_VALUE",
 * //   giMinorVersions: [ // GiMinorVersionList // required
 * //     { // GiMinorVersionSummary
 * //       version: "STRING_VALUE", // required
 * //       gridImageId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListGiMinorVersionsCommandInput - {@link ListGiMinorVersionsCommandInput}
 * @returns {@link ListGiMinorVersionsCommandOutput}
 * @see {@link ListGiMinorVersionsCommandInput} for command's `input` shape.
 * @see {@link ListGiMinorVersionsCommandOutput} for command's `response` shape.
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
export class ListGiMinorVersionsCommand extends command<ListGiMinorVersionsCommandInput, ListGiMinorVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListGiMinorVersions",
  ListGiMinorVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGiMinorVersionsInput;
      output: ListGiMinorVersionsOutput;
    };
    sdk: {
      input: ListGiMinorVersionsCommandInput;
      output: ListGiMinorVersionsCommandOutput;
    };
  };
}
