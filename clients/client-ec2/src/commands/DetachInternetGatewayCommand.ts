// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachInternetGatewayRequest } from "../models/models_5";
import { de_DetachInternetGatewayCommand, se_DetachInternetGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetachInternetGatewayCommand}.
 */
export interface DetachInternetGatewayCommandInput extends DetachInternetGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DetachInternetGatewayCommand}.
 */
export interface DetachInternetGatewayCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Detaches an internet gateway from a VPC, disabling connectivity between the internet
 * 			and the VPC. The VPC must not contain any running instances with Elastic IP addresses or
 * 			public IPv4 addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DetachInternetGatewayRequest
 *   DryRun: true || false,
 *   InternetGatewayId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new DetachInternetGatewayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachInternetGatewayCommandInput - {@link DetachInternetGatewayCommandInput}
 * @returns {@link DetachInternetGatewayCommandOutput}
 * @see {@link DetachInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link DetachInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To detach an Internet gateway from a VPC
 * ```javascript
 * // This example detaches the specified Internet gateway from the specified VPC.
 * const input = {
 *   "InternetGatewayId": "igw-c0a643a9",
 *   "VpcId": "vpc-a01106c2"
 * };
 * const command = new DetachInternetGatewayCommand(input);
 * await client.send(command);
 * // example id: ec2-detach-internet-gateway-1
 * ```
 *
 */
export class DetachInternetGatewayCommand extends $Command<
  DetachInternetGatewayCommandInput,
  DetachInternetGatewayCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DetachInternetGatewayCommandInput) {
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
  ): Handler<DetachInternetGatewayCommandInput, DetachInternetGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachInternetGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DetachInternetGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DetachInternetGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DetachInternetGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetachInternetGatewayCommandOutput> {
    return de_DetachInternetGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
