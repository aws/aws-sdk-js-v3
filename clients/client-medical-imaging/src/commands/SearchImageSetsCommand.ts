// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import {
  SearchImageSetsRequest,
  SearchImageSetsRequestFilterSensitiveLog,
  SearchImageSetsResponse,
  SearchImageSetsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_SearchImageSetsCommand, se_SearchImageSetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchImageSetsCommand}.
 */
export interface SearchImageSetsCommandInput extends SearchImageSetsRequest {}
/**
 * @public
 *
 * The output of {@link SearchImageSetsCommand}.
 */
export interface SearchImageSetsCommandOutput extends SearchImageSetsResponse, __MetadataBearer {}

/**
 * <p>Search image sets based on defined input attributes.</p>
 *          <note>
 *             <p>
 *                <code>SearchImageSets</code> accepts a single search query parameter and returns a paginated
 *                response of all image sets that have the matching criteria. All date range queries must be input
 *                as <code>(lowerBound, upperBound)</code>.</p>
 *             <p>By default, <code>SearchImageSets</code> uses the <code>updatedAt</code> field for sorting
 *                in descending order from newest to oldest.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, SearchImageSetsCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, SearchImageSetsCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MedicalImagingClient(config);
 * const input = { // SearchImageSetsRequest
 *   datastoreId: "STRING_VALUE", // required
 *   searchCriteria: { // SearchCriteria
 *     filters: [ // SearchFilters
 *       { // SearchFilter
 *         values: [ // SearchByAttributeValues // required
 *           { // SearchByAttributeValue Union: only one key present
 *             DICOMPatientId: "STRING_VALUE",
 *             DICOMAccessionNumber: "STRING_VALUE",
 *             DICOMStudyId: "STRING_VALUE",
 *             DICOMStudyInstanceUID: "STRING_VALUE",
 *             DICOMSeriesInstanceUID: "STRING_VALUE",
 *             createdAt: new Date("TIMESTAMP"),
 *             updatedAt: new Date("TIMESTAMP"),
 *             DICOMStudyDateAndTime: { // DICOMStudyDateAndTime
 *               DICOMStudyDate: "STRING_VALUE", // required
 *               DICOMStudyTime: "STRING_VALUE",
 *             },
 *           },
 *         ],
 *         operator: "EQUAL" || "BETWEEN", // required
 *       },
 *     ],
 *     sort: { // Sort
 *       sortOrder: "ASC" || "DESC", // required
 *       sortField: "updatedAt" || "createdAt" || "DICOMStudyDateAndTime", // required
 *     },
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchImageSetsCommand(input);
 * const response = await client.send(command);
 * // { // SearchImageSetsResponse
 * //   imageSetsMetadataSummaries: [ // ImageSetsMetadataSummaries // required
 * //     { // ImageSetsMetadataSummary
 * //       imageSetId: "STRING_VALUE", // required
 * //       version: Number("int"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       DICOMTags: { // DICOMTags
 * //         DICOMPatientId: "STRING_VALUE",
 * //         DICOMPatientName: "STRING_VALUE",
 * //         DICOMPatientBirthDate: "STRING_VALUE",
 * //         DICOMPatientSex: "STRING_VALUE",
 * //         DICOMStudyInstanceUID: "STRING_VALUE",
 * //         DICOMStudyId: "STRING_VALUE",
 * //         DICOMStudyDescription: "STRING_VALUE",
 * //         DICOMNumberOfStudyRelatedSeries: Number("int"),
 * //         DICOMNumberOfStudyRelatedInstances: Number("int"),
 * //         DICOMAccessionNumber: "STRING_VALUE",
 * //         DICOMSeriesInstanceUID: "STRING_VALUE",
 * //         DICOMSeriesModality: "STRING_VALUE",
 * //         DICOMSeriesBodyPart: "STRING_VALUE",
 * //         DICOMSeriesNumber: Number("int"),
 * //         DICOMStudyDate: "STRING_VALUE",
 * //         DICOMStudyTime: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   sort: { // Sort
 * //     sortOrder: "ASC" || "DESC", // required
 * //     sortField: "updatedAt" || "createdAt" || "DICOMStudyDateAndTime", // required
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchImageSetsCommandInput - {@link SearchImageSetsCommandInput}
 * @returns {@link SearchImageSetsCommandOutput}
 * @see {@link SearchImageSetsCommandInput} for command's `input` shape.
 * @see {@link SearchImageSetsCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 * @public
 */
export class SearchImageSetsCommand extends $Command
  .classBuilder<
    SearchImageSetsCommandInput,
    SearchImageSetsCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AHIGatewayService", "SearchImageSets", {})
  .n("MedicalImagingClient", "SearchImageSetsCommand")
  .f(SearchImageSetsRequestFilterSensitiveLog, SearchImageSetsResponseFilterSensitiveLog)
  .ser(se_SearchImageSetsCommand)
  .de(de_SearchImageSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchImageSetsRequest;
      output: SearchImageSetsResponse;
    };
    sdk: {
      input: SearchImageSetsCommandInput;
      output: SearchImageSetsCommandOutput;
    };
  };
}
