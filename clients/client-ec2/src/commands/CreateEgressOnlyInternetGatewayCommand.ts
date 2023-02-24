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
  CreateEgressOnlyInternetGatewayRequest,
  CreateEgressOnlyInternetGatewayRequestFilterSensitiveLog,
  CreateEgressOnlyInternetGatewayResult,
  CreateEgressOnlyInternetGatewayResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateEgressOnlyInternetGatewayCommand,
  serializeAws_ec2CreateEgressOnlyInternetGatewayCommand,
} from "../protocols/Aws_ec2";

export interface CreateEgressOnlyInternetGatewayCommandInput extends CreateEgressOnlyInternetGatewayRequest {}
export interface CreateEgressOnlyInternetGatewayCommandOutput
  extends CreateEgressOnlyInternetGatewayResult,
    __MetadataBearer {}

/**
 * <p>[IPv6 only] Creates an egress-only internet gateway for your VPC. An egress-only
 * 			internet gateway is used to enable outbound communication over IPv6 from instances in
 * 			your VPC to the internet, and prevents hosts outside of your VPC from initiating an IPv6
 * 			connection with your instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateEgressOnlyInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateEgressOnlyInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateEgressOnlyInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEgressOnlyInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateEgressOnlyInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateEgressOnlyInternetGatewayCommand extends $Command<
  CreateEgressOnlyInternetGatewayCommandInput,
  CreateEgressOnlyInternetGatewayCommandOutput,
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

  constructor(readonly input: CreateEgressOnlyInternetGatewayCommandInput) {
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
  ): Handler<CreateEgressOnlyInternetGatewayCommandInput, CreateEgressOnlyInternetGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEgressOnlyInternetGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateEgressOnlyInternetGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEgressOnlyInternetGatewayRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEgressOnlyInternetGatewayResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateEgressOnlyInternetGatewayCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateEgressOnlyInternetGatewayCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateEgressOnlyInternetGatewayCommandOutput> {
    return deserializeAws_ec2CreateEgressOnlyInternetGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
