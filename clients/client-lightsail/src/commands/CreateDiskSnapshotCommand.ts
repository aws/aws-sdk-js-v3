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
  CreateDiskSnapshotRequest,
  CreateDiskSnapshotRequestFilterSensitiveLog,
  CreateDiskSnapshotResult,
  CreateDiskSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDiskSnapshotCommand,
  serializeAws_json1_1CreateDiskSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDiskSnapshotCommandInput extends CreateDiskSnapshotRequest {}
export interface CreateDiskSnapshotCommandOutput extends CreateDiskSnapshotResult, __MetadataBearer {}

/**
 * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make
 *       copies of disks, and to save data before shutting down a Lightsail instance.</p>
 *          <p>You can take a snapshot of an attached disk that is in use; however, snapshots only
 *       capture data that has been written to your disk at the time the snapshot command is issued.
 *       This may exclude any data that has been cached by any applications or the operating system. If
 *       you can pause any file systems on the disk long enough to take a snapshot, your snapshot
 *       should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should
 *       unmount the disk from within the Lightsail instance, issue the create disk snapshot command,
 *       and then remount the disk to ensure a consistent and complete snapshot. You may remount and
 *       use your disk while the snapshot status is pending.</p>
 *          <p>You can also use this operation to create a snapshot of an instance's system volume. You
 *       might want to do this, for example, to recover data from the system volume of a botched
 *       instance or to create a backup of the system volume like you would for a block storage disk.
 *       To create a snapshot of a system volume, just define the <code>instance name</code> parameter
 *       when issuing the snapshot command, and a snapshot of the defined instance's system volume will
 *       be created. After the snapshot is available, you can create a block storage disk from the
 *       snapshot and attach it to a running instance to access the data on the disk.</p>
 *          <p>The <code>create disk snapshot</code> operation supports tag-based access control via
 *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-controlling-access-using-tags">Amazon Lightsail Developer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CreateDiskSnapshotCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CreateDiskSnapshotCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new CreateDiskSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDiskSnapshotCommandInput} for command's `input` shape.
 * @see {@link CreateDiskSnapshotCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class CreateDiskSnapshotCommand extends $Command<
  CreateDiskSnapshotCommandInput,
  CreateDiskSnapshotCommandOutput,
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

  constructor(readonly input: CreateDiskSnapshotCommandInput) {
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
  ): Handler<CreateDiskSnapshotCommandInput, CreateDiskSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDiskSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateDiskSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDiskSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDiskSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDiskSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDiskSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDiskSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateDiskSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
