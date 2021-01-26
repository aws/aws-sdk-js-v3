import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeAggregateIdFormatRequest, DescribeAggregateIdFormatResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeAggregateIdFormatCommand,
  serializeAws_ec2DescribeAggregateIdFormatCommand,
} from "../protocols/Aws_ec2";
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

export type DescribeAggregateIdFormatCommandInput = DescribeAggregateIdFormatRequest;
export type DescribeAggregateIdFormatCommandOutput = DescribeAggregateIdFormatResult & __MetadataBearer;

/**
 * <p>Describes the longer ID format settings for all resource types in a specific
 *          Region. This request is useful for performing a quick audit to determine whether a
 *          specific Region is fully opted in for longer IDs (17-character IDs).</p>
 *
 *          <p>This request only returns information about resource types that support longer IDs.</p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *         <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *         <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *         <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *         <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *         <code>network-acl</code> | <code>network-acl-association</code> |
 *         <code>network-interface</code> | <code>network-interface-attachment</code> |
 *         <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *         <code>route-table-association</code> | <code>security-group</code> |
 *         <code>snapshot</code> | <code>subnet</code> |
 *         <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code> |
 *         <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *         <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
 */
export class DescribeAggregateIdFormatCommand extends $Command<
  DescribeAggregateIdFormatCommandInput,
  DescribeAggregateIdFormatCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeAggregateIdFormatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAggregateIdFormatCommandInput, DescribeAggregateIdFormatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeAggregateIdFormatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAggregateIdFormatRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeAggregateIdFormatResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAggregateIdFormatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeAggregateIdFormatCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAggregateIdFormatCommandOutput> {
    return deserializeAws_ec2DescribeAggregateIdFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
