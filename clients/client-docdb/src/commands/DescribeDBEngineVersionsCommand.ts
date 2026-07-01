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
 * <p>Returns a list of the available engines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBEngineVersionsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBEngineVersionsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
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
 * //       ValidUpgradeTarget: [ // ValidUpgradeTargetList
 * //         { // UpgradeTarget
 * //           Engine: "STRING_VALUE",
 * //           EngineVersion: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           AutoUpgrade: true || false,
 * //           IsMajorVersionUpgrade: true || false,
 * //         },
 * //       ],
 * //       ExportableLogTypes: [ // LogTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsLogExportsToCloudwatchLogs: true || false,
 * //       SupportedCACertificateIdentifiers: [ // CACertificateIdentifiersList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsCertificateRotationWithoutRestart: true || false,
 * //       ServerlessV2FeaturesSupport: { // ServerlessV2FeaturesSupport
 * //         MinCapacity: Number("double"),
 * //         MaxCapacity: Number("double"),
 * //       },
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
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
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
