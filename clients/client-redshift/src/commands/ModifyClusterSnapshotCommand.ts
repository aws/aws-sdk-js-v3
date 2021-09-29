import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterSnapshotMessage, ModifyClusterSnapshotResult } from "../models/models_1";
import {
  deserializeAws_queryModifyClusterSnapshotCommand,
  serializeAws_queryModifyClusterSnapshotCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ModifyClusterSnapshotCommandInput extends ModifyClusterSnapshotMessage {}
export interface ModifyClusterSnapshotCommandOutput extends ModifyClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Modifies the settings for a snapshot.</p>
 * 		       <p>This exanmple modifies the manual retention period setting for a cluster snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterSnapshotCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterSnapshotCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ModifyClusterSnapshotCommand extends $Command<
  ModifyClusterSnapshotCommandInput,
  ModifyClusterSnapshotCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyClusterSnapshotCommandInput) {
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
  ): Handler<ModifyClusterSnapshotCommandInput, ModifyClusterSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyClusterSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyClusterSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyClusterSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyClusterSnapshotCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyClusterSnapshotCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyClusterSnapshotCommandOutput> {
    return deserializeAws_queryModifyClusterSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
