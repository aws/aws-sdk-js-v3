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

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { PutManagedScalingPolicyInput, PutManagedScalingPolicyOutput } from "../models/models_0";
import { de_PutManagedScalingPolicyCommand, se_PutManagedScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutManagedScalingPolicyCommand}.
 */
export interface PutManagedScalingPolicyCommandInput extends PutManagedScalingPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutManagedScalingPolicyCommand}.
 */
export interface PutManagedScalingPolicyCommandOutput extends PutManagedScalingPolicyOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates a managed scaling policy for an Amazon EMR cluster. The
 *          managed scaling policy defines the limits for resources, such as Amazon EC2
 *          instances that can be added or terminated from a cluster. The policy only applies to the
 *          core and task nodes. The master node cannot be scaled after initial configuration. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutManagedScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutManagedScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const input = { // PutManagedScalingPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 *   ManagedScalingPolicy: { // ManagedScalingPolicy
 *     ComputeLimits: { // ComputeLimits
 *       UnitType: "InstanceFleetUnits" || "Instances" || "VCPU", // required
 *       MinimumCapacityUnits: Number("int"), // required
 *       MaximumCapacityUnits: Number("int"), // required
 *       MaximumOnDemandCapacityUnits: Number("int"),
 *       MaximumCoreCapacityUnits: Number("int"),
 *     },
 *   },
 * };
 * const command = new PutManagedScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutManagedScalingPolicyCommandInput - {@link PutManagedScalingPolicyCommandInput}
 * @returns {@link PutManagedScalingPolicyCommandOutput}
 * @see {@link PutManagedScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutManagedScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 */
export class PutManagedScalingPolicyCommand extends $Command<
  PutManagedScalingPolicyCommandInput,
  PutManagedScalingPolicyCommandOutput,
  EMRClientResolvedConfig
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
  constructor(readonly input: PutManagedScalingPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutManagedScalingPolicyCommandInput, PutManagedScalingPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutManagedScalingPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "PutManagedScalingPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticMapReduce",
        operation: "PutManagedScalingPolicy",
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
  private serialize(input: PutManagedScalingPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutManagedScalingPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutManagedScalingPolicyCommandOutput> {
    return de_PutManagedScalingPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
