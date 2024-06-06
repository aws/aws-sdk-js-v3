// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeGlobalTableSettingsInput, DescribeGlobalTableSettingsOutput } from "../models/models_0";
import { de_DescribeGlobalTableSettingsCommand, se_DescribeGlobalTableSettingsCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGlobalTableSettingsCommand}.
 */
export interface DescribeGlobalTableSettingsCommandInput extends DescribeGlobalTableSettingsInput {}
/**
 * @public
 *
 * The output of {@link DescribeGlobalTableSettingsCommand}.
 */
export interface DescribeGlobalTableSettingsCommandOutput extends DescribeGlobalTableSettingsOutput, __MetadataBearer {}

/**
 * <p>Describes Region-specific settings for a global table.</p>
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
 * import { DynamoDBClient, DescribeGlobalTableSettingsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeGlobalTableSettingsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const input = { // DescribeGlobalTableSettingsInput
 *   GlobalTableName: "STRING_VALUE", // required
 * };
 * const command = new DescribeGlobalTableSettingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGlobalTableSettingsOutput
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
 * @param DescribeGlobalTableSettingsCommandInput - {@link DescribeGlobalTableSettingsCommandInput}
 * @returns {@link DescribeGlobalTableSettingsCommandOutput}
 * @see {@link DescribeGlobalTableSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalTableSettingsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for DynamoDBClient's `config` shape.
 *
 * @throws {@link GlobalTableNotFoundException} (client fault)
 *  <p>The specified global table does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * @throws {@link DynamoDBServiceException}
 * <p>Base exception class for all service exceptions from DynamoDB service.</p>
 *
 * @public
 */
export class DescribeGlobalTableSettingsCommand extends $Command
  .classBuilder<
    DescribeGlobalTableSettingsCommandInput,
    DescribeGlobalTableSettingsCommandOutput,
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
  .s("DynamoDB_20120810", "DescribeGlobalTableSettings", {})
  .n("DynamoDBClient", "DescribeGlobalTableSettingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeGlobalTableSettingsCommand)
  .de(de_DescribeGlobalTableSettingsCommand)
  .build() {}
