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
import { DeregisterTaskDefinitionRequest, DeregisterTaskDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterTaskDefinitionCommand,
  serializeAws_json1_1DeregisterTaskDefinitionCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DeregisterTaskDefinitionCommand}.
 */
export interface DeregisterTaskDefinitionCommandInput extends DeregisterTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterTaskDefinitionCommand}.
 */
export interface DeregisterTaskDefinitionCommandOutput extends DeregisterTaskDefinitionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deregisters the specified task definition by family and revision. Upon deregistration, the
 * 			task definition is marked as <code>INACTIVE</code>. Existing tasks and services that
 * 			reference an <code>INACTIVE</code> task definition continue to run without disruption.
 * 			Existing services that reference an <code>INACTIVE</code> task definition can still
 * 			scale up or down by modifying the service's desired count. If you want to delete a  task
 * 			definition revision, you must first deregister the  task definition revision.</p>
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
 *          <p>You must deregister a task definition revision before you delete it. For more information,
 * 			see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskDefinitions.html">DeleteTaskDefinitions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DeregisterTaskDefinitionRequest
 *   taskDefinition: "STRING_VALUE", // required
 * };
 * const command = new DeregisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeregisterTaskDefinitionCommandInput - {@link DeregisterTaskDefinitionCommandInput}
 * @returns {@link DeregisterTaskDefinitionCommandOutput}
 * @see {@link DeregisterTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeregisterTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for ECSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. This client action might be using
 * 			an action or resource on behalf of a user that doesn't have permissions to use the
 * 			action or resource,. Or, it might be specifying an identifier that isn't valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter isn't valid. Review the available parameters for the API
 * 			request.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
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

  /**
   * @public
   */
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
  private serialize(input: DeregisterTaskDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterTaskDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeregisterTaskDefinitionCommandOutput> {
    return deserializeAws_json1_1DeregisterTaskDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
