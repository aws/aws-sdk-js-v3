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
} from "@smithy/types";

import { DescribeExecutionRequest, DescribeExecutionResponse } from "../models/models_0";
import { de_DescribeExecutionCommand, se_DescribeExecutionCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
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
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
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
 */
export class DescribeExecutionCommand extends $Command<
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
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
  constructor(readonly input: DescribeExecutionCommandInput) {
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
  ): Handler<DescribeExecutionCommandInput, DescribeExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "DescribeExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeExecutionCommandOutput> {
    return de_DescribeExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
