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
import { ListApplicationComponentsRequest, ListApplicationComponentsResponse } from "../models/models_0";
import { de_ListApplicationComponentsCommand, se_ListApplicationComponentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationComponentsCommand}.
 */
export interface ListApplicationComponentsCommandInput extends ListApplicationComponentsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationComponentsCommand}.
 */
export interface ListApplicationComponentsCommandOutput extends ListApplicationComponentsResponse, __MetadataBearer {}

/**
 * <p> Retrieves a list of all the application components (processes). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, ListApplicationComponentsCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, ListApplicationComponentsCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * // import type { MigrationHubStrategyClientConfig } from "@aws-sdk/client-migrationhubstrategy";
 * const config = {}; // type is MigrationHubStrategyClientConfig
 * const client = new MigrationHubStrategyClient(config);
 * const input = { // ListApplicationComponentsRequest
 *   applicationComponentCriteria: "STRING_VALUE",
 *   filterValue: "STRING_VALUE",
 *   sort: "STRING_VALUE",
 *   groupIdFilter: [ // GroupIds
 *     { // Group
 *       name: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListApplicationComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationComponentsResponse
 * //   applicationComponentInfos: [ // ApplicationComponentDetails
 * //     { // ApplicationComponentDetail
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       recommendationSet: { // RecommendationSet
 * //         transformationTool: { // TransformationTool
 * //           name: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           tranformationToolInstallationLink: "STRING_VALUE",
 * //         },
 * //         targetDestination: "STRING_VALUE",
 * //         strategy: "STRING_VALUE",
 * //       },
 * //       analysisStatus: "STRING_VALUE",
 * //       statusMessage: "STRING_VALUE",
 * //       listAntipatternSeveritySummary: [ // ListAntipatternSeveritySummary
 * //         { // AntipatternSeveritySummary
 * //           severity: "STRING_VALUE",
 * //           count: Number("int"),
 * //         },
 * //       ],
 * //       databaseConfigDetail: { // DatabaseConfigDetail
 * //         secretName: "STRING_VALUE",
 * //       },
 * //       sourceCodeRepositories: [ // SourceCodeRepositories
 * //         { // SourceCodeRepository
 * //           repository: "STRING_VALUE",
 * //           branch: "STRING_VALUE",
 * //           versionControlType: "STRING_VALUE",
 * //           projectName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       appType: "STRING_VALUE",
 * //       resourceSubType: "STRING_VALUE",
 * //       inclusionStatus: "STRING_VALUE",
 * //       antipatternReportS3Object: { // S3Object
 * //         s3Bucket: "STRING_VALUE",
 * //         s3key: "STRING_VALUE",
 * //       },
 * //       antipatternReportStatus: "STRING_VALUE",
 * //       antipatternReportStatusMessage: "STRING_VALUE",
 * //       osVersion: "STRING_VALUE",
 * //       osDriver: "STRING_VALUE",
 * //       lastAnalyzedTimestamp: new Date("TIMESTAMP"),
 * //       associatedServerId: "STRING_VALUE",
 * //       moreServerAssociationExists: true || false,
 * //       runtimeStatus: "STRING_VALUE",
 * //       runtimeStatusMessage: "STRING_VALUE",
 * //       appUnitError: { // AppUnitError
 * //         appUnitErrorCategory: "STRING_VALUE",
 * //       },
 * //       resultList: [ // ResultList
 * //         { // Result
 * //           analysisType: "STRING_VALUE",
 * //           analysisStatus: { // AnalysisStatusUnion Union: only one key present
 * //             runtimeAnalysisStatus: "STRING_VALUE",
 * //             srcCodeOrDbAnalysisStatus: "STRING_VALUE",
 * //           },
 * //           statusMessage: "STRING_VALUE",
 * //           antipatternReportResultList: [ // AntipatternReportResultList
 * //             { // AntipatternReportResult
 * //               analyzerName: { // AnalyzerNameUnion Union: only one key present
 * //                 binaryAnalyzerName: "STRING_VALUE",
 * //                 runTimeAnalyzerName: "STRING_VALUE",
 * //                 sourceCodeAnalyzerName: "STRING_VALUE",
 * //               },
 * //               antiPatternReportS3Object: {
 * //                 s3Bucket: "STRING_VALUE",
 * //                 s3key: "STRING_VALUE",
 * //               },
 * //               antipatternReportStatus: "STRING_VALUE",
 * //               antipatternReportStatusMessage: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationComponentsCommandInput - {@link ListApplicationComponentsCommandInput}
 * @returns {@link ListApplicationComponentsCommandOutput}
 * @see {@link ListApplicationComponentsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationComponentsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> The user does not have permission to perform the action. Check the
 *       AWS Identity and Access Management (IAM) policy associated with this user.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The server experienced an internal error. Try again. </p>
 *
 * @throws {@link ServiceLinkedRoleLockClientException} (client fault)
 *  <p> Exception to indicate that the service-linked role (SLR) is locked. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> The request body isn't valid. </p>
 *
 * @throws {@link MigrationHubStrategyServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubStrategy service.</p>
 *
 *
 * @public
 */
export class ListApplicationComponentsCommand extends $Command
  .classBuilder<
    ListApplicationComponentsCommandInput,
    ListApplicationComponentsCommandOutput,
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
  .s("AWSMigrationHubStrategyRecommendation", "ListApplicationComponents", {})
  .n("MigrationHubStrategyClient", "ListApplicationComponentsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationComponentsCommand)
  .de(de_ListApplicationComponentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationComponentsRequest;
      output: ListApplicationComponentsResponse;
    };
    sdk: {
      input: ListApplicationComponentsCommandInput;
      output: ListApplicationComponentsCommandOutput;
    };
  };
}
