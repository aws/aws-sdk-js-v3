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
import { DeleteCapacityProviderRequest, DeleteCapacityProviderResponse } from "../models/models_0";
import { de_DeleteCapacityProviderCommand, se_DeleteCapacityProviderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCapacityProviderCommand}.
 */
export interface DeleteCapacityProviderCommandInput extends DeleteCapacityProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCapacityProviderCommand}.
 */
export interface DeleteCapacityProviderCommandOutput extends DeleteCapacityProviderResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified capacity provider.</p>
 *          <note>
 *             <p>The <code>FARGATE</code> and <code>FARGATE_SPOT</code> capacity providers are
 * 				reserved and can't be deleted. You can disassociate them from a cluster using either
 * 				the <a>PutClusterCapacityProviders</a> API or by deleting the
 * 				cluster.</p>
 *          </note>
 *          <p>Prior to a capacity provider being deleted, the capacity provider must be removed from
 * 			the capacity provider strategy from all services. The <a>UpdateService</a>
 * 			API can be used to remove a capacity provider from a service's capacity provider
 * 			strategy. When updating a service, the <code>forceNewDeployment</code> option can be
 * 			used to ensure that any tasks using the Amazon EC2 instance capacity provided by the capacity
 * 			provider are transitioned to use the capacity from the remaining capacity providers.
 * 			Only capacity providers that aren't associated with a cluster can be deleted. To remove
 * 			a capacity provider from a cluster, you can either use <a>PutClusterCapacityProviders</a> or delete the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteCapacityProviderCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteCapacityProviderCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const input = { // DeleteCapacityProviderRequest
 *   capacityProvider: "STRING_VALUE", // required
 * };
 * const command = new DeleteCapacityProviderCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCapacityProviderResponse
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
 * @param DeleteCapacityProviderCommandInput - {@link DeleteCapacityProviderCommandInput}
 * @returns {@link DeleteCapacityProviderCommandOutput}
 * @see {@link DeleteCapacityProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteCapacityProviderCommandOutput} for command's `response` shape.
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
export class DeleteCapacityProviderCommand extends $Command<
  DeleteCapacityProviderCommandInput,
  DeleteCapacityProviderCommandOutput,
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
  constructor(readonly input: DeleteCapacityProviderCommandInput) {
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
  ): Handler<DeleteCapacityProviderCommandInput, DeleteCapacityProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCapacityProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECSClient";
    const commandName = "DeleteCapacityProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2ContainerServiceV20141113",
        operation: "DeleteCapacityProvider",
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
  private serialize(input: DeleteCapacityProviderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCapacityProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCapacityProviderCommandOutput> {
    return de_DeleteCapacityProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
