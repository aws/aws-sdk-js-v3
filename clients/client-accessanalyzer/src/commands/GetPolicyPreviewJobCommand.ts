// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AccessAnalyzerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AccessAnalyzerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetPolicyPreviewJobRequest, GetPolicyPreviewJobResponse } from "../models/models_0";
import { GetPolicyPreviewJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicyPreviewJobCommand}.
 */
export interface GetPolicyPreviewJobCommandInput extends GetPolicyPreviewJobRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyPreviewJobCommand}.
 */
export interface GetPolicyPreviewJobCommandOutput extends GetPolicyPreviewJobResponse, __MetadataBearer {}

/**
 * <p>Retrieves the metadata, parameters, and status for a policy preview job. Use this operation to monitor job progress and retrieve the Amazon S3 location of the completed analysis report.</p> <note> <p>Job data has a time-to-live (TTL) of 14 days and will be deleted after expiration.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, GetPolicyPreviewJobCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, GetPolicyPreviewJobCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // GetPolicyPreviewJobRequest
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyPreviewJobCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyPreviewJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   jobParameters: { // PolicyPreviewJobParameters
 * //     startTime: new Date("TIMESTAMP"), // required
 * //     endTime: new Date("TIMESTAMP"), // required
 * //     policyConfigurations: [ // PolicyConfigurationsList // required
 * //       { // PolicyConfiguration
 * //         jobType: "STRING_VALUE", // required
 * //         targetId: "STRING_VALUE", // required
 * //         policyDocumentsList: [ // PolicyDocumentList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   jobDetails: { // PolicyPreviewJobDetails
 * //     jobStatus: "STRING_VALUE", // required
 * //     submittedAt: new Date("TIMESTAMP"), // required
 * //     startedAt: new Date("TIMESTAMP"),
 * //     completedAt: new Date("TIMESTAMP"),
 * //     jobError: { // JobError
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   outputS3Uri: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetPolicyPreviewJobCommandInput - {@link GetPolicyPreviewJobCommandInput}
 * @returns {@link GetPolicyPreviewJobCommandOutput}
 * @see {@link GetPolicyPreviewJobCommandInput} for command's `input` shape.
 * @see {@link GetPolicyPreviewJobCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Throttling limit exceeded error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link AccessAnalyzerServiceException}
 * <p>Base exception class for all service exceptions from AccessAnalyzer service.</p>
 *
 *
 * @example Successfully fetched completed policy preview job
 * ```javascript
 * //
 * const input = {
 *   jobId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 * };
 * const command = new GetPolicyPreviewJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobDetails: {
 *     completedAt: "2023-05-01T10:30:00Z",
 *     jobStatus: "COMPLETED",
 *     startedAt: "2023-05-01T10:01:00Z",
 *     submittedAt: "2023-05-01T10:00:00Z"
 *   },
 *   jobId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
 *   jobParameters: {
 *     endTime: "2023-12-31T23:59:59Z",
 *     policyConfigurations: [
 *       {
 *         jobType: "SCP",
 *         policyDocumentsList: [
 *           `{"Version":"2012-10-17","Statement":[{"Sid":"AllowS3Access","Effect":"Allow","Action":["s3:GetObject","s3:PutObject","s3:ListBucket"],"Resource":["arn:aws:s3:::example-bucket","arn:aws:s3:::example-bucket/*"]}]}`
 *         ],
 *         targetId: "123456789012"
 *       }
 *     ],
 *     startTime: "2023-01-01T00:00:00Z"
 *   },
 *   outputS3Uri: "s3://bucket/path"
 * }
 * *\/
 * ```
 *
 * @example Failed policy preview job
 * ```javascript
 * //
 * const input = {
 *   jobId: "b2c3d4e5-f6a7-8901-bcde-f12345678901"
 * };
 * const command = new GetPolicyPreviewJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobDetails: {
 *     completedAt: "2023-05-01T10:05:00Z",
 *     jobError: {
 *       code: "SERVICE_ERROR",
 *       message: "Service error occurred during job execution."
 *     },
 *     jobStatus: "FAILED",
 *     startedAt: "2023-05-01T10:01:00Z",
 *     submittedAt: "2023-05-01T10:00:00Z"
 *   },
 *   jobId: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
 *   jobParameters: {
 *     endTime: "2023-12-31T23:59:59Z",
 *     policyConfigurations: [
 *       {
 *         jobType: "SCP",
 *         policyDocumentsList: [
 *           `{"Version":"2012-10-17","Statement":[{"Sid":"AllowS3Access","Effect":"Allow","Action":["s3:GetObject","s3:PutObject","s3:ListBucket"],"Resource":["arn:aws:s3:::example-bucket","arn:aws:s3:::example-bucket/*"]}]}`
 *         ],
 *         targetId: "123456789012"
 *       }
 *     ],
 *     startTime: "2023-01-01T00:00:00Z"
 *   },
 *   outputS3Uri: "s3://bucket/path"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetPolicyPreviewJobCommand extends $Command
  .classBuilder<
    GetPolicyPreviewJobCommandInput,
    GetPolicyPreviewJobCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "GetPolicyPreviewJob", {})
  .n("AccessAnalyzerClient", "GetPolicyPreviewJobCommand")
  .sc(GetPolicyPreviewJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPolicyPreviewJobRequest;
      output: GetPolicyPreviewJobResponse;
    };
    sdk: {
      input: GetPolicyPreviewJobCommandInput;
      output: GetPolicyPreviewJobCommandOutput;
    };
  };
}
