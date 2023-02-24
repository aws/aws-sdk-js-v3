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
  ModifyLaunchTemplateRequest,
  ModifyLaunchTemplateRequestFilterSensitiveLog,
  ModifyLaunchTemplateResult,
  ModifyLaunchTemplateResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyLaunchTemplateCommand,
  serializeAws_ec2ModifyLaunchTemplateCommand,
} from "../protocols/Aws_ec2";

export interface ModifyLaunchTemplateCommandInput extends ModifyLaunchTemplateRequest {}
export interface ModifyLaunchTemplateCommandOutput extends ModifyLaunchTemplateResult, __MetadataBearer {}

/**
 * <p>Modifies a launch template. You can specify which version of the launch template to
 *             set as the default version. When launching an instance, the default version applies when
 *             a launch template version is not specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyLaunchTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyLaunchTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyLaunchTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyLaunchTemplateCommandInput} for command's `input` shape.
 * @see {@link ModifyLaunchTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyLaunchTemplateCommand extends $Command<
  ModifyLaunchTemplateCommandInput,
  ModifyLaunchTemplateCommandOutput,
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

  constructor(readonly input: ModifyLaunchTemplateCommandInput) {
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
  ): Handler<ModifyLaunchTemplateCommandInput, ModifyLaunchTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyLaunchTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyLaunchTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyLaunchTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyLaunchTemplateResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyLaunchTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyLaunchTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyLaunchTemplateCommandOutput> {
    return deserializeAws_ec2ModifyLaunchTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
