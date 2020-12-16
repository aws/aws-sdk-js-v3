import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeIdentityIdFormatRequest, DescribeIdentityIdFormatResult } from "../models/models_2";
import {
  deserializeAws_ec2DescribeIdentityIdFormatCommand,
  serializeAws_ec2DescribeIdentityIdFormatCommand,
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

export type DescribeIdentityIdFormatCommandInput = DescribeIdentityIdFormatRequest;
export type DescribeIdentityIdFormatCommandOutput = DescribeIdentityIdFormatResult & __MetadataBearer;

/**
 * <p>Describes the ID format settings for resources for the specified IAM user, IAM role, or root
 *       user. For example, you can view the resource types that are enabled for longer IDs. This request only
 *       returns information about resource types whose ID formats can be modified; it does not return
 *       information about other resource types. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
 *          <p>The following resource types support longer IDs: <code>bundle</code> |
 *           <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *           <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *           <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *           <code>import-task</code> | <code>instance</code> | <code>internet-gateway</code> |
 *           <code>network-acl</code> | <code>network-acl-association</code> |
 *           <code>network-interface</code> | <code>network-interface-attachment</code> |
 *           <code>prefix-list</code> | <code>reservation</code> | <code>route-table</code> |
 *           <code>route-table-association</code> | <code>security-group</code> |
 *           <code>snapshot</code> | <code>subnet</code> |
 *           <code>subnet-cidr-block-association</code> | <code>volume</code> | <code>vpc</code>
 *           | <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> |
 *           <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *          <p>These settings apply to the principal specified in the request. They do not apply to the
 *       principal that makes the request.</p>
 */
export class DescribeIdentityIdFormatCommand extends $Command<
  DescribeIdentityIdFormatCommandInput,
  DescribeIdentityIdFormatCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeIdentityIdFormatCommandInput) {
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
  ): Handler<DescribeIdentityIdFormatCommandInput, DescribeIdentityIdFormatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeIdentityIdFormatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeIdentityIdFormatRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeIdentityIdFormatResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeIdentityIdFormatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeIdentityIdFormatCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeIdentityIdFormatCommandOutput> {
    return deserializeAws_ec2DescribeIdentityIdFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
