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

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  DeleteSnapshotRequest,
  DeleteSnapshotRequestFilterSensitiveLog,
  DeleteSnapshotResponse,
  DeleteSnapshotResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSnapshotCommand,
  serializeAws_json1_1DeleteSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteSnapshotCommandInput extends DeleteSnapshotRequest {}
export interface DeleteSnapshotCommandOutput extends DeleteSnapshotResponse, __MetadataBearer {}

/**
 * <p>Deletes an Amazon FSx for OpenZFS snapshot. After deletion, the snapshot no longer
 *             exists, and its data is gone. Deleting a snapshot doesn't affect snapshots stored in a
 *             file system backup. </p>
 *          <p>The <code>DeleteSnapshot</code> operation returns instantly. The snapshot appears with
 *             the lifecycle status of <code>DELETING</code> until the deletion is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteSnapshotCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteSnapshotCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new DeleteSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteSnapshotCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class DeleteSnapshotCommand extends $Command<
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
  FSxClientResolvedConfig
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

  constructor(readonly input: DeleteSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "DeleteSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteSnapshotResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSnapshotCommandOutput> {
    return deserializeAws_json1_1DeleteSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
