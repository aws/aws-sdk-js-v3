// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExecutionRequest, DescribeExecutionResponse } from "../models/models_0";
import { de_DescribeExecutionCommand, se_DescribeExecutionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExecutionCommand}.
 */
export interface DescribeExecutionCommandInput extends DescribeExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExecutionCommand}.
 */
export interface DescribeExecutionCommandOutput extends DescribeExecutionResponse, __MetadataBearer {}

/**
 * <p>You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.</p>
 *          <note>
 *             <p>This API call only returns details for in-progress workflows.</p>
 *             <p>
 *         If you provide an ID for an execution that is not in progress, or if the execution doesn't match the specified workflow ID, you receive a
 *         <code>ResourceNotFound</code> exception.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeExecutionCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeExecutionCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DescribeExecutionRequest
 *   ExecutionId: "STRING_VALUE", // required
 *   WorkflowId: "STRING_VALUE", // required
 * };
 * const command = new DescribeExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExecutionResponse
 * //   WorkflowId: "STRING_VALUE", // required
 * //   Execution: { // DescribedExecution
 * //     ExecutionId: "STRING_VALUE",
 * //     InitialFileLocation: { // FileLocation
 * //       S3FileLocation: { // S3FileLocation
 * //         Bucket: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         VersionId: "STRING_VALUE",
 * //         Etag: "STRING_VALUE",
 * //       },
 * //       EfsFileLocation: { // EfsFileLocation
 * //         FileSystemId: "STRING_VALUE",
 * //         Path: "STRING_VALUE",
 * //       },
 * //     },
 * //     ServiceMetadata: { // ServiceMetadata
 * //       UserDetails: { // UserDetails
 * //         UserName: "STRING_VALUE", // required
 * //         ServerId: "STRING_VALUE", // required
 * //         SessionId: "STRING_VALUE",
 * //       },
 * //     },
 * //     ExecutionRole: "STRING_VALUE",
 * //     LoggingConfiguration: { // LoggingConfiguration
 * //       LoggingRole: "STRING_VALUE",
 * //       LogGroupName: "STRING_VALUE",
 * //     },
 * //     PosixProfile: { // PosixProfile
 * //       Uid: Number("long"), // required
 * //       Gid: Number("long"), // required
 * //       SecondaryGids: [ // SecondaryGids
 * //         Number("long"),
 * //       ],
 * //     },
 * //     Status: "IN_PROGRESS" || "COMPLETED" || "EXCEPTION" || "HANDLING_EXCEPTION",
 * //     Results: { // ExecutionResults
 * //       Steps: [ // ExecutionStepResults
 * //         { // ExecutionStepResult
 * //           StepType: "COPY" || "CUSTOM" || "TAG" || "DELETE" || "DECRYPT",
 * //           Outputs: "STRING_VALUE",
 * //           Error: { // ExecutionError
 * //             Type: "PERMISSION_DENIED" || "CUSTOM_STEP_FAILED" || "THROTTLED" || "ALREADY_EXISTS" || "NOT_FOUND" || "BAD_REQUEST" || "TIMEOUT" || "INTERNAL_SERVER_ERROR", // required
 * //             Message: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       OnExceptionSteps: [
 * //         {
 * //           StepType: "COPY" || "CUSTOM" || "TAG" || "DELETE" || "DECRYPT",
 * //           Outputs: "STRING_VALUE",
 * //           Error: {
 * //             Type: "PERMISSION_DENIED" || "CUSTOM_STEP_FAILED" || "THROTTLED" || "ALREADY_EXISTS" || "NOT_FOUND" || "BAD_REQUEST" || "TIMEOUT" || "INTERNAL_SERVER_ERROR", // required
 * //             Message: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeExecutionCommandInput - {@link DescribeExecutionCommandInput}
 * @returns {@link DescribeExecutionCommandOutput}
 * @see {@link DescribeExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeExecutionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeExecutionCommand extends $Command
  .classBuilder<
    DescribeExecutionCommandInput,
    DescribeExecutionCommandOutput,
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
  .s("TransferService", "DescribeExecution", {})
  .n("TransferClient", "DescribeExecutionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExecutionCommand)
  .de(de_DescribeExecutionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExecutionRequest;
      output: DescribeExecutionResponse;
    };
    sdk: {
      input: DescribeExecutionCommandInput;
      output: DescribeExecutionCommandOutput;
    };
  };
}
