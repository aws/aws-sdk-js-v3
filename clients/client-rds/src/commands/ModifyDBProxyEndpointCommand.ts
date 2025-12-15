// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyDBProxyEndpointRequest, ModifyDBProxyEndpointResponse } from "../models/models_1";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBProxyEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBProxyEndpointCommand}.
 */
export interface ModifyDBProxyEndpointCommandInput extends ModifyDBProxyEndpointRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDBProxyEndpointCommand}.
 */
export interface ModifyDBProxyEndpointCommandOutput extends ModifyDBProxyEndpointResponse, __MetadataBearer {}

/**
 * <p>Changes the settings for an existing DB proxy endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyDBProxyEndpointRequest
 *   DBProxyEndpointName: "STRING_VALUE", // required
 *   NewDBProxyEndpointName: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDBProxyEndpointResponse
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
 * @param ModifyDBProxyEndpointCommandInput - {@link ModifyDBProxyEndpointCommandInput}
 * @returns {@link ModifyDBProxyEndpointCommandOutput}
 * @see {@link ModifyDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyEndpointAlreadyExistsFault} (client fault)
 *  <p>The specified DB proxy endpoint name must be unique for all DB proxy endpoints owned by your Amazon Web Services account in the specified Amazon Web Services Region.</p>
 *
 * @throws {@link DBProxyEndpointNotFoundFault} (client fault)
 *  <p>The DB proxy endpoint doesn't exist.</p>
 *
 * @throws {@link InvalidDBProxyEndpointStateFault} (client fault)
 *  <p>You can't perform this operation while the DB proxy endpoint is in a particular state.</p>
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
export class ModifyDBProxyEndpointCommand extends $Command
  .classBuilder<
    ModifyDBProxyEndpointCommandInput,
    ModifyDBProxyEndpointCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyDBProxyEndpoint", {})
  .n("RDSClient", "ModifyDBProxyEndpointCommand")
  .sc(ModifyDBProxyEndpoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBProxyEndpointRequest;
      output: ModifyDBProxyEndpointResponse;
    };
    sdk: {
      input: ModifyDBProxyEndpointCommandInput;
      output: ModifyDBProxyEndpointCommandOutput;
    };
  };
}
