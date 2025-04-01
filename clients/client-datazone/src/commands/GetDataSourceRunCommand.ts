// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataSourceRunInput, GetDataSourceRunOutput } from "../models/models_1";
import { de_GetDataSourceRunCommand, se_GetDataSourceRunCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets an Amazon DataZone data source run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetDataSourceRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetDataSourceRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
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
export class GetDataSourceRunCommand extends $Command
  .classBuilder<
    GetDataSourceRunCommandInput,
    GetDataSourceRunCommandOutput,
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
  .s("DataZone", "GetDataSourceRun", {})
  .n("DataZoneClient", "GetDataSourceRunCommand")
  .f(void 0, void 0)
  .ser(se_GetDataSourceRunCommand)
  .de(de_GetDataSourceRunCommand)
  .build() {
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
