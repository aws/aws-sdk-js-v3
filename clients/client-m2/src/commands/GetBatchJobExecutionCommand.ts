// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetBatchJobExecutionRequest, GetBatchJobExecutionResponse } from "../models/models_0";
import { de_GetBatchJobExecutionCommand, se_GetBatchJobExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBatchJobExecutionCommand}.
 */
export interface GetBatchJobExecutionCommandInput extends GetBatchJobExecutionRequest {}
/**
 * @public
 *
 * The output of {@link GetBatchJobExecutionCommand}.
 */
export interface GetBatchJobExecutionCommandOutput extends GetBatchJobExecutionResponse, __MetadataBearer {}

/**
 * <p>Gets the details of a specific batch job execution for a specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetBatchJobExecutionCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetBatchJobExecutionCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // GetBatchJobExecutionRequest
 *   applicationId: "STRING_VALUE", // required
 *   executionId: "STRING_VALUE", // required
 * };
 * const command = new GetBatchJobExecutionCommand(input);
 * const response = await client.send(command);
 * // { // GetBatchJobExecutionResponse
 * //   executionId: "STRING_VALUE", // required
 * //   applicationId: "STRING_VALUE", // required
 * //   jobId: "STRING_VALUE",
 * //   jobName: "STRING_VALUE",
 * //   jobUser: "STRING_VALUE",
 * //   jobType: "STRING_VALUE",
 * //   status: "STRING_VALUE", // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   endTime: new Date("TIMESTAMP"),
 * //   statusReason: "STRING_VALUE",
 * //   returnCode: "STRING_VALUE",
 * //   batchJobIdentifier: { // BatchJobIdentifier Union: only one key present
 * //     fileBatchJobIdentifier: { // FileBatchJobIdentifier
 * //       fileName: "STRING_VALUE", // required
 * //       folderPath: "STRING_VALUE",
 * //     },
 * //     scriptBatchJobIdentifier: { // ScriptBatchJobIdentifier
 * //       scriptName: "STRING_VALUE", // required
 * //     },
 * //     s3BatchJobIdentifier: { // S3BatchJobIdentifier
 * //       bucket: "STRING_VALUE", // required
 * //       keyPrefix: "STRING_VALUE",
 * //       identifier: { // JobIdentifier Union: only one key present
 * //         fileName: "STRING_VALUE",
 * //         scriptName: "STRING_VALUE",
 * //       },
 * //     },
 * //     restartBatchJobIdentifier: { // RestartBatchJobIdentifier
 * //       executionId: "STRING_VALUE", // required
 * //       jobStepRestartMarker: { // JobStepRestartMarker
 * //         fromStep: "STRING_VALUE", // required
 * //         fromProcStep: "STRING_VALUE",
 * //         toStep: "STRING_VALUE",
 * //         toProcStep: "STRING_VALUE",
 * //         stepCheckpoint: Number("int"),
 * //         skip: true || false,
 * //       },
 * //     },
 * //   },
 * //   jobStepRestartMarker: {
 * //     fromStep: "STRING_VALUE", // required
 * //     fromProcStep: "STRING_VALUE",
 * //     toStep: "STRING_VALUE",
 * //     toProcStep: "STRING_VALUE",
 * //     stepCheckpoint: Number("int"),
 * //     skip: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBatchJobExecutionCommandInput - {@link GetBatchJobExecutionCommandInput}
 * @returns {@link GetBatchJobExecutionCommandOutput}
 * @see {@link GetBatchJobExecutionCommandInput} for command's `input` shape.
 * @see {@link GetBatchJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class GetBatchJobExecutionCommand extends $Command
  .classBuilder<
    GetBatchJobExecutionCommandInput,
    GetBatchJobExecutionCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsSupernovaControlPlaneService", "GetBatchJobExecution", {})
  .n("M2Client", "GetBatchJobExecutionCommand")
  .f(void 0, void 0)
  .ser(se_GetBatchJobExecutionCommand)
  .de(de_GetBatchJobExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBatchJobExecutionRequest;
      output: GetBatchJobExecutionResponse;
    };
    sdk: {
      input: GetBatchJobExecutionCommandInput;
      output: GetBatchJobExecutionCommandOutput;
    };
  };
}
