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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyIdentityIdFormatRequest, ModifyIdentityIdFormatRequestFilterSensitiveLog } from "../models/models_6";
import {
  deserializeAws_ec2ModifyIdentityIdFormatCommand,
  serializeAws_ec2ModifyIdentityIdFormatCommand,
} from "../protocols/Aws_ec2";

export interface ModifyIdentityIdFormatCommandInput extends ModifyIdentityIdFormatRequest {}
export interface ModifyIdentityIdFormatCommandOutput extends __MetadataBearer {}

/**
 * <p>Modifies the ID format of a resource for a specified IAM user, IAM role, or the root
 *        user for an account; or all IAM users, IAM roles, and the root user for an account. You can
 *        specify that resources should receive longer IDs (17-character IDs) when they are created. </p>
 *          <p>This request can only be used to modify longer ID settings for resource types that are
 *        within the opt-in period. Resources currently in their opt-in period include:
 *                 <code>bundle</code> | <code>conversion-task</code> | <code>customer-gateway</code> | <code>dhcp-options</code> |
 *                 <code>elastic-ip-allocation</code> | <code>elastic-ip-association</code> |
 *                 <code>export-task</code> | <code>flow-log</code> | <code>image</code> |
 *                 <code>import-task</code> | <code>internet-gateway</code> | <code>network-acl</code>
 *             | <code>network-acl-association</code> | <code>network-interface</code> |
 *                 <code>network-interface-attachment</code> | <code>prefix-list</code> |
 *                 <code>route-table</code> | <code>route-table-association</code> |
 *                 <code>security-group</code> | <code>subnet</code> |
 *                 <code>subnet-cidr-block-association</code> | <code>vpc</code> |
 *         <code>vpc-cidr-block-association</code> | <code>vpc-endpoint</code> | <code>vpc-peering-connection</code> | <code>vpn-connection</code> | <code>vpn-gateway</code>. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/resource-ids.html">Resource IDs</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>. </p>
 *          <p>This setting applies to the principal specified in the request; it does not apply to the
 *       principal that makes the request. </p>
 *          <p>Resources created with longer IDs are visible to all IAM roles and users, regardless of these
 *       settings and provided that they have permission to use the relevant <code>Describe</code>
 *       command for the resource type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyIdentityIdFormatCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyIdentityIdFormatCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyIdentityIdFormatCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyIdentityIdFormatCommandInput} for command's `input` shape.
 * @see {@link ModifyIdentityIdFormatCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyIdentityIdFormatCommand extends $Command<
  ModifyIdentityIdFormatCommandInput,
  ModifyIdentityIdFormatCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: ModifyIdentityIdFormatCommandInput) {
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
  ): Handler<ModifyIdentityIdFormatCommandInput, ModifyIdentityIdFormatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyIdentityIdFormatCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyIdentityIdFormatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyIdentityIdFormatRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyIdentityIdFormatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyIdentityIdFormatCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyIdentityIdFormatCommandOutput> {
    return deserializeAws_ec2ModifyIdentityIdFormatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
