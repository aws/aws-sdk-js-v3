// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBlueGreenDeploymentsRequest, DescribeBlueGreenDeploymentsResponse } from "../models/models_1";
import { de_DescribeBlueGreenDeploymentsCommand, se_DescribeBlueGreenDeploymentsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBlueGreenDeploymentsCommand}.
 */
export interface DescribeBlueGreenDeploymentsCommandInput extends DescribeBlueGreenDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBlueGreenDeploymentsCommand}.
 */
export interface DescribeBlueGreenDeploymentsCommandOutput
  extends DescribeBlueGreenDeploymentsResponse,
    __MetadataBearer {}

/**
 * <p>Describes one or more blue/green deployments.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
 *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
 *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeBlueGreenDeploymentsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeBlueGreenDeploymentsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // DescribeBlueGreenDeploymentsRequest
 *   BlueGreenDeploymentIdentifier: "STRING_VALUE",
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
 * const command = new DescribeBlueGreenDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBlueGreenDeploymentsResponse
 * //   BlueGreenDeployments: [ // BlueGreenDeploymentList
 * //     { // BlueGreenDeployment
 * //       BlueGreenDeploymentIdentifier: "STRING_VALUE",
 * //       BlueGreenDeploymentName: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //       SwitchoverDetails: [ // SwitchoverDetailList
 * //         { // SwitchoverDetail
 * //           SourceMember: "STRING_VALUE",
 * //           TargetMember: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Tasks: [ // BlueGreenDeploymentTaskList
 * //         { // BlueGreenDeploymentTask
 * //           Name: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Status: "STRING_VALUE",
 * //       StatusDetails: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       DeleteTime: new Date("TIMESTAMP"),
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBlueGreenDeploymentsCommandInput - {@link DescribeBlueGreenDeploymentsCommandInput}
 * @returns {@link DescribeBlueGreenDeploymentsCommandOutput}
 * @see {@link DescribeBlueGreenDeploymentsCommandInput} for command's `input` shape.
 * @see {@link DescribeBlueGreenDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link BlueGreenDeploymentNotFoundFault} (client fault)
 *  <p>
 *             <code>BlueGreenDeploymentIdentifier</code> doesn't refer to an existing blue/green deployment.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To describe a blue/green deployment of an RDS DB instance after creation completes
 * ```javascript
 * // The following example retrieves the details of a blue/green deployment after creation completes.
 * const input = {
 *   "BlueGreenDeploymentIdentifier": "bgd-v53303651eexfake"
 * };
 * const command = new DescribeBlueGreenDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlueGreenDeployments": [
 *     {
 *       "BlueGreenDeploymentIdentifier": "bgd-v53303651eexfake",
 *       "BlueGreenDeploymentName": "bgd-cli-test-instance",
 *       "CreateTime": "2022-02-25T21:18:51.183000+00:00",
 *       "Source": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance",
 *       "Status": "AVAILABLE",
 *       "SwitchoverDetails": [
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-green-rkfbpe"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-1",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-1-green-j382ha"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-2",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-2-green-ejv4ao"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-3",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-3-green-vlpz3t"
 *         }
 *       ],
 *       "Target": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-green-rkfbpe",
 *       "Tasks": [
 *         {
 *           "Name": "CREATING_READ_REPLICA_OF_SOURCE",
 *           "Status": "COMPLETED"
 *         },
 *         {
 *           "Name": "DB_ENGINE_VERSION_UPGRADE",
 *           "Status": "COMPLETED"
 *         },
 *         {
 *           "Name": "CONFIGURE_BACKUPS",
 *           "Status": "COMPLETED"
 *         },
 *         {
 *           "Name": "CREATING_TOPOLOGY_OF_SOURCE",
 *           "Status": "COMPLETED"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-bluegreen-deployment-of-an-rds-db-instance-after-creation-completes-1680211143527
 * ```
 *
 * @example To describe a blue/green deployment for an Aurora MySQL DB cluster
 * ```javascript
 * // The following example retrieves the details of a blue/green deployment.
 * const input = {
 *   "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake"
 * };
 * const command = new DescribeBlueGreenDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlueGreenDeployments": [
 *     {
 *       "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake",
 *       "BlueGreenDeploymentName": "my-blue-green-deployment",
 *       "CreateTime": "2022-02-25T21:12:00.288000+00:00",
 *       "Source": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *       "Status": "AVAILABLE",
 *       "SwitchoverDetails": [
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster-green-3rnukl"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-1",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-1-green-gpmaxf"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-2",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-2-green-j2oajq"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-3",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-3-green-mkxies"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-excluded-member-endpoint",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-excluded-member-endpoint-green-4sqjrq"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-reader-endpoint",
 *           "Status": "AVAILABLE",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-reader-endpoint-green-gwwzlg"
 *         }
 *       ],
 *       "Target": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster-green-3rnukl",
 *       "Tasks": [
 *         {
 *           "Name": "CREATING_READ_REPLICA_OF_SOURCE",
 *           "Status": "COMPLETED"
 *         },
 *         {
 *           "Name": "DB_ENGINE_VERSION_UPGRADE",
 *           "Status": "COMPLETED"
 *         },
 *         {
 *           "Name": "CREATE_DB_INSTANCES_FOR_CLUSTER",
 *           "Status": "COMPLETED"
 *         },
 *         {
 *           "Name": "CREATE_CUSTOM_ENDPOINTS",
 *           "Status": "COMPLETED"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-bluegreen-deployment-for-an-aurora-mysql-db-cluster-1680211228214
 * ```
 *
 * @example To describe a blue/green deployment for an Aurora MySQL cluster after switchover
 * ```javascript
 * // The following example retrieves the details about a blue/green deployment after the green environment is promoted to be the production environment.
 * const input = {
 *   "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake"
 * };
 * const command = new DescribeBlueGreenDeploymentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlueGreenDeployments": [
 *     {
 *       "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake",
 *       "BlueGreenDeploymentName": "my-blue-green-deployment",
 *       "CreateTime": "2022-02-25T22:38:49.522000+00:00",
 *       "Source": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster-old1",
 *       "Status": "SWITCHOVER_COMPLETED",
 *       "SwitchoverDetails": [
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster-old1",
 *           "Status": "SWITCHOVER_COMPLETED",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-1-old1",
 *           "Status": "SWITCHOVER_COMPLETED",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-1"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-2-old1",
 *           "Status": "SWITCHOVER_COMPLETED",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-2"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-3-old1",
 *           "Status": "SWITCHOVER_COMPLETED",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-3"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-excluded-member-endpoint-old1",
 *           "Status": "SWITCHOVER_COMPLETED",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-excluded-member-endpoint"
 *         },
 *         {
 *           "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-reader-endpoint-old1",
 *           "Status": "SWITCHOVER_COMPLETED",
 *           "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-reader-endpoint"
 *         }
 *       ],
 *       "Target": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *       "Tasks": [
 *         {
 *           "Name": "CREATING_READ_REPLICA_OF_SOURCE",
 *           "Status": "COMPLETED"
 *         },
 *         {
 *           "Name": "DB_ENGINE_VERSION_UPGRADE",
 *           "Status": "COMPLETED"
 *         },
 *         {
 *           "Name": "CREATE_DB_INSTANCES_FOR_CLUSTER",
 *           "Status": "COMPLETED"
 *         },
 *         {
 *           "Name": "CREATE_CUSTOM_ENDPOINTS",
 *           "Status": "COMPLETED"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-a-bluegreen-deployment-for-an-aurora-mysql-cluster-after-switchover-1680211583831
 * ```
 *
 */
export class DescribeBlueGreenDeploymentsCommand extends $Command
  .classBuilder<
    DescribeBlueGreenDeploymentsCommandInput,
    DescribeBlueGreenDeploymentsCommandOutput,
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
  .s("AmazonRDSv19", "DescribeBlueGreenDeployments", {})
  .n("RDSClient", "DescribeBlueGreenDeploymentsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBlueGreenDeploymentsCommand)
  .de(de_DescribeBlueGreenDeploymentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBlueGreenDeploymentsRequest;
      output: DescribeBlueGreenDeploymentsResponse;
    };
    sdk: {
      input: DescribeBlueGreenDeploymentsCommandInput;
      output: DescribeBlueGreenDeploymentsCommandOutput;
    };
  };
}
