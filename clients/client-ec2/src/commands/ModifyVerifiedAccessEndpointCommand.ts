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
  ModifyVerifiedAccessEndpointRequest,
  ModifyVerifiedAccessEndpointRequestFilterSensitiveLog,
  ModifyVerifiedAccessEndpointResult,
  ModifyVerifiedAccessEndpointResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ModifyVerifiedAccessEndpointCommand,
  serializeAws_ec2ModifyVerifiedAccessEndpointCommand,
} from "../protocols/Aws_ec2";

export interface ModifyVerifiedAccessEndpointCommandInput extends ModifyVerifiedAccessEndpointRequest {}
export interface ModifyVerifiedAccessEndpointCommandOutput
  extends ModifyVerifiedAccessEndpointResult,
    __MetadataBearer {}

/**
 * <p>Modifies the configuration of an Amazon Web Services Verified Access endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVerifiedAccessEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVerifiedAccessEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyVerifiedAccessEndpointCommand extends $Command<
  ModifyVerifiedAccessEndpointCommandInput,
  ModifyVerifiedAccessEndpointCommandOutput,
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

  constructor(readonly input: ModifyVerifiedAccessEndpointCommandInput) {
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
  ): Handler<ModifyVerifiedAccessEndpointCommandInput, ModifyVerifiedAccessEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVerifiedAccessEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVerifiedAccessEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVerifiedAccessEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVerifiedAccessEndpointResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyVerifiedAccessEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVerifiedAccessEndpointCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVerifiedAccessEndpointCommandOutput> {
    return deserializeAws_ec2ModifyVerifiedAccessEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
