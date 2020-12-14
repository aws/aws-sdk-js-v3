import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBSnapshotAttributesMessage, DescribeDBSnapshotAttributesResult } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBSnapshotAttributesCommand,
  serializeAws_queryDescribeDBSnapshotAttributesCommand,
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

export type DescribeDBSnapshotAttributesCommandInput = DescribeDBSnapshotAttributesMessage;
export type DescribeDBSnapshotAttributesCommandOutput = DescribeDBSnapshotAttributesResult & __MetadataBearer;

/**
 * <p>Returns a list of DB snapshot attribute names and values for a manual DB snapshot.</p>
 *          <p>When sharing snapshots with other AWS accounts, <code>DescribeDBSnapshotAttributes</code>
 *       returns the <code>restore</code> attribute and a list of IDs for the AWS accounts that are
 *       authorized to copy or restore the manual DB snapshot. If <code>all</code> is included in the list of
 *       values for the <code>restore</code> attribute, then the manual DB snapshot is public and
 *       can be copied or restored by all AWS accounts.</p>
 *          <p>To add or remove access for an AWS account to copy or restore a manual DB snapshot, or to make the
 *       manual DB snapshot public or private, use the <code>ModifyDBSnapshotAttribute</code> API action.</p>
 */
export class DescribeDBSnapshotAttributesCommand extends $Command<
  DescribeDBSnapshotAttributesCommandInput,
  DescribeDBSnapshotAttributesCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBSnapshotAttributesCommandInput) {
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
  ): Handler<DescribeDBSnapshotAttributesCommandInput, DescribeDBSnapshotAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBSnapshotAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBSnapshotAttributesMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDBSnapshotAttributesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDBSnapshotAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBSnapshotAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBSnapshotAttributesCommandOutput> {
    return deserializeAws_queryDescribeDBSnapshotAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
