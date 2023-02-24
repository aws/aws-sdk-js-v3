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
  BatchModifyClusterSnapshotsMessage,
  BatchModifyClusterSnapshotsMessageFilterSensitiveLog,
  BatchModifyClusterSnapshotsOutputMessage,
  BatchModifyClusterSnapshotsOutputMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryBatchModifyClusterSnapshotsCommand,
  serializeAws_queryBatchModifyClusterSnapshotsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface BatchModifyClusterSnapshotsCommandInput extends BatchModifyClusterSnapshotsMessage {}
export interface BatchModifyClusterSnapshotsCommandOutput
  extends BatchModifyClusterSnapshotsOutputMessage,
    __MetadataBearer {}

/**
 * <p>Modifies the settings for a set of cluster snapshots.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, BatchModifyClusterSnapshotsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, BatchModifyClusterSnapshotsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new BatchModifyClusterSnapshotsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchModifyClusterSnapshotsCommandInput} for command's `input` shape.
 * @see {@link BatchModifyClusterSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class BatchModifyClusterSnapshotsCommand extends $Command<
  BatchModifyClusterSnapshotsCommandInput,
  BatchModifyClusterSnapshotsCommandOutput,
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

  constructor(readonly input: BatchModifyClusterSnapshotsCommandInput) {
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
  ): Handler<BatchModifyClusterSnapshotsCommandInput, BatchModifyClusterSnapshotsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchModifyClusterSnapshotsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "BatchModifyClusterSnapshotsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchModifyClusterSnapshotsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: BatchModifyClusterSnapshotsOutputMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchModifyClusterSnapshotsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchModifyClusterSnapshotsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchModifyClusterSnapshotsCommandOutput> {
    return deserializeAws_queryBatchModifyClusterSnapshotsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
