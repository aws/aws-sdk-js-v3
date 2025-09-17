// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDBProxyRequest, CreateDBProxyResponse } from "../models/models_0";
import { de_CreateDBProxyCommand, se_CreateDBProxyCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBProxyCommand}.
 */
export interface CreateDBProxyCommandInput extends CreateDBProxyRequest {}
/**
 * @public
 *
 * The output of {@link CreateDBProxyCommand}.
 */
export interface CreateDBProxyCommandOutput extends CreateDBProxyResponse, __MetadataBearer {}

/**
 * <p>Creates a new DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateDBProxyRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   EngineFamily: "MYSQL" || "POSTGRESQL" || "SQLSERVER", // required
 *   DefaultAuthScheme: "IAM_AUTH" || "NONE",
 *   Auth: [ // UserAuthConfigList
 *     { // UserAuthConfig
 *       Description: "STRING_VALUE",
 *       UserName: "STRING_VALUE",
 *       AuthScheme: "SECRETS",
 *       SecretArn: "STRING_VALUE",
 *       IAMAuth: "DISABLED" || "REQUIRED" || "ENABLED",
 *       ClientPasswordAuthType: "MYSQL_NATIVE_PASSWORD" || "MYSQL_CACHING_SHA2_PASSWORD" || "POSTGRES_SCRAM_SHA_256" || "POSTGRES_MD5" || "SQL_SERVER_AUTHENTICATION",
 *     },
 *   ],
 *   RoleArn: "STRING_VALUE", // required
 *   VpcSubnetIds: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 *   VpcSecurityGroupIds: [
 *     "STRING_VALUE",
 *   ],
 *   RequireTLS: true || false,
 *   IdleClientTimeout: Number("int"),
 *   DebugLogging: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   EndpointNetworkType: "IPV4" || "IPV6" || "DUAL",
 *   TargetConnectionNetworkType: "IPV4" || "IPV6",
 * };
 * const command = new CreateDBProxyCommand(input);
 * const response = await client.send(command);
 * // { // CreateDBProxyResponse
 * //   DBProxy: { // DBProxy
 * //     DBProxyName: "STRING_VALUE",
 * //     DBProxyArn: "STRING_VALUE",
 * //     Status: "available" || "modifying" || "incompatible-network" || "insufficient-resource-limits" || "creating" || "deleting" || "suspended" || "suspending" || "reactivating",
 * //     EngineFamily: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     VpcSecurityGroupIds: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcSubnetIds: [
 * //       "STRING_VALUE",
 * //     ],
 * //     DefaultAuthScheme: "STRING_VALUE",
 * //     Auth: [ // UserAuthConfigInfoList
 * //       { // UserAuthConfigInfo
 * //         Description: "STRING_VALUE",
 * //         UserName: "STRING_VALUE",
 * //         AuthScheme: "SECRETS",
 * //         SecretArn: "STRING_VALUE",
 * //         IAMAuth: "DISABLED" || "REQUIRED" || "ENABLED",
 * //         ClientPasswordAuthType: "MYSQL_NATIVE_PASSWORD" || "MYSQL_CACHING_SHA2_PASSWORD" || "POSTGRES_SCRAM_SHA_256" || "POSTGRES_MD5" || "SQL_SERVER_AUTHENTICATION",
 * //       },
 * //     ],
 * //     RoleArn: "STRING_VALUE",
 * //     Endpoint: "STRING_VALUE",
 * //     RequireTLS: true || false,
 * //     IdleClientTimeout: Number("int"),
 * //     DebugLogging: true || false,
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     UpdatedDate: new Date("TIMESTAMP"),
 * //     EndpointNetworkType: "IPV4" || "IPV6" || "DUAL",
 * //     TargetConnectionNetworkType: "IPV4" || "IPV6",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDBProxyCommandInput - {@link CreateDBProxyCommandInput}
 * @returns {@link CreateDBProxyCommandOutput}
 * @see {@link CreateDBProxyCommandInput} for command's `input` shape.
 * @see {@link CreateDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyAlreadyExistsFault} (client fault)
 *  <p>The specified proxy name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyQuotaExceededFault} (client fault)
 *  <p>Your Amazon Web Services account already has the maximum number of proxies in the specified Amazon Web Services Region.</p>
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
export class CreateDBProxyCommand extends $Command
  .classBuilder<
    CreateDBProxyCommandInput,
    CreateDBProxyCommandOutput,
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
  .s("AmazonRDSv19", "CreateDBProxy", {})
  .n("RDSClient", "CreateDBProxyCommand")
  .f(void 0, void 0)
  .ser(se_CreateDBProxyCommand)
  .de(de_CreateDBProxyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBProxyRequest;
      output: CreateDBProxyResponse;
    };
    sdk: {
      input: CreateDBProxyCommandInput;
      output: CreateDBProxyCommandOutput;
    };
  };
}
