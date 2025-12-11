// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDBClusterEndpointMessage, DBClusterEndpoint } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBClusterEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDBClusterEndpointCommand}.
 */
export interface CreateDBClusterEndpointCommandInput extends CreateDBClusterEndpointMessage {}
/**
 * @public
 *
 * The output of {@link CreateDBClusterEndpointCommand}.
 */
export interface CreateDBClusterEndpointCommandOutput extends DBClusterEndpoint, __MetadataBearer {}

/**
 * <p>Creates a new custom endpoint and associates it with an Amazon Aurora DB cluster.</p>
 *          <note>
 *             <p>This action applies only to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CreateDBClusterEndpointMessage
 *   DBClusterIdentifier: "STRING_VALUE", // required
 *   DBClusterEndpointIdentifier: "STRING_VALUE", // required
 *   EndpointType: "STRING_VALUE", // required
 *   StaticMembers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   ExcludedMembers: [
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDBClusterEndpointCommand(input);
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
 * @param CreateDBClusterEndpointCommandInput - {@link CreateDBClusterEndpointCommandInput}
 * @returns {@link CreateDBClusterEndpointCommandOutput}
 * @see {@link CreateDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterEndpointAlreadyExistsFault} (client fault)
 *  <p>The specified custom endpoint can't be created because it already exists.</p>
 *
 * @throws {@link DBClusterEndpointQuotaExceededFault} (client fault)
 *  <p>The cluster already has the maximum number of custom endpoints.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To create a custom DB cluster endpoint
 * ```javascript
 * // The following example creates a custom DB cluster endpoint and associate it with the specified Aurora DB cluster.
 * const input = {
 *   DBClusterEndpointIdentifier: "mycustomendpoint",
 *   DBClusterIdentifier: "mydbcluster",
 *   EndpointType: "reader",
 *   StaticMembers: [
 *     "dbinstance1",
 *     "dbinstance2"
 *   ]
 * };
 * const command = new CreateDBClusterEndpointCommand(input);
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
 *     "dbinstance2"
 *   ],
 *   Status: "creating"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDBClusterEndpointCommand extends $Command
  .classBuilder<
    CreateDBClusterEndpointCommandInput,
    CreateDBClusterEndpointCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "CreateDBClusterEndpoint", {})
  .n("RDSClient", "CreateDBClusterEndpointCommand")
  .sc(CreateDBClusterEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDBClusterEndpointMessage;
      output: DBClusterEndpoint;
    };
    sdk: {
      input: CreateDBClusterEndpointCommandInput;
      output: CreateDBClusterEndpointCommandOutput;
    };
  };
}
