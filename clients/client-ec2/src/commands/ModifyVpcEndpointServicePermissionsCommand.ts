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
import {
  ModifyVpcEndpointServicePermissionsRequest,
  ModifyVpcEndpointServicePermissionsRequestFilterSensitiveLog,
  ModifyVpcEndpointServicePermissionsResult,
  ModifyVpcEndpointServicePermissionsResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyVpcEndpointServicePermissionsCommand,
  serializeAws_ec2ModifyVpcEndpointServicePermissionsCommand,
} from "../protocols/Aws_ec2";

export interface ModifyVpcEndpointServicePermissionsCommandInput extends ModifyVpcEndpointServicePermissionsRequest {}
export interface ModifyVpcEndpointServicePermissionsCommandOutput
  extends ModifyVpcEndpointServicePermissionsResult,
    __MetadataBearer {}

/**
 * <p>Modifies the permissions for your VPC endpoint service. You can add or remove permissions
 *             for service consumers (Amazon Web Services accounts, users, and IAM roles) to connect to
 *             your endpoint service.</p>
 *          <p>If you grant permissions to all principals, the service is public. Any users who know the name of a
 * 	        public service can send a request to attach an endpoint. If the service does not require manual approval,
 * 	        attachments are automatically approved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServicePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServicePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcEndpointServicePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcEndpointServicePermissionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyVpcEndpointServicePermissionsCommand extends $Command<
  ModifyVpcEndpointServicePermissionsCommandInput,
  ModifyVpcEndpointServicePermissionsCommandOutput,
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

  constructor(readonly input: ModifyVpcEndpointServicePermissionsCommandInput) {
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
  ): Handler<ModifyVpcEndpointServicePermissionsCommandInput, ModifyVpcEndpointServicePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpcEndpointServicePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcEndpointServicePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpcEndpointServicePermissionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcEndpointServicePermissionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyVpcEndpointServicePermissionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcEndpointServicePermissionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcEndpointServicePermissionsCommandOutput> {
    return deserializeAws_ec2ModifyVpcEndpointServicePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
