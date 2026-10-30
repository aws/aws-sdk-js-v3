// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeServerlessV2PlatformVersionsMessage,
  ServerlessV2PlatformVersionsMessage,
} from "../models/models_0";
import { DescribeServerlessV2PlatformVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeServerlessV2PlatformVersionsCommand}.
 */
export interface DescribeServerlessV2PlatformVersionsCommandInput extends DescribeServerlessV2PlatformVersionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeServerlessV2PlatformVersionsCommand}.
 */
export interface DescribeServerlessV2PlatformVersionsCommandOutput extends ServerlessV2PlatformVersionsMessage, __MetadataBearer {}

/**
 * <p>Describes the properties of specific platform versions for Amazon DocumentDB Serverless v2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeServerlessV2PlatformVersionsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeServerlessV2PlatformVersionsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // DescribeServerlessV2PlatformVersionsMessage
 *   ServerlessV2PlatformVersion: "STRING_VALUE",
 *   Engine: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DefaultOnly: true || false,
 *   IncludeAll: true || false,
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeServerlessV2PlatformVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ServerlessV2PlatformVersionsMessage
 * //   Marker: "STRING_VALUE",
 * //   ServerlessV2PlatformVersions: [ // ServerlessV2PlatformVersionList
 * //     { // ServerlessV2PlatformVersionInfo
 * //       ServerlessV2PlatformVersion: "STRING_VALUE",
 * //       ServerlessV2PlatformVersionDescription: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       ServerlessV2FeaturesSupport: { // ServerlessV2FeaturesSupport
 * //         MinCapacity: Number("double"),
 * //         MaxCapacity: Number("double"),
 * //       },
 * //       Status: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeServerlessV2PlatformVersionsCommandInput - {@link DescribeServerlessV2PlatformVersionsCommandInput}
 * @returns {@link DescribeServerlessV2PlatformVersionsCommandOutput}
 * @see {@link DescribeServerlessV2PlatformVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeServerlessV2PlatformVersionsCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribeServerlessV2PlatformVersionsCommand extends command<DescribeServerlessV2PlatformVersionsCommandInput, DescribeServerlessV2PlatformVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeServerlessV2PlatformVersions",
  DescribeServerlessV2PlatformVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeServerlessV2PlatformVersionsMessage;
      output: ServerlessV2PlatformVersionsMessage;
    };
    sdk: {
      input: DescribeServerlessV2PlatformVersionsCommandInput;
      output: DescribeServerlessV2PlatformVersionsCommandOutput;
    };
  };
}
