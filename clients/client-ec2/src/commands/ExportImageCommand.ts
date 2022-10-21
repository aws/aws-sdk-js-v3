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
  ExportImageRequest,
  ExportImageRequestFilterSensitiveLog,
  ExportImageResult,
  ExportImageResultFilterSensitiveLog,
} from "../models/models_5";
import { deserializeAws_ec2ExportImageCommand, serializeAws_ec2ExportImageCommand } from "../protocols/Aws_ec2";

export interface ExportImageCommandInput extends ExportImageRequest {}
export interface ExportImageCommandOutput extends ExportImageResult, __MetadataBearer {}

/**
 * <p>Exports an Amazon Machine Image (AMI) to a VM file. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html">Exporting a VM
 *     directly from an Amazon Machine Image (AMI)</a> in the
 *     <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportImageCommandInput} for command's `input` shape.
 * @see {@link ExportImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ExportImageCommand extends $Command<
  ExportImageCommandInput,
  ExportImageCommandOutput,
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

  constructor(readonly input: ExportImageCommandInput) {
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
  ): Handler<ExportImageCommandInput, ExportImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExportImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ExportImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExportImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportImageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExportImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ExportImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExportImageCommandOutput> {
    return deserializeAws_ec2ExportImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
