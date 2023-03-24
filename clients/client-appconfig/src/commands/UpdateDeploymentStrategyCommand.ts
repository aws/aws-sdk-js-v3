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
import { DeploymentStrategy, UpdateDeploymentStrategyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDeploymentStrategyCommand,
  serializeAws_restJson1UpdateDeploymentStrategyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateDeploymentStrategyCommand}.
 */
export interface UpdateDeploymentStrategyCommandInput extends UpdateDeploymentStrategyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeploymentStrategyCommand}.
 */
export interface UpdateDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
 * @public
 * <p>Updates a deployment strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, UpdateDeploymentStrategyCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, UpdateDeploymentStrategyCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const input = {
 *   DeploymentStrategyId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DeploymentDurationInMinutes: Number("int"),
 *   FinalBakeTimeInMinutes: Number("int"),
 *   GrowthFactor: Number("float"),
 *   GrowthType: "LINEAR" || "EXPONENTIAL",
 * };
 * const command = new UpdateDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDeploymentStrategyCommandInput - {@link UpdateDeploymentStrategyCommandInput}
 * @returns {@link UpdateDeploymentStrategyCommandOutput}
 * @see {@link UpdateDeploymentStrategyCommandInput} for command's `input` shape.
 * @see {@link UpdateDeploymentStrategyCommandOutput} for command's `response` shape.
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
 * @example To update a deployment strategy
 * ```javascript
 * // The following update-deployment-strategy example updates final bake time to 20 minutes in the specified deployment strategy. ::
 * //
 * const input = {
 *   "DeploymentStrategyId": "1225qzk",
 *   "FinalBakeTimeInMinutes": 20
 * };
 * const command = new UpdateDeploymentStrategyCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DeploymentDurationInMinutes": 15,
 *   "FinalBakeTimeInMinutes": 20,
 *   "GrowthFactor": 25,
 *   "GrowthType": "LINEAR",
 *   "Id": "1225qzk",
 *   "Name": "Example-Deployment",
 *   "ReplicateTo": "SSM_DOCUMENT"
 * }
 * *\/
 * // example id: to-update-a-deployment-strategy-1632330896602
 * ```
 *
 */
export class UpdateDeploymentStrategyCommand extends $Command<
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
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
  constructor(readonly input: UpdateDeploymentStrategyCommandInput) {
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
  ): Handler<UpdateDeploymentStrategyCommandInput, UpdateDeploymentStrategyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDeploymentStrategyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "UpdateDeploymentStrategyCommand";
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
  private serialize(input: UpdateDeploymentStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDeploymentStrategyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeploymentStrategyCommandOutput> {
    return deserializeAws_restJson1UpdateDeploymentStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
