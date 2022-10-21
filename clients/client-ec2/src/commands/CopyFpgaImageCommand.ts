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
  CopyFpgaImageRequest,
  CopyFpgaImageRequestFilterSensitiveLog,
  CopyFpgaImageResult,
  CopyFpgaImageResultFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_ec2CopyFpgaImageCommand, serializeAws_ec2CopyFpgaImageCommand } from "../protocols/Aws_ec2";

export interface CopyFpgaImageCommandInput extends CopyFpgaImageRequest {}
export interface CopyFpgaImageCommandOutput extends CopyFpgaImageResult, __MetadataBearer {}

/**
 * <p>Copies the specified Amazon FPGA Image (AFI) to the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CopyFpgaImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CopyFpgaImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CopyFpgaImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyFpgaImageCommandInput} for command's `input` shape.
 * @see {@link CopyFpgaImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CopyFpgaImageCommand extends $Command<
  CopyFpgaImageCommandInput,
  CopyFpgaImageCommandOutput,
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

  constructor(readonly input: CopyFpgaImageCommandInput) {
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
  ): Handler<CopyFpgaImageCommandInput, CopyFpgaImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CopyFpgaImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CopyFpgaImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyFpgaImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CopyFpgaImageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyFpgaImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CopyFpgaImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyFpgaImageCommandOutput> {
    return deserializeAws_ec2CopyFpgaImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
