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
import { UpdateTaskExecutionRequest, UpdateTaskExecutionResponse } from "../models/models_0";
import { de_UpdateTaskExecutionCommand, se_UpdateTaskExecutionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTaskExecutionCommand}.
 */
export interface UpdateTaskExecutionCommandInput extends UpdateTaskExecutionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTaskExecutionCommand}.
 */
export interface UpdateTaskExecutionCommandOutput extends UpdateTaskExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the configuration of a running DataSync task execution.</p>
 *          <note>
 *             <p>Currently, the only <code>Option</code> that you can modify with
 *           <code>UpdateTaskExecution</code> is <code>
 *                   <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_Options.html#DataSync-Type-Options-BytesPerSecond">BytesPerSecond</a>
 *                </code>, which throttles bandwidth for a running or queued
 *         task execution.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, UpdateTaskExecutionCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, UpdateTaskExecutionCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const input = { // UpdateTaskExecutionRequest
 *   TaskExecutionArn: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateTaskExecutionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTaskExecutionCommandInput - {@link UpdateTaskExecutionCommandInput}
 * @returns {@link UpdateTaskExecutionCommandOutput}
 * @see {@link UpdateTaskExecutionCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskExecutionCommandOutput} for command's `response` shape.
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
export class UpdateTaskExecutionCommand extends $Command<
  UpdateTaskExecutionCommandInput,
  UpdateTaskExecutionCommandOutput,
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
  constructor(readonly input: UpdateTaskExecutionCommandInput) {
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
  ): Handler<UpdateTaskExecutionCommandInput, UpdateTaskExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTaskExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataSyncClient";
    const commandName = "UpdateTaskExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "FmrsService",
        operation: "UpdateTaskExecution",
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
  private serialize(input: UpdateTaskExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTaskExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTaskExecutionCommandOutput> {
    return de_UpdateTaskExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
