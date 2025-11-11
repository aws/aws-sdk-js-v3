// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDBProxiesRequest, DescribeDBProxiesResponse } from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBProxies } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBProxiesCommand}.
 */
export interface DescribeDBProxiesCommandInput extends DescribeDBProxiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDBProxiesCommand}.
 */
export interface DescribeDBProxiesCommandOutput extends DescribeDBProxiesResponse, __MetadataBearer {}

/**
 * <p>Returns information about DB proxies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBProxiesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBProxiesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBProxiesRequest
 *   DBProxyName: "STRING_VALUE",
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
 * const command = new DescribeDBProxiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBProxiesResponse
 * //   DBProxies: [ // DBProxyList
 * //     { // DBProxy
 * //       DBProxyName: "STRING_VALUE",
 * //       DBProxyArn: "STRING_VALUE",
 * //       Status: "available" || "modifying" || "incompatible-network" || "insufficient-resource-limits" || "creating" || "deleting" || "suspended" || "suspending" || "reactivating",
 * //       EngineFamily: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       VpcSecurityGroupIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcSubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DefaultAuthScheme: "STRING_VALUE",
 * //       Auth: [ // UserAuthConfigInfoList
 * //         { // UserAuthConfigInfo
 * //           Description: "STRING_VALUE",
 * //           UserName: "STRING_VALUE",
 * //           AuthScheme: "SECRETS",
 * //           SecretArn: "STRING_VALUE",
 * //           IAMAuth: "DISABLED" || "REQUIRED" || "ENABLED",
 * //           ClientPasswordAuthType: "MYSQL_NATIVE_PASSWORD" || "MYSQL_CACHING_SHA2_PASSWORD" || "POSTGRES_SCRAM_SHA_256" || "POSTGRES_MD5" || "SQL_SERVER_AUTHENTICATION",
 * //         },
 * //       ],
 * //       RoleArn: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       RequireTLS: true || false,
 * //       IdleClientTimeout: Number("int"),
 * //       DebugLogging: true || false,
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       UpdatedDate: new Date("TIMESTAMP"),
 * //       EndpointNetworkType: "IPV4" || "IPV6" || "DUAL",
 * //       TargetConnectionNetworkType: "IPV4" || "IPV6",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBProxiesCommandInput - {@link DescribeDBProxiesCommandInput}
 * @returns {@link DescribeDBProxiesCommandOutput}
 * @see {@link DescribeDBProxiesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBProxiesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
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
export class DescribeDBProxiesCommand extends $Command
  .classBuilder<
    DescribeDBProxiesCommandInput,
    DescribeDBProxiesCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBProxies", {})
  .n("RDSClient", "DescribeDBProxiesCommand")
  .sc(DescribeDBProxies)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBProxiesRequest;
      output: DescribeDBProxiesResponse;
    };
    sdk: {
      input: DescribeDBProxiesCommandInput;
      output: DescribeDBProxiesCommandOutput;
    };
  };
}
