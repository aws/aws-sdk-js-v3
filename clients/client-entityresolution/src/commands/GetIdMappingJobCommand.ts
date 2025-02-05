// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { GetIdMappingJobInput, GetIdMappingJobOutput } from "../models/models_0";
import { de_GetIdMappingJobCommand, se_GetIdMappingJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdMappingJobCommand}.
 */
export interface GetIdMappingJobCommandInput extends GetIdMappingJobInput {}
/**
 * @public
 *
 * The output of {@link GetIdMappingJobCommand}.
 */
export interface GetIdMappingJobCommandOutput extends GetIdMappingJobOutput, __MetadataBearer {}

/**
 * <p>Gets the status, metrics, and errors (if there are any) that are associated with a
 *          job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetIdMappingJobCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetIdMappingJobCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EntityResolutionClient(config);
 * const input = { // GetIdMappingJobInput
 *   workflowName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetIdMappingJobCommand(input);
 * const response = await client.send(command);
 * // { // GetIdMappingJobOutput
 * //   jobId: "STRING_VALUE", // required
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "QUEUED", // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   endTime: new Date("TIMESTAMP"),
 * //   metrics: { // IdMappingJobMetrics
 * //     inputRecords: Number("int"),
 * //     totalRecordsProcessed: Number("int"),
 * //     recordsNotProcessed: Number("int"),
 * //     totalMappedRecords: Number("int"),
 * //     totalMappedSourceRecords: Number("int"),
 * //     totalMappedTargetRecords: Number("int"),
 * //   },
 * //   errorDetails: { // ErrorDetails
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   outputSourceConfig: [ // IdMappingJobOutputSourceConfig
 * //     { // IdMappingJobOutputSource
 * //       roleArn: "STRING_VALUE", // required
 * //       outputS3Path: "STRING_VALUE", // required
 * //       KMSArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetIdMappingJobCommandInput - {@link GetIdMappingJobCommandInput}
 * @returns {@link GetIdMappingJobCommandOutput}
 * @see {@link GetIdMappingJobCommandInput} for command's `input` shape.
 * @see {@link GetIdMappingJobCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution
 *          service. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by Entity Resolution. </p>
 *
 * @throws {@link EntityResolutionServiceException}
 * <p>Base exception class for all service exceptions from EntityResolution service.</p>
 *
 * @public
 */
export class GetIdMappingJobCommand extends $Command
  .classBuilder<
    GetIdMappingJobCommandInput,
    GetIdMappingJobCommandOutput,
    EntityResolutionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EntityResolutionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSVeniceService", "GetIdMappingJob", {})
  .n("EntityResolutionClient", "GetIdMappingJobCommand")
  .f(void 0, void 0)
  .ser(se_GetIdMappingJobCommand)
  .de(de_GetIdMappingJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdMappingJobInput;
      output: GetIdMappingJobOutput;
    };
    sdk: {
      input: GetIdMappingJobCommandInput;
      output: GetIdMappingJobCommandOutput;
    };
  };
}
