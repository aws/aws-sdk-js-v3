// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataSourceRunActivitiesInput, ListDataSourceRunActivitiesOutput } from "../models/models_1";
import { ListDataSourceRunActivities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataSourceRunActivitiesCommand}.
 */
export interface ListDataSourceRunActivitiesCommandInput extends ListDataSourceRunActivitiesInput {}
/**
 * @public
 *
 * The output of {@link ListDataSourceRunActivitiesCommand}.
 */
export interface ListDataSourceRunActivitiesCommandOutput extends ListDataSourceRunActivitiesOutput, __MetadataBearer {}

/**
 * Lists data source run activities.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListDataSourceRunActivitiesCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListDataSourceRunActivitiesCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListDataSourceRunActivitiesInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   status: "FAILED" || "PUBLISHING_FAILED" || "SUCCEEDED_CREATED" || "SUCCEEDED_UPDATED" || "SKIPPED_ALREADY_IMPORTED" || "SKIPPED_ARCHIVED" || "SKIPPED_NO_ACCESS" || "UNCHANGED",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDataSourceRunActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSourceRunActivitiesOutput
 * //   items: [ // DataSourceRunActivities // required
 * //     { // DataSourceRunActivity
 * //       database: "STRING_VALUE", // required
 * //       dataSourceRunId: "STRING_VALUE", // required
 * //       technicalName: "STRING_VALUE", // required
 * //       dataAssetStatus: "FAILED" || "PUBLISHING_FAILED" || "SUCCEEDED_CREATED" || "SUCCEEDED_UPDATED" || "SKIPPED_ALREADY_IMPORTED" || "SKIPPED_ARCHIVED" || "SKIPPED_NO_ACCESS" || "UNCHANGED", // required
 * //       projectId: "STRING_VALUE", // required
 * //       dataAssetId: "STRING_VALUE",
 * //       technicalDescription: "STRING_VALUE",
 * //       errorMessage: { // DataSourceErrorMessage
 * //         errorType: "ACCESS_DENIED_EXCEPTION" || "CONFLICT_EXCEPTION" || "INTERNAL_SERVER_EXCEPTION" || "RESOURCE_NOT_FOUND_EXCEPTION" || "SERVICE_QUOTA_EXCEEDED_EXCEPTION" || "THROTTLING_EXCEPTION" || "VALIDATION_EXCEPTION", // required
 * //         errorDetail: "STRING_VALUE",
 * //       },
 * //       lineageSummary: { // LineageInfo
 * //         eventId: "STRING_VALUE",
 * //         eventStatus: "REQUESTED" || "PROCESSING" || "SUCCESS" || "FAILED",
 * //         errorMessage: "STRING_VALUE",
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSourceRunActivitiesCommandInput - {@link ListDataSourceRunActivitiesCommandInput}
 * @returns {@link ListDataSourceRunActivitiesCommandOutput}
 * @see {@link ListDataSourceRunActivitiesCommandInput} for command's `input` shape.
 * @see {@link ListDataSourceRunActivitiesCommandOutput} for command's `response` shape.
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
export class ListDataSourceRunActivitiesCommand extends command<ListDataSourceRunActivitiesCommandInput, ListDataSourceRunActivitiesCommandOutput>(
  _ep0,
  _mw0,
  "ListDataSourceRunActivities",
  ListDataSourceRunActivities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSourceRunActivitiesInput;
      output: ListDataSourceRunActivitiesOutput;
    };
    sdk: {
      input: ListDataSourceRunActivitiesCommandInput;
      output: ListDataSourceRunActivitiesCommandOutput;
    };
  };
}
