// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListFindingAggregationsRequest, ListFindingAggregationsResponse } from "../models/models_1";
import { de_ListFindingAggregationsCommand, se_ListFindingAggregationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFindingAggregationsCommand}.
 */
export interface ListFindingAggregationsCommandInput extends ListFindingAggregationsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingAggregationsCommand}.
 */
export interface ListFindingAggregationsCommandOutput extends ListFindingAggregationsResponse, __MetadataBearer {}

/**
 * <p>Lists aggregated finding data for your environment based on specific criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListFindingAggregationsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListFindingAggregationsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListFindingAggregationsRequest
 *   aggregationType: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   accountIds: [ // StringFilterList
 *     { // StringFilter
 *       comparison: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   aggregationRequest: { // AggregationRequest Union: only one key present
 *     accountAggregation: { // AccountAggregation
 *       findingType: "STRING_VALUE",
 *       resourceType: "STRING_VALUE",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     amiAggregation: { // AmiAggregation
 *       amis: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     awsEcrContainerAggregation: { // AwsEcrContainerAggregation
 *       resourceIds: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *       imageShas: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *       repositories: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *       architectures: "<StringFilterList>",
 *       imageTags: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     ec2InstanceAggregation: { // Ec2InstanceAggregation
 *       amis: "<StringFilterList>",
 *       operatingSystems: "<StringFilterList>",
 *       instanceIds: "<StringFilterList>",
 *       instanceTags: [ // MapFilterList
 *         { // MapFilter
 *           comparison: "STRING_VALUE", // required
 *           key: "STRING_VALUE", // required
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     findingTypeAggregation: { // FindingTypeAggregation
 *       findingType: "STRING_VALUE",
 *       resourceType: "STRING_VALUE",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     imageLayerAggregation: { // ImageLayerAggregation
 *       repositories: "<StringFilterList>",
 *       resourceIds: "<StringFilterList>",
 *       layerHashes: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     packageAggregation: { // PackageAggregation
 *       packageNames: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     repositoryAggregation: { // RepositoryAggregation
 *       repositories: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     titleAggregation: { // TitleAggregation
 *       titles: "<StringFilterList>",
 *       vulnerabilityIds: "<StringFilterList>",
 *       resourceType: "STRING_VALUE",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *       findingType: "STRING_VALUE",
 *     },
 *     lambdaLayerAggregation: { // LambdaLayerAggregation
 *       functionNames: "<StringFilterList>",
 *       resourceIds: "<StringFilterList>",
 *       layerArns: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     lambdaFunctionAggregation: { // LambdaFunctionAggregation
 *       resourceIds: "<StringFilterList>",
 *       functionNames: "<StringFilterList>",
 *       runtimes: "<StringFilterList>",
 *       functionTags: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           key: "STRING_VALUE", // required
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new ListFindingAggregationsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingAggregationsResponse
 * //   aggregationType: "STRING_VALUE", // required
 * //   responses: [ // AggregationResponseList
 * //     { // AggregationResponse Union: only one key present
 * //       accountAggregation: { // AccountAggregationResponse
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: { // SeverityCounts
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //       },
 * //       amiAggregation: { // AmiAggregationResponse
 * //         ami: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //         affectedInstances: Number("long"),
 * //       },
 * //       awsEcrContainerAggregation: { // AwsEcrContainerAggregationResponse
 * //         resourceId: "STRING_VALUE", // required
 * //         imageSha: "STRING_VALUE",
 * //         repository: "STRING_VALUE",
 * //         architecture: "STRING_VALUE",
 * //         imageTags: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //       },
 * //       ec2InstanceAggregation: { // Ec2InstanceAggregationResponse
 * //         instanceId: "STRING_VALUE", // required
 * //         ami: "STRING_VALUE",
 * //         operatingSystem: "STRING_VALUE",
 * //         instanceTags: { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //         networkFindings: Number("long"),
 * //       },
 * //       findingTypeAggregation: { // FindingTypeAggregationResponse
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //       },
 * //       imageLayerAggregation: { // ImageLayerAggregationResponse
 * //         repository: "STRING_VALUE", // required
 * //         resourceId: "STRING_VALUE", // required
 * //         layerHash: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE", // required
 * //         severityCounts: "<SeverityCounts>",
 * //       },
 * //       packageAggregation: { // PackageAggregationResponse
 * //         packageName: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: "<SeverityCounts>",
 * //       },
 * //       repositoryAggregation: { // RepositoryAggregationResponse
 * //         repository: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: "<SeverityCounts>",
 * //         affectedImages: Number("long"),
 * //       },
 * //       titleAggregation: { // TitleAggregationResponse
 * //         title: "STRING_VALUE", // required
 * //         vulnerabilityId: "STRING_VALUE",
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: "<SeverityCounts>",
 * //       },
 * //       lambdaLayerAggregation: { // LambdaLayerAggregationResponse
 * //         functionName: "STRING_VALUE", // required
 * //         resourceId: "STRING_VALUE", // required
 * //         layerArn: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE", // required
 * //         severityCounts: "<SeverityCounts>",
 * //       },
 * //       lambdaFunctionAggregation: { // LambdaFunctionAggregationResponse
 * //         resourceId: "STRING_VALUE", // required
 * //         functionName: "STRING_VALUE",
 * //         runtime: "STRING_VALUE",
 * //         lambdaTags: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: "<SeverityCounts>",
 * //         lastModifiedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingAggregationsCommandInput - {@link ListFindingAggregationsCommandInput}
 * @returns {@link ListFindingAggregationsCommandOutput}
 * @see {@link ListFindingAggregationsCommandInput} for command's `input` shape.
 * @see {@link ListFindingAggregationsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListFindingAggregationsCommand extends $Command
  .classBuilder<
    ListFindingAggregationsCommandInput,
    ListFindingAggregationsCommandOutput,
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
  .s("Inspector2", "ListFindingAggregations", {})
  .n("Inspector2Client", "ListFindingAggregationsCommand")
  .f(void 0, void 0)
  .ser(se_ListFindingAggregationsCommand)
  .de(de_ListFindingAggregationsCommand)
  .build() {}
