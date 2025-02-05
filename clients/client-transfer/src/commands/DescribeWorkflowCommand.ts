// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorkflowRequest, DescribeWorkflowResponse } from "../models/models_0";
import { de_DescribeWorkflowCommand, se_DescribeWorkflowCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkflowCommand}.
 */
export interface DescribeWorkflowCommandInput extends DescribeWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkflowCommand}.
 */
export interface DescribeWorkflowCommandOutput extends DescribeWorkflowResponse, __MetadataBearer {}

/**
 * <p>Describes the specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeWorkflowCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeWorkflowCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new TransferClient(config);
 * const input = { // DescribeWorkflowRequest
 *   WorkflowId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkflowResponse
 * //   Workflow: { // DescribedWorkflow
 * //     Arn: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Steps: [ // WorkflowSteps
 * //       { // WorkflowStep
 * //         Type: "COPY" || "CUSTOM" || "TAG" || "DELETE" || "DECRYPT",
 * //         CopyStepDetails: { // CopyStepDetails
 * //           Name: "STRING_VALUE",
 * //           DestinationFileLocation: { // InputFileLocation
 * //             S3FileLocation: { // S3InputFileLocation
 * //               Bucket: "STRING_VALUE",
 * //               Key: "STRING_VALUE",
 * //             },
 * //             EfsFileLocation: { // EfsFileLocation
 * //               FileSystemId: "STRING_VALUE",
 * //               Path: "STRING_VALUE",
 * //             },
 * //           },
 * //           OverwriteExisting: "TRUE" || "FALSE",
 * //           SourceFileLocation: "STRING_VALUE",
 * //         },
 * //         CustomStepDetails: { // CustomStepDetails
 * //           Name: "STRING_VALUE",
 * //           Target: "STRING_VALUE",
 * //           TimeoutSeconds: Number("int"),
 * //           SourceFileLocation: "STRING_VALUE",
 * //         },
 * //         DeleteStepDetails: { // DeleteStepDetails
 * //           Name: "STRING_VALUE",
 * //           SourceFileLocation: "STRING_VALUE",
 * //         },
 * //         TagStepDetails: { // TagStepDetails
 * //           Name: "STRING_VALUE",
 * //           Tags: [ // S3Tags
 * //             { // S3Tag
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           SourceFileLocation: "STRING_VALUE",
 * //         },
 * //         DecryptStepDetails: { // DecryptStepDetails
 * //           Name: "STRING_VALUE",
 * //           Type: "PGP", // required
 * //           SourceFileLocation: "STRING_VALUE",
 * //           OverwriteExisting: "TRUE" || "FALSE",
 * //           DestinationFileLocation: {
 * //             S3FileLocation: {
 * //               Bucket: "STRING_VALUE",
 * //               Key: "STRING_VALUE",
 * //             },
 * //             EfsFileLocation: {
 * //               FileSystemId: "STRING_VALUE",
 * //               Path: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     OnExceptionSteps: [
 * //       {
 * //         Type: "COPY" || "CUSTOM" || "TAG" || "DELETE" || "DECRYPT",
 * //         CopyStepDetails: {
 * //           Name: "STRING_VALUE",
 * //           DestinationFileLocation: {
 * //             S3FileLocation: {
 * //               Bucket: "STRING_VALUE",
 * //               Key: "STRING_VALUE",
 * //             },
 * //             EfsFileLocation: {
 * //               FileSystemId: "STRING_VALUE",
 * //               Path: "STRING_VALUE",
 * //             },
 * //           },
 * //           OverwriteExisting: "TRUE" || "FALSE",
 * //           SourceFileLocation: "STRING_VALUE",
 * //         },
 * //         CustomStepDetails: {
 * //           Name: "STRING_VALUE",
 * //           Target: "STRING_VALUE",
 * //           TimeoutSeconds: Number("int"),
 * //           SourceFileLocation: "STRING_VALUE",
 * //         },
 * //         DeleteStepDetails: {
 * //           Name: "STRING_VALUE",
 * //           SourceFileLocation: "STRING_VALUE",
 * //         },
 * //         TagStepDetails: {
 * //           Name: "STRING_VALUE",
 * //           Tags: [
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           SourceFileLocation: "STRING_VALUE",
 * //         },
 * //         DecryptStepDetails: {
 * //           Name: "STRING_VALUE",
 * //           Type: "PGP", // required
 * //           SourceFileLocation: "STRING_VALUE",
 * //           OverwriteExisting: "TRUE" || "FALSE",
 * //           DestinationFileLocation: {
 * //             S3FileLocation: {
 * //               Bucket: "STRING_VALUE",
 * //               Key: "STRING_VALUE",
 * //             },
 * //             EfsFileLocation: {
 * //               FileSystemId: "STRING_VALUE",
 * //               Path: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     WorkflowId: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorkflowCommandInput - {@link DescribeWorkflowCommandInput}
 * @returns {@link DescribeWorkflowCommandOutput}
 * @see {@link DescribeWorkflowCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkflowCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 * @public
 */
export class DescribeWorkflowCommand extends $Command
  .classBuilder<
    DescribeWorkflowCommandInput,
    DescribeWorkflowCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "DescribeWorkflow", {})
  .n("TransferClient", "DescribeWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkflowCommand)
  .de(de_DescribeWorkflowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkflowRequest;
      output: DescribeWorkflowResponse;
    };
    sdk: {
      input: DescribeWorkflowCommandInput;
      output: DescribeWorkflowCommandOutput;
    };
  };
}
