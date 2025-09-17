// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorkflowRequest, CreateWorkflowResponse } from "../models/models_0";
import { de_CreateWorkflowCommand, se_CreateWorkflowCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkflowCommand}.
 */
export interface CreateWorkflowCommandInput extends CreateWorkflowRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkflowCommand}.
 */
export interface CreateWorkflowCommandOutput extends CreateWorkflowResponse, __MetadataBearer {}

/**
 * <p> Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateWorkflowCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateWorkflowCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * // import type { TransferClientConfig } from "@aws-sdk/client-transfer";
 * const config = {}; // type is TransferClientConfig
 * const client = new TransferClient(config);
 * const input = { // CreateWorkflowRequest
 *   Description: "STRING_VALUE",
 *   Steps: [ // WorkflowSteps // required
 *     { // WorkflowStep
 *       Type: "COPY" || "CUSTOM" || "TAG" || "DELETE" || "DECRYPT",
 *       CopyStepDetails: { // CopyStepDetails
 *         Name: "STRING_VALUE",
 *         DestinationFileLocation: { // InputFileLocation
 *           S3FileLocation: { // S3InputFileLocation
 *             Bucket: "STRING_VALUE",
 *             Key: "STRING_VALUE",
 *           },
 *           EfsFileLocation: { // EfsFileLocation
 *             FileSystemId: "STRING_VALUE",
 *             Path: "STRING_VALUE",
 *           },
 *         },
 *         OverwriteExisting: "TRUE" || "FALSE",
 *         SourceFileLocation: "STRING_VALUE",
 *       },
 *       CustomStepDetails: { // CustomStepDetails
 *         Name: "STRING_VALUE",
 *         Target: "STRING_VALUE",
 *         TimeoutSeconds: Number("int"),
 *         SourceFileLocation: "STRING_VALUE",
 *       },
 *       DeleteStepDetails: { // DeleteStepDetails
 *         Name: "STRING_VALUE",
 *         SourceFileLocation: "STRING_VALUE",
 *       },
 *       TagStepDetails: { // TagStepDetails
 *         Name: "STRING_VALUE",
 *         Tags: [ // S3Tags
 *           { // S3Tag
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         SourceFileLocation: "STRING_VALUE",
 *       },
 *       DecryptStepDetails: { // DecryptStepDetails
 *         Name: "STRING_VALUE",
 *         Type: "PGP", // required
 *         SourceFileLocation: "STRING_VALUE",
 *         OverwriteExisting: "TRUE" || "FALSE",
 *         DestinationFileLocation: {
 *           S3FileLocation: {
 *             Bucket: "STRING_VALUE",
 *             Key: "STRING_VALUE",
 *           },
 *           EfsFileLocation: {
 *             FileSystemId: "STRING_VALUE",
 *             Path: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   OnExceptionSteps: [
 *     {
 *       Type: "COPY" || "CUSTOM" || "TAG" || "DELETE" || "DECRYPT",
 *       CopyStepDetails: {
 *         Name: "STRING_VALUE",
 *         DestinationFileLocation: {
 *           S3FileLocation: {
 *             Bucket: "STRING_VALUE",
 *             Key: "STRING_VALUE",
 *           },
 *           EfsFileLocation: {
 *             FileSystemId: "STRING_VALUE",
 *             Path: "STRING_VALUE",
 *           },
 *         },
 *         OverwriteExisting: "TRUE" || "FALSE",
 *         SourceFileLocation: "STRING_VALUE",
 *       },
 *       CustomStepDetails: {
 *         Name: "STRING_VALUE",
 *         Target: "STRING_VALUE",
 *         TimeoutSeconds: Number("int"),
 *         SourceFileLocation: "STRING_VALUE",
 *       },
 *       DeleteStepDetails: {
 *         Name: "STRING_VALUE",
 *         SourceFileLocation: "STRING_VALUE",
 *       },
 *       TagStepDetails: {
 *         Name: "STRING_VALUE",
 *         Tags: [
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         SourceFileLocation: "STRING_VALUE",
 *       },
 *       DecryptStepDetails: {
 *         Name: "STRING_VALUE",
 *         Type: "PGP", // required
 *         SourceFileLocation: "STRING_VALUE",
 *         OverwriteExisting: "TRUE" || "FALSE",
 *         DestinationFileLocation: {
 *           S3FileLocation: {
 *             Bucket: "STRING_VALUE",
 *             Key: "STRING_VALUE",
 *           },
 *           EfsFileLocation: {
 *             FileSystemId: "STRING_VALUE",
 *             Path: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateWorkflowCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkflowResponse
 * //   WorkflowId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkflowCommandInput - {@link CreateWorkflowCommandInput}
 * @returns {@link CreateWorkflowCommandOutput}
 * @see {@link CreateWorkflowCommandInput} for command's `input` shape.
 * @see {@link CreateWorkflowCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The requested resource does not exist, or exists in a region other than the one specified for the command.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class CreateWorkflowCommand extends $Command
  .classBuilder<
    CreateWorkflowCommandInput,
    CreateWorkflowCommandOutput,
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
  .s("TransferService", "CreateWorkflow", {})
  .n("TransferClient", "CreateWorkflowCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkflowCommand)
  .de(de_CreateWorkflowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkflowRequest;
      output: CreateWorkflowResponse;
    };
    sdk: {
      input: CreateWorkflowCommandInput;
      output: CreateWorkflowCommandOutput;
    };
  };
}
