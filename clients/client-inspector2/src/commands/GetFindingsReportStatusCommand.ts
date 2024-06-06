// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { GetFindingsReportStatusRequest, GetFindingsReportStatusResponse } from "../models/models_0";
import { de_GetFindingsReportStatusCommand, se_GetFindingsReportStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsReportStatusCommand}.
 */
export interface GetFindingsReportStatusCommandInput extends GetFindingsReportStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsReportStatusCommand}.
 */
export interface GetFindingsReportStatusCommandOutput extends GetFindingsReportStatusResponse, __MetadataBearer {}

/**
 * <p>Gets the status of a findings report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetFindingsReportStatusCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetFindingsReportStatusCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // GetFindingsReportStatusRequest
 *   reportId: "STRING_VALUE",
 * };
 * const command = new GetFindingsReportStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsReportStatusResponse
 * //   reportId: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   errorCode: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   destination: { // Destination
 * //     bucketName: "STRING_VALUE", // required
 * //     keyPrefix: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE", // required
 * //   },
 * //   filterCriteria: { // FilterCriteria
 * //     findingArn: [ // StringFilterList
 * //       { // StringFilter
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     awsAccountId: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     findingType: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     severity: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     firstObservedAt: [ // DateFilterList
 * //       { // DateFilter
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     lastObservedAt: [
 * //       {
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     updatedAt: [
 * //       {
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     findingStatus: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     title: "<StringFilterList>",
 * //     inspectorScore: [ // NumberFilterList
 * //       { // NumberFilter
 * //         upperInclusive: Number("double"),
 * //         lowerInclusive: Number("double"),
 * //       },
 * //     ],
 * //     resourceType: "<StringFilterList>",
 * //     resourceId: "<StringFilterList>",
 * //     resourceTags: [ // MapFilterList
 * //       { // MapFilter
 * //         comparison: "STRING_VALUE", // required
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ec2InstanceImageId: "<StringFilterList>",
 * //     ec2InstanceVpcId: "<StringFilterList>",
 * //     ec2InstanceSubnetId: "<StringFilterList>",
 * //     ecrImagePushedAt: [
 * //       {
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     ecrImageArchitecture: "<StringFilterList>",
 * //     ecrImageRegistry: "<StringFilterList>",
 * //     ecrImageRepositoryName: "<StringFilterList>",
 * //     ecrImageTags: "<StringFilterList>",
 * //     ecrImageHash: "<StringFilterList>",
 * //     portRange: [ // PortRangeFilterList
 * //       { // PortRangeFilter
 * //         beginInclusive: Number("int"),
 * //         endInclusive: Number("int"),
 * //       },
 * //     ],
 * //     networkProtocol: "<StringFilterList>",
 * //     componentId: "<StringFilterList>",
 * //     componentType: "<StringFilterList>",
 * //     vulnerabilityId: "<StringFilterList>",
 * //     vulnerabilitySource: "<StringFilterList>",
 * //     vendorSeverity: "<StringFilterList>",
 * //     vulnerablePackages: [ // PackageFilterList
 * //       { // PackageFilter
 * //         name: "<StringFilter>",
 * //         version: "<StringFilter>",
 * //         epoch: {
 * //           upperInclusive: Number("double"),
 * //           lowerInclusive: Number("double"),
 * //         },
 * //         release: "<StringFilter>",
 * //         architecture: "<StringFilter>",
 * //         sourceLayerHash: "<StringFilter>",
 * //         sourceLambdaLayerArn: "<StringFilter>",
 * //       },
 * //     ],
 * //     relatedVulnerabilities: "<StringFilterList>",
 * //     fixAvailable: "<StringFilterList>",
 * //     lambdaFunctionName: "<StringFilterList>",
 * //     lambdaFunctionLayers: "<StringFilterList>",
 * //     lambdaFunctionRuntime: "<StringFilterList>",
 * //     lambdaFunctionLastModifiedAt: [
 * //       {
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     lambdaFunctionExecutionRoleArn: "<StringFilterList>",
 * //     exploitAvailable: "<StringFilterList>",
 * //     codeVulnerabilityDetectorName: "<StringFilterList>",
 * //     codeVulnerabilityDetectorTags: "<StringFilterList>",
 * //     codeVulnerabilityFilePath: "<StringFilterList>",
 * //     epssScore: [
 * //       {
 * //         upperInclusive: Number("double"),
 * //         lowerInclusive: Number("double"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFindingsReportStatusCommandInput - {@link GetFindingsReportStatusCommandInput}
 * @returns {@link GetFindingsReportStatusCommandOutput}
 * @see {@link GetFindingsReportStatusCommandInput} for command's `input` shape.
 * @see {@link GetFindingsReportStatusCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
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
export class GetFindingsReportStatusCommand extends $Command
  .classBuilder<
    GetFindingsReportStatusCommandInput,
    GetFindingsReportStatusCommandOutput,
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
  .s("Inspector2", "GetFindingsReportStatus", {})
  .n("Inspector2Client", "GetFindingsReportStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetFindingsReportStatusCommand)
  .de(de_GetFindingsReportStatusCommand)
  .build() {}
