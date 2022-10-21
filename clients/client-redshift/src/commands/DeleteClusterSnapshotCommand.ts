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

import {
  DeleteClusterSnapshotMessage,
  DeleteClusterSnapshotMessageFilterSensitiveLog,
  DeleteClusterSnapshotResult,
  DeleteClusterSnapshotResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDeleteClusterSnapshotCommand,
  serializeAws_queryDeleteClusterSnapshotCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DeleteClusterSnapshotCommandInput extends DeleteClusterSnapshotMessage {}
export interface DeleteClusterSnapshotCommandOutput extends DeleteClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Deletes the specified manual snapshot. The snapshot must be in the
 *                 <code>available</code> state, with no other users authorized to access the snapshot. </p>
 *         <p>Unlike automated snapshots, manual snapshots are retained even after you delete
 *             your cluster. Amazon Redshift does not delete your manual snapshots. You must delete manual
 *             snapshot explicitly to avoid getting charged. If other accounts are authorized to access
 *             the snapshot, you must revoke all of the authorizations before you can delete the
 *             snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DeleteClusterSnapshotCommand extends $Command<
  DeleteClusterSnapshotCommandInput,
  DeleteClusterSnapshotCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: DeleteClusterSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteClusterSnapshotCommandInput, DeleteClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeleteClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteClusterSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteClusterSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteClusterSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteClusterSnapshotCommandOutput> {
    return deserializeAws_queryDeleteClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
