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

import { UpdateEndpointInput, UpdateEndpointOutput } from "../models/models_4";
import { de_UpdateEndpointCommand, se_UpdateEndpointCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateEndpointCommand}.
 */
export interface UpdateEndpointCommandInput extends UpdateEndpointInput {}
/**
 * @public
 *
 * The output of {@link UpdateEndpointCommand}.
 */
export interface UpdateEndpointCommandOutput extends UpdateEndpointOutput, __MetadataBearer {}

/**
 * @public
 * <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to
 *             using newly created endpoint, and then deletes resources provisioned for the endpoint
 *             using the previous <code>EndpointConfig</code> (there is no availability loss). </p>
 *          <p>When SageMaker receives the request, it sets the endpoint status to
 *                 <code>Updating</code>. After updating the endpoint, it sets the status to
 *                 <code>InService</code>. To check the status of an endpoint, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeEndpoint.html">DescribeEndpoint</a> API.
 *
 *         </p>
 *          <note>
 *             <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
 *                 live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code>
 *                 operations are being performed on the endpoint. To update an endpoint, you must
 *                 create a new <code>EndpointConfig</code>.</p>
 *             <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or
 *                 being created or updated you may lose visibility into the instance type the endpoint
 *                 is using. The endpoint must be deleted in order to stop incurring charges.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateEndpointCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateEndpointCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateEndpointInput
 *   EndpointName: "STRING_VALUE", // required
 *   EndpointConfigName: "STRING_VALUE", // required
 *   RetainAllVariantProperties: true || false,
 *   ExcludeRetainedVariantProperties: [ // VariantPropertyList
 *     { // VariantProperty
 *       VariantPropertyType: "DesiredInstanceCount" || "DesiredWeight" || "DataCaptureConfig", // required
 *     },
 *   ],
 *   DeploymentConfig: { // DeploymentConfig
 *     BlueGreenUpdatePolicy: { // BlueGreenUpdatePolicy
 *       TrafficRoutingConfiguration: { // TrafficRoutingConfig
 *         Type: "ALL_AT_ONCE" || "CANARY" || "LINEAR", // required
 *         WaitIntervalInSeconds: Number("int"), // required
 *         CanarySize: { // CapacitySize
 *           Type: "INSTANCE_COUNT" || "CAPACITY_PERCENT", // required
 *           Value: Number("int"), // required
 *         },
 *         LinearStepSize: {
 *           Type: "INSTANCE_COUNT" || "CAPACITY_PERCENT", // required
 *           Value: Number("int"), // required
 *         },
 *       },
 *       TerminationWaitInSeconds: Number("int"),
 *       MaximumExecutionTimeoutInSeconds: Number("int"),
 *     },
 *     AutoRollbackConfiguration: { // AutoRollbackConfig
 *       Alarms: [ // AlarmList
 *         { // Alarm
 *           AlarmName: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *     RollingUpdatePolicy: { // RollingUpdatePolicy
 *       MaximumBatchSize: {
 *         Type: "INSTANCE_COUNT" || "CAPACITY_PERCENT", // required
 *         Value: Number("int"), // required
 *       },
 *       WaitIntervalInSeconds: Number("int"), // required
 *       MaximumExecutionTimeoutInSeconds: Number("int"),
 *       RollbackMaximumBatchSize: {
 *         Type: "INSTANCE_COUNT" || "CAPACITY_PERCENT", // required
 *         Value: Number("int"), // required
 *       },
 *     },
 *   },
 *   RetainDeploymentConfig: true || false,
 * };
 * const command = new UpdateEndpointCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEndpointOutput
 * //   EndpointArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateEndpointCommandInput - {@link UpdateEndpointCommandInput}
 * @returns {@link UpdateEndpointCommandOutput}
 * @see {@link UpdateEndpointCommandInput} for command's `input` shape.
 * @see {@link UpdateEndpointCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateEndpointCommand extends $Command<
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: UpdateEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEndpointCommandInput, UpdateEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "UpdateEndpoint",
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
  private serialize(input: UpdateEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEndpointCommandOutput> {
    return de_UpdateEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
