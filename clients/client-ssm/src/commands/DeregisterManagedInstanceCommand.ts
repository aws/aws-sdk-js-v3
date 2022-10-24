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

import {
  DeregisterManagedInstanceRequest,
  DeregisterManagedInstanceRequestFilterSensitiveLog,
  DeregisterManagedInstanceResult,
  DeregisterManagedInstanceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterManagedInstanceCommand,
  serializeAws_json1_1DeregisterManagedInstanceCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DeregisterManagedInstanceCommandInput extends DeregisterManagedInstanceRequest {}
export interface DeregisterManagedInstanceCommandOutput extends DeregisterManagedInstanceResult, __MetadataBearer {}

/**
 * <p>Removes the server or virtual machine from the list of registered servers. You can
 *    reregister the node again at any time. If you don't plan to use Run Command on the server, we
 *    suggest uninstalling SSM Agent first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterManagedInstanceCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterManagedInstanceCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeregisterManagedInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterManagedInstanceCommandInput} for command's `input` shape.
 * @see {@link DeregisterManagedInstanceCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DeregisterManagedInstanceCommand extends $Command<
  DeregisterManagedInstanceCommandInput,
  DeregisterManagedInstanceCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: DeregisterManagedInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterManagedInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeregisterManagedInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterManagedInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterManagedInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterManagedInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterManagedInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterManagedInstanceCommandOutput> {
    return deserializeAws_json1_1DeregisterManagedInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
