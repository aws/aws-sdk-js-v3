// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EntityResolutionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EntityResolutionClient";
import { GetMatchingJobInput, GetMatchingJobOutput } from "../models/models_0";
import { de_GetMatchingJobCommand, se_GetMatchingJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMatchingJobCommand}.
 */
export interface GetMatchingJobCommandInput extends GetMatchingJobInput {}
/**
 * @public
 *
 * The output of {@link GetMatchingJobCommand}.
 */
export interface GetMatchingJobCommandOutput extends GetMatchingJobOutput, __MetadataBearer {}

/**
 * <p>Returns the status, metrics, and errors (if there are any) that are associated with a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, GetMatchingJobCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, GetMatchingJobCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * const client = new EntityResolutionClient(config);
 * const input = { // GetMatchingJobInput
 *   workflowName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetMatchingJobCommand(input);
 * const response = await client.send(command);
 * // { // GetMatchingJobOutput
 * //   jobId: "STRING_VALUE", // required
 * //   status: "RUNNING" || "SUCCEEDED" || "FAILED" || "QUEUED", // required
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   endTime: new Date("TIMESTAMP"),
 * //   metrics: { // JobMetrics
 * //     inputRecords: Number("int"),
 * //     totalRecordsProcessed: Number("int"),
 * //     recordsNotProcessed: Number("int"),
 * //     matchIDs: Number("int"),
 * //   },
 * //   errorDetails: { // ErrorDetails
 * //     errorMessage: "STRING_VALUE",
 * //   },
 * //   outputSourceConfig: [ // JobOutputSourceConfig
 * //     { // JobOutputSource
 * //       roleArn: "STRING_VALUE", // required
 * //       outputS3Path: "STRING_VALUE", // required
 * //       KMSArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetMatchingJobCommandInput - {@link GetMatchingJobCommandInput}
 * @returns {@link GetMatchingJobCommandOutput}
 * @see {@link GetMatchingJobCommandInput} for command's `input` shape.
 * @see {@link GetMatchingJobCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Entity Resolution service. </p>
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
 *
 * @public
 */
export class GetMatchingJobCommand extends $Command
  .classBuilder<
    GetMatchingJobCommandInput,
    GetMatchingJobCommandOutput,
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
  .s("AWSVeniceService", "GetMatchingJob", {})
  .n("EntityResolutionClient", "GetMatchingJobCommand")
  .f(void 0, void 0)
  .ser(se_GetMatchingJobCommand)
  .de(de_GetMatchingJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMatchingJobInput;
      output: GetMatchingJobOutput;
    };
    sdk: {
      input: GetMatchingJobCommandInput;
      output: GetMatchingJobCommandOutput;
    };
  };
}
