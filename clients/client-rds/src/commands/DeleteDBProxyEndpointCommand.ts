// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBProxyEndpointRequest, DeleteDBProxyEndpointResponse } from "../models/models_0";
import { de_DeleteDBProxyEndpointCommand, se_DeleteDBProxyEndpointCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBProxyEndpointCommand}.
 */
export interface DeleteDBProxyEndpointCommandInput extends DeleteDBProxyEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDBProxyEndpointCommand}.
 */
export interface DeleteDBProxyEndpointCommandOutput extends DeleteDBProxyEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the
 *         endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write
 *         or read-only operations, or using a different VPC than the DB proxy's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteDBProxyEndpointRequest
 *   DBProxyEndpointName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBProxyEndpointResponse
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
 * @param DeleteDBProxyEndpointCommandInput - {@link DeleteDBProxyEndpointCommandInput}
 * @returns {@link DeleteDBProxyEndpointCommandOutput}
 * @see {@link DeleteDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBProxyEndpointNotFoundFault} (client fault)
 *  <p>The DB proxy endpoint doesn't exist.</p>
 *
 * @throws {@link InvalidDBProxyEndpointStateFault} (client fault)
 *  <p>You can't perform this operation while the DB proxy endpoint is in a particular state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DeleteDBProxyEndpointCommand extends $Command
  .classBuilder<
    DeleteDBProxyEndpointCommandInput,
    DeleteDBProxyEndpointCommandOutput,
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
  .s("AmazonRDSv19", "DeleteDBProxyEndpoint", {})
  .n("RDSClient", "DeleteDBProxyEndpointCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDBProxyEndpointCommand)
  .de(de_DeleteDBProxyEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBProxyEndpointRequest;
      output: DeleteDBProxyEndpointResponse;
    };
    sdk: {
      input: DeleteDBProxyEndpointCommandInput;
      output: DeleteDBProxyEndpointCommandOutput;
    };
  };
}
