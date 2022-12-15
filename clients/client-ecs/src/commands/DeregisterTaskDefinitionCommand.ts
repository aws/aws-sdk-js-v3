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

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import {
  DeregisterTaskDefinitionRequest,
  DeregisterTaskDefinitionRequestFilterSensitiveLog,
  DeregisterTaskDefinitionResponse,
  DeregisterTaskDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterTaskDefinitionCommand,
  serializeAws_json1_1DeregisterTaskDefinitionCommand,
} from "../protocols/Aws_json1_1";

export interface DeregisterTaskDefinitionCommandInput extends DeregisterTaskDefinitionRequest {}
export interface DeregisterTaskDefinitionCommandOutput extends DeregisterTaskDefinitionResponse, __MetadataBearer {}

/**
 * <p>Deregisters the specified task definition by family and revision. Upon deregistration,
 * 			the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that
 * 			reference an <code>INACTIVE</code> task definition continue to run without disruption.
 * 			Existing services that reference an <code>INACTIVE</code> task definition can still
 * 			scale up or down by modifying the service's desired count.</p>
 *          <p>You can't use an <code>INACTIVE</code> task definition to run new tasks or create new
 * 			services, and you can't update an existing service to reference an <code>INACTIVE</code>
 * 			task definition. However, there may be up to a 10-minute window following deregistration
 * 			where these restrictions have not yet taken effect.</p>
 *          <note>
 *             <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your
 * 				account indefinitely. However, this behavior is subject to change in the future. We
 * 				don't recommend that you rely on <code>INACTIVE</code> task definitions persisting
 * 				beyond the lifecycle of any associated tasks and services.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeregisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeregisterTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 */
export class DeregisterTaskDefinitionCommand extends $Command<
  DeregisterTaskDefinitionCommandInput,
  DeregisterTaskDefinitionCommandOutput,
  ECSClientResolvedConfig
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

  constructor(readonly input: DeregisterTaskDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterTaskDefinitionCommandInput, DeregisterTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeregisterTaskDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeregisterTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterTaskDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeregisterTaskDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterTaskDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterTaskDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterTaskDefinitionCommandOutput> {
    return deserializeAws_json1_1DeregisterTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
