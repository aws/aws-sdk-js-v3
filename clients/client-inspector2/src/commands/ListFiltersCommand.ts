// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListFiltersRequest, ListFiltersResponse } from "../models/models_1";
import { de_ListFiltersCommand, se_ListFiltersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFiltersCommand}.
 */
export interface ListFiltersCommandInput extends ListFiltersRequest {}
/**
 * @public
 *
 * The output of {@link ListFiltersCommand}.
 */
export interface ListFiltersCommandOutput extends ListFiltersResponse, __MetadataBearer {}

/**
 * <p>Lists the filters associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListFiltersCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListFiltersCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListFiltersRequest
 *   arns: [ // FilterArnList
 *     "STRING_VALUE",
 *   ],
 *   action: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListFiltersCommand(input);
 * const response = await client.send(command);
 * // { // ListFiltersResponse
 * //   filters: [ // FilterList // required
 * //     { // Filter
 * //       arn: "STRING_VALUE", // required
 * //       ownerId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       criteria: { // FilterCriteria
 * //         findingArn: [ // StringFilterList
 * //           { // StringFilter
 * //             comparison: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         awsAccountId: [
 * //           {
 * //             comparison: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         findingType: [
 * //           {
 * //             comparison: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         severity: [
 * //           {
 * //             comparison: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         firstObservedAt: [ // DateFilterList
 * //           { // DateFilter
 * //             startInclusive: new Date("TIMESTAMP"),
 * //             endInclusive: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         lastObservedAt: [
 * //           {
 * //             startInclusive: new Date("TIMESTAMP"),
 * //             endInclusive: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         updatedAt: [
 * //           {
 * //             startInclusive: new Date("TIMESTAMP"),
 * //             endInclusive: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         findingStatus: [
 * //           {
 * //             comparison: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         title: "<StringFilterList>",
 * //         inspectorScore: [ // NumberFilterList
 * //           { // NumberFilter
 * //             upperInclusive: Number("double"),
 * //             lowerInclusive: Number("double"),
 * //           },
 * //         ],
 * //         resourceType: "<StringFilterList>",
 * //         resourceId: "<StringFilterList>",
 * //         resourceTags: [ // MapFilterList
 * //           { // MapFilter
 * //             comparison: "STRING_VALUE", // required
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         ec2InstanceImageId: "<StringFilterList>",
 * //         ec2InstanceVpcId: "<StringFilterList>",
 * //         ec2InstanceSubnetId: "<StringFilterList>",
 * //         ecrImagePushedAt: [
 * //           {
 * //             startInclusive: new Date("TIMESTAMP"),
 * //             endInclusive: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         ecrImageArchitecture: "<StringFilterList>",
 * //         ecrImageRegistry: "<StringFilterList>",
 * //         ecrImageRepositoryName: "<StringFilterList>",
 * //         ecrImageTags: "<StringFilterList>",
 * //         ecrImageHash: "<StringFilterList>",
 * //         portRange: [ // PortRangeFilterList
 * //           { // PortRangeFilter
 * //             beginInclusive: Number("int"),
 * //             endInclusive: Number("int"),
 * //           },
 * //         ],
 * //         networkProtocol: "<StringFilterList>",
 * //         componentId: "<StringFilterList>",
 * //         componentType: "<StringFilterList>",
 * //         vulnerabilityId: "<StringFilterList>",
 * //         vulnerabilitySource: "<StringFilterList>",
 * //         vendorSeverity: "<StringFilterList>",
 * //         vulnerablePackages: [ // PackageFilterList
 * //           { // PackageFilter
 * //             name: "<StringFilter>",
 * //             version: "<StringFilter>",
 * //             epoch: {
 * //               upperInclusive: Number("double"),
 * //               lowerInclusive: Number("double"),
 * //             },
 * //             release: "<StringFilter>",
 * //             architecture: "<StringFilter>",
 * //             sourceLayerHash: "<StringFilter>",
 * //             sourceLambdaLayerArn: "<StringFilter>",
 * //           },
 * //         ],
 * //         relatedVulnerabilities: "<StringFilterList>",
 * //         fixAvailable: "<StringFilterList>",
 * //         lambdaFunctionName: "<StringFilterList>",
 * //         lambdaFunctionLayers: "<StringFilterList>",
 * //         lambdaFunctionRuntime: "<StringFilterList>",
 * //         lambdaFunctionLastModifiedAt: [
 * //           {
 * //             startInclusive: new Date("TIMESTAMP"),
 * //             endInclusive: new Date("TIMESTAMP"),
 * //           },
 * //         ],
 * //         lambdaFunctionExecutionRoleArn: "<StringFilterList>",
 * //         exploitAvailable: "<StringFilterList>",
 * //         codeVulnerabilityDetectorName: "<StringFilterList>",
 * //         codeVulnerabilityDetectorTags: "<StringFilterList>",
 * //         codeVulnerabilityFilePath: "<StringFilterList>",
 * //         epssScore: [
 * //           {
 * //             upperInclusive: Number("double"),
 * //             lowerInclusive: Number("double"),
 * //           },
 * //         ],
 * //       },
 * //       action: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFiltersCommandInput - {@link ListFiltersCommandInput}
 * @returns {@link ListFiltersCommandOutput}
 * @see {@link ListFiltersCommandInput} for command's `input` shape.
 * @see {@link ListFiltersCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @public
 */
export class ListFiltersCommand extends $Command
  .classBuilder<
    ListFiltersCommandInput,
    ListFiltersCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "ListFilters", {})
  .n("Inspector2Client", "ListFiltersCommand")
  .f(void 0, void 0)
  .ser(se_ListFiltersCommand)
  .de(de_ListFiltersCommand)
  .build() {}
