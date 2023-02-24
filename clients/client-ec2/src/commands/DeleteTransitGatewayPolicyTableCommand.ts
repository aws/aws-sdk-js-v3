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
  DeleteTransitGatewayPolicyTableRequest,
  DeleteTransitGatewayPolicyTableRequestFilterSensitiveLog,
  DeleteTransitGatewayPolicyTableResult,
  DeleteTransitGatewayPolicyTableResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DeleteTransitGatewayPolicyTableCommand,
  serializeAws_ec2DeleteTransitGatewayPolicyTableCommand,
} from "../protocols/Aws_ec2";

export interface DeleteTransitGatewayPolicyTableCommandInput extends DeleteTransitGatewayPolicyTableRequest {}
export interface DeleteTransitGatewayPolicyTableCommandOutput
  extends DeleteTransitGatewayPolicyTableResult,
    __MetadataBearer {}

/**
 * <p>Deletes the specified transit gateway policy table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteTransitGatewayPolicyTableCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteTransitGatewayPolicyTableCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteTransitGatewayPolicyTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTransitGatewayPolicyTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTransitGatewayPolicyTableCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteTransitGatewayPolicyTableCommand extends $Command<
  DeleteTransitGatewayPolicyTableCommandInput,
  DeleteTransitGatewayPolicyTableCommandOutput,
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

  constructor(readonly input: DeleteTransitGatewayPolicyTableCommandInput) {
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
  ): Handler<DeleteTransitGatewayPolicyTableCommandInput, DeleteTransitGatewayPolicyTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteTransitGatewayPolicyTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteTransitGatewayPolicyTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteTransitGatewayPolicyTableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteTransitGatewayPolicyTableResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteTransitGatewayPolicyTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteTransitGatewayPolicyTableCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteTransitGatewayPolicyTableCommandOutput> {
    return deserializeAws_ec2DeleteTransitGatewayPolicyTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
