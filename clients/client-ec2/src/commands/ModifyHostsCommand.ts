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
  ModifyHostsRequest,
  ModifyHostsRequestFilterSensitiveLog,
  ModifyHostsResult,
  ModifyHostsResultFilterSensitiveLog,
} from "../models/models_6";
import { deserializeAws_ec2ModifyHostsCommand, serializeAws_ec2ModifyHostsCommand } from "../protocols/Aws_ec2";

export interface ModifyHostsCommandInput extends ModifyHostsRequest {}
export interface ModifyHostsCommandOutput extends ModifyHostsResult, __MetadataBearer {}

/**
 * <p>Modify the auto-placement setting of a Dedicated Host. When auto-placement is enabled,
 *             any instances that you launch with a tenancy of <code>host</code> but without a specific
 *             host ID are placed onto any available Dedicated Host in your account that has
 *             auto-placement enabled. When auto-placement is disabled, you need to provide a host ID
 *             to have the instance launch onto a specific host. If no host ID is provided, the
 *             instance is launched onto a suitable host with auto-placement enabled.</p>
 *          <p>You can also use this API action to modify a Dedicated Host to support either multiple
 *             instance types in an instance family, or to support a specific instance type
 *             only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyHostsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyHostsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyHostsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyHostsCommandInput} for command's `input` shape.
 * @see {@link ModifyHostsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ModifyHostsCommand extends $Command<
  ModifyHostsCommandInput,
  ModifyHostsCommandOutput,
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

  constructor(readonly input: ModifyHostsCommandInput) {
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
  ): Handler<ModifyHostsCommandInput, ModifyHostsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ModifyHostsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyHostsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyHostsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyHostsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyHostsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyHostsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyHostsCommandOutput> {
    return deserializeAws_ec2ModifyHostsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
