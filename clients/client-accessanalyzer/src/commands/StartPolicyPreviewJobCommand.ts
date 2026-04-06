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
import type { StartPolicyPreviewJobRequest, StartPolicyPreviewJobResponse } from "../models/models_0";
import { StartPolicyPreviewJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartPolicyPreviewJobCommand}.
 */
export interface StartPolicyPreviewJobCommandInput extends StartPolicyPreviewJobRequest {}
/**
 * @public
 *
 * The output of {@link StartPolicyPreviewJobCommand}.
 */
export interface StartPolicyPreviewJobCommandOutput extends StartPolicyPreviewJobResponse, __MetadataBearer {}

/**
 * <p>Creates a policy preview analysis job to evaluate the impact of Service Control Policies (SCPs) before deployment. The analysis uses historical CloudTrail authorization events to identify potential access denials, helping you prevent service disruptions.</p> <p>The job analyzes CloudTrail events within a specified time window and generates a report identifying which events would be denied by the proposed policy. The report is stored in the specified Amazon S3 location.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccessAnalyzerClient, StartPolicyPreviewJobCommand } from "@aws-sdk/client-accessanalyzer"; // ES Modules import
 * // const { AccessAnalyzerClient, StartPolicyPreviewJobCommand } = require("@aws-sdk/client-accessanalyzer"); // CommonJS import
 * // import type { AccessAnalyzerClientConfig } from "@aws-sdk/client-accessanalyzer";
 * const config = {}; // type is AccessAnalyzerClientConfig
 * const client = new AccessAnalyzerClient(config);
 * const input = { // StartPolicyPreviewJobRequest
 *   policyConfigurations: [ // PolicyConfigurationsList // required
 *     { // PolicyConfiguration
 *       jobType: "STRING_VALUE", // required
 *       targetId: "STRING_VALUE", // required
 *       policyDocumentsList: [ // PolicyDocumentList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"),
 *   outputS3Uri: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartPolicyPreviewJobCommand(input);
 * const response = await client.send(command);
 * // { // StartPolicyPreviewJobResponse
 * //   jobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartPolicyPreviewJobCommandInput - {@link StartPolicyPreviewJobCommandInput}
 * @returns {@link StartPolicyPreviewJobCommandOutput}
 * @see {@link StartPolicyPreviewJobCommandInput} for command's `input` shape.
 * @see {@link StartPolicyPreviewJobCommandOutput} for command's `response` shape.
 * @see {@link AccessAnalyzerClientResolvedConfig | config} for AccessAnalyzerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict exception error.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Service quote met error.</p>
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
 * @example Successfully started policy preview job
 * ```javascript
 * //
 * const input = {
 *   clientToken: "unique-token-123",
 *   endTime: "2023-12-31T23:59:59Z",
 *   outputS3Uri: "s3://bucket/path",
 *   policyConfigurations: [
 *     {
 *       jobType: "SCP",
 *       policyDocumentsList: [
 *         `{"Version":"2012-10-17","Statement":[{"Sid":"AllowS3Access","Effect":"Allow","Action":["s3:GetObject","s3:PutObject","s3:ListBucket"],"Resource":["arn:aws:s3:::example-bucket","arn:aws:s3:::example-bucket/*"]}]}`
 *       ],
 *       targetId: "123456789012"
 *     }
 *   ],
 *   startTime: "2023-01-01T00:00:00Z"
 * };
 * const command = new StartPolicyPreviewJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
 * }
 * *\/
 * ```
 *
 * @example Failed field validation for invalid targetId
 * ```javascript
 * //
 * const input = {
 *   outputS3Uri: "s3://bucket/path",
 *   policyConfigurations: [
 *     {
 *       jobType: "SCP",
 *       policyDocumentsList: [
 *         `{"Version":"2012-10-17","Statement":[{"Effect":"Deny","Action":"s3:*","Resource":"*"}]}`
 *       ],
 *       targetId: "invalid"
 *     }
 *   ],
 *   startTime: "2023-01-01T00:00:00Z"
 * };
 * const command = new StartPolicyPreviewJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class StartPolicyPreviewJobCommand extends $Command
  .classBuilder<
    StartPolicyPreviewJobCommandInput,
    StartPolicyPreviewJobCommandOutput,
    AccessAnalyzerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AccessAnalyzerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AccessAnalyzer", "StartPolicyPreviewJob", {})
  .n("AccessAnalyzerClient", "StartPolicyPreviewJobCommand")
  .sc(StartPolicyPreviewJob$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartPolicyPreviewJobRequest;
      output: StartPolicyPreviewJobResponse;
    };
    sdk: {
      input: StartPolicyPreviewJobCommandInput;
      output: StartPolicyPreviewJobCommandOutput;
    };
  };
}
