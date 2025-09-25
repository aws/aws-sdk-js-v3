// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDBProxyEndpointsRequest, DescribeDBProxyEndpointsResponse } from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBProxyEndpoints } from "../schemas/schemas_2_BProxy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBProxyEndpointsCommand}.
 */
export interface DescribeDBProxyEndpointsCommandInput extends DescribeDBProxyEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDBProxyEndpointsCommand}.
 */
export interface DescribeDBProxyEndpointsCommandOutput extends DescribeDBProxyEndpointsResponse, __MetadataBearer {}

/**
 * <p>Returns information about DB proxy endpoints.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxyEndpointsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxyEndpointsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBProxyEndpointsRequest
 *   DBProxyName: "STRING_VALUE",
 *   DBProxyEndpointName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeDBProxyEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBProxyEndpointsResponse
 * //   DBProxyEndpoints: [ // DBProxyEndpointList
 * //     { // DBProxyEndpoint
 * //       DBProxyEndpointName: "STRING_VALUE",
 * //       DBProxyEndpointArn: "STRING_VALUE",
 * //       DBProxyName: "STRING_VALUE",
 * //       Status: "available" || "modifying" || "incompatible-network" || "insufficient-resource-limits" || "creating" || "deleting",
 * //       VpcId: "STRING_VALUE",
 * //       VpcSecurityGroupIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcSubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Endpoint: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       TargetRole: "READ_WRITE" || "READ_ONLY",
 * //       IsDefault: true || false,
 * //       EndpointNetworkType: "IPV4" || "IPV6" || "DUAL",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBProxyEndpointsCommandInput - {@link DescribeDBProxyEndpointsCommandInput}
 * @returns {@link DescribeDBProxyEndpointsCommandOutput}
 * @see {@link DescribeDBProxyEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxyEndpointsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyEndpointNotFoundFault} (client fault)
 *  <p>The DB proxy endpoint doesn't exist.</p>
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DescribeDBProxyEndpointsCommand extends $Command
  .classBuilder<
    DescribeDBProxyEndpointsCommandInput,
    DescribeDBProxyEndpointsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBProxyEndpoints", {})
  .n("RDSClient", "DescribeDBProxyEndpointsCommand")
  .sc(DescribeDBProxyEndpoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBProxyEndpointsRequest;
      output: DescribeDBProxyEndpointsResponse;
    };
    sdk: {
      input: DescribeDBProxyEndpointsCommandInput;
      output: DescribeDBProxyEndpointsCommandOutput;
    };
  };
}
