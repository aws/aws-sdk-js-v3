// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { StartTaskExecutionRequest, StartTaskExecutionResponse } from "../models/models_0";
import { de_StartTaskExecutionCommand, se_StartTaskExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartTaskExecutionCommand}.
 */
export interface StartTaskExecutionCommandInput extends StartTaskExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartTaskExecutionCommand}.
 */
export interface StartTaskExecutionCommandOutput extends StartTaskExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts an DataSync task. For each task, you can only run one task execution at a time.</p>
 *          <p>There are several phases to a task execution. For more information, see <a href="https://docs.aws.amazon.com/datasync/latest/userguide/working-with-task-executions.html#understand-task-execution-statuses">Task execution statuses</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, StartTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, StartTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // StartTaskExecutionRequest
 *   TaskArn: "STRING_VALUE", // required
 *   OverrideOptions: { // Options
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
 *   Includes: [ // FilterList
 *     { // FilterRule
 *       FilterType: "SIMPLE_PATTERN",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Excludes: [
 *     {
 *       FilterType: "SIMPLE_PATTERN",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   Tags: [ // InputTagList
 *     { // TagListEntry
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartTaskExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartTaskExecutionCommandInput - {@link StartTaskExecutionCommandInput}
 * @returns {@link StartTaskExecutionCommandOutput}
 * @see {@link StartTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link StartTaskExecutionCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for DataSyncClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception is thrown when an error occurs in the DataSync service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 *
 */
export class StartTaskExecutionCommand extends $Command<
  StartTaskExecutionCommandInput,
  StartTaskExecutionCommandOutput,
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
  constructor(readonly input: StartTaskExecutionCommandInput) {
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
  ): Handler<StartTaskExecutionCommandInput, StartTaskExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartTaskExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "StartTaskExecutionCommand";
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
  private serialize(input: StartTaskExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartTaskExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTaskExecutionCommandOutput> {
    return de_StartTaskExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
