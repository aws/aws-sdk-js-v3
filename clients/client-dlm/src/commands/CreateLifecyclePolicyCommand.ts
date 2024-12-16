// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse } from "../models/models_0";
import { de_CreateLifecyclePolicyCommand, se_CreateLifecyclePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLifecyclePolicyCommand}.
 */
export interface CreateLifecyclePolicyCommandInput extends CreateLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateLifecyclePolicyCommand}.
 */
export interface CreateLifecyclePolicyCommandOutput extends CreateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Data Lifecycle Manager lifecycle policy. Amazon Data Lifecycle Manager supports the following policy types:</p>
 *          <ul>
 *             <li>
 *                <p>Custom EBS snapshot policy</p>
 *             </li>
 *             <li>
 *                <p>Custom EBS-backed AMI policy</p>
 *             </li>
 *             <li>
 *                <p>Cross-account copy event policy</p>
 *             </li>
 *             <li>
 *                <p>Default policy for EBS snapshots</p>
 *             </li>
 *             <li>
 *                <p>Default policy for EBS-backed AMIs</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/policy-differences.html">
 * 			Default policies vs custom policies</a>.</p>
 *          <important>
 *             <p>If you create a default policy, you can specify the request parameters either in
 * 				the request body, or in the PolicyDetails request structure, but not both.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, CreateLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, CreateLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const input = { // CreateLifecyclePolicyRequest
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   State: "ENABLED" || "DISABLED", // required
 *   PolicyDetails: { // PolicyDetails
 *     PolicyType: "EBS_SNAPSHOT_MANAGEMENT" || "IMAGE_MANAGEMENT" || "EVENT_BASED_POLICY",
 *     ResourceTypes: [ // ResourceTypeValuesList
 *       "VOLUME" || "INSTANCE",
 *     ],
 *     ResourceLocations: [ // ResourceLocationList
 *       "CLOUD" || "OUTPOST" || "LOCAL_ZONE",
 *     ],
 *     TargetTags: [ // TargetTagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     Schedules: [ // ScheduleList
 *       { // Schedule
 *         Name: "STRING_VALUE",
 *         CopyTags: true || false,
 *         TagsToAdd: [ // TagsToAddList
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         VariableTags: [ // VariableTagsList
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         CreateRule: { // CreateRule
 *           Location: "CLOUD" || "OUTPOST_LOCAL" || "LOCAL_ZONE",
 *           Interval: Number("int"),
 *           IntervalUnit: "HOURS",
 *           Times: [ // TimesList
 *             "STRING_VALUE",
 *           ],
 *           CronExpression: "STRING_VALUE",
 *           Scripts: [ // ScriptsList
 *             { // Script
 *               Stages: [ // StagesList
 *                 "PRE" || "POST",
 *               ],
 *               ExecutionHandlerService: "AWS_SYSTEMS_MANAGER",
 *               ExecutionHandler: "STRING_VALUE", // required
 *               ExecuteOperationOnScriptFailure: true || false,
 *               ExecutionTimeout: Number("int"),
 *               MaximumRetryCount: Number("int"),
 *             },
 *           ],
 *         },
 *         RetainRule: { // RetainRule
 *           Count: Number("int"),
 *           Interval: Number("int"),
 *           IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *         },
 *         FastRestoreRule: { // FastRestoreRule
 *           Count: Number("int"),
 *           Interval: Number("int"),
 *           IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *           AvailabilityZones: [ // AvailabilityZoneList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         CrossRegionCopyRules: [ // CrossRegionCopyRules
 *           { // CrossRegionCopyRule
 *             TargetRegion: "STRING_VALUE",
 *             Target: "STRING_VALUE",
 *             Encrypted: true || false, // required
 *             CmkArn: "STRING_VALUE",
 *             CopyTags: true || false,
 *             RetainRule: { // CrossRegionCopyRetainRule
 *               Interval: Number("int"),
 *               IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *             },
 *             DeprecateRule: { // CrossRegionCopyDeprecateRule
 *               Interval: Number("int"),
 *               IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *             },
 *           },
 *         ],
 *         ShareRules: [ // ShareRules
 *           { // ShareRule
 *             TargetAccounts: [ // ShareTargetAccountList // required
 *               "STRING_VALUE",
 *             ],
 *             UnshareInterval: Number("int"),
 *             UnshareIntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *           },
 *         ],
 *         DeprecateRule: { // DeprecateRule
 *           Count: Number("int"),
 *           Interval: Number("int"),
 *           IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *         },
 *         ArchiveRule: { // ArchiveRule
 *           RetainRule: { // ArchiveRetainRule
 *             RetentionArchiveTier: { // RetentionArchiveTier
 *               Count: Number("int"),
 *               Interval: Number("int"),
 *               IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *             },
 *           },
 *         },
 *       },
 *     ],
 *     Parameters: { // Parameters
 *       ExcludeBootVolume: true || false,
 *       NoReboot: true || false,
 *       ExcludeDataVolumeTags: [ // ExcludeDataVolumeTagList
 *         "<Tag>",
 *       ],
 *     },
 *     EventSource: { // EventSource
 *       Type: "MANAGED_CWE", // required
 *       Parameters: { // EventParameters
 *         EventType: "shareSnapshot", // required
 *         SnapshotOwner: [ // SnapshotOwnerList // required
 *           "STRING_VALUE",
 *         ],
 *         DescriptionRegex: "STRING_VALUE", // required
 *       },
 *     },
 *     Actions: [ // ActionList
 *       { // Action
 *         Name: "STRING_VALUE", // required
 *         CrossRegionCopy: [ // CrossRegionCopyActionList // required
 *           { // CrossRegionCopyAction
 *             Target: "STRING_VALUE", // required
 *             EncryptionConfiguration: { // EncryptionConfiguration
 *               Encrypted: true || false, // required
 *               CmkArn: "STRING_VALUE",
 *             },
 *             RetainRule: {
 *               Interval: Number("int"),
 *               IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *     PolicyLanguage: "SIMPLIFIED" || "STANDARD",
 *     ResourceType: "VOLUME" || "INSTANCE",
 *     CreateInterval: Number("int"),
 *     RetainInterval: Number("int"),
 *     CopyTags: true || false,
 *     CrossRegionCopyTargets: [ // CrossRegionCopyTargetList
 *       { // CrossRegionCopyTarget
 *         TargetRegion: "STRING_VALUE",
 *       },
 *     ],
 *     ExtendDeletion: true || false,
 *     Exclusions: { // Exclusions
 *       ExcludeBootVolumes: true || false,
 *       ExcludeVolumeTypes: [ // ExcludeVolumeTypesList
 *         "STRING_VALUE",
 *       ],
 *       ExcludeTags: [ // ExcludeTagsList
 *         "<Tag>",
 *       ],
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DefaultPolicy: "VOLUME" || "INSTANCE",
 *   CreateInterval: Number("int"),
 *   RetainInterval: Number("int"),
 *   CopyTags: true || false,
 *   ExtendDeletion: true || false,
 *   CrossRegionCopyTargets: [
 *     {
 *       TargetRegion: "STRING_VALUE",
 *     },
 *   ],
 *   Exclusions: {
 *     ExcludeBootVolumes: true || false,
 *     ExcludeVolumeTypes: [
 *       "STRING_VALUE",
 *     ],
 *     ExcludeTags: [
 *       "<Tag>",
 *     ],
 *   },
 * };
 * const command = new CreateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateLifecyclePolicyResponse
 * //   PolicyId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLifecyclePolicyCommandInput - {@link CreateLifecyclePolicyCommandInput}
 * @returns {@link CreateLifecyclePolicyCommandOutput}
 * @see {@link CreateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for DLMClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service failed in an unexpected way.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Bad request. The request is missing required parameters or has invalid
 * 			parameters.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because a limit was exceeded.</p>
 *
 * @throws {@link DLMServiceException}
 * <p>Base exception class for all service exceptions from DLM service.</p>
 *
 * @public
 */
export class CreateLifecyclePolicyCommand extends $Command
  .classBuilder<
    CreateLifecyclePolicyCommandInput,
    CreateLifecyclePolicyCommandOutput,
    DLMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DLMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("dlm_20180112", "CreateLifecyclePolicy", {})
  .n("DLMClient", "CreateLifecyclePolicyCommand")
  .f(void 0, void 0)
  .ser(se_CreateLifecyclePolicyCommand)
  .de(de_CreateLifecyclePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLifecyclePolicyRequest;
      output: CreateLifecyclePolicyResponse;
    };
    sdk: {
      input: CreateLifecyclePolicyCommandInput;
      output: CreateLifecyclePolicyCommandOutput;
    };
  };
}
