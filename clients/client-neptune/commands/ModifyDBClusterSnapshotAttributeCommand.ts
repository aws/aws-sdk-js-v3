import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { ModifyDBClusterSnapshotAttributeMessage, ModifyDBClusterSnapshotAttributeResult } from "../models/models_0";
import {
  deserializeAws_queryModifyDBClusterSnapshotAttributeCommand,
  serializeAws_queryModifyDBClusterSnapshotAttributeCommand,
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

export type ModifyDBClusterSnapshotAttributeCommandInput = ModifyDBClusterSnapshotAttributeMessage;
export type ModifyDBClusterSnapshotAttributeCommandOutput = ModifyDBClusterSnapshotAttributeResult & __MetadataBearer;

/**
 * <p>Adds an attribute and values to, or removes an attribute and values from, a manual DB
 *       cluster snapshot.</p>
 *          <p>To share a manual DB cluster snapshot with other AWS accounts, specify
 *       <code>restore</code> as the <code>AttributeName</code> and use the <code>ValuesToAdd</code>
 *       parameter to add a list of IDs of the AWS accounts that are authorized to restore the manual
 *       DB cluster snapshot. Use the value <code>all</code> to make the manual DB cluster snapshot
 *       public, which means that it can be copied or restored by all AWS accounts. Do not add the
 *       <code>all</code> value for any manual DB cluster snapshots that contain private information
 *       that you don't want available to all AWS accounts. If a manual DB cluster snapshot is
 *       encrypted, it can be shared, but only by specifying a list of authorized AWS account IDs for
 *       the <code>ValuesToAdd</code> parameter. You can't use <code>all</code> as a value for that
 *       parameter in this case.</p>
 *          <p>To view which AWS accounts have access to copy or restore a manual DB cluster snapshot, or
 *       whether a manual DB cluster snapshot public or private, use the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
 */
export class ModifyDBClusterSnapshotAttributeCommand extends $Command<
  ModifyDBClusterSnapshotAttributeCommandInput,
  ModifyDBClusterSnapshotAttributeCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "ModifyDBClusterSnapshotAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyDBClusterSnapshotAttributeMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyDBClusterSnapshotAttributeResult.filterSensitiveLog,
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
