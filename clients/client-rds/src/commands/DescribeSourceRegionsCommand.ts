// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSourceRegionsMessage, SourceRegionMessage } from "../models/models_1";
import { de_DescribeSourceRegionsCommand, se_DescribeSourceRegionsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSourceRegionsCommand}.
 */
export interface DescribeSourceRegionsCommandInput extends DescribeSourceRegionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeSourceRegionsCommand}.
 */
export interface DescribeSourceRegionsCommandOutput extends SourceRegionMessage, __MetadataBearer {}

/**
 * <p>Returns a list of the source Amazon Web Services Regions where the current Amazon Web Services Region can create a read replica,
 *          copy a DB snapshot from, or replicate automated backups from.</p>
 *          <p>Use this operation to determine whether cross-Region features are supported between other Regions
 *             and your current Region. This operation supports pagination.</p>
 *          <p>To return information about the Regions that are enabled for your account, or all Regions,
 *             use the EC2 operation <code>DescribeRegions</code>. For more information, see
 *             <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRegions.html">
 *                 DescribeRegions</a> in the <i>Amazon EC2 API Reference</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeSourceRegionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeSourceRegionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeSourceRegionsMessage
 *   RegionName: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeSourceRegionsCommand(input);
 * const response = await client.send(command);
 * // { // SourceRegionMessage
 * //   Marker: "STRING_VALUE",
 * //   SourceRegions: [ // SourceRegionList
 * //     { // SourceRegion
 * //       RegionName: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       SupportsDBInstanceAutomatedBackupsReplication: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSourceRegionsCommandInput - {@link DescribeSourceRegionsCommandInput}
 * @returns {@link DescribeSourceRegionsCommandOutput}
 * @see {@link DescribeSourceRegionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSourceRegionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class DescribeSourceRegionsCommand extends $Command
  .classBuilder<
    DescribeSourceRegionsCommandInput,
    DescribeSourceRegionsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeSourceRegions", {})
  .n("RDSClient", "DescribeSourceRegionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSourceRegionsCommand)
  .de(de_DescribeSourceRegionsCommand)
  .build() {}
