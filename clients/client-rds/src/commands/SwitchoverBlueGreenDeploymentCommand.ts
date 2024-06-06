// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SwitchoverBlueGreenDeploymentRequest, SwitchoverBlueGreenDeploymentResponse } from "../models/models_1";
import {
  de_SwitchoverBlueGreenDeploymentCommand,
  se_SwitchoverBlueGreenDeploymentCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SwitchoverBlueGreenDeploymentCommand}.
 */
export interface SwitchoverBlueGreenDeploymentCommandInput extends SwitchoverBlueGreenDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link SwitchoverBlueGreenDeploymentCommand}.
 */
export interface SwitchoverBlueGreenDeploymentCommandOutput
  extends SwitchoverBlueGreenDeploymentResponse,
    __MetadataBearer {}

/**
 * <p>Switches over a blue/green deployment.</p>
 *          <p>Before you switch over, production traffic is routed to the databases in the blue environment.
 *             After you switch over, production traffic is routed to the databases in the green environment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User
 *                 Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, SwitchoverBlueGreenDeploymentCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, SwitchoverBlueGreenDeploymentCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // SwitchoverBlueGreenDeploymentRequest
 *   BlueGreenDeploymentIdentifier: "STRING_VALUE", // required
 *   SwitchoverTimeout: Number("int"),
 * };
 * const command = new SwitchoverBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // SwitchoverBlueGreenDeploymentResponse
 * //   BlueGreenDeployment: { // BlueGreenDeployment
 * //     BlueGreenDeploymentIdentifier: "STRING_VALUE",
 * //     BlueGreenDeploymentName: "STRING_VALUE",
 * //     Source: "STRING_VALUE",
 * //     Target: "STRING_VALUE",
 * //     SwitchoverDetails: [ // SwitchoverDetailList
 * //       { // SwitchoverDetail
 * //         SourceMember: "STRING_VALUE",
 * //         TargetMember: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tasks: [ // BlueGreenDeploymentTaskList
 * //       { // BlueGreenDeploymentTask
 * //         Name: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "STRING_VALUE",
 * //     StatusDetails: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param SwitchoverBlueGreenDeploymentCommandInput - {@link SwitchoverBlueGreenDeploymentCommandInput}
 * @returns {@link SwitchoverBlueGreenDeploymentCommandOutput}
 * @see {@link SwitchoverBlueGreenDeploymentCommandInput} for command's `input` shape.
 * @see {@link SwitchoverBlueGreenDeploymentCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link BlueGreenDeploymentNotFoundFault} (client fault)
 *  <p>
 *             <code>BlueGreenDeploymentIdentifier</code> doesn't refer to an existing blue/green deployment.</p>
 *
 * @throws {@link InvalidBlueGreenDeploymentStateFault} (client fault)
 *  <p>The blue/green deployment can't be switched over or deleted because there is an invalid configuration in
 *             the green environment.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To switch a blue/green deployment for an RDS DB instance
 * ```javascript
 * // The following example promotes the specified green environment as the new production environment.
 * const input = {
 *   "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake",
 *   "SwitchoverTimeout": 300
 * };
 * const command = new SwitchoverBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlueGreenDeployment": {
 *     "BlueGreenDeploymentIdentifier": "bgd-v53303651eexfake",
 *     "BlueGreenDeploymentName": "bgd-cli-test-instance",
 *     "CreateTime": "2022-02-25T22:33:22.225000+00:00",
 *     "Source": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance",
 *     "Status": "SWITCHOVER_IN_PROGRESS",
 *     "SwitchoverDetails": [
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-green-blhi1e"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-1",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-1-green-k5fv7u"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-2",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-2-green-ggsh8m"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-3",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-3-green-o2vwm0"
 *       }
 *     ],
 *     "Target": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-green-blhi1e",
 *     "Tasks": [
 *       {
 *         "Name": "CREATING_READ_REPLICA_OF_SOURCE",
 *         "Status": "COMPLETED"
 *       },
 *       {
 *         "Name": "DB_ENGINE_VERSION_UPGRADE",
 *         "Status": "COMPLETED"
 *       },
 *       {
 *         "Name": "CONFIGURE_BACKUPS",
 *         "Status": "COMPLETED"
 *       },
 *       {
 *         "Name": "CREATING_TOPOLOGY_OF_SOURCE",
 *         "Status": "COMPLETED"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-switch-a-bluegreen-deployment-for-an-rds-db-instance-1679699425237
 * ```
 *
 * @example To promote a blue/green deployment for an Aurora MySQL DB cluster
 * ```javascript
 * // The following example promotes the specified green environment as the new production environment.
 * const input = {
 *   "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake",
 *   "SwitchoverTimeout": 300
 * };
 * const command = new SwitchoverBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlueGreenDeployment": {
 *     "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake",
 *     "BlueGreenDeploymentName": "my-blue-green-deployment",
 *     "CreateTime": "2022-02-25T22:38:49.522000+00:00",
 *     "Source": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *     "Status": "SWITCHOVER_IN_PROGRESS",
 *     "SwitchoverDetails": [
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster-green-3ud8z6"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-1",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-1-green-bvxc73"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-2",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-2-green-7wc4ie"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-3",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-3-green-p4xxkz"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-excluded-member-endpoint",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-excluded-member-endpoint-green-np1ikl"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-reader-endpoint",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-reader-endpoint-green-miszlf"
 *       }
 *     ],
 *     "Target": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster-green-3ud8z6",
 *     "Tasks": [
 *       {
 *         "Name": "CREATING_READ_REPLICA_OF_SOURCE",
 *         "Status": "COMPLETED"
 *       },
 *       {
 *         "Name": "DB_ENGINE_VERSION_UPGRADE",
 *         "Status": "COMPLETED"
 *       },
 *       {
 *         "Name": "CREATE_DB_INSTANCES_FOR_CLUSTER",
 *         "Status": "COMPLETED"
 *       },
 *       {
 *         "Name": "CREATE_CUSTOM_ENDPOINTS",
 *         "Status": "COMPLETED"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-promote-a-bluegreen-deployment-for-an-aurora-mysql-db-cluster-1679700197409
 * ```
 *
 */
export class SwitchoverBlueGreenDeploymentCommand extends $Command
  .classBuilder<
    SwitchoverBlueGreenDeploymentCommandInput,
    SwitchoverBlueGreenDeploymentCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "SwitchoverBlueGreenDeployment", {})
  .n("RDSClient", "SwitchoverBlueGreenDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_SwitchoverBlueGreenDeploymentCommand)
  .de(de_SwitchoverBlueGreenDeploymentCommand)
  .build() {}
