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
  CancelImageLaunchPermissionRequest,
  CancelImageLaunchPermissionRequestFilterSensitiveLog,
  CancelImageLaunchPermissionResult,
  CancelImageLaunchPermissionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2CancelImageLaunchPermissionCommand,
  serializeAws_ec2CancelImageLaunchPermissionCommand,
} from "../protocols/Aws_ec2";

export interface CancelImageLaunchPermissionCommandInput extends CancelImageLaunchPermissionRequest {}
export interface CancelImageLaunchPermissionCommandOutput extends CancelImageLaunchPermissionResult, __MetadataBearer {}

/**
 * <p>Removes your Amazon Web Services account from the launch permissions for the specified AMI. For more
 *       information, see <a href="https://docs.aws.amazon.com/">Cancel having an AMI shared with your Amazon Web Services account</a>
 *       in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelImageLaunchPermissionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelImageLaunchPermissionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelImageLaunchPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelImageLaunchPermissionCommandInput} for command's `input` shape.
 * @see {@link CancelImageLaunchPermissionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CancelImageLaunchPermissionCommand extends $Command<
  CancelImageLaunchPermissionCommandInput,
  CancelImageLaunchPermissionCommandOutput,
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

  constructor(readonly input: CancelImageLaunchPermissionCommandInput) {
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
  ): Handler<CancelImageLaunchPermissionCommandInput, CancelImageLaunchPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelImageLaunchPermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CancelImageLaunchPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelImageLaunchPermissionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CancelImageLaunchPermissionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelImageLaunchPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CancelImageLaunchPermissionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelImageLaunchPermissionCommandOutput> {
    return deserializeAws_ec2CancelImageLaunchPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
