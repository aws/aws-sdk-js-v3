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
  ModifySnapshotCopyRetentionPeriodMessage,
  ModifySnapshotCopyRetentionPeriodMessageFilterSensitiveLog,
  ModifySnapshotCopyRetentionPeriodResult,
  ModifySnapshotCopyRetentionPeriodResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand,
  serializeAws_queryModifySnapshotCopyRetentionPeriodCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface ModifySnapshotCopyRetentionPeriodCommandInput extends ModifySnapshotCopyRetentionPeriodMessage {}
export interface ModifySnapshotCopyRetentionPeriodCommandOutput
  extends ModifySnapshotCopyRetentionPeriodResult,
    __MetadataBearer {}

/**
 * <p>Modifies the number of days to retain snapshots in the destination Amazon Web Services Region after
 *             they are copied from the source Amazon Web Services Region. By default, this operation only changes the
 *             retention period of copied automated snapshots. The retention periods for both new and
 *             existing copied automated snapshots are updated with the new retention period. You can
 *             set the manual option to change only the retention periods of copied manual snapshots.
 *             If you set this option, only newly copied manual snapshots have the new retention
 *             period. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifySnapshotCopyRetentionPeriodCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifySnapshotCopyRetentionPeriodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandInput} for command's `input` shape.
 * @see {@link ModifySnapshotCopyRetentionPeriodCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class ModifySnapshotCopyRetentionPeriodCommand extends $Command<
  ModifySnapshotCopyRetentionPeriodCommandInput,
  ModifySnapshotCopyRetentionPeriodCommandOutput,
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

  constructor(readonly input: ModifySnapshotCopyRetentionPeriodCommandInput) {
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
  ): Handler<ModifySnapshotCopyRetentionPeriodCommandInput, ModifySnapshotCopyRetentionPeriodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifySnapshotCopyRetentionPeriodCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifySnapshotCopyRetentionPeriodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifySnapshotCopyRetentionPeriodMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifySnapshotCopyRetentionPeriodResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifySnapshotCopyRetentionPeriodCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifySnapshotCopyRetentionPeriodCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifySnapshotCopyRetentionPeriodCommandOutput> {
    return deserializeAws_queryModifySnapshotCopyRetentionPeriodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
