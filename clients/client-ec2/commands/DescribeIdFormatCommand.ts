import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIdFormatRequest, DescribeIdFormatResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeIdFormatCommand,
  serializeAws_ec2DescribeIdFormatCommand,
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

export type DescribeIdFormatCommandInput = DescribeIdFormatRequest;
export type DescribeIdFormatCommandOutput = DescribeIdFormatResult & __MetadataBearer;

/**
 * <p>Describes the ID format settings for your resources on a per-Region basis, for example, to view which resource types are enabled for longer IDs. This request only returns information about resource types whose ID formats can be modified; it does not return information about other resource types.</p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *            <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *            <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *            <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *            <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *            <code>network-acl</code> | <code>network-acl-association</code> |
 *            <code>network-interface</code> | <code>network-interface-attachment</code> |
 *            <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *            <code>route-table-association</code> | <code>security-group</code> |
 *            <code>snapshot</code> | <code>subnet</code> |
 *            <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *            | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *            <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *          <p>These settings apply to the IAM user who makes the request; they do not apply to the entire
 *       AWS account. By default, an IAM user defaults to the same settings as the root user, unless
 *       they explicitly override the settings by running the <a>ModifyIdFormat</a> command. Resources
 *       created with longer IDs are visible to all IAM users, regardless of these settings and
 *       provided that they have permission to use the relevant <code>Describe</code> command for the
 *       resource type.</p>
 */
export class DescribeIdFormatCommand extends $Command<
  DescribeIdFormatCommandInput,
  DescribeIdFormatCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIdFormatCommandInput) {
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
  ): Handler<DescribeIdFormatCommandInput, DescribeIdFormatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIdFormatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIdFormatRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIdFormatResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIdFormatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeIdFormatCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIdFormatCommandOutput> {
    return deserializeAws_ec2DescribeIdFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
