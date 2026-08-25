// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeClusterVersionsRequest, DescribeClusterVersionsResponse } from "../models/models_0";
import { DescribeClusterVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeClusterVersionsCommand}.
 */
export interface DescribeClusterVersionsCommandInput extends DescribeClusterVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterVersionsCommand}.
 */
export interface DescribeClusterVersionsCommandOutput extends DescribeClusterVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists available Kubernetes versions for Amazon EKS clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeClusterVersionsCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeClusterVersionsCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * // import type { EKSClientConfig } from "@aws-sdk/client-eks";
 * const config = {}; // type is EKSClientConfig
 * const client = new EKSClient(config);
 * const input = { // DescribeClusterVersionsRequest
 *   clusterType: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   defaultOnly: true || false,
 *   includeAll: true || false,
 *   clusterVersions: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   status: "unsupported" || "standard-support" || "extended-support",
 *   versionStatus: "UNSUPPORTED" || "STANDARD_SUPPORT" || "EXTENDED_SUPPORT",
 * };
 * const command = new DescribeClusterVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterVersionsResponse
 * //   nextToken: "STRING_VALUE",
 * //   clusterVersions: [ // ClusterVersionList
 * //     { // ClusterVersionInformation
 * //       clusterVersion: "STRING_VALUE",
 * //       clusterType: "STRING_VALUE",
 * //       defaultPlatformVersion: "STRING_VALUE",
 * //       defaultVersion: true || false,
 * //       releaseDate: new Date("TIMESTAMP"),
 * //       endOfStandardSupportDate: new Date("TIMESTAMP"),
 * //       endOfExtendedSupportDate: new Date("TIMESTAMP"),
 * //       status: "unsupported" || "standard-support" || "extended-support",
 * //       versionStatus: "UNSUPPORTED" || "STANDARD_SUPPORT" || "EXTENDED_SUPPORT",
 * //       kubernetesPatchVersion: "STRING_VALUE",
 * //       controlPlaneScalingTiers: [ // ControlPlaneScalingTierList
 * //         { // ControlPlaneScalingTierInfo
 * //           tierName: "STRING_VALUE",
 * //           apiRequestConcurrency: Number("int"),
 * //           podSchedulingRatePerSecond: Number("int"),
 * //           clusterDatabaseSizeGb: Number("int"),
 * //           controlPlaneComponentConfigOverrides: { // ControlPlaneConfigInfo
 * //             kubeApiServerConfig: { // KubeApiServerVersionConfig
 * //               eventTtl: { // DurationParameterConfig
 * //                 defaultValue: "STRING_VALUE",
 * //                 constraints: { // DurationConstraints
 * //                   min: "STRING_VALUE",
 * //                   max: "STRING_VALUE",
 * //                 },
 * //               },
 * //               serviceNodePortRange: { // PortRangeParameterConfig
 * //                 defaultValue: { // ServiceNodePortRange
 * //                   minPort: Number("int"),
 * //                   maxPort: Number("int"),
 * //                 },
 * //                 constraints: { // PortRangeConstraints
 * //                   minPort: { // IntegerRangeConstraint
 * //                     min: Number("int"),
 * //                     max: Number("int"),
 * //                   },
 * //                   maxPort: {
 * //                     min: Number("int"),
 * //                     max: Number("int"),
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //             kubeSchedulerConfig: { // KubeSchedulerVersionConfig
 * //               nodeResourcesFit: { // NodeResourcesFitVersionConfig
 * //                 scoringStrategy: { // ScoringStrategyConfig
 * //                   defaultValue: { // ScoringStrategy
 * //                     type: "LeastAllocated" || "MostAllocated",
 * //                     resources: [ // ResourceWeightList
 * //                       { // ResourceWeight
 * //                         name: "STRING_VALUE",
 * //                         weight: Number("int"),
 * //                       },
 * //                     ],
 * //                   },
 * //                   constraints: { // ScoringStrategyConstraints
 * //                     scoringStrategy: { // AllowedValuesConstraint
 * //                       allowedValues: [ // AllowedValuesList
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     resources: { // ResourceConstraints
 * //                       name: {
 * //                         allowedValues: [
 * //                           "STRING_VALUE",
 * //                         ],
 * //                       },
 * //                       weight: {
 * //                         min: Number("int"),
 * //                         max: Number("int"),
 * //                       },
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //             kubeControllerManagerConfig: { // KubeControllerManagerVersionConfig
 * //               podGcControllerConfig: { // PodGcControllerVersionConfig
 * //                 terminatedPodGcThreshold: { // IntegerParameterConfig
 * //                   defaultValue: Number("int"),
 * //                   constraints: { // IntegerConstraints
 * //                     min: Number("int"),
 * //                     max: Number("int"),
 * //                   },
 * //                 },
 * //               },
 * //               horizontalPodAutoscalerControllerConfig: { // HorizontalPodAutoscalerControllerVersionConfig
 * //                 horizontalPodAutoscalerSyncPeriod: {
 * //                   defaultValue: "STRING_VALUE",
 * //                   constraints: {
 * //                     min: "STRING_VALUE",
 * //                     max: "STRING_VALUE",
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       controlPlaneComponentConfig: {
 * //         kubeApiServerConfig: {
 * //           eventTtl: "<DurationParameterConfig>",
 * //           serviceNodePortRange: {
 * //             defaultValue: {
 * //               minPort: Number("int"),
 * //               maxPort: Number("int"),
 * //             },
 * //             constraints: {
 * //               minPort: "<IntegerRangeConstraint>",
 * //               maxPort: "<IntegerRangeConstraint>",
 * //             },
 * //           },
 * //         },
 * //         kubeSchedulerConfig: {
 * //           nodeResourcesFit: {
 * //             scoringStrategy: {
 * //               defaultValue: {
 * //                 type: "LeastAllocated" || "MostAllocated",
 * //                 resources: [
 * //                   {
 * //                     name: "STRING_VALUE",
 * //                     weight: Number("int"),
 * //                   },
 * //                 ],
 * //               },
 * //               constraints: {
 * //                 scoringStrategy: "<AllowedValuesConstraint>",
 * //                 resources: {
 * //                   name: "<AllowedValuesConstraint>",
 * //                   weight: "<IntegerRangeConstraint>",
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //         kubeControllerManagerConfig: {
 * //           podGcControllerConfig: {
 * //             terminatedPodGcThreshold: {
 * //               defaultValue: Number("int"),
 * //               constraints: {
 * //                 min: Number("int"),
 * //                 max: Number("int"),
 * //               },
 * //             },
 * //           },
 * //           horizontalPodAutoscalerControllerConfig: {
 * //             horizontalPodAutoscalerSyncPeriod: "<DurationParameterConfig>",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeClusterVersionsCommandInput - {@link DescribeClusterVersionsCommandInput}
 * @returns {@link DescribeClusterVersionsCommandOutput}
 * @see {@link DescribeClusterVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterVersionsCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 *
 * @public
 */
export class DescribeClusterVersionsCommand extends command<DescribeClusterVersionsCommandInput, DescribeClusterVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeClusterVersions",
  DescribeClusterVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterVersionsRequest;
      output: DescribeClusterVersionsResponse;
    };
    sdk: {
      input: DescribeClusterVersionsCommandInput;
      output: DescribeClusterVersionsCommandOutput;
    };
  };
}
