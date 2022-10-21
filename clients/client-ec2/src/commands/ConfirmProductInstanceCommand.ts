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
  ConfirmProductInstanceRequest,
  ConfirmProductInstanceRequestFilterSensitiveLog,
  ConfirmProductInstanceResult,
  ConfirmProductInstanceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2ConfirmProductInstanceCommand,
  serializeAws_ec2ConfirmProductInstanceCommand,
} from "../protocols/Aws_ec2";

export interface ConfirmProductInstanceCommandInput extends ConfirmProductInstanceRequest {}
export interface ConfirmProductInstanceCommandOutput extends ConfirmProductInstanceResult, __MetadataBearer {}

/**
 * <p>Determines whether a product code is associated with an instance. This action can only
 *             be used by the owner of the product code. It is useful when a product code owner must
 *             verify whether another user's instance is eligible for support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ConfirmProductInstanceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ConfirmProductInstanceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ConfirmProductInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmProductInstanceCommandInput} for command's `input` shape.
 * @see {@link ConfirmProductInstanceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ConfirmProductInstanceCommand extends $Command<
  ConfirmProductInstanceCommandInput,
  ConfirmProductInstanceCommandOutput,
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

  constructor(readonly input: ConfirmProductInstanceCommandInput) {
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
  ): Handler<ConfirmProductInstanceCommandInput, ConfirmProductInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfirmProductInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ConfirmProductInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmProductInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfirmProductInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmProductInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ConfirmProductInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmProductInstanceCommandOutput> {
    return deserializeAws_ec2ConfirmProductInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
