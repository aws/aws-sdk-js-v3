// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DBEngineVersionMessage, DescribeDBEngineVersionsMessage } from "../models/models_0";
import { DescribeDBEngineVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDBEngineVersionsCommand}.
 */
export interface DescribeDBEngineVersionsCommandInput extends DescribeDBEngineVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBEngineVersionsCommand}.
 */
export interface DescribeDBEngineVersionsCommandOutput extends DBEngineVersionMessage, __MetadataBearer {}

/**
 * <p>Returns a list of the available DB engines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBEngineVersionsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBEngineVersionsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DescribeDBEngineVersionsMessage
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   DBParameterGroupFamily: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   DefaultOnly: true || false,
 *   ListSupportedCharacterSets: true || false,
 *   ListSupportedTimezones: true || false,
 * };
 * const command = new DescribeDBEngineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DBEngineVersionMessage
 * //   Marker: "STRING_VALUE",
 * //   DBEngineVersions: [ // DBEngineVersionList
 * //     { // DBEngineVersion
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       DBParameterGroupFamily: "STRING_VALUE",
 * //       DBEngineDescription: "STRING_VALUE",
 * //       DBEngineVersionDescription: "STRING_VALUE",
 * //       DefaultCharacterSet: { // CharacterSet
 * //         CharacterSetName: "STRING_VALUE",
 * //         CharacterSetDescription: "STRING_VALUE",
 * //       },
 * //       SupportedCharacterSets: [ // SupportedCharacterSetsList
 * //         {
 * //           CharacterSetName: "STRING_VALUE",
 * //           CharacterSetDescription: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ValidUpgradeTarget: [ // ValidUpgradeTargetList
 * //         { // UpgradeTarget
 * //           Engine: "STRING_VALUE",
 * //           EngineVersion: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           AutoUpgrade: true || false,
 * //           IsMajorVersionUpgrade: true || false,
 * //           SupportsGlobalDatabases: true || false,
 * //         },
 * //       ],
 * //       SupportedTimezones: [ // SupportedTimezonesList
 * //         { // Timezone
 * //           TimezoneName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ExportableLogTypes: [ // LogTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsLogExportsToCloudwatchLogs: true || false,
 * //       SupportsReadReplica: true || false,
 * //       SupportsGlobalDatabases: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBEngineVersionsCommandInput - {@link DescribeDBEngineVersionsCommandInput}
 * @returns {@link DescribeDBEngineVersionsCommandOutput}
 * @see {@link DescribeDBEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DescribeDBEngineVersionsCommand extends command<DescribeDBEngineVersionsCommandInput, DescribeDBEngineVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDBEngineVersions",
  DescribeDBEngineVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBEngineVersionsMessage;
      output: DBEngineVersionMessage;
    };
    sdk: {
      input: DescribeDBEngineVersionsCommandInput;
      output: DescribeDBEngineVersionsCommandOutput;
    };
  };
}
