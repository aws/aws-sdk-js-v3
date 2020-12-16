import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyIdFormatRequest } from "../models/models_4";
import { deserializeAws_ec2ModifyIdFormatCommand, serializeAws_ec2ModifyIdFormatCommand } from "../protocols/Aws_ec2";
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

export type ModifyIdFormatCommandInput = ModifyIdFormatRequest;
export type ModifyIdFormatCommandOutput = __MetadataBearer;

/**
 * <p>Modifies the ID format for the specified resource on a per-Region basis. You can
 *             specify that resources should receive longer IDs (17-character IDs) when they are
 *             created.</p>
 *          <p>This request can only be used to modify longer ID settings for resource types that
 *             are within the opt-in period. Resources currently in their opt-in period include:
 *             <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *             <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *             <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *             <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
 *             | <code>network-acl-association</code> | <code>network-interface</code> |
 *             <code>network-interface-attachment</code> | <code>prefix-list</code> |
 *             <code>route-table</code> | <code>route-table-association</code> |
 *             <code>security-group</code> | <code>subnet</code> |
 *             <code>subnet-cidr-block-association</code> | <code>vpc</code> |
 *             <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>.</p>
 *          <p>This setting applies to the IAM user who makes the request; it does not apply to the
 *         entire AWS account. By default, an IAM user defaults to the same settings as the root user. If
 *         you're using this action as the root user, then these settings apply to the entire account,
 *         unless an IAM user explicitly overrides these settings for themselves. For more information,
 *         see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a>
 *         in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          <p>Resources created with longer IDs are visible to all IAM roles and users, regardless
 *         of these settings and provided that they have permission to use the relevant
 *         <code>Describe</code> command for the resource type.</p>
 */
export class ModifyIdFormatCommand extends $Command<
  ModifyIdFormatCommandInput,
  ModifyIdFormatCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyIdFormatCommandInput) {
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
  ): Handler<ModifyIdFormatCommandInput, ModifyIdFormatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyIdFormatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyIdFormatRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyIdFormatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyIdFormatCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyIdFormatCommandOutput> {
    return deserializeAws_ec2ModifyIdFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
