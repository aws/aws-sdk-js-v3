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
  ModifyDBSnapshotAttributeMessage,
  ModifyDBSnapshotAttributeMessageFilterSensitiveLog,
  ModifyDBSnapshotAttributeResult,
  ModifyDBSnapshotAttributeResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryModifyDBSnapshotAttributeCommand,
  serializeAws_queryModifyDBSnapshotAttributeCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface ModifyDBSnapshotAttributeCommandInput extends ModifyDBSnapshotAttributeMessage {}
export interface ModifyDBSnapshotAttributeCommandOutput extends ModifyDBSnapshotAttributeResult, __MetadataBearer {}

/**
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB snapshot.</p>
 *          <p>To share a manual DB snapshot with other Amazon Web Services accounts, specify <code>restore</code>
 *             as the <code>AttributeName</code> and use the <code>ValuesToAdd</code> parameter to add
 *             a list of IDs of the Amazon Web Services accounts that are authorized to restore the manual DB snapshot.
 *             Uses the value <code>all</code> to make the manual DB snapshot public, which means it
 *             can be copied or restored by all Amazon Web Services accounts.</p>
 *          <note>
 *             <p>Don't add the <code>all</code> value for any manual DB snapshots that
 *                 contain private information that you don't want available to all Amazon Web Services
 *                 accounts.</p>
 *          </note>
 *          <p>If the manual DB snapshot is encrypted, it can be shared, but only by specifying a
 *             list of authorized Amazon Web Services account IDs for the <code>ValuesToAdd</code> parameter. You
 *             can't use <code>all</code> as a value for that parameter in this case.</p>
 *          <p>To view which Amazon Web Services accounts have access to copy or restore a manual DB snapshot, or
 *             whether a manual DB snapshot public or private, use the <a>DescribeDBSnapshotAttributes</a> API operation. The accounts are returned as
 *             values for the <code>restore</code> attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyDBSnapshotAttributeCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyDBSnapshotAttributeCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ModifyDBSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDBSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyDBSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class ModifyDBSnapshotAttributeCommand extends $Command<
  ModifyDBSnapshotAttributeCommandInput,
  ModifyDBSnapshotAttributeCommandOutput,
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

  constructor(readonly input: ModifyDBSnapshotAttributeCommandInput) {
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
  ): Handler<ModifyDBSnapshotAttributeCommandInput, ModifyDBSnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyDBSnapshotAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyDBSnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBSnapshotAttributeMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBSnapshotAttributeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyDBSnapshotAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryModifyDBSnapshotAttributeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyDBSnapshotAttributeCommandOutput> {
    return deserializeAws_queryModifyDBSnapshotAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
