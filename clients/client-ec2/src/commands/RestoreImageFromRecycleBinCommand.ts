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
  RestoreImageFromRecycleBinRequest,
  RestoreImageFromRecycleBinRequestFilterSensitiveLog,
  RestoreImageFromRecycleBinResult,
  RestoreImageFromRecycleBinResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2RestoreImageFromRecycleBinCommand,
  serializeAws_ec2RestoreImageFromRecycleBinCommand,
} from "../protocols/Aws_ec2";

export interface RestoreImageFromRecycleBinCommandInput extends RestoreImageFromRecycleBinRequest {}
export interface RestoreImageFromRecycleBinCommandOutput extends RestoreImageFromRecycleBinResult, __MetadataBearer {}

/**
 * <p>Restores an AMI from the Recycle Bin. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">Recycle Bin</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, RestoreImageFromRecycleBinCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, RestoreImageFromRecycleBinCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new RestoreImageFromRecycleBinCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreImageFromRecycleBinCommandInput} for command's `input` shape.
 * @see {@link RestoreImageFromRecycleBinCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class RestoreImageFromRecycleBinCommand extends $Command<
  RestoreImageFromRecycleBinCommandInput,
  RestoreImageFromRecycleBinCommandOutput,
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

  constructor(readonly input: RestoreImageFromRecycleBinCommandInput) {
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
  ): Handler<RestoreImageFromRecycleBinCommandInput, RestoreImageFromRecycleBinCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreImageFromRecycleBinCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RestoreImageFromRecycleBinCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreImageFromRecycleBinRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreImageFromRecycleBinResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreImageFromRecycleBinCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2RestoreImageFromRecycleBinCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreImageFromRecycleBinCommandOutput> {
    return deserializeAws_ec2RestoreImageFromRecycleBinCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
