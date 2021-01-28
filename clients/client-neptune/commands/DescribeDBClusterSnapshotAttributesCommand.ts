import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  DescribeDBClusterSnapshotAttributesMessage,
  DescribeDBClusterSnapshotAttributesResult,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand,
  serializeAws_queryDescribeDBClusterSnapshotAttributesCommand,
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

export type DescribeDBClusterSnapshotAttributesCommandInput = DescribeDBClusterSnapshotAttributesMessage;
export type DescribeDBClusterSnapshotAttributesCommandOutput = DescribeDBClusterSnapshotAttributesResult &
  __MetadataBearer;

/**
 * <p>Returns a list of DB cluster snapshot attribute names and values for a manual DB cluster
 *       snapshot.</p>
 *          <p>When sharing snapshots with other AWS accounts,
 *       <code>DescribeDBClusterSnapshotAttributes</code> returns the <code>restore</code> attribute
 *       and a list of IDs for the AWS accounts that are authorized to copy or restore the manual DB
 *       cluster snapshot. If <code>all</code> is included in the list of values for the
 *       <code>restore</code> attribute, then the manual DB cluster snapshot is public and can be
 *       copied or restored by all AWS accounts.</p>
 *          <p>To add or remove access for an AWS account to copy or restore a manual DB cluster
 *       snapshot, or to make the manual DB cluster snapshot public or private, use the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 */
export class DescribeDBClusterSnapshotAttributesCommand extends $Command<
  DescribeDBClusterSnapshotAttributesCommandInput,
  DescribeDBClusterSnapshotAttributesCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBClusterSnapshotAttributesCommandInput) {
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
  ): Handler<DescribeDBClusterSnapshotAttributesCommandInput, DescribeDBClusterSnapshotAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "DescribeDBClusterSnapshotAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBClusterSnapshotAttributesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDBClusterSnapshotAttributesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDBClusterSnapshotAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBClusterSnapshotAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBClusterSnapshotAttributesCommandOutput> {
    return deserializeAws_queryDescribeDBClusterSnapshotAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
