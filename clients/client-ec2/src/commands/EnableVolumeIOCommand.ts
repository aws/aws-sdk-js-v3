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
import { EnableVolumeIORequest, EnableVolumeIORequestFilterSensitiveLog } from "../models/models_5";
import { deserializeAws_ec2EnableVolumeIOCommand, serializeAws_ec2EnableVolumeIOCommand } from "../protocols/Aws_ec2";

export interface EnableVolumeIOCommandInput extends EnableVolumeIORequest {}
export interface EnableVolumeIOCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables I/O operations for a volume that had I/O operations disabled because the data on
 *       the volume was potentially inconsistent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVolumeIOCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVolumeIOCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableVolumeIOCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableVolumeIOCommandInput} for command's `input` shape.
 * @see {@link EnableVolumeIOCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class EnableVolumeIOCommand extends $Command<
  EnableVolumeIOCommandInput,
  EnableVolumeIOCommandOutput,
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

  constructor(readonly input: EnableVolumeIOCommandInput) {
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
  ): Handler<EnableVolumeIOCommandInput, EnableVolumeIOCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableVolumeIOCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableVolumeIOCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableVolumeIORequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableVolumeIOCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2EnableVolumeIOCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableVolumeIOCommandOutput> {
    return deserializeAws_ec2EnableVolumeIOCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
