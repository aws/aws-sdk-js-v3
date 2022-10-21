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
  CreateCarrierGatewayRequest,
  CreateCarrierGatewayRequestFilterSensitiveLog,
  CreateCarrierGatewayResult,
  CreateCarrierGatewayResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_ec2CreateCarrierGatewayCommand,
  serializeAws_ec2CreateCarrierGatewayCommand,
} from "../protocols/Aws_ec2";

export interface CreateCarrierGatewayCommandInput extends CreateCarrierGatewayRequest {}
export interface CreateCarrierGatewayCommandOutput extends CreateCarrierGatewayResult, __MetadataBearer {}

/**
 * <p>Creates a carrier gateway.   For more information about carrier gateways, see <a href="https://docs.aws.amazon.com/wavelength/latest/developerguide/how-wavelengths-work.html#wavelength-carrier-gateway">Carrier gateways</a> in the <i>Amazon Web Services Wavelength Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateCarrierGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateCarrierGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateCarrierGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCarrierGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateCarrierGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateCarrierGatewayCommand extends $Command<
  CreateCarrierGatewayCommandInput,
  CreateCarrierGatewayCommandOutput,
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

  constructor(readonly input: CreateCarrierGatewayCommandInput) {
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
  ): Handler<CreateCarrierGatewayCommandInput, CreateCarrierGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCarrierGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateCarrierGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCarrierGatewayRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCarrierGatewayResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCarrierGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateCarrierGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCarrierGatewayCommandOutput> {
    return deserializeAws_ec2CreateCarrierGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
