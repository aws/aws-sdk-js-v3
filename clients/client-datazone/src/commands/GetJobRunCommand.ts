// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetJobRunInput, GetJobRunOutput } from "../models/models_1";
import { GetJobRun } from "../schemas/schemas_23_Job";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJobRunCommand}.
 */
export interface GetJobRunCommandInput extends GetJobRunInput {}
/**
 * @public
 *
 * The output of {@link GetJobRunCommand}.
 */
export interface GetJobRunCommandOutput extends GetJobRunOutput, __MetadataBearer {}

/**
 * <p>The details of the job run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetJobRunCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetJobRunCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetJobRunInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetJobRunCommand(input);
 * const response = await client.send(command);
 * // { // GetJobRunOutput
 * //   domainId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   jobId: "STRING_VALUE",
 * //   jobType: "LINEAGE",
 * //   runMode: "SCHEDULED" || "ON_DEMAND",
 * //   details: { // JobRunDetails Union: only one key present
 * //     lineageRunDetails: { // LineageRunDetails
 * //       sqlQueryRunDetails: { // LineageSqlQueryRunDetails
 * //         queryStartTime: new Date("TIMESTAMP"),
 * //         queryEndTime: new Date("TIMESTAMP"),
 * //         totalQueriesProcessed: Number("int"),
 * //         numQueriesFailed: Number("int"),
 * //         errorMessages: [ // FailedQueryProcessingErrorMessages
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //   },
 * //   status: "SCHEDULED" || "IN_PROGRESS" || "SUCCESS" || "PARTIALLY_SUCCEEDED" || "FAILED" || "ABORTED" || "TIMED_OUT" || "CANCELED",
 * //   error: { // JobRunError
 * //     message: "STRING_VALUE", // required
 * //   },
 * //   createdBy: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   startTime: new Date("TIMESTAMP"),
 * //   endTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetJobRunCommandInput - {@link GetJobRunCommandInput}
 * @returns {@link GetJobRunCommandOutput}
 * @see {@link GetJobRunCommandInput} for command's `input` shape.
 * @see {@link GetJobRunCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
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
export class GetJobRunCommand extends $Command
  .classBuilder<
    GetJobRunCommandInput,
    GetJobRunCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetJobRun", {})
  .n("DataZoneClient", "GetJobRunCommand")
  .sc(GetJobRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobRunInput;
      output: GetJobRunOutput;
    };
    sdk: {
      input: GetJobRunCommandInput;
      output: GetJobRunCommandOutput;
    };
  };
}
