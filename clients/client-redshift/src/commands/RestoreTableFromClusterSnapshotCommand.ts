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
  RestoreTableFromClusterSnapshotMessage,
  RestoreTableFromClusterSnapshotMessageFilterSensitiveLog,
  RestoreTableFromClusterSnapshotResult,
  RestoreTableFromClusterSnapshotResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRestoreTableFromClusterSnapshotCommand,
  serializeAws_queryRestoreTableFromClusterSnapshotCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface RestoreTableFromClusterSnapshotCommandInput extends RestoreTableFromClusterSnapshotMessage {}
export interface RestoreTableFromClusterSnapshotCommandOutput
  extends RestoreTableFromClusterSnapshotResult,
    __MetadataBearer {}

/**
 * <p>Creates a new table from a table in an Amazon Redshift cluster snapshot. You must
 *             create the new table within the Amazon Redshift cluster that the snapshot was taken
 *             from.</p>
 *         <p>You cannot use <code>RestoreTableFromClusterSnapshot</code> to restore a table with
 *             the same name as an existing table in an Amazon Redshift cluster. That is, you cannot
 *             overwrite an existing table in a cluster with a restored table. If you want to replace
 *             your original table with a new, restored table, then rename or drop your original table
 *             before you call <code>RestoreTableFromClusterSnapshot</code>. When you have renamed your
 *             original table, then you can pass the original name of the table as the
 *                 <code>NewTableName</code> parameter value in the call to
 *                 <code>RestoreTableFromClusterSnapshot</code>. This way, you can replace the original
 *             table with the table created from the snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RestoreTableFromClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RestoreTableFromClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RestoreTableFromClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreTableFromClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreTableFromClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class RestoreTableFromClusterSnapshotCommand extends $Command<
  RestoreTableFromClusterSnapshotCommandInput,
  RestoreTableFromClusterSnapshotCommandOutput,
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

  constructor(readonly input: RestoreTableFromClusterSnapshotCommandInput) {
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
  ): Handler<RestoreTableFromClusterSnapshotCommandInput, RestoreTableFromClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreTableFromClusterSnapshotCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RestoreTableFromClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreTableFromClusterSnapshotMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreTableFromClusterSnapshotResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RestoreTableFromClusterSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRestoreTableFromClusterSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreTableFromClusterSnapshotCommandOutput> {
    return deserializeAws_queryRestoreTableFromClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
