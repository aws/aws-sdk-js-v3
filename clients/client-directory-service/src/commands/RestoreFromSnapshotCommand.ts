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

import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import {
  RestoreFromSnapshotRequest,
  RestoreFromSnapshotRequestFilterSensitiveLog,
  RestoreFromSnapshotResult,
  RestoreFromSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RestoreFromSnapshotCommand,
  serializeAws_json1_1RestoreFromSnapshotCommand,
} from "../protocols/Aws_json1_1";

export interface RestoreFromSnapshotCommandInput extends RestoreFromSnapshotRequest {}
export interface RestoreFromSnapshotCommandOutput extends RestoreFromSnapshotResult, __MetadataBearer {}

/**
 * <p>Restores a directory using an existing directory snapshot.</p>
 *          <p>When you restore a directory from a snapshot, any changes made to the directory after the snapshot date are overwritten.</p>
 *          <p>This action returns as soon as the restore operation is initiated. You can monitor the
 *          progress of the restore operation by calling the <a>DescribeDirectories</a> operation with
 *          the directory identifier. When the <b>DirectoryDescription.Stage</b> value changes to
 *             <code>Active</code>, the restore operation is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, RestoreFromSnapshotCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, RestoreFromSnapshotCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new RestoreFromSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 */
export class RestoreFromSnapshotCommand extends $Command<
  RestoreFromSnapshotCommandInput,
  RestoreFromSnapshotCommandOutput,
  DirectoryServiceClientResolvedConfig
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

  constructor(readonly input: RestoreFromSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreFromSnapshotCommandInput, RestoreFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreFromSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "RestoreFromSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreFromSnapshotRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreFromSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreFromSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreFromSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreFromSnapshotCommandOutput> {
    return deserializeAws_json1_1RestoreFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
