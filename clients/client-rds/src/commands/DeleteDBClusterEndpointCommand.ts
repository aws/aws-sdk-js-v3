// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterEndpoint, DeleteDBClusterEndpointMessage } from "../models/models_0";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBClusterEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBClusterEndpointCommand}.
 */
export interface DeleteDBClusterEndpointCommandInput extends DeleteDBClusterEndpointMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBClusterEndpointCommand}.
 */
export interface DeleteDBClusterEndpointCommandOutput extends DBClusterEndpoint, __MetadataBearer {}

/**
 * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteDBClusterEndpointMessage
 *   DBClusterEndpointIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterEndpoint
 * //   DBClusterEndpointIdentifier: "STRING_VALUE",
 * //   DBClusterIdentifier: "STRING_VALUE",
 * //   DBClusterEndpointResourceIdentifier: "STRING_VALUE",
 * //   Endpoint: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   EndpointType: "STRING_VALUE",
 * //   CustomEndpointType: "STRING_VALUE",
 * //   StaticMembers: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * //   ExcludedMembers: [
 * //     "STRING_VALUE",
 * //   ],
 * //   DBClusterEndpointArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDBClusterEndpointCommandInput - {@link DeleteDBClusterEndpointCommandInput}
 * @returns {@link DeleteDBClusterEndpointCommandOutput}
 * @see {@link DeleteDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterEndpointNotFoundFault} (client fault)
 *  <p>The specified custom endpoint doesn't exist.</p>
 *
 * @throws {@link InvalidDBClusterEndpointStateFault} (client fault)
 *  <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To delete a custom DB cluster endpoint
 * ```javascript
 * // The following example deletes the specified custom DB cluster endpoint.
 * const input = {
 *   DBClusterEndpointIdentifier: "mycustomendpoint"
 * };
 * const command = new DeleteDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CustomEndpointType: "READER",
 *   DBClusterEndpointArn: "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:mycustomendpoint",
 *   DBClusterEndpointIdentifier: "mycustomendpoint",
 *   DBClusterEndpointResourceIdentifier: "cluster-endpoint-ANPAJ4AE5446DAEXAMPLE",
 *   DBClusterIdentifier: "mydbcluster",
 *   Endpoint: "mycustomendpoint.cluster-custom-cnpexample.us-east-1.rds.amazonaws.com",
 *   EndpointType: "CUSTOM",
 *   ExcludedMembers:   [],
 *   StaticMembers: [
 *     "dbinstance1",
 *     "dbinstance2",
 *     "dbinstance3"
 *   ],
 *   Status: "deleting"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDBClusterEndpointCommand extends $Command
  .classBuilder<
    DeleteDBClusterEndpointCommandInput,
    DeleteDBClusterEndpointCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteDBClusterEndpoint", {})
  .n("RDSClient", "DeleteDBClusterEndpointCommand")
  .sc(DeleteDBClusterEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBClusterEndpointMessage;
      output: DBClusterEndpoint;
    };
    sdk: {
      input: DeleteDBClusterEndpointCommandInput;
      output: DeleteDBClusterEndpointCommandOutput;
    };
  };
}
