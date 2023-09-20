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

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DescribeTaskExecutionRequest, DescribeTaskExecutionResponse } from "../models/models_0";
import { de_DescribeTaskExecutionCommand, se_DescribeTaskExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTaskExecutionCommand}.
 */
export interface DescribeTaskExecutionCommandInput extends DescribeTaskExecutionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTaskExecutionCommand}.
 */
export interface DescribeTaskExecutionCommandOutput extends DescribeTaskExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about an execution of your DataSync task. You can
 *       use this operation to help monitor the progress of an ongoing transfer or check the results of
 *       the transfer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DescribeTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DescribeTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // DescribeTaskExecutionRequest
 *   TaskExecutionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeTaskExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTaskExecutionResponse
 * //   TaskExecutionArn: "STRING_VALUE",
 * //   Status: "QUEUED" || "LAUNCHING" || "PREPARING" || "TRANSFERRING" || "VERIFYING" || "SUCCESS" || "ERROR",
 * //   Options: { // Options
 * //     VerifyMode: "POINT_IN_TIME_CONSISTENT" || "ONLY_FILES_TRANSFERRED" || "NONE",
 * //     OverwriteMode: "ALWAYS" || "NEVER",
 * //     Atime: "NONE" || "BEST_EFFORT",
 * //     Mtime: "NONE" || "PRESERVE",
 * //     Uid: "NONE" || "INT_VALUE" || "NAME" || "BOTH",
 * //     Gid: "NONE" || "INT_VALUE" || "NAME" || "BOTH",
 * //     PreserveDeletedFiles: "PRESERVE" || "REMOVE",
 * //     PreserveDevices: "NONE" || "PRESERVE",
 * //     PosixPermissions: "NONE" || "PRESERVE",
 * //     BytesPerSecond: Number("long"),
 * //     TaskQueueing: "ENABLED" || "DISABLED",
 * //     LogLevel: "OFF" || "BASIC" || "TRANSFER",
 * //     TransferMode: "CHANGED" || "ALL",
 * //     SecurityDescriptorCopyFlags: "NONE" || "OWNER_DACL" || "OWNER_DACL_SACL",
 * //     ObjectTags: "PRESERVE" || "NONE",
 * //   },
 * //   Excludes: [ // FilterList
 * //     { // FilterRule
 * //       FilterType: "SIMPLE_PATTERN",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Includes: [
 * //     {
 * //       FilterType: "SIMPLE_PATTERN",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   StartTime: new Date("TIMESTAMP"),
 * //   EstimatedFilesToTransfer: Number("long"),
 * //   EstimatedBytesToTransfer: Number("long"),
 * //   FilesTransferred: Number("long"),
 * //   BytesWritten: Number("long"),
 * //   BytesTransferred: Number("long"),
 * //   Result: { // TaskExecutionResultDetail
 * //     PrepareDuration: Number("long"),
 * //     PrepareStatus: "PENDING" || "SUCCESS" || "ERROR",
 * //     TotalDuration: Number("long"),
 * //     TransferDuration: Number("long"),
 * //     TransferStatus: "PENDING" || "SUCCESS" || "ERROR",
 * //     VerifyDuration: Number("long"),
 * //     VerifyStatus: "PENDING" || "SUCCESS" || "ERROR",
 * //     ErrorCode: "STRING_VALUE",
 * //     ErrorDetail: "STRING_VALUE",
 * //   },
 * //   BytesCompressed: Number("long"),
 * //   TaskReportConfig: { // TaskReportConfig
 * //     Destination: { // ReportDestination
 * //       S3: { // ReportDestinationS3
 * //         Subdirectory: "STRING_VALUE",
 * //         S3BucketArn: "STRING_VALUE", // required
 * //         BucketAccessRoleArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     OutputType: "SUMMARY_ONLY" || "STANDARD",
 * //     ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //     ObjectVersionIds: "INCLUDE" || "NONE",
 * //     Overrides: { // ReportOverrides
 * //       Transferred: { // ReportOverride
 * //         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //       },
 * //       Verified: {
 * //         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //       },
 * //       Deleted: {
 * //         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //       },
 * //       Skipped: {
 * //         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 * //       },
 * //     },
 * //   },
 * //   FilesDeleted: Number("long"),
 * //   FilesSkipped: Number("long"),
 * //   FilesVerified: Number("long"),
 * //   ReportResult: { // ReportResult
 * //     Status: "PENDING" || "SUCCESS" || "ERROR",
 * //     ErrorCode: "STRING_VALUE",
 * //     ErrorDetail: "STRING_VALUE",
 * //   },
 * //   EstimatedFilesToDelete: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeTaskExecutionCommandInput - {@link DescribeTaskExecutionCommandInput}
 * @returns {@link DescribeTaskExecutionCommandOutput}
 * @see {@link DescribeTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync
 *       service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link DataSyncServiceException}
 * <p>Base exception class for all service exceptions from DataSync service.</p>
 *
 */
export class DescribeTaskExecutionCommand extends $Command<
  DescribeTaskExecutionCommandInput,
  DescribeTaskExecutionCommandOutput,
  DataSyncClientResolvedConfig
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
  constructor(readonly input: DescribeTaskExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTaskExecutionCommandInput, DescribeTaskExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTaskExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "DescribeTaskExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "DescribeTaskExecution",
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
  private serialize(input: DescribeTaskExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTaskExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTaskExecutionCommandOutput> {
    return de_DescribeTaskExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
