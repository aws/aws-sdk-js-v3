// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataSourceRunInput, GetDataSourceRunOutput } from "../models/models_1";
import { GetDataSourceRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDataSourceRunCommand}.
 */
export interface GetDataSourceRunCommandInput extends GetDataSourceRunInput {}
/**
 * @public
 *
 * The output of {@link GetDataSourceRunCommand}.
 */
export interface GetDataSourceRunCommandOutput extends GetDataSourceRunOutput, __MetadataBearer {}

/**
 * Gets an Amazon DataZone data source run.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDataSourceRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDataSourceRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetDataSourceRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDataSourceRunCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSourceRunOutput
 * //   domainId: "STRING_VALUE", // required
 * //   dataSourceId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE", // required
 * //   status: "REQUESTED" || "RUNNING" || "FAILED" || "PARTIALLY_SUCCEEDED" || "SUCCESS", // required
 * //   type: "PRIORITIZED" || "SCHEDULED", // required
 * //   dataSourceConfigurationSnapshot: "STRING_VALUE",
 * //   runStatisticsForAssets: { // RunStatisticsForAssets
 * //     added: Number("int"),
 * //     updated: Number("int"),
 * //     unchanged: Number("int"),
 * //     skipped: Number("int"),
 * //     failed: Number("int"),
 * //   },
 * //   lineageSummary: { // DataSourceRunLineageSummary
 * //     importStatus: "IN_PROGRESS" || "SUCCESS" || "FAILED" || "PARTIALLY_SUCCEEDED",
 * //   },
 * //   errorMessage: { // DataSourceErrorMessage
 * //     errorType: "ACCESS_DENIED_EXCEPTION" || "CONFLICT_EXCEPTION" || "INTERNAL_SERVER_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "SERVICE_QUOTA_EXCEEDED_EXCEPTION" || "THROTTLING_EXCEPTION" || "VALIDATION_EXCEPTION", // required
 * //     errorDetail: "STRING_VALUE",
 * //   },
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   startedAt: new Date("TIMESTAMP"),
 * //   stoppedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDataSourceRunCommandInput - {@link GetDataSourceRunCommandInput}
 * @returns {@link GetDataSourceRunCommandOutput}
 * @see {@link GetDataSourceRunCommandInput} for command's `input` shape.
 * @see {@link GetDataSourceRunCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request has exceeded the specified service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class GetDataSourceRunCommand extends command<GetDataSourceRunCommandInput, GetDataSourceRunCommandOutput>(
  _ep0,
  _mw0,
  "GetDataSourceRun",
  GetDataSourceRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataSourceRunInput;
      output: GetDataSourceRunOutput;
    };
    sdk: {
      input: GetDataSourceRunCommandInput;
      output: GetDataSourceRunCommandOutput;
    };
  };
}
