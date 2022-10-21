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
  CreateTransitGatewayPrefixListReferenceRequest,
  CreateTransitGatewayPrefixListReferenceRequestFilterSensitiveLog,
  CreateTransitGatewayPrefixListReferenceResult,
  CreateTransitGatewayPrefixListReferenceResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand,
  serializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand,
} from "../protocols/Aws_ec2";

export interface CreateTransitGatewayPrefixListReferenceCommandInput
  extends CreateTransitGatewayPrefixListReferenceRequest {}
export interface CreateTransitGatewayPrefixListReferenceCommandOutput
  extends CreateTransitGatewayPrefixListReferenceResult,
    __MetadataBearer {}

/**
 * <p>Creates a reference (route) to a prefix list in a specified transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayPrefixListReferenceCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateTransitGatewayPrefixListReferenceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayPrefixListReferenceCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class CreateTransitGatewayPrefixListReferenceCommand extends $Command<
  CreateTransitGatewayPrefixListReferenceCommandInput,
  CreateTransitGatewayPrefixListReferenceCommandOutput,
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

  constructor(readonly input: CreateTransitGatewayPrefixListReferenceCommandInput) {
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
  ): Handler<
    CreateTransitGatewayPrefixListReferenceCommandInput,
    CreateTransitGatewayPrefixListReferenceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        CreateTransitGatewayPrefixListReferenceCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayPrefixListReferenceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayPrefixListReferenceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayPrefixListReferenceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayPrefixListReferenceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayPrefixListReferenceCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayPrefixListReferenceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
