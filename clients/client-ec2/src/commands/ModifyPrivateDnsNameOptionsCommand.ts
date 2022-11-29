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
  ModifyPrivateDnsNameOptionsRequest,
  ModifyPrivateDnsNameOptionsRequestFilterSensitiveLog,
  ModifyPrivateDnsNameOptionsResult,
  ModifyPrivateDnsNameOptionsResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyPrivateDnsNameOptionsCommand,
  serializeAws_ec2ModifyPrivateDnsNameOptionsCommand,
} from "../protocols/Aws_ec2";

export interface ModifyPrivateDnsNameOptionsCommandInput extends ModifyPrivateDnsNameOptionsRequest {}
export interface ModifyPrivateDnsNameOptionsCommandOutput extends ModifyPrivateDnsNameOptionsResult, __MetadataBearer {}

/**
 * <p>Modifies the options for instance hostnames for the specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyPrivateDnsNameOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyPrivateDnsNameOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyPrivateDnsNameOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyPrivateDnsNameOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyPrivateDnsNameOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyPrivateDnsNameOptionsCommand extends $Command<
  ModifyPrivateDnsNameOptionsCommandInput,
  ModifyPrivateDnsNameOptionsCommandOutput,
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

  constructor(readonly input: ModifyPrivateDnsNameOptionsCommandInput) {
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
  ): Handler<ModifyPrivateDnsNameOptionsCommandInput, ModifyPrivateDnsNameOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyPrivateDnsNameOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyPrivateDnsNameOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyPrivateDnsNameOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyPrivateDnsNameOptionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyPrivateDnsNameOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyPrivateDnsNameOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyPrivateDnsNameOptionsCommandOutput> {
    return deserializeAws_ec2ModifyPrivateDnsNameOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
