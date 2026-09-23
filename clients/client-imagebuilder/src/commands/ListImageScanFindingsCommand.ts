// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImageScanFindingsRequest, ListImageScanFindingsResponse } from "../models/models_0";
import { ListImageScanFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Returns a list of image scan findings for your account. Amazon Inspector generates the
 * 			findings when it scans images that have scanning enabled.</p>
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
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example List vulnerability findings for an image build
 * ```javascript
 * // The following example lists the vulnerability findings that Amazon Inspector detected for the specified image build version.
 * const input = {
 *   filters: [
 *     {
 *       name: "imageBuildVersionArn",
 *       values: [
 *         "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"
 *       ]
 *     }
 *   ]
 * };
 * const command = new ListImageScanFindingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   findings: [
 *     {
 *       awsAccountId: "111122223333",
 *       description: "In the Linux kernel, the following vulnerability has been resolved:
 *
 * virtio: break and reset virtio devices on device_shutdown()",
 *       firstObservedAt: "2026-01-06T20:12:57Z",
 *       fixAvailable: "YES",
 *       imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *       imagePipelineArn: "arn:aws:imagebuilder:us-west-2:111122223333:image-pipeline/my-example-pipeline",
 *       inspectorScore: 7.0,
 *       inspectorScoreDetails: {
 *         adjustedCvss: {
 *           adjustments:           [],
 *           cvssSource: "AMAZON_CVE",
 *           score: 7.0,
 *           scoreSource: "AMAZON_CVE",
 *           scoringVector: "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H",
 *           version: "3.1"
 *         }
 *       },
 *       packageVulnerabilityDetails: {
 *         cvss: [
 *           {
 *             baseScore: 7.0,
 *             scoringVector: "CVSS:3.1/AV:L/AC:H/PR:L/UI:N/S:U/C:H/I:H/A:H",
 *             source: "AMAZON_CVE",
 *             version: "3.1"
 *           }
 *         ],
 *         referenceUrls: [
 *           "https://alas.aws.amazon.com/AL2/ALAS2-2025-2955.html",
 *           "https://alas.aws.amazon.com/AL2023/ALAS2023-2025-1130.html"
 *         ],
 *         relatedVulnerabilities: [
 *           "ALAS2-2025-2955",
 *           "ALAS2023-2025-1130"
 *         ],
 *         source: "AMAZON_CVE",
 *         sourceUrl: "https://alas.aws.amazon.com/cve/json/v1/CVE-2025-38064.json",
 *         vendorCreatedAt: "2025-06-18T00:00:00Z",
 *         vendorSeverity: "Important",
 *         vendorUpdatedAt: "2025-06-25T00:00:00Z",
 *         vulnerabilityId: "CVE-2025-38064",
 *         vulnerablePackages: [
 *           {
 *             arch: "X86_64",
 *             epoch: 0,
 *             fixedInVersion: "0:5.15.189-131.202.amzn2",
 *             name: "kernel",
 *             packageManager: "OS",
 *             release: "280.652.amzn2",
 *             remediation: "yum update kernel",
 *             version: "4.14.355"
 *           }
 *         ]
 *       },
 *       remediation: {
 *         recommendation: {
 *           text: "None Provided"
 *         }
 *       },
 *       severity: "HIGH",
 *       title: "CVE-2025-38064 - kernel",
 *       type: "PACKAGE_VULNERABILITY",
 *       updatedAt: "2026-01-06T20:12:57Z"
 *     }
 *   ],
 *   requestId: "233de8e7-3b58-4319-a6af-f6774cf7d371"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListImageScanFindingsCommand extends command<ListImageScanFindingsCommandInput, ListImageScanFindingsCommandOutput>(
  _ep0,
  _mw0,
  "ListImageScanFindings",
  ListImageScanFindings$
) {
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
