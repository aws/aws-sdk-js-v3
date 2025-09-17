// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListDataSourceRunActivitiesInput,
  ListDataSourceRunActivitiesOutput,
  ListDataSourceRunActivitiesOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  de_ListDataSourceRunActivitiesCommand,
  se_ListDataSourceRunActivitiesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists data source run activities.</p>
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
export class ListDataSourceRunActivitiesCommand extends $Command
  .classBuilder<
    ListDataSourceRunActivitiesCommandInput,
    ListDataSourceRunActivitiesCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListDataSourceRunActivities", {})
  .n("DataZoneClient", "ListDataSourceRunActivitiesCommand")
  .f(void 0, ListDataSourceRunActivitiesOutputFilterSensitiveLog)
  .ser(se_ListDataSourceRunActivitiesCommand)
  .de(de_ListDataSourceRunActivitiesCommand)
  .build() {
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
