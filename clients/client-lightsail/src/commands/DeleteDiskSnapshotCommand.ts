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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  DeleteDiskSnapshotRequest,
  DeleteDiskSnapshotRequestFilterSensitiveLog,
  DeleteDiskSnapshotResult,
  DeleteDiskSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDiskSnapshotCommand,
  serializeAws_json1_1DeleteDiskSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteDiskSnapshotCommandInput extends DeleteDiskSnapshotRequest {}
export interface DeleteDiskSnapshotCommandOutput extends DeleteDiskSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes the specified disk snapshot.</p>
 *          <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the
 *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
 *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
 *       regardless of which prior snapshots have been deleted, all active snapshots will have access
 *       to all the information needed to restore the disk.</p>
 *          <p>The <code>delete disk snapshot</code> operation supports tag-based access control via
 *       resource tags applied to the resource identified by <code>disk snapshot name</code>. For more
 *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteDiskSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteDiskSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteDiskSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDiskSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteDiskSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class DeleteDiskSnapshotCommand extends $Command<
  DeleteDiskSnapshotCommandInput,
  DeleteDiskSnapshotCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: DeleteDiskSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDiskSnapshotCommandInput, DeleteDiskSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDiskSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteDiskSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDiskSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDiskSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDiskSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDiskSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDiskSnapshotCommandOutput> {
    return deserializeAws_json1_1DeleteDiskSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
