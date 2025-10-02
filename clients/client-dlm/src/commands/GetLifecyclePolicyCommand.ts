// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLifecyclePolicyRequest, GetLifecyclePolicyResponse } from "../models/models_0";
import { de_GetLifecyclePolicyCommand, se_GetLifecyclePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLifecyclePolicyCommand}.
 */
export interface GetLifecyclePolicyCommandInput extends GetLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetLifecyclePolicyCommand}.
 */
export interface GetLifecyclePolicyCommandOutput extends GetLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Gets detailed information about the specified lifecycle policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, GetLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, GetLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * // import type { DLMClientConfig } from "@aws-sdk/client-dlm";
 * const config = {}; // type is DLMClientConfig
 * const client = new DLMClient(config);
 * const input = { // GetLifecyclePolicyRequest
 *   PolicyId: "STRING_VALUE", // required
 * };
 * const command = new GetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetLifecyclePolicyResponse
 * //   Policy: { // LifecyclePolicy
 * //     PolicyId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     State: "ENABLED" || "DISABLED" || "ERROR",
 * //     StatusMessage: "STRING_VALUE",
 * //     ExecutionRoleArn: "STRING_VALUE",
 * //     DateCreated: new Date("TIMESTAMP"),
 * //     DateModified: new Date("TIMESTAMP"),
 * //     PolicyDetails: { // PolicyDetails
 * //       PolicyType: "EBS_SNAPSHOT_MANAGEMENT" || "IMAGE_MANAGEMENT" || "EVENT_BASED_POLICY",
 * //       ResourceTypes: [ // ResourceTypeValuesList
 * //         "VOLUME" || "INSTANCE",
 * //       ],
 * //       ResourceLocations: [ // ResourceLocationList
 * //         "CLOUD" || "OUTPOST" || "LOCAL_ZONE",
 * //       ],
 * //       TargetTags: [ // TargetTagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Schedules: [ // ScheduleList
 * //         { // Schedule
 * //           Name: "STRING_VALUE",
 * //           CopyTags: true || false,
 * //           TagsToAdd: [ // TagsToAddList
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           VariableTags: [ // VariableTagsList
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           CreateRule: { // CreateRule
 * //             Location: "CLOUD" || "OUTPOST_LOCAL" || "LOCAL_ZONE",
 * //             Interval: Number("int"),
 * //             IntervalUnit: "HOURS",
 * //             Times: [ // TimesList
 * //               "STRING_VALUE",
 * //             ],
 * //             CronExpression: "STRING_VALUE",
 * //             Scripts: [ // ScriptsList
 * //               { // Script
 * //                 Stages: [ // StagesList
 * //                   "PRE" || "POST",
 * //                 ],
 * //                 ExecutionHandlerService: "AWS_SYSTEMS_MANAGER",
 * //                 ExecutionHandler: "STRING_VALUE", // required
 * //                 ExecuteOperationOnScriptFailure: true || false,
 * //                 ExecutionTimeout: Number("int"),
 * //                 MaximumRetryCount: Number("int"),
 * //               },
 * //             ],
 * //           },
 * //           RetainRule: { // RetainRule
 * //             Count: Number("int"),
 * //             Interval: Number("int"),
 * //             IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 * //           },
 * //           FastRestoreRule: { // FastRestoreRule
 * //             Count: Number("int"),
 * //             Interval: Number("int"),
 * //             IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 * //             AvailabilityZones: [ // AvailabilityZoneList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           CrossRegionCopyRules: [ // CrossRegionCopyRules
 * //             { // CrossRegionCopyRule
 * //               TargetRegion: "STRING_VALUE",
 * //               Target: "STRING_VALUE",
 * //               Encrypted: true || false, // required
 * //               CmkArn: "STRING_VALUE",
 * //               CopyTags: true || false,
 * //               RetainRule: { // CrossRegionCopyRetainRule
 * //                 Interval: Number("int"),
 * //                 IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 * //               },
 * //               DeprecateRule: { // CrossRegionCopyDeprecateRule
 * //                 Interval: Number("int"),
 * //                 IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 * //               },
 * //             },
 * //           ],
 * //           ShareRules: [ // ShareRules
 * //             { // ShareRule
 * //               TargetAccounts: [ // ShareTargetAccountList // required
 * //                 "STRING_VALUE",
 * //               ],
 * //               UnshareInterval: Number("int"),
 * //               UnshareIntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 * //             },
 * //           ],
 * //           DeprecateRule: { // DeprecateRule
 * //             Count: Number("int"),
 * //             Interval: Number("int"),
 * //             IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 * //           },
 * //           ArchiveRule: { // ArchiveRule
 * //             RetainRule: { // ArchiveRetainRule
 * //               RetentionArchiveTier: { // RetentionArchiveTier
 * //                 Count: Number("int"),
 * //                 Interval: Number("int"),
 * //                 IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       Parameters: { // Parameters
 * //         ExcludeBootVolume: true || false,
 * //         NoReboot: true || false,
 * //         ExcludeDataVolumeTags: [ // ExcludeDataVolumeTagList
 * //           "<Tag>",
 * //         ],
 * //       },
 * //       EventSource: { // EventSource
 * //         Type: "MANAGED_CWE", // required
 * //         Parameters: { // EventParameters
 * //           EventType: "shareSnapshot", // required
 * //           SnapshotOwner: [ // SnapshotOwnerList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           DescriptionRegex: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       Actions: [ // ActionList
 * //         { // Action
 * //           Name: "STRING_VALUE", // required
 * //           CrossRegionCopy: [ // CrossRegionCopyActionList // required
 * //             { // CrossRegionCopyAction
 * //               Target: "STRING_VALUE", // required
 * //               EncryptionConfiguration: { // EncryptionConfiguration
 * //                 Encrypted: true || false, // required
 * //                 CmkArn: "STRING_VALUE",
 * //               },
 * //               RetainRule: {
 * //                 Interval: Number("int"),
 * //                 IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       PolicyLanguage: "SIMPLIFIED" || "STANDARD",
 * //       ResourceType: "VOLUME" || "INSTANCE",
 * //       CreateInterval: Number("int"),
 * //       RetainInterval: Number("int"),
 * //       CopyTags: true || false,
 * //       CrossRegionCopyTargets: [ // CrossRegionCopyTargetList
 * //         { // CrossRegionCopyTarget
 * //           TargetRegion: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ExtendDeletion: true || false,
 * //       Exclusions: { // Exclusions
 * //         ExcludeBootVolumes: true || false,
 * //         ExcludeVolumeTypes: [ // ExcludeVolumeTypesList
 * //           "STRING_VALUE",
 * //         ],
 * //         ExcludeTags: [ // ExcludeTagsList
 * //           "<Tag>",
 * //         ],
 * //       },
 * //     },
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     PolicyArn: "STRING_VALUE",
 * //     DefaultPolicy: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLifecyclePolicyCommandInput - {@link GetLifecyclePolicyCommandInput}
 * @returns {@link GetLifecyclePolicyCommandOutput}
 * @see {@link GetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for DLMClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service failed in an unexpected way.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because a limit was exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource was not found.</p>
 *
 * @throws {@link DLMServiceException}
 * <p>Base exception class for all service exceptions from DLM service.</p>
 *
 *
 * @public
 */
export class GetLifecyclePolicyCommand extends $Command
  .classBuilder<
    GetLifecyclePolicyCommandInput,
    GetLifecyclePolicyCommandOutput,
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
  .s("dlm_20180112", "GetLifecyclePolicy", {})
  .n("DLMClient", "GetLifecyclePolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetLifecyclePolicyCommand)
  .de(de_GetLifecyclePolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLifecyclePolicyRequest;
      output: GetLifecyclePolicyResponse;
    };
    sdk: {
      input: GetLifecyclePolicyCommandInput;
      output: GetLifecyclePolicyCommandOutput;
    };
  };
}
