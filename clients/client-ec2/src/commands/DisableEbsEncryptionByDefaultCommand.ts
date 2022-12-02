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
  DisableEbsEncryptionByDefaultRequest,
  DisableEbsEncryptionByDefaultRequestFilterSensitiveLog,
  DisableEbsEncryptionByDefaultResult,
  DisableEbsEncryptionByDefaultResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisableEbsEncryptionByDefaultCommand,
  serializeAws_ec2DisableEbsEncryptionByDefaultCommand,
} from "../protocols/Aws_ec2";

export interface DisableEbsEncryptionByDefaultCommandInput extends DisableEbsEncryptionByDefaultRequest {}
export interface DisableEbsEncryptionByDefaultCommandOutput
  extends DisableEbsEncryptionByDefaultResult,
    __MetadataBearer {}

/**
 * <p>Disables EBS encryption by default for your account in the current Region.</p>
 *          <p>After you disable encryption by default, you can still create encrypted volumes by
 *       enabling encryption when you create each volume.</p>
 *          <p>Disabling encryption by default does not change the encryption status of your
 *       existing volumes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html">Amazon EBS encryption</a> in the
 *       <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableEbsEncryptionByDefaultCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableEbsEncryptionByDefaultCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableEbsEncryptionByDefaultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableEbsEncryptionByDefaultCommandInput} for command's `input` shape.
 * @see {@link DisableEbsEncryptionByDefaultCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisableEbsEncryptionByDefaultCommand extends $Command<
  DisableEbsEncryptionByDefaultCommandInput,
  DisableEbsEncryptionByDefaultCommandOutput,
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

  constructor(readonly input: DisableEbsEncryptionByDefaultCommandInput) {
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
  ): Handler<DisableEbsEncryptionByDefaultCommandInput, DisableEbsEncryptionByDefaultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableEbsEncryptionByDefaultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableEbsEncryptionByDefaultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableEbsEncryptionByDefaultRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableEbsEncryptionByDefaultResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableEbsEncryptionByDefaultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisableEbsEncryptionByDefaultCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableEbsEncryptionByDefaultCommandOutput> {
    return deserializeAws_ec2DisableEbsEncryptionByDefaultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
