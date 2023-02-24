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
  ModifyDBClusterSnapshotAttributeMessage,
  ModifyDBClusterSnapshotAttributeMessageFilterSensitiveLog,
  ModifyDBClusterSnapshotAttributeResult,
  ModifyDBClusterSnapshotAttributeResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryModifyDBClusterSnapshotAttributeCommand,
  serializeAws_queryModifyDBClusterSnapshotAttributeCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface ModifyDBClusterSnapshotAttributeCommandInput extends ModifyDBClusterSnapshotAttributeMessage {}
export interface ModifyDBClusterSnapshotAttributeCommandOutput
  extends ModifyDBClusterSnapshotAttributeResult,
    __MetadataBearer {}

/**
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB cluster snapshot.</p>
 *          <p>To share a manual DB cluster snapshot with other Amazon Web Services accounts, specify
 *                 <code>restore</code> as the <code>AttributeName</code> and use the
 *                 <code>ValuesToAdd</code> parameter to add a list of IDs of the Amazon Web Services accounts that are
 *             authorized to restore the manual DB cluster snapshot. Use the value <code>all</code> to
 *             make the manual DB cluster snapshot public, which means that it can be copied or
 *             restored by all Amazon Web Services accounts.</p>
 *          <note>
 *             <p>Don't add the <code>all</code> value for any manual DB cluster snapshots
 *                 that contain private information that you don't want available to all Amazon Web Services
 *                 accounts.</p>
 *          </note>
 *          <p>If a manual DB cluster snapshot is encrypted, it can be shared, but only by
 *             specifying a list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code>
 *             parameter. You can't use <code>all</code> as a value for that parameter in this
 *             case.</p>
 *          <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB cluster
 *             snapshot, or whether a manual DB cluster snapshot is public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation. The accounts are
 *             returned as values for the <code>restore</code> attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBClusterSnapshotAttributeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBClusterSnapshotAttributeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBClusterSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBClusterSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class ModifyDBClusterSnapshotAttributeCommand extends $Command<
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: ModifyDBClusterSnapshotAttributeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBClusterSnapshotAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBClusterSnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBClusterSnapshotAttributeMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBClusterSnapshotAttributeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyDBClusterSnapshotAttributeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBClusterSnapshotAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDBClusterSnapshotAttributeCommandOutput> {
    return deserializeAws_queryModifyDBClusterSnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
