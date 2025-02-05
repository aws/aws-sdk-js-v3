// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBlueGreenDeploymentRequest, DeleteBlueGreenDeploymentResponse } from "../models/models_0";
import { de_DeleteBlueGreenDeploymentCommand, se_DeleteBlueGreenDeploymentCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBlueGreenDeploymentCommand}.
 */
export interface DeleteBlueGreenDeploymentCommandInput extends DeleteBlueGreenDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBlueGreenDeploymentCommand}.
 */
export interface DeleteBlueGreenDeploymentCommandOutput extends DeleteBlueGreenDeploymentResponse, __MetadataBearer {}

/**
 * <p>Deletes a blue/green deployment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User
 *                 Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteBlueGreenDeploymentCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteBlueGreenDeploymentCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // DeleteBlueGreenDeploymentRequest
 *   BlueGreenDeploymentIdentifier: "STRING_VALUE", // required
 *   DeleteTarget: true || false,
 * };
 * const command = new DeleteBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBlueGreenDeploymentResponse
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
 * @param DeleteBlueGreenDeploymentCommandInput - {@link DeleteBlueGreenDeploymentCommandInput}
 * @returns {@link DeleteBlueGreenDeploymentCommandOutput}
 * @see {@link DeleteBlueGreenDeploymentCommandInput} for command's `input` shape.
 * @see {@link DeleteBlueGreenDeploymentCommandOutput} for command's `response` shape.
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
 * @example To delete resources in green environment for an RDS for MySQL DB instance
 * ```javascript
 * // The following example deletes the resources in a green environment for an RDS for MySQL DB instance.
 * const input = {
 *   "BlueGreenDeploymentIdentifier": "bgd-v53303651eexfake",
 *   "DeleteTarget": true
 * };
 * const command = new DeleteBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlueGreenDeployment": {
 *     "BlueGreenDeploymentIdentifier": "bgd-v53303651eexfake",
 *     "BlueGreenDeploymentName": "bgd-cli-test-instance",
 *     "CreateTime": "2022-02-25T21:18:51.183000+00:00",
 *     "DeleteTime": "2022-02-25T22:25:31.331000+00:00",
 *     "Source": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance",
 *     "Status": "DELETING",
 *     "SwitchoverDetails": [
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-green-rkfbpe"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-1",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-1-green-j382ha"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-2",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-2-green-ejv4ao"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-3",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-replica-3-green-vlpz3t"
 *       }
 *     ],
 *     "Target": "arn:aws:rds:us-east-1:123456789012:db:my-db-instance-green-rkfbpe",
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
 * // example id: to-delete-resources-in-green-environment-for-an-rds-for-mysql-db-instance-1679959961651
 * ```
 *
 * @example To delete resources in green environment for an Aurora MySQL DB cluster
 * ```javascript
 * // The following example deletes the resources in a green environment for an Aurora MySQL DB cluster.
 * const input = {
 *   "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake",
 *   "DeleteTarget": true
 * };
 * const command = new DeleteBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "BlueGreenDeployment": {
 *     "BlueGreenDeploymentIdentifier": "bgd-wi89nwzglccsfake",
 *     "BlueGreenDeploymentName": "my-blue-green-deployment",
 *     "CreateTime": "2022-02-25T21:12:00.288000+00:00",
 *     "DeleteTime": "2022-02-25T22:29:11.336000+00:00",
 *     "Source": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *     "Status": "DELETING",
 *     "SwitchoverDetails": [
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster-green-3rnukl"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-1",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-1-green-gpmaxf"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-2",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-2-green-j2oajq"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-3",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:db:my-aurora-mysql-cluster-3-green-mkxies"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-excluded-member-endpoint",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-excluded-member-endpoint-green-4sqjrq"
 *       },
 *       {
 *         "SourceMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-reader-endpoint",
 *         "Status": "AVAILABLE",
 *         "TargetMember": "arn:aws:rds:us-east-1:123456789012:cluster-endpoint:my-reader-endpoint-green-gwwzlg"
 *       }
 *     ],
 *     "Target": "arn:aws:rds:us-east-1:123456789012:cluster:my-aurora-mysql-cluster-green-3rnukl",
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
 * // example id: to-delete-resources-in-green-environment-for-an-aurora-mysql-db-cluster-1679960123935
 * ```
 *
 */
export class DeleteBlueGreenDeploymentCommand extends $Command
  .classBuilder<
    DeleteBlueGreenDeploymentCommandInput,
    DeleteBlueGreenDeploymentCommandOutput,
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
  .s("AmazonRDSv19", "DeleteBlueGreenDeployment", {})
  .n("RDSClient", "DeleteBlueGreenDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBlueGreenDeploymentCommand)
  .de(de_DeleteBlueGreenDeploymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBlueGreenDeploymentRequest;
      output: DeleteBlueGreenDeploymentResponse;
    };
    sdk: {
      input: DeleteBlueGreenDeploymentCommandInput;
      output: DeleteBlueGreenDeploymentCommandOutput;
    };
  };
}
