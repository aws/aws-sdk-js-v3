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
import { UpdateTaskRequest, UpdateTaskResponse } from "../models/models_0";
import { de_UpdateTaskCommand, se_UpdateTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTaskCommand}.
 */
export interface UpdateTaskCommandInput extends UpdateTaskRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTaskCommand}.
 */
export interface UpdateTaskCommandOutput extends UpdateTaskResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration of a DataSync transfer task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateTaskCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateTaskCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateTaskRequest
 *   TaskArn: "STRING_VALUE", // required
 *   Options: { // Options
 *     VerifyMode: "POINT_IN_TIME_CONSISTENT" || "ONLY_FILES_TRANSFERRED" || "NONE",
 *     OverwriteMode: "ALWAYS" || "NEVER",
 *     Atime: "NONE" || "BEST_EFFORT",
 *     Mtime: "NONE" || "PRESERVE",
 *     Uid: "NONE" || "INT_VALUE" || "NAME" || "BOTH",
 *     Gid: "NONE" || "INT_VALUE" || "NAME" || "BOTH",
 *     PreserveDeletedFiles: "PRESERVE" || "REMOVE",
 *     PreserveDevices: "NONE" || "PRESERVE",
 *     PosixPermissions: "NONE" || "PRESERVE",
 *     BytesPerSecond: Number("long"),
 *     TaskQueueing: "ENABLED" || "DISABLED",
 *     LogLevel: "OFF" || "BASIC" || "TRANSFER",
 *     TransferMode: "CHANGED" || "ALL",
 *     SecurityDescriptorCopyFlags: "NONE" || "OWNER_DACL" || "OWNER_DACL_SACL",
 *     ObjectTags: "PRESERVE" || "NONE",
 *   },
 *   Excludes: [ // FilterList
 *     { // FilterRule
 *       FilterType: "SIMPLE_PATTERN",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Schedule: { // TaskSchedule
 *     ScheduleExpression: "STRING_VALUE", // required
 *   },
 *   Name: "STRING_VALUE",
 *   CloudWatchLogGroupArn: "STRING_VALUE",
 *   Includes: [
 *     {
 *       FilterType: "SIMPLE_PATTERN",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   TaskReportConfig: { // TaskReportConfig
 *     Destination: { // ReportDestination
 *       S3: { // ReportDestinationS3
 *         Subdirectory: "STRING_VALUE",
 *         S3BucketArn: "STRING_VALUE", // required
 *         BucketAccessRoleArn: "STRING_VALUE", // required
 *       },
 *     },
 *     OutputType: "SUMMARY_ONLY" || "STANDARD",
 *     ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *     ObjectVersionIds: "INCLUDE" || "NONE",
 *     Overrides: { // ReportOverrides
 *       Transferred: { // ReportOverride
 *         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *       },
 *       Verified: {
 *         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *       },
 *       Deleted: {
 *         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *       },
 *       Skipped: {
 *         ReportLevel: "ERRORS_ONLY" || "SUCCESSES_AND_ERRORS",
 *       },
 *     },
 *   },
 * };
 * const command = new UpdateTaskCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTaskCommandInput - {@link UpdateTaskCommandInput}
 * @returns {@link UpdateTaskCommandOutput}
 * @see {@link UpdateTaskCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskCommandOutput} for command's `response` shape.
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
export class UpdateTaskCommand extends $Command<
  UpdateTaskCommandInput,
  UpdateTaskCommandOutput,
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
  constructor(readonly input: UpdateTaskCommandInput) {
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
  ): Handler<UpdateTaskCommandInput, UpdateTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTaskCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "UpdateTask",
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
  private serialize(input: UpdateTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTaskCommandOutput> {
    return de_UpdateTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
