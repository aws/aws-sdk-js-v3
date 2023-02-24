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
  GetSubnetCidrReservationsRequest,
  GetSubnetCidrReservationsRequestFilterSensitiveLog,
  GetSubnetCidrReservationsResult,
  GetSubnetCidrReservationsResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetSubnetCidrReservationsCommand,
  serializeAws_ec2GetSubnetCidrReservationsCommand,
} from "../protocols/Aws_ec2";

export interface GetSubnetCidrReservationsCommandInput extends GetSubnetCidrReservationsRequest {}
export interface GetSubnetCidrReservationsCommandOutput extends GetSubnetCidrReservationsResult, __MetadataBearer {}

/**
 * <p>Gets information about the subnet CIDR reservations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetSubnetCidrReservationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetSubnetCidrReservationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetSubnetCidrReservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubnetCidrReservationsCommandInput} for command's `input` shape.
 * @see {@link GetSubnetCidrReservationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetSubnetCidrReservationsCommand extends $Command<
  GetSubnetCidrReservationsCommandInput,
  GetSubnetCidrReservationsCommandOutput,
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

  constructor(readonly input: GetSubnetCidrReservationsCommandInput) {
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
  ): Handler<GetSubnetCidrReservationsCommandInput, GetSubnetCidrReservationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSubnetCidrReservationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetSubnetCidrReservationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSubnetCidrReservationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSubnetCidrReservationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSubnetCidrReservationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetSubnetCidrReservationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSubnetCidrReservationsCommandOutput> {
    return deserializeAws_ec2GetSubnetCidrReservationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
