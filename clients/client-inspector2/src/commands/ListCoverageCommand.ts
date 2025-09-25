// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListCoverageRequest, ListCoverageResponse } from "../models/models_1";
import { ListCoverage } from "../schemas/schemas_8_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCoverageCommand}.
 */
export interface ListCoverageCommandInput extends ListCoverageRequest {}
/**
 * @public
 *
 * The output of {@link ListCoverageCommand}.
 */
export interface ListCoverageCommandOutput extends ListCoverageResponse, __MetadataBearer {}

/**
 * <p>Lists coverage details for your environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCoverageCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCoverageCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListCoverageRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filterCriteria: { // CoverageFilterCriteria
 *     scanStatusCode: [ // CoverageStringFilterList
 *       { // CoverageStringFilter
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scanStatusReason: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     accountId: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     resourceId: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     resourceType: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scanType: "<CoverageStringFilterList>",
 *     ecrRepositoryName: "<CoverageStringFilterList>",
 *     ecrImageTags: "<CoverageStringFilterList>",
 *     ec2InstanceTags: [ // CoverageMapFilterList
 *       { // CoverageMapFilter
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     lambdaFunctionName: "<CoverageStringFilterList>",
 *     lambdaFunctionTags: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     lambdaFunctionRuntime: "<CoverageStringFilterList>",
 *     lastScannedAt: [ // CoverageDateFilterList
 *       { // CoverageDateFilter
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     scanMode: "<CoverageStringFilterList>",
 *     imagePulledAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     ecrImageLastInUseAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     ecrImageInUseCount: [ // CoverageNumberFilterList
 *       { // CoverageNumberFilter
 *         upperInclusive: Number("long"),
 *         lowerInclusive: Number("long"),
 *       },
 *     ],
 *     codeRepositoryProjectName: "<CoverageStringFilterList>",
 *     codeRepositoryProviderType: "<CoverageStringFilterList>",
 *     codeRepositoryProviderTypeVisibility: "<CoverageStringFilterList>",
 *     lastScannedCommitId: "<CoverageStringFilterList>",
 *   },
 * };
 * const command = new ListCoverageCommand(input);
 * const response = await client.send(command);
 * // { // ListCoverageResponse
 * //   nextToken: "STRING_VALUE",
 * //   coveredResources: [ // CoveredResources
 * //     { // CoveredResource
 * //       resourceType: "STRING_VALUE", // required
 * //       resourceId: "STRING_VALUE", // required
 * //       accountId: "STRING_VALUE", // required
 * //       scanType: "STRING_VALUE", // required
 * //       scanStatus: { // ScanStatus
 * //         statusCode: "STRING_VALUE", // required
 * //         reason: "STRING_VALUE", // required
 * //       },
 * //       resourceMetadata: { // ResourceScanMetadata
 * //         ecrRepository: { // EcrRepositoryMetadata
 * //           name: "STRING_VALUE",
 * //           scanFrequency: "STRING_VALUE",
 * //         },
 * //         ecrImage: { // EcrContainerImageMetadata
 * //           tags: [ // TagList
 * //             "STRING_VALUE",
 * //           ],
 * //           imagePulledAt: new Date("TIMESTAMP"),
 * //           lastInUseAt: new Date("TIMESTAMP"),
 * //           inUseCount: Number("long"),
 * //         },
 * //         ec2: { // Ec2Metadata
 * //           tags: { // TagMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           amiId: "STRING_VALUE",
 * //           platform: "STRING_VALUE",
 * //         },
 * //         lambdaFunction: { // LambdaFunctionMetadata
 * //           functionTags: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           layers: [ // LambdaLayerList
 * //             "STRING_VALUE",
 * //           ],
 * //           functionName: "STRING_VALUE",
 * //           runtime: "STRING_VALUE",
 * //         },
 * //         codeRepository: { // CodeRepositoryMetadata
 * //           projectName: "STRING_VALUE", // required
 * //           integrationArn: "STRING_VALUE",
 * //           providerType: "STRING_VALUE", // required
 * //           providerTypeVisibility: "STRING_VALUE", // required
 * //           lastScannedCommitId: "STRING_VALUE",
 * //           scanConfiguration: { // ProjectCodeSecurityScanConfiguration
 * //             periodicScanConfigurations: [ // ProjectPeriodicScanConfigurationList
 * //               { // ProjectPeriodicScanConfiguration
 * //                 frequencyExpression: "STRING_VALUE",
 * //                 ruleSetCategories: [ // RuleSetCategories
 * //                   "SAST" || "IAC" || "SCA",
 * //                 ],
 * //               },
 * //             ],
 * //             continuousIntegrationScanConfigurations: [ // ProjectContinuousIntegrationScanConfigurationList
 * //               { // ProjectContinuousIntegrationScanConfiguration
 * //                 supportedEvent: "PULL_REQUEST" || "PUSH",
 * //                 ruleSetCategories: [
 * //                   "SAST" || "IAC" || "SCA",
 * //                 ],
 * //               },
 * //             ],
 * //           },
 * //           onDemandScan: { // CodeRepositoryOnDemandScan
 * //             lastScannedCommitId: "STRING_VALUE",
 * //             lastScanAt: new Date("TIMESTAMP"),
 * //             scanStatus: {
 * //               statusCode: "STRING_VALUE", // required
 * //               reason: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //       lastScannedAt: new Date("TIMESTAMP"),
 * //       scanMode: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCoverageCommandInput - {@link ListCoverageCommandInput}
 * @returns {@link ListCoverageCommandOutput}
 * @see {@link ListCoverageCommandInput} for command's `input` shape.
 * @see {@link ListCoverageCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class ListCoverageCommand extends $Command
  .classBuilder<
    ListCoverageCommandInput,
    ListCoverageCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "ListCoverage", {})
  .n("Inspector2Client", "ListCoverageCommand")
  .sc(ListCoverage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCoverageRequest;
      output: ListCoverageResponse;
    };
    sdk: {
      input: ListCoverageCommandInput;
      output: ListCoverageCommandOutput;
    };
  };
}
