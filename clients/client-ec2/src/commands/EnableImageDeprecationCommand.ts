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
  EnableImageDeprecationRequest,
  EnableImageDeprecationRequestFilterSensitiveLog,
  EnableImageDeprecationResult,
  EnableImageDeprecationResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2EnableImageDeprecationCommand,
  serializeAws_ec2EnableImageDeprecationCommand,
} from "../protocols/Aws_ec2";

export interface EnableImageDeprecationCommandInput extends EnableImageDeprecationRequest {}
export interface EnableImageDeprecationCommandOutput extends EnableImageDeprecationResult, __MetadataBearer {}

/**
 * <p>Enables deprecation of the specified AMI at the specified date and time.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ami-deprecate.html">Deprecate an AMI</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableImageDeprecationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableImageDeprecationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableImageDeprecationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableImageDeprecationCommandInput} for command's `input` shape.
 * @see {@link EnableImageDeprecationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class EnableImageDeprecationCommand extends $Command<
  EnableImageDeprecationCommandInput,
  EnableImageDeprecationCommandOutput,
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

  constructor(readonly input: EnableImageDeprecationCommandInput) {
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
  ): Handler<EnableImageDeprecationCommandInput, EnableImageDeprecationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableImageDeprecationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableImageDeprecationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableImageDeprecationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EnableImageDeprecationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableImageDeprecationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableImageDeprecationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableImageDeprecationCommandOutput> {
    return deserializeAws_ec2EnableImageDeprecationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
