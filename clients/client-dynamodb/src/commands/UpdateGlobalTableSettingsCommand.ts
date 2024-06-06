// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGlobalTableSettingsInput, UpdateGlobalTableSettingsOutput } from "../models/models_0";
import { de_UpdateGlobalTableSettingsCommand, se_UpdateGlobalTableSettingsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGlobalTableSettingsCommand}.
 */
export interface UpdateGlobalTableSettingsCommandInput extends UpdateGlobalTableSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateGlobalTableSettingsCommand}.
 */
export interface UpdateGlobalTableSettingsCommandOutput extends UpdateGlobalTableSettingsOutput, __MetadataBearer {}

/**
 * <p>Updates settings for a global table.</p>
 *          <important>
 *             <p>For global tables, this operation only applies to global tables using Version 2019.11.21 (Current version), as it provides greater flexibility, higher efficiency and consumes less write capacity than
 *                 2017.11.29 (Legacy). To determine which version you are using, see
 *                 <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.DetermineVersion.html">Determining the version</a>.
 *                 To update existing global tables from version 2017.11.29 (Legacy) to version
 *                 2019.11.21 (Current), see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_upgrade.html">
 *                     Updating global tables</a>.
 *             </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateGlobalTableSettingsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateGlobalTableSettingsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // UpdateGlobalTableSettingsInput
 *   GlobalTableName: "STRING_VALUE", // required
 *   GlobalTableBillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
 *   GlobalTableProvisionedWriteCapacityUnits: Number("long"),
 *   GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: { // AutoScalingSettingsUpdate
 *     MinimumUnits: Number("long"),
 *     MaximumUnits: Number("long"),
 *     AutoScalingDisabled: true || false,
 *     AutoScalingRoleArn: "STRING_VALUE",
 *     ScalingPolicyUpdate: { // AutoScalingPolicyUpdate
 *       PolicyName: "STRING_VALUE",
 *       TargetTrackingScalingPolicyConfiguration: { // AutoScalingTargetTrackingScalingPolicyConfigurationUpdate
 *         DisableScaleIn: true || false,
 *         ScaleInCooldown: Number("int"),
 *         ScaleOutCooldown: Number("int"),
 *         TargetValue: Number("double"), // required
 *       },
 *     },
 *   },
 *   GlobalTableGlobalSecondaryIndexSettingsUpdate: [ // GlobalTableGlobalSecondaryIndexSettingsUpdateList
 *     { // GlobalTableGlobalSecondaryIndexSettingsUpdate
 *       IndexName: "STRING_VALUE", // required
 *       ProvisionedWriteCapacityUnits: Number("long"),
 *       ProvisionedWriteCapacityAutoScalingSettingsUpdate: {
 *         MinimumUnits: Number("long"),
 *         MaximumUnits: Number("long"),
 *         AutoScalingDisabled: true || false,
 *         AutoScalingRoleArn: "STRING_VALUE",
 *         ScalingPolicyUpdate: {
 *           PolicyName: "STRING_VALUE",
 *           TargetTrackingScalingPolicyConfiguration: {
 *             DisableScaleIn: true || false,
 *             ScaleInCooldown: Number("int"),
 *             ScaleOutCooldown: Number("int"),
 *             TargetValue: Number("double"), // required
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   ReplicaSettingsUpdate: [ // ReplicaSettingsUpdateList
 *     { // ReplicaSettingsUpdate
 *       RegionName: "STRING_VALUE", // required
 *       ReplicaProvisionedReadCapacityUnits: Number("long"),
 *       ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: {
 *         MinimumUnits: Number("long"),
 *         MaximumUnits: Number("long"),
 *         AutoScalingDisabled: true || false,
 *         AutoScalingRoleArn: "STRING_VALUE",
 *         ScalingPolicyUpdate: {
 *           PolicyName: "STRING_VALUE",
 *           TargetTrackingScalingPolicyConfiguration: {
 *             DisableScaleIn: true || false,
 *             ScaleInCooldown: Number("int"),
 *             ScaleOutCooldown: Number("int"),
 *             TargetValue: Number("double"), // required
 *           },
 *         },
 *       },
 *       ReplicaGlobalSecondaryIndexSettingsUpdate: [ // ReplicaGlobalSecondaryIndexSettingsUpdateList
 *         { // ReplicaGlobalSecondaryIndexSettingsUpdate
 *           IndexName: "STRING_VALUE", // required
 *           ProvisionedReadCapacityUnits: Number("long"),
 *           ProvisionedReadCapacityAutoScalingSettingsUpdate: "<AutoScalingSettingsUpdate>",
 *         },
 *       ],
 *       ReplicaTableClass: "STANDARD" || "STANDARD_INFREQUENT_ACCESS",
 *     },
 *   ],
 * };
 * const command = new UpdateGlobalTableSettingsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGlobalTableSettingsOutput
 * //   GlobalTableName: "STRING_VALUE",
 * //   ReplicaSettings: [ // ReplicaSettingsDescriptionList
 * //     { // ReplicaSettingsDescription
 * //       RegionName: "STRING_VALUE", // required
 * //       ReplicaStatus: "CREATING" || "CREATION_FAILED" || "UPDATING" || "DELETING" || "ACTIVE" || "REGION_DISABLED" || "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
 * //       ReplicaBillingModeSummary: { // BillingModeSummary
 * //         BillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
 * //         LastUpdateToPayPerRequestDateTime: new Date("TIMESTAMP"),
 * //       },
 * //       ReplicaProvisionedReadCapacityUnits: Number("long"),
 * //       ReplicaProvisionedReadCapacityAutoScalingSettings: { // AutoScalingSettingsDescription
 * //         MinimumUnits: Number("long"),
 * //         MaximumUnits: Number("long"),
 * //         AutoScalingDisabled: true || false,
 * //         AutoScalingRoleArn: "STRING_VALUE",
 * //         ScalingPolicies: [ // AutoScalingPolicyDescriptionList
 * //           { // AutoScalingPolicyDescription
 * //             PolicyName: "STRING_VALUE",
 * //             TargetTrackingScalingPolicyConfiguration: { // AutoScalingTargetTrackingScalingPolicyConfigurationDescription
 * //               DisableScaleIn: true || false,
 * //               ScaleInCooldown: Number("int"),
 * //               ScaleOutCooldown: Number("int"),
 * //               TargetValue: Number("double"), // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ReplicaProvisionedWriteCapacityUnits: Number("long"),
 * //       ReplicaProvisionedWriteCapacityAutoScalingSettings: {
 * //         MinimumUnits: Number("long"),
 * //         MaximumUnits: Number("long"),
 * //         AutoScalingDisabled: true || false,
 * //         AutoScalingRoleArn: "STRING_VALUE",
 * //         ScalingPolicies: [
 * //           {
 * //             PolicyName: "STRING_VALUE",
 * //             TargetTrackingScalingPolicyConfiguration: {
 * //               DisableScaleIn: true || false,
 * //               ScaleInCooldown: Number("int"),
 * //               ScaleOutCooldown: Number("int"),
 * //               TargetValue: Number("double"), // required
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       ReplicaGlobalSecondaryIndexSettings: [ // ReplicaGlobalSecondaryIndexSettingsDescriptionList
 * //         { // ReplicaGlobalSecondaryIndexSettingsDescription
 * //           IndexName: "STRING_VALUE", // required
 * //           IndexStatus: "CREATING" || "UPDATING" || "DELETING" || "ACTIVE",
 * //           ProvisionedReadCapacityUnits: Number("long"),
 * //           ProvisionedReadCapacityAutoScalingSettings: {
 * //             MinimumUnits: Number("long"),
 * //             MaximumUnits: Number("long"),
 * //             AutoScalingDisabled: true || false,
 * //             AutoScalingRoleArn: "STRING_VALUE",
 * //             ScalingPolicies: [
 * //               {
 * //                 PolicyName: "STRING_VALUE",
 * //                 TargetTrackingScalingPolicyConfiguration: {
 * //                   DisableScaleIn: true || false,
 * //                   ScaleInCooldown: Number("int"),
 * //                   ScaleOutCooldown: Number("int"),
 * //                   TargetValue: Number("double"), // required
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //           ProvisionedWriteCapacityUnits: Number("long"),
 * //           ProvisionedWriteCapacityAutoScalingSettings: {
 * //             MinimumUnits: Number("long"),
 * //             MaximumUnits: Number("long"),
 * //             AutoScalingDisabled: true || false,
 * //             AutoScalingRoleArn: "STRING_VALUE",
 * //             ScalingPolicies: [
 * //               {
 * //                 PolicyName: "STRING_VALUE",
 * //                 TargetTrackingScalingPolicyConfiguration: {
 * //                   DisableScaleIn: true || false,
 * //                   ScaleInCooldown: Number("int"),
 * //                   ScaleOutCooldown: Number("int"),
 * //                   TargetValue: Number("double"), // required
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       ReplicaTableClassSummary: { // TableClassSummary
 * //         TableClass: "STANDARD" || "STANDARD_INFREQUENT_ACCESS",
 * //         LastUpdateDateTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateGlobalTableSettingsCommandInput - {@link UpdateGlobalTableSettingsCommandInput}
 * @returns {@link UpdateGlobalTableSettingsCommandOutput}
 * @see {@link UpdateGlobalTableSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalTableSettingsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link GlobalTableNotFoundException} (client fault)
 *  <p>The specified global table does not exist.</p>
 *
 * @throws {@link IndexNotFoundException} (client fault)
 *  <p>The operation tried to access a nonexistent index.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There is no limit to the number of daily on-demand backups that can be taken. </p>
 *          <p>For most purposes, up to 500 simultaneous table operations are allowed per account. These operations
 *             include <code>CreateTable</code>, <code>UpdateTable</code>,
 *                 <code>DeleteTable</code>,<code>UpdateTimeToLive</code>,
 *                 <code>RestoreTableFromBackup</code>, and <code>RestoreTableToPointInTime</code>. </p>
 *          <p>When you are creating a table with one or more secondary
 *             indexes, you can have up to 250 such requests running at a time. However, if the table or
 *             index specifications are complex, then DynamoDB might temporarily reduce the number
 *             of concurrent operations.</p>
 *          <p>When importing into DynamoDB, up to 50 simultaneous import table operations are allowed per account.</p>
 *          <p>There is a soft account quota of 2,500 tables.</p>
 *          <p>GetRecords was called with a value of more than 1000 for the limit request parameter.</p>
 *          <p>More than 2 processes are reading from the same streams shard at the same time. Exceeding
 *             this limit may result in request throttling.</p>
 *
 * @throws {@link ReplicaNotFoundException} (client fault)
 *  <p>The specified replica is no longer part of the global table.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The operation conflicts with the resource's availability. For example, you
 *             attempted to recreate an existing table, or tried to delete a table currently in the
 *                 <code>CREATING</code> state.</p>
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 */
export class UpdateGlobalTableSettingsCommand extends $Command
  .classBuilder<
    UpdateGlobalTableSettingsCommandInput,
    UpdateGlobalTableSettingsCommandOutput,
    DynamoDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DynamoDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DynamoDB_20120810", "UpdateGlobalTableSettings", {})
  .n("DynamoDBClient", "UpdateGlobalTableSettingsCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGlobalTableSettingsCommand)
  .de(de_UpdateGlobalTableSettingsCommand)
  .build() {}
