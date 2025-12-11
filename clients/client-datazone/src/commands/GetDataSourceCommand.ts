// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDataSourceInput, GetDataSourceOutput } from "../models/models_1";
import { GetDataSource } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandInput extends GetDataSourceInput {}
/**
 * @public
 *
 * The output of {@link GetDataSourceCommand}.
 */
export interface GetDataSourceCommandOutput extends GetDataSourceOutput, __MetadataBearer {}

/**
 * <p>Gets an Amazon DataZone data source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDataSourceCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDataSourceCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetDataSourceInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSourceOutput
 * //   id: "STRING_VALUE", // required
 * //   status: "CREATING" || "FAILED_CREATION" || "READY" || "UPDATING" || "FAILED_UPDATE" || "RUNNING" || "DELETING" || "FAILED_DELETION",
 * //   type: "STRING_VALUE",
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   domainId: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE",
 * //   connectionId: "STRING_VALUE",
 * //   configuration: { // DataSourceConfigurationOutput Union: only one key present
 * //     glueRunConfiguration: { // GlueRunConfigurationOutput
 * //       accountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       dataAccessRole: "STRING_VALUE",
 * //       relationalFilterConfigurations: [ // RelationalFilterConfigurations // required
 * //         { // RelationalFilterConfiguration
 * //           databaseName: "STRING_VALUE", // required
 * //           schemaName: "STRING_VALUE",
 * //           filterExpressions: [ // FilterExpressions
 * //             { // FilterExpression
 * //               type: "INCLUDE" || "EXCLUDE", // required
 * //               expression: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       autoImportDataQualityResult: true || false,
 * //       catalogName: "STRING_VALUE",
 * //     },
 * //     redshiftRunConfiguration: { // RedshiftRunConfigurationOutput
 * //       accountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       dataAccessRole: "STRING_VALUE",
 * //       relationalFilterConfigurations: [ // required
 * //         {
 * //           databaseName: "STRING_VALUE", // required
 * //           schemaName: "STRING_VALUE",
 * //           filterExpressions: [
 * //             {
 * //               type: "INCLUDE" || "EXCLUDE", // required
 * //               expression: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       redshiftCredentialConfiguration: { // RedshiftCredentialConfiguration
 * //         secretManagerArn: "STRING_VALUE", // required
 * //       },
 * //       redshiftStorage: { // RedshiftStorage Union: only one key present
 * //         redshiftClusterSource: { // RedshiftClusterStorage
 * //           clusterName: "STRING_VALUE", // required
 * //         },
 * //         redshiftServerlessSource: { // RedshiftServerlessStorage
 * //           workgroupName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     sageMakerRunConfiguration: { // SageMakerRunConfigurationOutput
 * //       accountId: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       trackingAssets: { // TrackingAssets // required
 * //         "<keys>": [ // TrackingAssetArns
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   recommendation: { // RecommendationConfiguration
 * //     enableBusinessNameGeneration: true || false,
 * //   },
 * //   enableSetting: "ENABLED" || "DISABLED",
 * //   publishOnImport: true || false,
 * //   assetFormsOutput: [ // FormOutputList
 * //     { // FormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   schedule: { // ScheduleConfiguration
 * //     timezone: "UTC" || "AFRICA_JOHANNESBURG" || "AMERICA_MONTREAL" || "AMERICA_SAO_PAULO" || "ASIA_BAHRAIN" || "ASIA_BANGKOK" || "ASIA_CALCUTTA" || "ASIA_DUBAI" || "ASIA_HONG_KONG" || "ASIA_JAKARTA" || "ASIA_KUALA_LUMPUR" || "ASIA_SEOUL" || "ASIA_SHANGHAI" || "ASIA_SINGAPORE" || "ASIA_TAIPEI" || "ASIA_TOKYO" || "AUSTRALIA_MELBOURNE" || "AUSTRALIA_SYDNEY" || "CANADA_CENTRAL" || "CET" || "CST6CDT" || "ETC_GMT" || "ETC_GMT0" || "ETC_GMT_ADD_0" || "ETC_GMT_ADD_1" || "ETC_GMT_ADD_10" || "ETC_GMT_ADD_11" || "ETC_GMT_ADD_12" || "ETC_GMT_ADD_2" || "ETC_GMT_ADD_3" || "ETC_GMT_ADD_4" || "ETC_GMT_ADD_5" || "ETC_GMT_ADD_6" || "ETC_GMT_ADD_7" || "ETC_GMT_ADD_8" || "ETC_GMT_ADD_9" || "ETC_GMT_NEG_0" || "ETC_GMT_NEG_1" || "ETC_GMT_NEG_10" || "ETC_GMT_NEG_11" || "ETC_GMT_NEG_12" || "ETC_GMT_NEG_13" || "ETC_GMT_NEG_14" || "ETC_GMT_NEG_2" || "ETC_GMT_NEG_3" || "ETC_GMT_NEG_4" || "ETC_GMT_NEG_5" || "ETC_GMT_NEG_6" || "ETC_GMT_NEG_7" || "ETC_GMT_NEG_8" || "ETC_GMT_NEG_9" || "EUROPE_DUBLIN" || "EUROPE_LONDON" || "EUROPE_PARIS" || "EUROPE_STOCKHOLM" || "EUROPE_ZURICH" || "ISRAEL" || "MEXICO_GENERAL" || "MST7MDT" || "PACIFIC_AUCKLAND" || "US_CENTRAL" || "US_EASTERN" || "US_MOUNTAIN" || "US_PACIFIC",
 * //     schedule: "STRING_VALUE",
 * //   },
 * //   lastRunStatus: "REQUESTED" || "RUNNING" || "FAILED" || "PARTIALLY_SUCCEEDED" || "SUCCESS",
 * //   lastRunAt: new Date("TIMESTAMP"),
 * //   lastRunErrorMessage: { // DataSourceErrorMessage
 * //     errorType: "ACCESS_DENIED_EXCEPTION" || "CONFLICT_EXCEPTION" || "INTERNAL_SERVER_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "SERVICE_QUOTA_EXCEEDED_EXCEPTION" || "THROTTLING_EXCEPTION" || "VALIDATION_EXCEPTION", // required
 * //     errorDetail: "STRING_VALUE",
 * //   },
 * //   lastRunAssetCount: Number("int"),
 * //   errorMessage: {
 * //     errorType: "ACCESS_DENIED_EXCEPTION" || "CONFLICT_EXCEPTION" || "INTERNAL_SERVER_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "SERVICE_QUOTA_EXCEEDED_EXCEPTION" || "THROTTLING_EXCEPTION" || "VALIDATION_EXCEPTION", // required
 * //     errorDetail: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   selfGrantStatus: { // SelfGrantStatusOutput Union: only one key present
 * //     glueSelfGrantStatus: { // GlueSelfGrantStatusOutput
 * //       selfGrantStatusDetails: [ // SelfGrantStatusDetails // required
 * //         { // SelfGrantStatusDetail
 * //           databaseName: "STRING_VALUE", // required
 * //           schemaName: "STRING_VALUE",
 * //           status: "GRANT_PENDING" || "REVOKE_PENDING" || "GRANT_IN_PROGRESS" || "REVOKE_IN_PROGRESS" || "GRANTED" || "GRANT_FAILED" || "REVOKE_FAILED", // required
 * //           failureCause: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     redshiftSelfGrantStatus: { // RedshiftSelfGrantStatusOutput
 * //       selfGrantStatusDetails: [ // required
 * //         {
 * //           databaseName: "STRING_VALUE", // required
 * //           schemaName: "STRING_VALUE",
 * //           status: "GRANT_PENDING" || "REVOKE_PENDING" || "GRANT_IN_PROGRESS" || "REVOKE_IN_PROGRESS" || "GRANTED" || "GRANT_FAILED" || "REVOKE_FAILED", // required
 * //           failureCause: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataSourceCommandInput - {@link GetDataSourceCommandInput}
 * @returns {@link GetDataSourceCommandOutput}
 * @see {@link GetDataSourceCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class GetDataSourceCommand extends $Command
  .classBuilder<
    GetDataSourceCommandInput,
    GetDataSourceCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetDataSource", {})
  .n("DataZoneClient", "GetDataSourceCommand")
  .sc(GetDataSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataSourceInput;
      output: GetDataSourceOutput;
    };
    sdk: {
      input: GetDataSourceCommandInput;
      output: GetDataSourceCommandOutput;
    };
  };
}
