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
  GetTransitGatewayPolicyTableEntriesRequest,
  GetTransitGatewayPolicyTableEntriesRequestFilterSensitiveLog,
  GetTransitGatewayPolicyTableEntriesResult,
  GetTransitGatewayPolicyTableEntriesResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetTransitGatewayPolicyTableEntriesCommand,
  serializeAws_ec2GetTransitGatewayPolicyTableEntriesCommand,
} from "../protocols/Aws_ec2";

export interface GetTransitGatewayPolicyTableEntriesCommandInput extends GetTransitGatewayPolicyTableEntriesRequest {}
export interface GetTransitGatewayPolicyTableEntriesCommandOutput
  extends GetTransitGatewayPolicyTableEntriesResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of transit gateway policy table entries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetTransitGatewayPolicyTableEntriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetTransitGatewayPolicyTableEntriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetTransitGatewayPolicyTableEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTransitGatewayPolicyTableEntriesCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPolicyTableEntriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetTransitGatewayPolicyTableEntriesCommand extends $Command<
  GetTransitGatewayPolicyTableEntriesCommandInput,
  GetTransitGatewayPolicyTableEntriesCommandOutput,
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

  constructor(readonly input: GetTransitGatewayPolicyTableEntriesCommandInput) {
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
  ): Handler<GetTransitGatewayPolicyTableEntriesCommandInput, GetTransitGatewayPolicyTableEntriesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTransitGatewayPolicyTableEntriesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetTransitGatewayPolicyTableEntriesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetTransitGatewayPolicyTableEntriesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetTransitGatewayPolicyTableEntriesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetTransitGatewayPolicyTableEntriesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2GetTransitGatewayPolicyTableEntriesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayPolicyTableEntriesCommandOutput> {
    return deserializeAws_ec2GetTransitGatewayPolicyTableEntriesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
