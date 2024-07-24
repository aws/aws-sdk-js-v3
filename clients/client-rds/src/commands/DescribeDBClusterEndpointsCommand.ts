// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterEndpointMessage, DescribeDBClusterEndpointsMessage } from "../models/models_1";
import { de_DescribeDBClusterEndpointsCommand, se_DescribeDBClusterEndpointsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterEndpointsCommand}.
 */
export interface DescribeDBClusterEndpointsCommandInput extends DescribeDBClusterEndpointsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterEndpointsCommand}.
 */
export interface DescribeDBClusterEndpointsCommandOutput extends DBClusterEndpointMessage, __MetadataBearer {}

/**
 * <p>Returns information about endpoints for an Amazon Aurora DB cluster.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterEndpointsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterEndpointsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBClusterEndpointsMessage
 *   DBClusterIdentifier: "STRING_VALUE",
 *   DBClusterEndpointIdentifier: "STRING_VALUE",
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
 * };
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterEndpointMessage
 * //   Marker: "STRING_VALUE",
 * //   DBClusterEndpoints: [ // DBClusterEndpointList
 * //     { // DBClusterEndpoint
 * //       DBClusterEndpointIdentifier: "STRING_VALUE",
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       DBClusterEndpointResourceIdentifier: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       EndpointType: "STRING_VALUE",
 * //       CustomEndpointType: "STRING_VALUE",
 * //       StaticMembers: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ExcludedMembers: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DBClusterEndpointArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterEndpointsCommandInput - {@link DescribeDBClusterEndpointsCommandInput}
 * @returns {@link DescribeDBClusterEndpointsCommandOutput}
 * @see {@link DescribeDBClusterEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterEndpointsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 */
export class DescribeDBClusterEndpointsCommand extends $Command
  .classBuilder<
    DescribeDBClusterEndpointsCommandInput,
    DescribeDBClusterEndpointsCommandOutput,
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
  .s("AmazonRDSv19", "DescribeDBClusterEndpoints", {})
  .n("RDSClient", "DescribeDBClusterEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBClusterEndpointsCommand)
  .de(de_DescribeDBClusterEndpointsCommand)
  .build() {}
