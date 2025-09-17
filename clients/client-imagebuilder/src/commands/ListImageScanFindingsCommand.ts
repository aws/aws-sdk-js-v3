// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImageScanFindingsRequest, ListImageScanFindingsResponse } from "../models/models_0";
import { de_ListImageScanFindingsCommand, se_ListImageScanFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImageScanFindingsCommand}.
 */
export interface ListImageScanFindingsCommandInput extends ListImageScanFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListImageScanFindingsCommand}.
 */
export interface ListImageScanFindingsCommandOutput extends ListImageScanFindingsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of image scan findings for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImageScanFindingsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImageScanFindingsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImageScanFindingsRequest
 *   filters: [ // ImageScanFindingsFilterList
 *     { // ImageScanFindingsFilter
 *       name: "STRING_VALUE",
 *       values: [ // ImageScanFindingsFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImageScanFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListImageScanFindingsResponse
 * //   requestId: "STRING_VALUE",
 * //   findings: [ // ImageScanFindingsList
 * //     { // ImageScanFinding
 * //       awsAccountId: "STRING_VALUE",
 * //       imageBuildVersionArn: "STRING_VALUE",
 * //       imagePipelineArn: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       remediation: { // Remediation
 * //         recommendation: { // RemediationRecommendation
 * //           text: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //         },
 * //       },
 * //       severity: "STRING_VALUE",
 * //       firstObservedAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       inspectorScore: Number("double"),
 * //       inspectorScoreDetails: { // InspectorScoreDetails
 * //         adjustedCvss: { // CvssScoreDetails
 * //           scoreSource: "STRING_VALUE",
 * //           cvssSource: "STRING_VALUE",
 * //           version: "STRING_VALUE",
 * //           score: Number("double"),
 * //           scoringVector: "STRING_VALUE",
 * //           adjustments: [ // CvssScoreAdjustmentList
 * //             { // CvssScoreAdjustment
 * //               metric: "STRING_VALUE",
 * //               reason: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       packageVulnerabilityDetails: { // PackageVulnerabilityDetails
 * //         vulnerabilityId: "STRING_VALUE", // required
 * //         vulnerablePackages: [ // VulnerablePackageList
 * //           { // VulnerablePackage
 * //             name: "STRING_VALUE",
 * //             version: "STRING_VALUE",
 * //             sourceLayerHash: "STRING_VALUE",
 * //             epoch: Number("int"),
 * //             release: "STRING_VALUE",
 * //             arch: "STRING_VALUE",
 * //             packageManager: "STRING_VALUE",
 * //             filePath: "STRING_VALUE",
 * //             fixedInVersion: "STRING_VALUE",
 * //             remediation: "STRING_VALUE",
 * //           },
 * //         ],
 * //         source: "STRING_VALUE",
 * //         cvss: [ // CvssScoreList
 * //           { // CvssScore
 * //             baseScore: Number("double"),
 * //             scoringVector: "STRING_VALUE",
 * //             version: "STRING_VALUE",
 * //             source: "STRING_VALUE",
 * //           },
 * //         ],
 * //         relatedVulnerabilities: [ // VulnerabilityIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         sourceUrl: "STRING_VALUE",
 * //         vendorSeverity: "STRING_VALUE",
 * //         vendorCreatedAt: new Date("TIMESTAMP"),
 * //         vendorUpdatedAt: new Date("TIMESTAMP"),
 * //         referenceUrls: [ // NonEmptyStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       fixAvailable: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImageScanFindingsCommandInput - {@link ListImageScanFindingsCommandInput}
 * @returns {@link ListImageScanFindingsCommandOutput}
 * @see {@link ListImageScanFindingsCommandInput} for command's `input` shape.
 * @see {@link ListImageScanFindingsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @public
 */
export class ListImageScanFindingsCommand extends $Command
  .classBuilder<
    ListImageScanFindingsCommandInput,
    ListImageScanFindingsCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "ListImageScanFindings", {})
  .n("ImagebuilderClient", "ListImageScanFindingsCommand")
  .f(void 0, void 0)
  .ser(se_ListImageScanFindingsCommand)
  .de(de_ListImageScanFindingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImageScanFindingsRequest;
      output: ListImageScanFindingsResponse;
    };
    sdk: {
      input: ListImageScanFindingsCommandInput;
      output: ListImageScanFindingsCommandOutput;
    };
  };
}
