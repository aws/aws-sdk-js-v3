// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateWorkflowRequest, CreateWorkflowResponse } from "../models/models_0";
import { de_CreateWorkflowCommand, se_CreateWorkflowCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>
 *       Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes.
 *       After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, CreateWorkflowCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, CreateWorkflowCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
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
 */
export class CreateWorkflowCommand extends $Command<
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
  TransferClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateWorkflowCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWorkflowCommandInput, CreateWorkflowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkflowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "CreateWorkflowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TransferService",
        operation: "CreateWorkflow",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateWorkflowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWorkflowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkflowCommandOutput> {
    return de_CreateWorkflowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
