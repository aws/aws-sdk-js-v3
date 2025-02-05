// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import { GetApplicationComponentDetailsRequest, GetApplicationComponentDetailsResponse } from "../models/models_0";
import {
  de_GetApplicationComponentDetailsCommand,
  se_GetApplicationComponentDetailsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationComponentDetailsCommand}.
 */
export interface GetApplicationComponentDetailsCommandInput extends GetApplicationComponentDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationComponentDetailsCommand}.
 */
export interface GetApplicationComponentDetailsCommandOutput
  extends GetApplicationComponentDetailsResponse,
    __MetadataBearer {}

/**
 * <p> Retrieves details about an application component. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetApplicationComponentDetailsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetApplicationComponentDetailsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // GetApplicationComponentDetailsRequest
 *   applicationComponentId: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationComponentDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationComponentDetailsResponse
 * //   applicationComponentDetail: { // ApplicationComponentDetail
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     recommendationSet: { // RecommendationSet
 * //       transformationTool: { // TransformationTool
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         tranformationToolInstallationLink: "STRING_VALUE",
 * //       },
 * //       targetDestination: "STRING_VALUE",
 * //       strategy: "STRING_VALUE",
 * //     },
 * //     analysisStatus: "STRING_VALUE",
 * //     statusMessage: "STRING_VALUE",
 * //     listAntipatternSeveritySummary: [ // ListAntipatternSeveritySummary
 * //       { // AntipatternSeveritySummary
 * //         severity: "STRING_VALUE",
 * //         count: Number("int"),
 * //       },
 * //     ],
 * //     databaseConfigDetail: { // DatabaseConfigDetail
 * //       secretName: "STRING_VALUE",
 * //     },
 * //     sourceCodeRepositories: [ // SourceCodeRepositories
 * //       { // SourceCodeRepository
 * //         repository: "STRING_VALUE",
 * //         branch: "STRING_VALUE",
 * //         versionControlType: "STRING_VALUE",
 * //         projectName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     appType: "STRING_VALUE",
 * //     resourceSubType: "STRING_VALUE",
 * //     inclusionStatus: "STRING_VALUE",
 * //     antipatternReportS3Object: { // S3Object
 * //       s3Bucket: "STRING_VALUE",
 * //       s3key: "STRING_VALUE",
 * //     },
 * //     antipatternReportStatus: "STRING_VALUE",
 * //     antipatternReportStatusMessage: "STRING_VALUE",
 * //     osVersion: "STRING_VALUE",
 * //     osDriver: "STRING_VALUE",
 * //     lastAnalyzedTimestamp: new Date("TIMESTAMP"),
 * //     associatedServerId: "STRING_VALUE",
 * //     moreServerAssociationExists: true || false,
 * //     runtimeStatus: "STRING_VALUE",
 * //     runtimeStatusMessage: "STRING_VALUE",
 * //     appUnitError: { // AppUnitError
 * //       appUnitErrorCategory: "STRING_VALUE",
 * //     },
 * //     resultList: [ // ResultList
 * //       { // Result
 * //         analysisType: "STRING_VALUE",
 * //         analysisStatus: { // AnalysisStatusUnion Union: only one key present
 * //           runtimeAnalysisStatus: "STRING_VALUE",
 * //           srcCodeOrDbAnalysisStatus: "STRING_VALUE",
 * //         },
 * //         statusMessage: "STRING_VALUE",
 * //         antipatternReportResultList: [ // AntipatternReportResultList
 * //           { // AntipatternReportResult
 * //             analyzerName: { // AnalyzerNameUnion Union: only one key present
 * //               binaryAnalyzerName: "STRING_VALUE",
 * //               runTimeAnalyzerName: "STRING_VALUE",
 * //               sourceCodeAnalyzerName: "STRING_VALUE",
 * //             },
 * //             antiPatternReportS3Object: {
 * //               s3Bucket: "STRING_VALUE",
 * //               s3key: "STRING_VALUE",
 * //             },
 * //             antipatternReportStatus: "STRING_VALUE",
 * //             antipatternReportStatusMessage: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   associatedApplications: [ // AssociatedApplications
 * //     { // AssociatedApplication
 * //       name: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * //   moreApplicationResource: true || false,
 * //   associatedServerIds: [ // AssociatedServerIDs
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetApplicationComponentDetailsCommandInput - {@link GetApplicationComponentDetailsCommandInput}
 * @returns {@link GetApplicationComponentDetailsCommandOutput}
 * @see {@link GetApplicationComponentDetailsCommandInput} for command's `input` shape.
 * @see {@link GetApplicationComponentDetailsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ID in the request is not found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p> The request was denied due to request throttling. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 * @public
 */
export class GetApplicationComponentDetailsCommand extends $Command
  .classBuilder<
    GetApplicationComponentDetailsCommandInput,
    GetApplicationComponentDetailsCommandOutput,
    MigrationHubStrategyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubStrategyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHubStrategyRecommendation", "GetApplicationComponentDetails", {})
  .n("MigrationHubStrategyClient", "GetApplicationComponentDetailsCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationComponentDetailsCommand)
  .de(de_GetApplicationComponentDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationComponentDetailsRequest;
      output: GetApplicationComponentDetailsResponse;
    };
    sdk: {
      input: GetApplicationComponentDetailsCommandInput;
      output: GetApplicationComponentDetailsCommandOutput;
    };
  };
}
