// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBProxyEndpointRequest, CreateDBProxyEndpointResponse } from "../models/models_0";
import { de_CreateDBProxyEndpointCommand, se_CreateDBProxyEndpointCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBProxyEndpointCommand}.
 */
export interface CreateDBProxyEndpointCommandInput extends CreateDBProxyEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreateDBProxyEndpointCommand}.
 */
export interface CreateDBProxyEndpointCommandOutput extends CreateDBProxyEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters.
 *         You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use
 *         DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateDBProxyEndpointRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   DBProxyEndpointName: "STRING_VALUE", // required
 *   VpcSubnetIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   TargetRole: "READ_WRITE" || "READ_ONLY",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   EndpointNetworkType: "IPV4" || "IPV6" || "DUAL",
 * };
 * const command = new CreateDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBProxyEndpointResponse
 * //   DBProxyEndpoint: { // DBProxyEndpoint
 * //     DBProxyEndpointName: "STRING_VALUE",
 * //     DBProxyEndpointArn: "STRING_VALUE",
 * //     DBProxyName: "STRING_VALUE",
 * //     Status: "available" || "modifying" || "incompatible-network" || "insufficient-resource-limits" || "creating" || "deleting",
 * //     VpcId: "STRING_VALUE",
 * //     VpcSecurityGroupIds: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcSubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Endpoint: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     TargetRole: "READ_WRITE" || "READ_ONLY",
 * //     IsDefault: true || false,
 * //     EndpointNetworkType: "IPV4" || "IPV6" || "DUAL",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBProxyEndpointCommandInput - {@link CreateDBProxyEndpointCommandInput}
 * @returns {@link CreateDBProxyEndpointCommandOutput}
 * @see {@link CreateDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyEndpointAlreadyExistsFault} (client fault)
 *  <p>The specified DB proxy endpoint name must be unique for all DB proxy endpoints owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyEndpointQuotaExceededFault} (client fault)
 *  <p>The DB proxy already has the maximum number of endpoints.</p>
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class CreateDBProxyEndpointCommand extends $Command
  .classBuilder<
    CreateDBProxyEndpointCommandInput,
    CreateDBProxyEndpointCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CreateDBProxyEndpoint", {})
  .n("RDSClient", "CreateDBProxyEndpointCommand")
  .f(void 0, void 0)
  .ser(se_CreateDBProxyEndpointCommand)
  .de(de_CreateDBProxyEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBProxyEndpointRequest;
      output: CreateDBProxyEndpointResponse;
    };
    sdk: {
      input: CreateDBProxyEndpointCommandInput;
      output: CreateDBProxyEndpointCommandOutput;
    };
  };
}
