// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterEndpointMessage, DescribeDBClusterEndpointsMessage } from "../models/models_0";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBClusterEndpoints } from "../schemas/schemas_0";

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
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
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
 *
 * @example To describe DB cluster endpoints
 * ```javascript
 * // The following example retrieves details for your DB cluster endpoints. The most common kinds of Aurora clusters have two endpoints. One endpoint has type WRITER. You can use this endpoint for all SQL statements. The other endpoint has type READER. You can use this endpoint only for SELECT and other read-only SQL statements.
 * const input = { /* empty *\/ };
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterEndpoints: [
 *     {
 *       DBClusterIdentifier: "my-database-1",
 *       Endpoint: "my-database-1.cluster-cnpexample.us-east-1.rds.amazonaws.com",
 *       EndpointType: "WRITER",
 *       Status: "creating"
 *     },
 *     {
 *       DBClusterIdentifier: "my-database-1",
 *       Endpoint: "my-database-1.cluster-ro-cnpexample.us-east-1.rds.amazonaws.com",
 *       EndpointType: "READER",
 *       Status: "creating"
 *     },
 *     {
 *       DBClusterIdentifier: "mydbcluster",
 *       Endpoint: "mydbcluster.cluster-cnpexamle.us-east-1.rds.amazonaws.com",
 *       EndpointType: "WRITER",
 *       Status: "available"
 *     },
 *     {
 *       DBClusterIdentifier: "mydbcluster",
 *       Endpoint: "mydbcluster.cluster-ro-cnpexample.us-east-1.rds.amazonaws.com",
 *       EndpointType: "READER",
 *       Status: "available"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example To describe DB cluster endpoints of a single DB cluster
 * ```javascript
 * // The following example retrieves details for the DB cluster endpoints of a single specified DB cluster. Aurora Serverless clusters have only a single endpoint with a type of WRITER.
 * const input = {
 *   DBClusterIdentifier: "serverless-cluster"
 * };
 * const command = new DescribeDBClusterEndpointsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterEndpoints: [
 *     {
 *       DBClusterIdentifier: "serverless-cluster",
 *       Endpoint: "serverless-cluster.cluster-cnpexample.us-east-1.rds.amazonaws.com",
 *       EndpointType: "WRITER",
 *       Status: "available"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBClusterEndpoints", {})
  .n("RDSClient", "DescribeDBClusterEndpointsCommand")
  .sc(DescribeDBClusterEndpoints)
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
