// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateCapacityProviderRequest, UpdateCapacityProviderResponse } from "../models/models_0";
import { de_UpdateCapacityProviderCommand, se_UpdateCapacityProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCapacityProviderCommand}.
 */
export interface UpdateCapacityProviderCommandInput extends UpdateCapacityProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCapacityProviderCommand}.
 */
export interface UpdateCapacityProviderCommandOutput extends UpdateCapacityProviderResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the parameters for a capacity provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // UpdateCapacityProviderRequest
 *   name: "STRING_VALUE", // required
 *   autoScalingGroupProvider: { // AutoScalingGroupProviderUpdate
 *     managedScaling: { // ManagedScaling
 *       status: "ENABLED" || "DISABLED",
 *       targetCapacity: Number("int"),
 *       minimumScalingStepSize: Number("int"),
 *       maximumScalingStepSize: Number("int"),
 *       instanceWarmupPeriod: Number("int"),
 *     },
 *     managedTerminationProtection: "ENABLED" || "DISABLED",
 *   },
 * };
 * const command = new UpdateCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCapacityProviderResponse
 * //   capacityProvider: { // CapacityProvider
 * //     capacityProviderArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE",
 * //     autoScalingGroupProvider: { // AutoScalingGroupProvider
 * //       autoScalingGroupArn: "STRING_VALUE", // required
 * //       managedScaling: { // ManagedScaling
 * //         status: "ENABLED" || "DISABLED",
 * //         targetCapacity: Number("int"),
 * //         minimumScalingStepSize: Number("int"),
 * //         maximumScalingStepSize: Number("int"),
 * //         instanceWarmupPeriod: Number("int"),
 * //       },
 * //       managedTerminationProtection: "ENABLED" || "DISABLED",
 * //     },
 * //     updateStatus: "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "UPDATE_FAILED",
 * //     updateStatusReason: "STRING_VALUE",
 * //     tags: [ // Tags
 * //       { // Tag
 * //         key: "STRING_VALUE",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCapacityProviderCommandInput - {@link UpdateCapacityProviderCommandInput}
 * @returns {@link UpdateCapacityProviderCommandOutput}
 * @see {@link UpdateCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateCapacityProviderCommandOutput} for command's `response` shape.
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
 * @throws {@link ECSServiceException}
 * <p>Base exception class for all service exceptions from ECS service.</p>
 *
 */
export class UpdateCapacityProviderCommand extends $Command<
  UpdateCapacityProviderCommandInput,
  UpdateCapacityProviderCommandOutput,
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
  constructor(readonly input: UpdateCapacityProviderCommandInput) {
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
  ): Handler<UpdateCapacityProviderCommandInput, UpdateCapacityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCapacityProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "UpdateCapacityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "UpdateCapacityProvider",
      },
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
  private serialize(input: UpdateCapacityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateCapacityProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCapacityProviderCommandOutput> {
    return de_UpdateCapacityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
