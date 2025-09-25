// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { UpdateFilterRequest, UpdateFilterResponse } from "../models/models_1";
import { UpdateFilter } from "../schemas/schemas_2_Finding";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFilterCommand}.
 */
export interface UpdateFilterCommandInput extends UpdateFilterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFilterCommand}.
 */
export interface UpdateFilterCommandOutput extends UpdateFilterResponse, __MetadataBearer {}

/**
 * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, UpdateFilterCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, UpdateFilterCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // UpdateFilterRequest
 *   action: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   filterCriteria: { // FilterCriteria
 *     findingArn: [ // StringFilterList
 *       { // StringFilter
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     awsAccountId: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     findingType: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     severity: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     firstObservedAt: [ // DateFilterList
 *       { // DateFilter
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     lastObservedAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     updatedAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     findingStatus: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     title: "<StringFilterList>",
 *     inspectorScore: [ // NumberFilterList
 *       { // NumberFilter
 *         upperInclusive: Number("double"),
 *         lowerInclusive: Number("double"),
 *       },
 *     ],
 *     resourceType: "<StringFilterList>",
 *     resourceId: "<StringFilterList>",
 *     resourceTags: [ // MapFilterList
 *       { // MapFilter
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     ec2InstanceImageId: "<StringFilterList>",
 *     ec2InstanceVpcId: "<StringFilterList>",
 *     ec2InstanceSubnetId: "<StringFilterList>",
 *     ecrImagePushedAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     ecrImageArchitecture: "<StringFilterList>",
 *     ecrImageRegistry: "<StringFilterList>",
 *     ecrImageRepositoryName: "<StringFilterList>",
 *     ecrImageTags: "<StringFilterList>",
 *     ecrImageHash: "<StringFilterList>",
 *     ecrImageLastInUseAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     ecrImageInUseCount: [
 *       {
 *         upperInclusive: Number("double"),
 *         lowerInclusive: Number("double"),
 *       },
 *     ],
 *     portRange: [ // PortRangeFilterList
 *       { // PortRangeFilter
 *         beginInclusive: Number("int"),
 *         endInclusive: Number("int"),
 *       },
 *     ],
 *     networkProtocol: "<StringFilterList>",
 *     componentId: "<StringFilterList>",
 *     componentType: "<StringFilterList>",
 *     vulnerabilityId: "<StringFilterList>",
 *     vulnerabilitySource: "<StringFilterList>",
 *     vendorSeverity: "<StringFilterList>",
 *     vulnerablePackages: [ // PackageFilterList
 *       { // PackageFilter
 *         name: "<StringFilter>",
 *         version: "<StringFilter>",
 *         epoch: {
 *           upperInclusive: Number("double"),
 *           lowerInclusive: Number("double"),
 *         },
 *         release: "<StringFilter>",
 *         architecture: "<StringFilter>",
 *         sourceLayerHash: "<StringFilter>",
 *         sourceLambdaLayerArn: "<StringFilter>",
 *         filePath: "<StringFilter>",
 *       },
 *     ],
 *     relatedVulnerabilities: "<StringFilterList>",
 *     fixAvailable: "<StringFilterList>",
 *     lambdaFunctionName: "<StringFilterList>",
 *     lambdaFunctionLayers: "<StringFilterList>",
 *     lambdaFunctionRuntime: "<StringFilterList>",
 *     lambdaFunctionLastModifiedAt: "<DateFilterList>",
 *     lambdaFunctionExecutionRoleArn: "<StringFilterList>",
 *     exploitAvailable: "<StringFilterList>",
 *     codeVulnerabilityDetectorName: "<StringFilterList>",
 *     codeVulnerabilityDetectorTags: "<StringFilterList>",
 *     codeVulnerabilityFilePath: "<StringFilterList>",
 *     epssScore: [
 *       {
 *         upperInclusive: Number("double"),
 *         lowerInclusive: Number("double"),
 *       },
 *     ],
 *     codeRepositoryProjectName: "<StringFilterList>",
 *     codeRepositoryProviderType: "<StringFilterList>",
 *   },
 *   name: "STRING_VALUE",
 *   filterArn: "STRING_VALUE", // required
 *   reason: "STRING_VALUE",
 * };
 * const command = new UpdateFilterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFilterResponse
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateFilterCommandInput - {@link UpdateFilterCommandInput}
 * @returns {@link UpdateFilterCommandOutput}
 * @see {@link UpdateFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateFilterCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
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
export class UpdateFilterCommand extends $Command
  .classBuilder<
    UpdateFilterCommandInput,
    UpdateFilterCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "UpdateFilter", {})
  .n("Inspector2Client", "UpdateFilterCommand")
  .sc(UpdateFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFilterRequest;
      output: UpdateFilterResponse;
    };
    sdk: {
      input: UpdateFilterCommandInput;
      output: UpdateFilterCommandOutput;
    };
  };
}
