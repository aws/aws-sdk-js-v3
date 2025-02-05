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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @example To describe DB cluster endpoints
 * ```javascript
 * // The following example retrieves details for your DB cluster endpoints. The most common kinds of Aurora clusters have two endpoints. One endpoint has type WRITER. You can use this endpoint for all SQL statements. The other endpoint has type READER. You can use this endpoint only for SELECT and other read-only SQL statements.
 * const input = {};
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterEndpoints": [
 *     {
 *       "DBClusterIdentifier": "my-database-1",
 *       "Endpoint": "my-database-1.cluster-cnpexample.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "WRITER",
 *       "Status": "creating"
 *     },
 *     {
 *       "DBClusterIdentifier": "my-database-1",
 *       "Endpoint": "my-database-1.cluster-ro-cnpexample.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "READER",
 *       "Status": "creating"
 *     },
 *     {
 *       "DBClusterIdentifier": "mydbcluster",
 *       "Endpoint": "mydbcluster.cluster-cnpexamle.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "WRITER",
 *       "Status": "available"
 *     },
 *     {
 *       "DBClusterIdentifier": "mydbcluster",
 *       "Endpoint": "mydbcluster.cluster-ro-cnpexample.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "READER",
 *       "Status": "available"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-db-cluster-endpoints-1680212701970
 * ```
 *
 * @example To describe DB cluster endpoints of a single DB cluster
 * ```javascript
 * // The following example retrieves details for the DB cluster endpoints of a single specified DB cluster. Aurora Serverless clusters have only a single endpoint with a type of WRITER.
 * const input = {
 *   "DBClusterIdentifier": "serverless-cluster"
 * };
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterEndpoints": [
 *     {
 *       "DBClusterIdentifier": "serverless-cluster",
 *       "Endpoint": "serverless-cluster.cluster-cnpexample.us-east-1.rds.amazonaws.com",
 *       "EndpointType": "WRITER",
 *       "Status": "available"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-db-cluster-endpoints-of-a-single-db-cluster-1680212863842
 * ```
 *
 */
export class DescribeDBClusterEndpointsCommand extends $Command
  .classBuilder<
    DescribeDBClusterEndpointsCommandInput,
    DescribeDBClusterEndpointsCommandOutput,
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
  .s("AmazonRDSv19", "DescribeDBClusterEndpoints", {})
  .n("RDSClient", "DescribeDBClusterEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBClusterEndpointsCommand)
  .de(de_DescribeDBClusterEndpointsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBClusterEndpointsMessage;
      output: DBClusterEndpointMessage;
    };
    sdk: {
      input: DescribeDBClusterEndpointsCommandInput;
      output: DescribeDBClusterEndpointsCommandOutput;
    };
  };
}
