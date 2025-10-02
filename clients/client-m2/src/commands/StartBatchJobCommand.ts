// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { StartBatchJobRequest, StartBatchJobResponse } from "../models/models_0";
import { de_StartBatchJobCommand, se_StartBatchJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartBatchJobCommand}.
 */
export interface StartBatchJobCommandInput extends StartBatchJobRequest {}
/**
 * @public
 *
 * The output of {@link StartBatchJobCommand}.
 */
export interface StartBatchJobCommandOutput extends StartBatchJobResponse, __MetadataBearer {}

/**
 * <p>Starts a batch job and returns the unique identifier of this execution of the batch job.
 *          The associated application must be running in order to start the batch job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, StartBatchJobCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, StartBatchJobCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // StartBatchJobRequest
 *   applicationId: "STRING_VALUE", // required
 *   batchJobIdentifier: { // BatchJobIdentifier Union: only one key present
 *     fileBatchJobIdentifier: { // FileBatchJobIdentifier
 *       fileName: "STRING_VALUE", // required
 *       folderPath: "STRING_VALUE",
 *     },
 *     scriptBatchJobIdentifier: { // ScriptBatchJobIdentifier
 *       scriptName: "STRING_VALUE", // required
 *     },
 *     s3BatchJobIdentifier: { // S3BatchJobIdentifier
 *       bucket: "STRING_VALUE", // required
 *       keyPrefix: "STRING_VALUE",
 *       identifier: { // JobIdentifier Union: only one key present
 *         fileName: "STRING_VALUE",
 *         scriptName: "STRING_VALUE",
 *       },
 *     },
 *     restartBatchJobIdentifier: { // RestartBatchJobIdentifier
 *       executionId: "STRING_VALUE", // required
 *       jobStepRestartMarker: { // JobStepRestartMarker
 *         fromStep: "STRING_VALUE", // required
 *         fromProcStep: "STRING_VALUE",
 *         toStep: "STRING_VALUE",
 *         toProcStep: "STRING_VALUE",
 *         stepCheckpoint: Number("int"),
 *         skip: true || false,
 *       },
 *     },
 *   },
 *   jobParams: { // BatchJobParametersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   authSecretsManagerArn: "STRING_VALUE",
 * };
 * const command = new StartBatchJobCommand(input);
 * const response = await client.send(command);
 * // { // StartBatchJobResponse
 * //   executionId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartBatchJobCommandInput - {@link StartBatchJobCommandInput}
 * @returns {@link StartBatchJobCommandOutput}
 * @see {@link StartBatchJobCommandInput} for command's `input` shape.
 * @see {@link StartBatchJobCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
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
export class StartBatchJobCommand extends $Command
  .classBuilder<
    StartBatchJobCommandInput,
    StartBatchJobCommandOutput,
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
  .s("AwsSupernovaControlPlaneService", "StartBatchJob", {})
  .n("M2Client", "StartBatchJobCommand")
  .f(void 0, void 0)
  .ser(se_StartBatchJobCommand)
  .de(de_StartBatchJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBatchJobRequest;
      output: StartBatchJobResponse;
    };
    sdk: {
      input: StartBatchJobCommandInput;
      output: StartBatchJobCommandOutput;
    };
  };
}
