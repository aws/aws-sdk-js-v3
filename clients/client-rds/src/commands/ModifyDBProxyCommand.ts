// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyDBProxyRequest, ModifyDBProxyResponse } from "../models/models_1";
import { de_ModifyDBProxyCommand, se_ModifyDBProxyCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBProxyCommand}.
 */
export interface ModifyDBProxyCommandInput extends ModifyDBProxyRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDBProxyCommand}.
 */
export interface ModifyDBProxyCommandOutput extends ModifyDBProxyResponse, __MetadataBearer {}

/**
 * <p>Changes the settings for an existing DB proxy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyDBProxyRequest
 *   DBProxyName: "STRING_VALUE", // required
 *   NewDBProxyName: "STRING_VALUE",
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
 *   RequireTLS: true || false,
 *   IdleClientTimeout: Number("int"),
 *   DebugLogging: true || false,
 *   RoleArn: "STRING_VALUE",
 *   SecurityGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBProxyCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBProxyResponse
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
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDBProxyCommandInput - {@link ModifyDBProxyCommandInput}
 * @returns {@link ModifyDBProxyCommandOutput}
 * @see {@link ModifyDBProxyCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyAlreadyExistsFault} (client fault)
 *  <p>The specified proxy name must be unique for all proxies owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyNotFoundFault} (client fault)
 *  <p>The specified proxy name doesn't correspond to a proxy owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link InvalidDBProxyStateFault} (client fault)
 *  <p>The requested operation can't be performed while the proxy is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class ModifyDBProxyCommand extends $Command
  .classBuilder<
    ModifyDBProxyCommandInput,
    ModifyDBProxyCommandOutput,
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
  .s("AmazonRDSv19", "ModifyDBProxy", {})
  .n("RDSClient", "ModifyDBProxyCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDBProxyCommand)
  .de(de_ModifyDBProxyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBProxyRequest;
      output: ModifyDBProxyResponse;
    };
    sdk: {
      input: ModifyDBProxyCommandInput;
      output: ModifyDBProxyCommandOutput;
    };
  };
}
