// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartDataSourceRunInput, StartDataSourceRunOutput } from "../models/models_1";
import { StartDataSourceRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDataSourceRunCommand}.
 */
export interface StartDataSourceRunCommandInput extends StartDataSourceRunInput {}
/**
 * @public
 *
 * The output of {@link StartDataSourceRunCommand}.
 */
export interface StartDataSourceRunCommandOutput extends StartDataSourceRunOutput, __MetadataBearer {}

/**
 * Start the run of the specified data source in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, StartDataSourceRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, StartDataSourceRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // StartDataSourceRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   dataSourceIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartDataSourceRunCommand(input);
 * const response = await client.send(command);
 * // { // StartDataSourceRunOutput
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
 * @param StartDataSourceRunCommandInput - {@link StartDataSourceRunCommandInput}
 * @returns {@link StartDataSourceRunCommandOutput}
 * @see {@link StartDataSourceRunCommandInput} for command's `input` shape.
 * @see {@link StartDataSourceRunCommandOutput} for command's `response` shape.
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
export class StartDataSourceRunCommand extends command<StartDataSourceRunCommandInput, StartDataSourceRunCommandOutput>(
  _ep0,
  _mw0,
  "StartDataSourceRun",
  StartDataSourceRun$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDataSourceRunInput;
      output: StartDataSourceRunOutput;
    };
    sdk: {
      input: StartDataSourceRunCommandInput;
      output: StartDataSourceRunCommandOutput;
    };
  };
}
