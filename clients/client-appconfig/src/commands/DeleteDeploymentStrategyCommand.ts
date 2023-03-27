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

import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { DeleteDeploymentStrategyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteDeploymentStrategyCommand,
  serializeAws_restJson1DeleteDeploymentStrategyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link DeleteDeploymentStrategyCommand}.
 */
export interface DeleteDeploymentStrategyCommandInput extends DeleteDeploymentStrategyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDeploymentStrategyCommand}.
 */
export interface DeleteDeploymentStrategyCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Deletes a deployment strategy. Deleting a deployment strategy does not delete a
 *          configuration from a host.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, DeleteDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, DeleteDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = { // DeleteDeploymentStrategyRequest
 *   DeploymentStrategyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteDeploymentStrategyCommandInput - {@link DeleteDeploymentStrategyCommandInput}
 * @returns {@link DeleteDeploymentStrategyCommandOutput}
 * @see {@link DeleteDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentStrategyCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for AppConfigClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal failure in the AppConfig service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 *
 * @example To delete a deployment strategy
 * ```javascript
 * // The following delete-deployment-strategy example deletes the specified deployment strategy.
 * const input = {
 *   "DeploymentStrategyId": "1225qzk"
 * };
 * const command = new DeleteDeploymentStrategyCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-deployment-strategy-1632265473708
 * ```
 *
 */
export class DeleteDeploymentStrategyCommand extends $Command<
  DeleteDeploymentStrategyCommandInput,
  DeleteDeploymentStrategyCommandOutput,
  AppConfigClientResolvedConfig
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
  constructor(readonly input: DeleteDeploymentStrategyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeploymentStrategyCommandInput, DeleteDeploymentStrategyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDeploymentStrategyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "DeleteDeploymentStrategyCommand";
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
  private serialize(input: DeleteDeploymentStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteDeploymentStrategyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeploymentStrategyCommandOutput> {
    return deserializeAws_restJson1DeleteDeploymentStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
